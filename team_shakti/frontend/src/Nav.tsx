import { ArrowUpRight } from "lucide-react";

function Nav() {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth" });
    }
  };

  return (
    <div className="h-[8vh] flex justify-between items-center px-6 text-white backdrop-blur-md bg-white/10 rounded-lg fixed top-4 left-1/2 transform -translate-x-1/2 w-[90%] z-50">
      {/* Logo */}
      <h1 className="text-lg font-semibold">Shakti®</h1>

      {/* Navigation Menu */}
      <ul className="flex gap-6 text-sm">
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => scrollToSection("about")}>ABOUT</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => scrollToSection("services")}>SERVICES</li>
        <li className="hover:text-gray-300 cursor-pointer" onClick={() => scrollToSection("company")}>COMPANY</li>
      </ul>

      {/* Contact Button */}
      <button className="flex items-center gap-1 text-sm font-medium hover:text-gray-300" onClick={() => scrollToSection("contact")}>
        CONTACT US <ArrowUpRight size={16} />
      </button>
    </div>
  );
}

export default Nav;
