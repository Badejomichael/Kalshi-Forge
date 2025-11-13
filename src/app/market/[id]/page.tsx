'use client';

import { use, useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { notFound } from 'next/navigation';
import { sampleMarkets } from '../../../lib/mockData';
import { nextPrice } from '../../../lib/simulatePrice';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { FaArrowLeft, FaCalendarAlt, FaTags, FaChartLine } from 'react-icons/fa';
import Link from 'next/link';

export default function MarketPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params);
  const market = sampleMarkets.find((m) => m.id === id);
  if (!market) return notFound();

  // --- Chart + simulation state ---
  const [prob, setProb] = useState(market.currentProbability);
  const [series, setSeries] = useState<{ t: number; p: number }[]>(
    Array.from({ length: 16 }, (_, i) => ({ t: i, p: market.currentProbability }))
  );

  useEffect(() => {
    const id = setInterval(() => {
      setSeries((s) => {
        const tail = s.slice(1);
        const last = tail[tail.length - 1].p;
        const np = nextPrice(last, 0.03);
        tail.push({ t: tail[tail.length - 1].t + 1, p: np });
        setProb(np);
        return [...tail];
      });
    }, 1200);
    return () => clearInterval(id);
  }, []);

  const pct = Math.round(prob * 100);

  // --- UI ---
  return (
    <motion.div
      initial={{ opacity: 0, y: 12 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.4 }}
      className="max-w-4xl mx-auto px-4 py-10 mt-10"
    >
      {/* Back link */}
      <div className="mb-8 flex items-center justify-between">
        <Link
          href="/feed"
          className="inline-flex items-center gap-2 text-gray-600 hover:text-[#14b8a6] transition"
        >
          <FaArrowLeft className="w-4 h-4" />
          <span className="text-sm font-medium">Back to Feed</span>
        </Link>
      </div>

      {/* Market Info + Simulation Card */}
      <motion.section
        initial={{ opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.1, duration: 0.4 }}
        className="bg-white border border-gray-200 rounded-2xl shadow-sm p-8"
      >
        {/* Header */}
        <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 leading-tight">{market.title}</h1>
            <p className="text-gray-500 mt-2 flex items-center gap-2">
              <FaTags className="text-[#14b8a6]" /> {market.category}
              <span className="mx-2 text-gray-300">•</span>
              <FaCalendarAlt className="text-[#14b8a6]" /> Resolves on {market.resolutionDate}
            </p>
          </div>

          <div className="text-right">
            <p className="text-sm text-gray-500">Simulated Volume</p>
            <p className="text-xl font-semibold text-gray-900">
              ${market.volume.toLocaleString()}
            </p>
          </div>
        </div>

        {/* Chart */}
        <div className="mt-8" style={{ width: '100%', height: 280 }}>
          <ResponsiveContainer>
            <LineChart data={series.map((d) => ({ time: d.t, prob: Math.round(d.p * 100) }))}>
              <XAxis dataKey="time" hide />
              <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: any) => `${v}%`} />
              <Line
                type="monotone"
                dataKey="prob"
                stroke="#14b8a6"
                strokeWidth={3}
                dot={false}
                activeDot={{ r: 5 }}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Probability + Buy Buttons */}
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-left bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Buy Yes</span>
              <FaChartLine className="text-[#14b8a6]" />
            </div>
            <div className="text-2xl font-semibold text-[#14b8a6] mt-1">{pct}%</div>
          </motion.button>

          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="flex-1 px-6 py-4 rounded-xl border border-gray-200 text-left bg-gradient-to-br from-white to-gray-50 hover:shadow-md transition"
          >
            <div className="flex items-center justify-between">
              <span className="text-sm text-gray-500">Buy No</span>
              <FaChartLine className="text-red-500" />
            </div>
            <div className="text-2xl font-semibold text-red-500 mt-1">
              {100 - pct}%
            </div>
          </motion.button>
        </div>

        {/* About Section */}
        <div className="mt-8 p-6 bg-gray-50 rounded-xl border border-gray-100">
          <h3 className="font-semibold text-gray-900">About this simulation</h3>
          <p className="text-sm text-gray-600 mt-2 leading-relaxed">
            This is a simulated market created in <span className="font-medium text-[#14b8a6]">Kalshi Forge</span>.
            Prices and probabilities update dynamically for illustrative and educational purposes only.
          </p>
        </div>
      </motion.section>
    </motion.div>
  );
}
