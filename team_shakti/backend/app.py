from flask import Flask, jsonify, request
from flask_socketio import SocketIO
from aptos_sdk.client import RestClient
from aptos_sdk.account import Account
import eventlet

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

# Initialize Aptos client
NODE_URL = "https://fullnode.devnet.aptoslabs.com/v1"
client = RestClient(NODE_URL)
account = Account.load_key("6C0477E4AF978AD8D5C68E53AF46C25196A05433D30106E90CD3570B58534099")  # 

attack_logs = []

@app.route('/widds_alert', methods=['POST'])
async def widds_alert():
    alert = request.json
    attack_logs.append(alert)
    
    # Handle deauth attack
    if alert.get('attack_type') == 'Deauth':
        await add_malicious_device(
            alert['attacker_mac'],
            f"Deauth attack detected at {alert['timestamp']}"
        )
    
    # Handle evil twin attack
    elif alert.get('attack_type') == 'Evil Twin':
        await add_suspicious_network(alert['bssid'])
    
    socketio.emit('new_alert', alert)
    return jsonify({"status": "Logged"})

@app.route('/get_logs', methods=['GET'])
def get_logs():
    return jsonify(attack_logs)

async def add_malicious_device(mac_address: str, reason: str):
    try:
        payload = {
            "function": f"{account.address()}::MyContract::add_malicious_device",
            "type_arguments": [],
            "arguments": [mac_address, reason]
        }
        tx_hash = await client.submit_transaction(account, payload)
        return tx_hash
    except Exception as e:
        print(f"Error adding malicious device: {e}")
        return None

async def add_suspicious_network(bssid: str):
    try:
        payload = {
            "function": f"{account.address()}::MyContract::add_suspicious_network",
            "type_arguments": [],
            "arguments": [bssid]
        }
        tx_hash = await client.submit_transaction(account, payload)
        return tx_hash
    except Exception as e:
        print(f"Error adding suspicious network: {e}")
        return None

if __name__ == '__main__':
    socketio.run(app, debug=True, port=5000, host='0.0.0.0')
