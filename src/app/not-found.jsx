'use client';

import Link from 'next/link';
import { FaHome, FaSearch } from 'react-icons/fa';

export default function NotFound() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center px-6">
      <div className="text-center max-w-lg">
        {/* Big 404 */}
        <h1 className="text-[180px] md:text-[220px] font-bold text-transparent bg-clip-text bg-gradient-to-br from-[#448c74] to-emerald-500 leading-none -mt-10">
          404
        </h1>

        <h2 className="text-4xl md:text-5xl font-semibold text-white -mt-8 mb-4">
          Page Not Found
        </h2>

        <p className="text-gray-400 text-lg mb-10">
          Oops! The page you are looking for does not exist or has been moved.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Link
            href="/"
            className="flex items-center justify-center gap-3 bg-[#448c74] hover:bg-[#36695a] transition px-8 py-4 rounded-2xl text-white font-medium text-lg"
          >
            <FaHome /> Back to Home
          </Link>

          <Link
            href="/ideas"
            className="flex items-center justify-center gap-3 border border-gray-700 hover:border-[#448c74] hover:text-[#448c74] transition px-8 py-4 rounded-2xl text-white font-medium text-lg"
          >
            <FaSearch /> Explore Ideas
          </Link>
        </div>

        <p className="text-gray-500 mt-12 text-sm">
          Need help? Contact us at support@yourstartup.com
        </p>
      </div>
    </div>
  );
}