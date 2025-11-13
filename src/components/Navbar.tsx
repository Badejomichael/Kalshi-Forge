"use client";

import Link from "next/link";
import { FiPlusSquare } from "react-icons/fi";

export default function Navbar() {
  return (
    <header className="fixed top-0 left-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-gray-100 shadow-sm">
      <div className="max-w-7xl mx-auto flex items-center justify-between py-4 px-6 md:px-12">
        {/* Brand */}
        <Link href="/" className="flex items-center gap-2">
          <div className="text-2xl font-extrabold tracking-tight text-gray-900">
            Kalshi <span className="text-teal-500">Forge</span>
          </div>
        </Link>

        {/* Nav Links */}
        <nav className="flex items-center gap-6">
          <Link
            href="/feed"
            className="text-gray-700 hover:text-teal-500 text-sm font-medium transition-colors"
          >
            Feed
          </Link>

          <Link
            href="/forge"
            className="inline-flex items-center gap-2 bg-teal-500 text-white px-4 py-2.5 rounded-xl text-sm font-semibold shadow-md hover:bg-teal-600 hover:shadow-lg transition-all"
          >
            <FiPlusSquare className="w-4 h-4" />
            Forge
          </Link>
        </nav>
      </div>
    </header>
  );
}
