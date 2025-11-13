'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaCheckCircle, FaHome, FaListUl } from 'react-icons/fa';

export default function Step4Success() {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, ease: 'easeOut' }}
      className="max-w-2xl mx-auto text-center bg-white border border-gray-200 rounded-2xl shadow-sm p-10"
    >
      {/* Success Icon */}
      <motion.div
        initial={{ scale: 0 }}
        animate={{ scale: 1 }}
        transition={{ delay: 0.2, type: 'spring', stiffness: 120 }}
        className="flex justify-center"
      >
        <FaCheckCircle className="text-[#14b8a6] text-5xl drop-shadow-md" />
      </motion.div>

      {/* Heading */}
      <h2 className="text-3xl font-bold text-gray-900 mt-4">
        Your Market is <span className="text-[#14b8a6]">Forged</span> 🔥
      </h2>
      <p className="text-gray-500 mt-2 max-w-md mx-auto leading-relaxed">
        You can now view your new market in the feed or share it with others to
        explore simulated price behavior.
      </p>

      {/* Actions */}
      <div className="mt-8 flex justify-center gap-4">
        <Link
          href="/feed"
          className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
        >
          <FaListUl className="w-4 h-4" />
          Go to Feed
        </Link>
        <Link
          href="/"
          className="inline-flex items-center gap-2 bg-[#14b8a6] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
        >
          <FaHome className="w-4 h-4" />
          Home
        </Link>
      </div>

      {/* Remove default blue focus */}
      <style jsx global>{`
        a, button {
          outline: none !important;
          box-shadow: none !important;
        }
        a:focus, button:focus {
          border-color: #14b8a6 !important;
        }
      `}</style>
    </motion.div>
  );
}
