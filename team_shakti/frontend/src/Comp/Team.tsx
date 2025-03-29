import { FaLinkedin, FaTwitter } from "react-icons/fa";

const teamMembers = [
    {
        name: "Dhairya Vishwakarma",
        role: "Cyber Security (Pentester)",
        image: "/dhariya.jpeg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Pushpendra Baswal",
        role: "Application Developer",
        image: "/push.jpeg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Dev purohit",
        role: "Frontend developer",
        image: "/me.jpg",
        linkedin: "#",
        twitter: "#",
    },
    {
        name: "Arzoo Singh",
        role: "UI/Ux ",
        image: "/arzoo.jpeg",
        linkedin: "#",
        twitter: "#",
    },
];

const TeamSection = () => {
    return (
        <section id="company" className="relative w-full min-h-[70vh] flex flex-col justify-center px-10 bg-gradient-to-r from-black to-[#061727] text-white">
            {/* Heading */}
            <div className="text-center max-w-2xl mx-auto mt-5">
                <p className="text-sm uppercase text-gray-400">Meet Our Team</p>
                <h1 className="text-3xl font-light mt-2">
                    The <span className="text-blue-500 font-semibold">Experts</span> Behind Our Vision
                </h1>
            </div>

            {/* Main Content */}
            <div className="mt-16 flex justify-between items-start">
                {/* Left Section */}
                <div>
                    <p className="text-gray-400 text-sm">Our Passionate Team</p>
                    <h1 className="text-6xl font-bold relative w-fit">
                        Members
                        <span className="absolute -right-8 top-6 h-12 w-12 bg-blue-600 text-white flex items-center justify-center rounded-full text-lg font-bold shadow-lg">
                            S
                        </span>
                    </h1>
                </div>

                {/* Right Section - Team Cards */}
                <div className="flex flex-wrap justify-center gap-6">
                    {teamMembers.map((member, index) => (
                        <div
                            key={index}
                            className="relative w-56 h-72 bg-white/10 border border-gray-600 backdrop-blur-lg rounded-2xl shadow-xl p-4 flex flex-col items-center justify-center transition-transform duration-300 hover:scale-105"
                        >
                            {/* Profile Image */}
                            <img
                                src={member.image || "/default-avatar.png"}
                                alt={member.name || "Profile Image"}
                                className="w-32 h-32 rounded-full border-4 border-gray-700 shadow-lg  object-cover object-top"
                            />

                            <h3 className="text-lg font-semibold mt-3">{member.name}</h3>
                            <p className="text-gray-400 text-sm">{member.role}</p>

                            {/* Social Icons */}
                            <div className="absolute bottom-4 flex space-x-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                                <a href={member.linkedin} className="text-blue-500 hover:text-blue-400">
                                    <FaLinkedin size={18} />
                                </a>
                                <a href={member.twitter} className="text-blue-500 hover:text-blue-400">
                                    <FaTwitter size={18} />
                                </a>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TeamSection;
