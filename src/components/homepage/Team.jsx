import { FaLinkedin, FaFacebook, FaInstagram } from 'react-icons/fa';

const Team = () => {
  const team = [
    {
      name: "John Carter",
      role: "CEO & Founder",
      img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=500&h=500&fit=crop&crop=face"
    },
    {
      name: "Marta Black",
      role: "Data Analyst",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=500&h=500&fit=crop&crop=face"
    },
    {
      name: "Emma Wilson",
      role: "Creative Director",
      img: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=500&h=500&fit=crop&crop=face"
    },
    {
      name: "Alex Rivera",
      role: "Marketing Lead",
      img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=500&h=500&fit=crop&crop=face"
    },
    {
      name: "Marcus Chen",
      role: "Senior Developer",
      img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=500&h=500&fit=crop&crop=face"
    },
    {
      name: "Sophie Laurent",
      role: "Content Strategist",
      img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=600&h=600&fit=crop&crop=face"
    }
  ];

  return (
    <section className="py-16">
      <div className="max-w-10/12 mx-auto px-6">
        <div className="flex flex-col lg:flex-row gap-16 items-start">

          {/* Left Side */}
          <div className="lg:w-2/5">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-10 h-10 bg-blue-600 rounded-full"></div>
              <div className="w-10 h-10 bg-emerald-500 rounded-full -ml-6"></div>
            </div>
            
            <h2 className="text-5xl font-bold text-[#448c74] leading-tight mb-8">
              Meet our team
            </h2>

            <p className="text-gray-600 text-lg leading-relaxed">
              The main competencies of the team: find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur neque congue aliqua.
            </p>

            <button className="mt-10 px-8 py-4 bg-blue-600 text-white border border-gray-300 rounded-full text-sm font-medium hover:bg-gray-100 transition">
              Get to know our team better
            </button>
          </div>

          {/* Right Side - Team Members */}
          <div className="lg:w-3/5">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
              {team.map((member, index) => (
                <div key={index} className="bg-white rounded-3xl overflow-hidden shadow-sm hover:shadow-2xl transition-all group">
                  <div className="relative">
                    <img 
                      src={member.img} 
                      alt={member.name}
                      className="w-full h-80 object-cover"
                    />
                    
                    {/* Overlay */}
                    <div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/70 to-transparent h-2/3" />
                    
                    {/* Name & Role */}
                    <div className="absolute bottom-6 left-6 text-white">
                      <h4 className="text-xl font-semibold">{member.name}</h4>
                      <p className="text-sm opacity-90">{member.role}</p>
                    </div>

                    {/* Social Icons */}
                    <div className="absolute bottom-6 right-6 flex gap-2 opacity-0 group-hover:opacity-100 transition-all">
                      <a href="#" className="w-9 h-9 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center">
                        <FaLinkedin />
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center">
                        <FaFacebook />
                      </a>
                      <a href="#" className="w-9 h-9 bg-white/90 hover:bg-white text-gray-800 rounded-full flex items-center justify-center">
                        <FaInstagram />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Team;