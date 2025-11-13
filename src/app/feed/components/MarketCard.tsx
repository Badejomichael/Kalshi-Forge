'use client';

import Link from 'next/link';
import { Market } from '../../../types/market';
import { motion } from 'framer-motion';
import { FaChartLine, FaTag, FaDollarSign } from 'react-icons/fa';

export default function MarketCard({ market }: { market: Market }) {
  const pct = Math.round(market.currentProbability * 100);
  const pctColor =
    pct > 60 ? 'text-green-600' : pct < 40 ? 'text-red-500' : 'text-yellow-500';

  return (
    <motion.div
      whileHover={{ y: -4, scale: 1.02 }}
      transition={{ type: 'spring', stiffness: 300 }}
      className="bg-white rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all p-5 flex flex-col justify-between"
    >
      {/* Title & Probability */}
      <div className="flex justify-between items-start">
        <div>
          <h3 className="font-semibold text-gray-900 leading-snug">
            {market.title}
          </h3>
          <p className="text-sm text-gray-500 mt-1 flex items-center gap-1">
            <FaTag className="text-[#14b8a6]" />
            {market.category} • Resolves {market.resolutionDate}
          </p>
        </div>
        <div
          className={`text-lg font-bold ${pctColor} bg-gray-50 rounded-xl px-3 py-1 shadow-inner`}
        >
          {pct}%
        </div>
      </div>

      {/* Bottom Info */}
      <div className="mt-5 flex items-center justify-between text-sm">
        <div className="flex items-center gap-1 text-gray-500">
          <FaDollarSign className="text-[#14b8a6]" />
          Sim vol: ${market.volume.toLocaleString()}
        </div>

        <Link
          href={`/market/${market.id}`}
          className="flex items-center gap-1 text-[#14b8a6] font-medium hover:underline"
        >
          <FaChartLine className="w-4 h-4" />
          View
        </Link>
      </div>
    </motion.div>
  );
}
