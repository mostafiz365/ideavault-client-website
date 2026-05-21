
import { FaEnvelope } from 'react-icons/fa';

const CTASection = () => {
  return (
    <section className="bg-[#448c74] dark:bg-black py-20 px-6 mb-20">
      <div className="max-w-6xl mx-auto">
        <div className="grid md:grid-cols-2 gap-12 items-center">

          <div>
            <h2 className="text-white text-5xl md:text-6xl font-bold leading-tight">
              Ready to take<br />your Ideas<br />to the next level?
            </h2>
          
            <div className="mt-8 hidden md:block">
              <svg width="120" height="60" viewBox="0 0 120 60" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M10 50 Q30 20 60 30 Q90 45 110 10" stroke="#facc15" strokeWidth="6" strokeLinecap="round" fill="none"/>
                <polygon points="110,10 100,15 105,25" fill="#facc15"/>
              </svg>
            </div>
          </div>

          <div className="space-y-8">
            <p className="text-white/90 text-lg leading-relaxed max-w-md">
              Ready to grow your business with expert marketing, branding, and communication strategies? Our team is here to help you achieve sustainable growth and stand out in the market.
            </p>

            <div className="flex flex-col sm:flex-row gap-4">
              <div className="relative flex-1">
                <div className="absolute left-5 top-1/2 -translate-y-1/2 text-white/70">
                  <FaEnvelope size={20} />
                </div>
                <input
                  type="email"
                  placeholder="Enter your email"
                  className="w-full pl-14 pr-6 py-4 bg-white/10 border border-white/30 rounded-full text-white placeholder-white/60 focus:outline-none focus:border-white/50 transition"
                />
              </div>

              <button className="bg-[#facc15] hover:bg-yellow-400 transition px-10 py-4 rounded-full font-semibold text-gray-900 whitespace-nowrap">
                Book a call
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;