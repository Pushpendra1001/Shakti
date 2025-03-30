# 🔮 Team Shakti - Wireless Intrusion Detection System

Shakti is a real-time monitoring system designed to detect anomalies efficiently. It provides a user-friendly dashboard to visualize and analyze detected irregularities. 

## 🛠️ Technologies Used
- **Backend:** Python, Bash
- **Frontend:** React.js, Tailwind CSS
- **Blockchain:** Aptos

## 🚀 Getting Started
Follow the steps below to set up and run the project locally.

### 1️⃣ Start the Backend Server
1. Navigate to the backend directory:
   ```bash
   cd backend
   ```
2. Start the backend server:
   ```bash
   sudo bash start_widds.sh
   ```

![Screenshot From 2025-03-30 12-00-04 1](https://github.com/user-attachments/assets/3f96d250-768e-447b-8390-3729d97fcccb)

### 2️⃣ Monitor Screen Interface
Once the backend server is running, you can access the monitoring interface to observe real-time data and detected anomalies.


<img width="1304" alt="Monitoring Interface" src="https://github.com/user-attachments/assets/f38da460-a917-41d0-8df5-0eb9c669fae2" />

### 3️⃣ After Starting the Backend Server
⚠️ Make sure the backend is fully functional before proceeding to the frontend setup.

### 4️⃣ Start the Frontend Server
1. Navigate to the frontend directory:
   ```bash
   cd frontend
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Start the frontend server:
   ```bash
   npm run dev
   ```

### 5️⃣ Go to the Website
Once the frontend server is running, open your browser and visit:
```
http://localhost:5173
```

<img width="1440" alt="Shakti Homepage" src="https://github.com/user-attachments/assets/51444921-f55a-4a18-9134-1eb8634a85a0" />

### 6️⃣ Navigate to the Dashboard
Visit the dashboard by going to:
```
http://localhost:5173/dashboard
```

### 7️⃣ View Live Monitoring of Anomalies Detected
Inside the dashboard, you can view real-time data updates and monitor detected anomalies effectively.

<img width="1321" alt="Anomaly Dashboard" src="https://github.com/user-attachments/assets/eb09ce05-15f6-45c4-b35a-f9343ab2c04a" />

### 8️⃣ Secure Anomaly Logs with Aptos Blockchain
🔐 Shakti ensures that all anomaly detections are securely logged on the **Aptos blockchain**, providing **tamper-proof records**. Every detected irregularity is stored in an immutable ledger, ensuring transparency and security.

<img width="1438" alt="Blockchain Records" src="https://github.com/user-attachments/assets/df04c36d-7b3a-47e0-95e0-4bf0030a4c21" />

#### How it Works:
- 📝 Each detected anomaly is recorded in a transaction on the **Aptos blockchain**
- 🛡️ The transaction log ensures data integrity, preventing unauthorized modifications
- 🔍 Users can verify logs by querying the blockchain for anomaly records


### 9️⃣ Backend Monitoring
To monitor the backend status, use the following command:
```bash
curl -X GET https://127.0.0.1:7000/.com
```

---

## ✨ Features

- **📊 Real-time Monitoring:** View live data streams and anomaly detections
- **🔒 Blockchain Security:** Immutable transaction logs for all detected anomalies
- **📱 Responsive Interface:** Access from any device with a modern browser
- **⚡ High Performance:** Efficient processing of large data volumes
- **🧠 Intelligent Detection:** Advanced algorithms to identify complex anomalies

---

Enjoy using **Shakti** with blockchain-powered security! 🚀✨
