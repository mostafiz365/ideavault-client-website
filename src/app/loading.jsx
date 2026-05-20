export default function Loading() {
  return (
    <div className="min-h-screen bg-gray-950 flex items-center justify-center">
      <div className="flex flex-col items-center">
        {/* Logo / Spinner */}
        <div className="relative w-20 h-20">
          <div className="absolute inset-0 border-4 border-gray-700 rounded-full"></div>
          <div className="absolute inset-0 border-4 border-t-[#448c74] border-r-[#448c74] rounded-full animate-spin"></div>
        </div>

        <h2 className="text-white text-2xl font-semibold mt-8">Loading amazing ideas...</h2>
        <p className="text-gray-400 mt-2">Please wait a moment</p>

        {/* Progress Bar */}
        <div className="w-64 h-1 bg-gray-800 rounded-full mt-10 overflow-hidden">
          <div className="h-full w-1/3 bg-gradient-to-r from-[#448c74] to-emerald-400 animate-loading rounded-full"></div>
        </div>
      </div>
    </div>
  );
}