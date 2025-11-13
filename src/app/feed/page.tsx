'use client';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { FaFireAlt, FaPlus } from 'react-icons/fa';
import { sampleMarkets } from '../../lib/mockData';
import MarketCard from './components/MarketCard';

export default function FeedPage() {
  return (
    <section className="min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-12 px-6 md:px-12">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="flex flex-col sm:flex-row sm:items-center sm:justify-between"
        >
          <div>
            <h1 className="text-4xl font-extrabold text-gray-900 flex items-center gap-2">
              <FaFireAlt className="text-[#14b8a6]" />
              Forge Feed
            </h1>
            <p className="mt-1 text-gray-600">
              Explore markets designed by the community and see what’s trending.
            </p>
          </div>

          <Link
            href="/forge"
            className="mt-4 sm:mt-0 inline-flex items-center gap-2 bg-[#14b8a6] text-white font-medium px-5 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all"
          >
            <FaPlus className="w-4 h-4" />
            Forge New Market
          </Link>
        </motion.div>

        {/* Market Grid */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.1, duration: 0.4 }}
          className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6"
        >
          {sampleMarkets.length > 0 ? (
            sampleMarkets.map((m) => (
              <motion.div
                key={m.id}
                whileHover={{ scale: 1.02 }}
                transition={{ type: 'spring', stiffness: 200 }}
              >
                <MarketCard market={m} />
              </motion.div>
            ))
          ) : (
            <div className="col-span-full text-center text-gray-500 py-20">
              <p>No markets yet. Be the first to <Link href="/forge" className="text-[#14b8a6] font-medium hover:underline">create one</Link>!</p>
            </div>
          )}
        </motion.div>
      </div>
    </section>
  );
}
