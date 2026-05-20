import React from 'react';
import {
  FaBullhorn,
  FaGlobe,
  FaEnvelope,
  FaComments,
  FaPencilAlt
} from 'react-icons/fa';
// bg-[#f6fafd]
const Services = () => {
  return (
    <section className="py-16">
      <div className="max-w-6xl mx-auto px-6">
        
        {/* Heading */}
        <div className="text-center mb-12">
          <h2 className="text-5xl font-bold text-[#448c74] mb-3">Our services</h2>
          <p className="text-gray-600 text-lg">
            We provide a wide range of consulting services
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

          {/* Service Card */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaBullhorn className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Advertising communications
            </h3>
            
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Officia consequat duis enim velit mollit.
            </p>
            
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

          {/* Service Card 2 */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaBullhorn className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Marketing and branding
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Find aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
            </p>
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

          {/* Service Card 3 */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaGlobe className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Web and Internet marketing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Hac erat leo proin odio est sed felis facilisi integer sed congue neque turpis dictumst sit sed volutpat.
            </p>
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

          {/* Service Card 4 */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaEnvelope className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Email marketing
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Adipiscing posuere dui, amet, augue nisl dictum justo, enim. Sed neque congue non quam ultrices.
            </p>
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

          {/* Service Card 5 */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaComments className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Working on communication
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Molestie enim tempus egestas a at enim. Velit hendrerit nibh eget porta pretium. Ipsum orci habitasse eget malesuada platea.
            </p>
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

          {/* Service Card 6 */}
          <div className="group bg-white p-8 rounded-2xl border border-gray-100 hover:bg-[#448c74] hover:text-white transition-all duration-300 hover:shadow-2xl">
            <div className="w-14 h-14 bg-yellow-100 group-hover:bg-white/20 rounded-2xl flex items-center justify-center mb-6 transition-colors">
              <FaPencilAlt className="text-4xl text-yellow-500 group-hover:text-white transition-colors" />
            </div>
            <h3 className="text-xl font-semibold mb-3 text-gray-900 group-hover:text-white transition-colors">
              Business copywriting
            </h3>
            <p className="text-gray-600 text-sm leading-relaxed group-hover:text-white/90 transition-colors">
              Massa donec quam orci feugiat. Quis laculis facilisi ornare aenean lorem purus in lacus in ullamcorper diam consequat.
            </p>
            <div className="mt-8">
              <button className="w-10 h-10 border border-gray-300 text-gray-400 rounded-full flex items-center justify-center group-hover:border-white/50 group-hover:text-white transition-all">
                →
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default Services;