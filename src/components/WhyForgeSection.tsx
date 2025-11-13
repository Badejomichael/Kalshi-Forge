"use client";

import { motion } from "framer-motion";
import { Rocket, LineChart, Share2 } from "lucide-react";

export default function WhyForgeSection() {
  return (
    <section className="relative bg-gradient-to-b from-gray-50 via-white to-gray-100 py-24 px-6 md:px-12 overflow-hidden">
      <div className="max-w-7xl mx-auto text-center">
        <motion.h2
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          viewport={{ once: true }}
          className="text-4xl md:text-5xl font-extrabold text-gray-900"
        >
          Why <span className="text-[#14b8a6]">Forge</span>?
        </motion.h2>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          viewport={{ once: true }}
          className="text-gray-600 mt-5 text-lg leading-relaxed max-w-3xl mx-auto"
        >
          Event markets turn questions into tradable assets. Forge lets anyone
          experiment with how those markets are created, priced, and visualized
          — without real money, but with real insights.
        </motion.p>

        <div className="grid md:grid-cols-3 gap-10 mt-16">
          {[
            {
              icon: Rocket,
              title: "Create Markets",
              desc: "Write any question, set resolution details, and define market behavior.",
            },
            {
              icon: LineChart,
              title: "Simulate Prices",
              desc: "Adjust probability and liquidity to see how sentiment shifts.",
            },
            {
              icon: Share2,
              title: "Share & Explore",
              desc: "Explore community creations and learn from simulated markets.",
            },
          ].map((card, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 + i * 0.1 }}
              viewport={{ once: true }}
              whileHover={{ y: -6, scale: 1.03 }}
              className="bg-white/80 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-md hover:shadow-xl p-8 transition-all duration-300"
            >
              <div className="flex items-center justify-center w-12 h-12 rounded-xl bg-[#14b8a615] mx-auto mb-5">
                <card.icon className="w-6 h-6 text-[#14b8a6]" />
              </div>
              <h4 className="font-semibold text-gray-800 text-xl">
                {card.title}
              </h4>
              <p className="text-sm text-gray-600 mt-3 leading-relaxed">
                {card.desc}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
