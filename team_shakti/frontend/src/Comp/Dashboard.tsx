"use client";

import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";
import axios from "axios";

// Define the attack log type
interface AttackLog {
  attack_type: string;
  attacker_ip: string;
  attacker_mac: string;
  details: string;
}

const Dashboard: React.FC = () => {
  const [ip, setIp] = useState<string>("Fetching...");
  const [walletBalance, setWalletBalance] = useState<string>("$5,000.00");
  const [attackLogs, setAttackLogs] = useState<AttackLog[]>([]);

  useEffect(() => {
    axios.get("https://api64.ipify.org?format=json")
      .then((res) => setIp(res.data.ip))
      .catch(() => setIp("Unable to fetch"));
  }, []);

  useEffect(() => {
    axios.get("http://127.0.0.1:7000/get_logs")
      .then((res) => {
        console.log("Fetched attack logs:", res.data); // Debugging
        setAttackLogs(res.data);
        console.log(res.data)
      })
      .catch((error) => {
        console.error("Error fetching logs:", error);
        setAttackLogs([]);
      });
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#061727] text-white p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Attack Logs</h2>
        <div className="flex items-center gap-4">
          <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">IP: {ip}</span>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
            <FaWallet className="text-yellow-400 mr-2" />
            <span className="text-lg font-semibold">{walletBalance}</span>
          </div>
        </div>
      </div>

      {/* Attack Logs List */}
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-lg">
        {attackLogs.length > 0 ? (
          attackLogs.map((log, index) => (
            <div
              key={index}
              className="flex flex-col py-4 border-b border-white/10 last:border-b-0 hover:bg-white/5 p-3 rounded-lg transition-all"
            >
              <h3 className="text-lg font-semibold text-red-500">Attack Type: {log.attack_type}</h3>
              <p className="text-sm text-gray-400">Attacker IP: {log.attacker_ip}</p>
              <p className="text-sm text-gray-400">Attacker MAC: {log.attacker_mac}</p>
              <p className="text-sm text-gray-400">Details: {log.details}</p>
            </div>
          ))
        ) : (
          <p className="text-gray-400 text-center">No attack logs available</p>
        )}
      </div>
    </div>
  );
};

export default Dashboard;

