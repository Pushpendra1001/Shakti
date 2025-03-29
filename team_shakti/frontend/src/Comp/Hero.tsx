
// import Nav from "../Nav";
// import { IoLogoGooglePlaystore } from "react-icons/io5";
// import { FaApple } from "react-icons/fa";
// import { SiSpringsecurity } from "react-icons/si";

// function Hero() {
//   return (
//     <div
//       className="relative min-h-screen bg-cover bg-center flex flex-col justify-between overflow-hidden"
//       style={{
//         backgroundImage:
//           "url('https://test1-emgndhaqd0c9h2db.a01.azurefd.net/images/e950ab73-379a-43c8-808e-58817ec4aeea.png')",
//       }}
//     >
//       {/* Dark Overlay */}
//       <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>

//       {/* Navbar */}
//       <div className="relative z-10 p-8 animate-fade-down">
//         <Nav />
//       </div>

//       {/* Hero Content */}

   
  

//       {/* Bottom Section */}
//       <div className="relative z-10 flex justify-between items-center w-full px-8 md:px-12 py-6 text-white animate-fade-up">
//         {/* App Icons */}
//         <div className="flex space-x-4">
//           <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl hover:scale-110 transition duration-300">
//             <IoLogoGooglePlaystore size={24} />
//           </div>
//           <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl hover:scale-110 transition duration-300">
//             <FaApple size={24} />
//           </div>
//         </div>

//         {/* Security Info */}
//         <div className="flex items-center gap-4 text-gray-300 text-base font-semibold">
//           <p className="leading-tight animate-pulse">
//             Your security is our priority. <br /> Trusted by thousands worldwide.
//           </p>
//           <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl animate-spin-slow">
//             <SiSpringsecurity size={26} />
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Hero;


import Nav from "../Nav";
import { IoLogoGooglePlaystore } from "react-icons/io5";
import { FaApple, FaArrowRight } from "react-icons/fa";
import { SiSpringsecurity } from "react-icons/si";

function Hero() {
  return (
    <div
      className="relative min-h-screen bg-cover bg-center flex flex-col justify-between overflow-hidden"
      style={{
        backgroundImage:
          "url('https://test1-emgndhaqd0c9h2db.a01.azurefd.net/images/e950ab73-379a-43c8-808e-58817ec4aeea.png')",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm"></div>
      
      {/* Navbar */}
      <div className="relative z-10 p-8 animate-fade-down">
        <Nav />
      </div>
      
      {/* Hero Content */}
      <div className="relative z-10 flex-1 flex flex-col justify-center items-center text-white px-8 md:px-16">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold mb-6 text-center animate-fade-up">
          Protection Beyond Limits
        </h1>
        <p className="text-xl max-w-2xl text-center text-gray-300 mb-8 animate-fade-up animation-delay-200">
          Cutting-edge security solutions that safeguard what matters most. Experience uncompromising protection in an increasingly vulnerable digital world.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 animate-fade-up animation-delay-400">
          <button className="px-8 py-3 bg-white text-black font-semibold rounded-full hover:bg-gray-200 transition flex items-center justify-center gap-2">
            Get Started <FaArrowRight size={16} />
          </button>
          <button className="px-8 py-3 bg-transparent border border-white font-semibold rounded-full hover:bg-white/10 transition">
            Learn More
          </button>
        </div>
      </div>
      
      {/* Bottom Section */}
      <div className="relative z-10 flex justify-between items-center w-full px-8 md:px-12 py-6 text-white animate-fade-up">
        {/* App Icons */}
        <div className="flex space-x-4">
          <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl hover:scale-110 transition duration-300">
            <IoLogoGooglePlaystore size={24} />
          </div>
          <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl hover:scale-110 transition duration-300 ml-[-30px]">
            <FaApple size={24} />
          </div>
        </div>
        
        {/* Security Info */}
        <div className="flex items-center gap-4 text-gray-300 text-base font-semibold">
          <p className="leading-tight animate-pulse">
            Your security is our priority. <br /> Trusted by thousands worldwide.
          </p>
          <div className="h-14 w-14 flex justify-center items-center bg-white/10 backdrop-blur-lg border border-white/30 rounded-full shadow-2xl animate-spin-slow">
            <SiSpringsecurity size={26} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Hero;


