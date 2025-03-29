"use client";

import { useEffect, useState } from "react";
import { FaWallet } from "react-icons/fa";

const transactions = [
  { name: "Amazon", type: "Products", amount: "-$1,456", btc: "BTC 0.067", color: "text-red-500" },
  { name: "Netflix", type: "Entertainment", amount: "-$20", btc: "BTC 0.00092", color: "text-red-500" },
  { name: "Balance Top Up", type: "Metamask Wallet", amount: "+$1000", btc: "BTC 0.046", color: "text-green-500" },
  { name: "Airbnb", type: "Hospitality", amount: "-$956", btc: "BTC 0.044", color: "text-red-500" },
  { name: "Money Transfer", type: "From Ann Gray", amount: "+$500", btc: "BTC 0.023", color: "text-green-500" },
  { name: "Figma", type: "Software", amount: "-$300", btc: "BTC 0.014", color: "text-red-500" },
  { name: "App Store", type: "Products", amount: "-$45", btc: "BTC 0.0021", color: "text-red-500" },
];

const Dashboard = () => {
  const [ip, setIp] = useState("Fetching...");
  const [walletBalance, setWalletBalance] = useState("$5,000.00");

  useEffect(() => {
    fetch("https://api64.ipify.org?format=json")
      .then((res) => res.json())
      .then((data) => setIp(data.ip))
      .catch(() => setIp("Unable to fetch"));
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-r from-black to-[#061727] text-white p-8 flex flex-col gap-8">
      {/* Header */}
      <div className="flex justify-between items-center">
        <h2 className="text-2xl font-bold">Packets</h2>
        <div className="flex items-center gap-4">
          <span className="bg-white/10 px-4 py-2 rounded-lg text-sm">IP: {ip}</span>
          <div className="flex items-center bg-white/10 px-4 py-2 rounded-lg">
            <FaWallet className="text-yellow-400 mr-2" />
            <span className="text-lg font-semibold">{walletBalance}</span>
          </div>
        </div>
      </div>

      {/* Transactions List */}
      <div className="bg-white/10 p-6 rounded-xl backdrop-blur-md border border-white/20 shadow-lg">
        {transactions.map((tx, index) => (
          <div
            key={index}
            className="flex justify-between items-center py-4 border-b border-white/10 last:border-b-0 hover:bg-white/5 p-3 rounded-lg transition-all"
          >
            <div>
              <h3 className="text-lg font-semibold">{tx.name}</h3>
              <p className="text-sm text-gray-400">{tx.type}</p>
            </div>
            <div className={`text-lg font-semibold ${tx.color}`}>{tx.amount}</div>
            <p className="text-sm text-gray-400">{tx.btc}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Dashboard;