import Link from "next/link";

const Footer = () => {
  return (
    <footer className="bg-[#448c74] dark:bg-black">
      <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />


      {/* Content */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        {/* Top Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 text-center lg:text-left">
          {/* Brand */}
          <div className="space-y-4">
            <div className="">
              <h2 className="text-xl font-semibold text-white">
                IdeaVault
              </h2>
            </div>
             <p className="leading-relaxed text-white">
              AI-powered ideas designed to solve real-world problems and shape the future of technology, education, healthcare, and modern digital experiences.
            </p>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Social Links
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/facebook"
                  className="text-white"
                >
                  FaceBook
                </Link>
              </li>
              <li>
                <Link
                  href="/twitter"
                  className="text-white"
                >
                  twitter
                </Link>
              </li>
              <li>
                <Link
                  href="/linkedin"
                  className="text-white"
                >
                  LinkedIn
                </Link>
              </li>
            </ul>
          </div>

          <div>
            <h3 className="font-semibold text-white mb-4">
              Contact info
            </h3>
            <ul className="space-y-3 text-white">
              <li>
                <Link
                  href="/about"
                  className="text-white"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  href="/contact"
                  className="text-white"
                >
                  Phone
                </Link>
              </li>
              <li>
                <Link
                  href="/terms"
                  className="text-white"
                >
                  Email
                </Link>
              </li>
            </ul>
          </div>
          <div className="space-y-4">
            <h3 className="font-semibold text-white mb-4">
              Start learning
            </h3>

            <p className="text-white">
              Build your first Skills with our platform today.
            </p>

            <Link
              href="/signup"
              className="inline-flex items-center justify-center px-5 py-2.5 rounded-full 
              bg-[#448c74] text-white font-medium"
            >
              Get Started
            </Link>
          </div>
        </div>

        <div className="mt-12 h-px w-full bg-linear-to-r from-transparent via-gray-300 to-transparent dark:via-white/10" />

        <div className="mt-6 flex flex-col md:flex-row justify-between items-center gap-4 text-white">
          <p>© {new Date().getFullYear()} pixgen. All rights reserved.</p>

          <div className="flex items-center gap-6">
            <Link
              href="/privacy"
              className="text-white transition"
            >
              Privacy
            </Link>
            <Link
              href="/terms"
              className="text-white transition"
            >
              Terms
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;