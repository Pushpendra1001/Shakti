<h1> Team Shakti </h1>

Shakti is a real-time monitoring system designed to detect anomalies efficiently. It provides a user-friendly dashboard to visualize and analyze detected irregularities. The system ensures data integrity by leveraging the **Aptos blockchain** for tamper-proof logs.

## Technologies Used
- **Backend:** Python, Aptos SDK 
- **Frontend:** React.js, Tailwind CSS
- **Blockchain:** Aptos

## Getting Started
Follow the steps below to set up and run the project locally.

### 1. Start the Backend Server
1. Navigate to the backend directory:
   ```sh
   cd backend
   ```
2. Start the backend server:
   ```sh
   sudo bash start_widds.sh
   ```

### 2. Monitor Screen Interface
Once the backend server is running, you can access the monitoring interface to observe real-time data and detected anomalies.
<img width="1304" alt="Screenshot 2025-03-30 at 12 16 30 PM" src="https://github.com/user-attachments/assets/f38da460-a917-41d0-8df5-0eb9c669fae2" />

### 3. After Starting the Backend Server
Make sure the backend is fully functional before proceeding to the frontend setup.

### 4. Start the Frontend Server
1. Navigate to the frontend directory:
   ```sh
   cd frontend
   ```
2. Install dependencies:
   ```sh
   npm install
   ```
3. Start the frontend server:
   ```sh
   npm start
   ```

### 5. Go to the Website
Once the frontend server is running, open your browser and visit:
```
http://localhost:3000
```
<img width="1440" alt="Screenshot 2025-03-30 at 12 15 16 PM" src="https://github.com/user-attachments/assets/51444921-f55a-4a18-9134-1eb8634a85a0" />

### 6. Navigate to the Dashboard
Visit the dashboard by going to:
```
http://localhost:3000/dashboard
```

### 7. View Live Monitoring of Anomalies Detected
Inside the dashboard, you can view real-time data updates and monitor detected anomalies effectively.
<img width="1321" alt="Screenshot 2025-03-30 at 12 14 44 PM" src="https://github.com/user-attachments/assets/eb09ce05-15f6-45c4-b35a-f9343ab2c04a" />

### 8. Secure Anomaly Logs with Aptos Blockchain
Shakti ensures that all anomaly detections are securely logged on the **Aptos blockchain**, providing **tamper-proof records**. Every detected irregularity is stored in an immutable ledger, ensuring transparency and security.
<img width="1438" alt="Screenshot 2025-03-30 at 12 27 02 PM" src="https://github.com/user-attachments/assets/df04c36d-7b3a-47e0-95e0-4bf0030a4c21" />

#### How it Works:
- Each detected anomaly is recorded in a transaction on the **Aptos blockchain**.
- The transaction log ensures data integrity, preventing unauthorized modifications.
- Users can verify logs by querying the blockchain for anomaly records.

To verify stored anomalies, use:
```sh
aptos query transactions --account your-account-address
```

### 9. Backend Monitoring
To monitor the backend status, use the following command:
```sh
curl -X GET https://127.0.0.1:7000/.com
```

---

Enjoy using **Shakti** with blockchain-powered security! 🚀

