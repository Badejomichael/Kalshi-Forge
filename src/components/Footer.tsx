export default function Footer() {
  return (
    <footer className="border-t border-gray-100 bg-gradient-to-b from-gray-50 to-white">
      <div className="max-w-7xl mx-auto px-6 md:px-12 py-10 text-center">
        <div className="text-gray-700 font-medium text-lg">
          <span className="font-bold text-gray-900">Kalshi</span>{" "}
          <span className="text-teal-500 font-semibold">Forge</span>
        </div>

        <p className="text-sm text-gray-500 mt-3 max-w-2xl mx-auto leading-relaxed">
          An experimental platform for exploring prediction markets.
        </p>

        <div className="mt-6 text-xs text-gray-400">
          © {new Date().getFullYear()} Kalshi Forge. All rights reserved.
        </div>
      </div>
    </footer>
  );
}


