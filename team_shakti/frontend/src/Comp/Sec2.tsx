import { FaShieldAlt, FaLock, FaBan, FaChartLine, FaRocket, FaGlobe } from "react-icons/fa";

const features = [
  { 
    title: "Real-Time Threat Detection", 
    icon: <FaShieldAlt size={28} />, 
    description: "Continuously scans network activity, identifying WiFi jamming, packet injection, and intrusion attempts." 
  },
  { 
    title: "Blockchain-Powered Security", 
    icon: <FaLock size={28} />, 
    description: "Stores security logs on the Aptos blockchain for immutable, tamper-proof records." 
  },
  { 
    title: "Automated Threat Response", 
    icon: <FaBan size={28} />, 
    description: "Instantly blocks rogue devices and enforces security measures automatically." 
  },
  { 
    title: "Web-Based Dashboard", 
    icon: <FaChartLine size={28} />, 
    description: "Displays live security insights, alerts, and allows configuration of security policies." 
  },
  { 
    title: "Portable & Easy Deployment", 
    icon: <FaRocket size={28} />, 
    description: "Plug, activate, and secure your network instantly with no complex setup required." 
  },
  { 
    title: "Future Upgrade", 
    icon: <FaGlobe size={28} />, 
    description: "A decentralized network for collaborative cybersecurity and predictive threat prevention." 
  }
];

export default function FeaturesSection() {
  return (
    <section id="services" className="relative w-full min-h-[90vh] flex flex-col justify-center px-10 bg-gradient-to-r from-black to-[#061727] text-white">
      {/* Top Section */}
      <div className="text-left max-w-2xl">
        <button className="px-5 py-2 bg-gray-800 text-white rounded-full shadow-md border border-gray-700">
          Our Features
        </button>
        <h1 className="text-5xl font-light mt-4">
          Key <span className="text-blue-500 font-semibold">Features</span>
        </h1>
        <p className="text-gray-400 text-md mt-4 max-w-lg leading-relaxed">
          Explore the core aspects of our workflow, ensuring a seamless experience from ideation to execution.
        </p>
      </div>

      {/* Features Grid */}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
        {features.map((feature, index) => (
          <div
            key={index}
            className="border border-gray-600 h-44 flex flex-col items-center justify-center rounded-2xl bg-gray-800 text-white hover:scale-105 transition-all duration-300 p-5 shadow-lg"
          >
            <div className="text-blue-500 mb-3">{feature.icon}</div>
            <h3 className="text-lg font-semibold">{feature.title}</h3>
            <p className="text-gray-400 text-sm text-center mt-2">{feature.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
