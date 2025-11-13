"use client";

import Link from "next/link";
import { motion } from "framer-motion";
import { TrendingUp, Rocket, Compass, LineChart, Coins } from "lucide-react";

export default function HeroSection() {
  return (
    <section className="relative min-h-screen bg-gradient-to-b from-white via-gray-50 to-gray-100 py-20 px-6 md:px-12 flex items-center">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        {/* Hero Text */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
        >
          <h1 className="text-5xl md:text-6xl font-extrabold leading-tight text-gray-900">
            Forge the future of{" "}
            <span className="text-[#14b8a6]">prediction markets</span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg leading-relaxed max-w-lg">
            Design event markets, simulate price dynamics, and share your
            experiments with the community.
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <Link
              href="/forge"
              className="inline-flex items-center gap-2 bg-[#14b8a6] text-white px-6 py-3 rounded-xl font-medium shadow-md hover:shadow-lg hover:opacity-95 transition-all"
            >
              <Rocket className="w-5 h-5" />
              Start Forging
            </Link>
            <Link
              href="/feed"
              className="inline-flex items-center gap-2 border border-gray-200 bg-white px-6 py-3 rounded-xl text-gray-700 hover:bg-gray-50 hover:border-gray-300 transition-all"
            >
              <Compass className="w-5 h-5" />
              Explore Feed
            </Link>
          </div>
        </motion.div>

        {/* Trending Card */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2 }}
          viewport={{ once: true }}
          className="bg-white/90 backdrop-blur-sm shadow-xl rounded-2xl p-8 border border-gray-100"
        >
          <div className="flex items-center gap-2 mb-5">
            <TrendingUp className="w-5 h-5 text-[#14b8a6]" />
            <h3 className="font-semibold text-gray-800 text-lg">
              Trending Forges
            </h3>
          </div>

          <div className="space-y-5">
            {[
              {
                title: "Will Kalshi hit an annualized volume of $1T by 2026?",
                category: "Crypto",
                color: "#14b8a6",
                percent: "80%",
                icon: Coins,
              },
              {
                title: "Will Apple ship AR glasses in 2026?",
                category: "Tech",
                color: "#f97316",
                percent: "49%",
                icon: LineChart,
              },
            ].map((item, i) => (
              <div
                key={i}
                className="p-4 rounded-xl bg-gray-50 hover:bg-gray-100 transition-all"
              >
                <div className="flex justify-between items-center">
                  <div>
                    <div className="font-medium text-gray-800">{item.title}</div>
                    <div className="text-sm text-gray-500 mt-1">
                      <item.icon
                        className="inline w-4 h-4 mr-1"
                        style={{ color: item.color }}
                      />
                      {item.category} • {item.percent}
                    </div>
                  </div>
                  <div
                    className="text-lg font-semibold"
                    style={{ color: item.color }}
                  >
                    {item.percent}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
