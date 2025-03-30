#!/bin/bash

# Start Flask Backend
nohup python3.12 app1.py &

# Start Deauth Attack Detection
echo "Starting Deauth Detection..."
nohup python3 widds_monitor.py &

# Start Wireshark for Monitoring
echo "Launching Wireshark..."
sudo wireshark -i wlan1 -k &

# Start tcpdump for Logging
echo "Starting tcpdump..."
sudo tcpdump -i wlan1 subtype deauth -nn -l > deauth_logs.txt &

echo "WIDDS System is now running!"
