
const Sec1 = () => {
  return (
    <section id="about" className="relative w-full min-h-[90vh] flex flex-col justify-center px-10 bg-gradient-to-r from-black to-[#061727] text-white " >
      {/* Top Text */}
      <div className="text-center max-w-2xl mx-auto mt-5">
        <p className="text-sm uppercase text-gray-400">Language Service Provider</p>
        <h1 className="text-3xl font-light mt-2">
          AI translation is{" "}
          <span className="text-blue-500 font-semibold">revolutionizing</span> the way we overcome
          Security barriers.
        </h1>
      </div>

      {/* Main Content */}
      <div className="mt-16 flex justify-between items-start">
        {/* Left Section */}
        <div>
          <p className="text-gray-400 text-sm">Language Service</p>
          <h1 className="text-6xl font-bold relative w-fit">
            Shakti
            {/* Floating Blue Circle */}
            <span className="absolute -right-8 top-6 h-12 w-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg">
              S
            </span>
          </h1>

          {/* What We Do Section */}
          <div className="mt-8">
            <h3 className="text-lg font-semibold">What We Do?</h3>
            <p className="text-gray-400 text-sm max-w-md mt-2">
              Cybersecurity is the cornerstone of digital trust, safeguarding sensitive
              information and critical systems from evolving threats.
            </p>
          </div>
        </div>

        {/* Right Section */}
        <div className="text-right">
          <div className="space-y-4 text-sm">
            <p className="text-gray-400">Industry <span className="text-white font-semibold">Cybersecurity</span></p>
            <p className="text-gray-400">Location <span className="text-white font-semibold">India</span></p>
            <p className="text-gray-400">Year <span className="text-white font-semibold">2025</span></p>
          </div>
        </div>
      </div>

      {/* Bottom Section (Stats) */}
      <div className="mt-4 flex justify-between items-center">
        {/* Profile Images */}
        <div className="flex -space-x-4">
          <img src="https://randomuser.me/api/portraits/men/32.jpg" className="w-10 h-10 rounded-full border border-gray-700" />
          <img src="https://randomuser.me/api/portraits/women/45.jpg" className="w-10 h-10 rounded-full border border-gray-700" />
          <img src="https://randomuser.me/api/portraits/men/56.jpg" className="w-10 h-10 rounded-full border border-gray-700" />
        </div>

        {/* Stats */}
        <div className="text-right">
          <h2 className="text-2xl font-bold">+18K</h2>
          <p className="text-gray-400 text-sm max-w-xs">
            Crafting personalized AI models to your content, resulting in good quality translations.
          </p>
        </div>
      </div>



      <div className=" flex justify-end  mt-11 mb-11">


      <div
  className="w-[72%] h-[80vh] rounded-3xl bg-cover bg-center"
  style={{
    backgroundImage: "url('https://i.pinimg.com/736x/4e/03/87/4e03872d7166cc5ed92c490708af3261.jpg')",
  }}
></div>







      </div>
    </section>
  );
};

export default Sec1;
