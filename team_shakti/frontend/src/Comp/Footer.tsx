import { FaFacebook, FaTwitter, FaLinkedin, FaInstagram } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="relative w-full bg-gradient-to-r from-black to-[#061727] text-white py-12 px-10">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center border-t border-gray-700 pt-8">
        {/* Left Section - Logo & About */}
        <div className="text-center md:text-left">
          <h1 className="text-3xl font-bold relative w-fit mx-auto md:mx-0">
            Shakti
            <span className="absolute -right-6 top-2 h-8 w-8 bg-blue-600 text-white flex items-center justify-center rounded-full text-sm font-bold shadow-lg">
              S
            </span>
          </h1>
          <p className="text-gray-400 text-sm mt-2 max-w-sm">
            Empowering security and innovation through AI-driven solutions. Let's build the future together.
          </p>
        </div>

        {/* Right Section - Links & Socials */}
        <div className="mt-6 md:mt-0 text-center md:text-right">
          {/* Quick Links */}
          <div className="flex flex-wrap justify-center md:justify-end gap-6 text-gray-400 text-sm">
            <a href="#" className="hover:text-white transition-colors duration-300">Home</a>
            <a href="#" className="hover:text-white transition-colors duration-300">About</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Services</a>
            <a href="#" className="hover:text-white transition-colors duration-300">Contact</a>
          </div>

          {/* Social Icons */}
          <div className="flex justify-center md:justify-end gap-5 mt-4">
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
              <FaFacebook size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
              <FaTwitter size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
              <FaLinkedin size={20} />
            </a>
            <a href="#" className="text-blue-500 hover:text-blue-400 transition-colors duration-300">
              <FaInstagram size={20} />
            </a>
          </div>
        </div>
      </div>

      {/* Bottom Text */}
      <div className="text-center text-gray-500 text-sm mt-8 border-t border-gray-700 pt-6">
        © 2025 Shakti. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
