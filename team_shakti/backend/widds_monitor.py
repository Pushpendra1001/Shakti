import subprocess, json, requests, re, os, time
from aptos_sdk.client import RestClient

API_URL = os.getenv("WIDDS_API_URL", "http://127.0.0.1:5000/widds_alert")
NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1"
client = RestClient(NODE_URL)

async def check_blacklist(mac_address: str) -> bool:
    try:
        result = await client.view_function(
            "MyContract",
            "is_device_blacklisted",
            [mac_address]
        )
        return result[0]
    except Exception:
        return False

# Modified detect_deauth to check blockchain first
async def detect_deauth():
    process = subprocess.Popen(["tcpdump", "-i", "wlan1", "-l", "-e", "-nn", "subtype deauth"], 
                             stdout=subprocess.PIPE, 
                             stderr=subprocess.DEVNULL)
    
    for line in iter(process.stdout.readline, b""):
        decoded_line = line.decode("utf-8")
        mac_match = re.search(r'([0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2}:[0-9A-Fa-f]{2})', decoded_line)
        
        if mac_match:
            attacker_mac = mac_match.group(0)
            
            # Check if already blacklisted in blockchain
            if await check_blacklist(attacker_mac):
                block_attacker(attacker_mac)
                continue
                
            attacker_ip = find_ip_from_mac(attacker_mac)
            requests.post(API_URL, json={
                "attack_type": "Deauth",
                "attacker_mac": attacker_mac,
                "attacker_ip": attacker_ip,
                "details": decoded_line
            })

# Find IP address of attacker using arp-scan

def find_ip_from_mac(mac):
    try:
        result = subprocess.run(["arp-scan", "-l"], capture_output=True, text=True)
        for line in result.stdout.split("\n"):
            if mac in line:
                return line.split()[0]
    except Exception:
        pass
    return "Unknown"

# Block attacker using iptables

def block_attacker(mac):
    subprocess.run(["iptables", "-A", "INPUT", "-m", "mac", "--mac-source", mac, "-j", "DROP"])

# Detect Fake Wi-Fi Portals (Evil Twin)

def detect_evil_twin():
    while True:
        scan_result = subprocess.run(["nmcli", "dev", "wifi"], capture_output=True, text=True)
        ssid_count = {}
        for line in scan_result.stdout.split("\n"):
            columns = line.split()
            if len(columns) > 1:
                ssid = columns[0]
                ssid_count[ssid] = ssid_count.get(ssid, 0) + 1
        for ssid, count in ssid_count.items():
            if count > 1:
                requests.post(API_URL, json={"attack_type": "Evil Twin", "ssid": ssid, "details": f"Multiple instances detected: {count}"})
        time.sleep(30)

# Start both detection methods
detect_deauth()
detect_evil_twin()
