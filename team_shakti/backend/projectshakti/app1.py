from flask import Flask, jsonify, request
from flask_socketio import SocketIO
import re

app = Flask(__name__)
socketio = SocketIO(app, cors_allowed_origins="*")

attack_logs = []

@app.route('/widds_alert', methods=['POST'])
def widds_alert():
    alert = request.json
    attack_logs.append(alert)
    socketio.emit('new_alert', alert)
    return jsonify({"status": "Logged"})

@app.route('/get_logs', methods=['GET'])
def get_logs():
    return jsonify(attack_logs)

@app.route('/filtered_macs', methods=['GET'])
def filtered_macs():
    mac_addresses = []
    for log in attack_logs:
        if 'attacker_mac' in log:
            mac_addresses.append(log['attacker_mac'])
    return jsonify({"mac_addresses": list(set(mac_addresses))})

if __name__ == '__main__':
    socketio.run(app, debug=True, port=7000, host='0.0.0.0')
