'use client';
import { Dispatch, SetStateAction } from 'react';
import { Market } from '../../../types/market';
import { motion } from 'framer-motion';
import { FaChartLine, FaWater, FaArrowLeft, FaArrowRight } from 'react-icons/fa';

export default function Step2Parameters({
  draft,
  setDraft,
  next,
  prev,
}: {
  draft: Partial<Market>;
  setDraft: Dispatch<SetStateAction<Partial<Market>>>;
  next: () => void;
  prev: () => void;
}) {
  const initialProb = Math.round((draft.initialProbability ?? 0.5) * 100);

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      {/* Header */}
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <FaChartLine className="text-[#14b8a6]" />
        Set Market Parameters
      </h2>
      <p className="text-gray-500 mt-1">
        Choose an initial probability and liquidity level for your simulation.
      </p>

      {/* Probability Slider */}
      <div className="mt-8">
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center justify-between">
          <span>Initial Probability</span>
          <span className="text-[#14b8a6] font-semibold">{initialProb}%</span>
        </label>

        <div className="relative w-full">
          <input
            type="range"
            min={1}
            max={99}
            value={initialProb}
            onChange={(e) =>
              setDraft({
                ...draft,
                initialProbability: Number(e.target.value) / 100,
                currentProbability: Number(e.target.value) / 100,
              })
            }
            className="w-full h-2 rounded-full appearance-none cursor-pointer"
            style={{
              background: `linear-gradient(to right, #14b8a6 ${initialProb}%, #e5e7eb ${initialProb}%)`,
            }}
          />
        </div>

        <div className="flex justify-between text-xs text-gray-400 mt-1">
          <span>0%</span>
          <span>100%</span>
        </div>
      </div>

      {/* Liquidity Select */}
      <div className="mt-8 relative">
        <label className="block text-sm font-medium text-gray-700 mb-2 flex items-center gap-1">
          <FaWater className="text-[#14b8a6]" /> Simulated Liquidity (Volume)
        </label>

        <div className="relative">
          <select
            value={draft.volume}
            onChange={(e) => setDraft({ ...draft, volume: Number(e.target.value) })}
            className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gradient-to-br from-white to-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-[#14b8a6] transition cursor-pointer pr-10"
          >
            <option value={1000}>Low — $1,000</option>
            <option value={5000}>Medium — $5,000</option>
            <option value={20000}>High — $20,000</option>
          </select>

          {/* Custom dropdown icon */}
          <div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-gray-400">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="w-4 h-4"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 9l-7 7-7-7"
              />
            </svg>
          </div>
        </div>
      </div>

      {/* Navigation Buttons */}
      <div className="mt-10 flex justify-between items-center">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={prev}
          className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-gray-50 hover:shadow-md transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
        >
          <FaArrowLeft className="w-4 h-4" />
          Back
        </motion.button>

        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.97 }}
          onClick={next}
          className="inline-flex items-center gap-2 bg-[#14b8a6] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
        >
          Preview
          <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </div>

      {/* Custom Global Styles for Range Input */}
      <style jsx global>{`
        input[type='range'] {
          outline: none !important;
        }
        input[type='range']::-webkit-slider-thumb {
          appearance: none;
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #14b8a6;
          cursor: pointer;
          border: none;
          box-shadow: 0 0 0 3px white, 0 0 0 6px rgba(20, 184, 166, 0.3);
          transition: all 0.2s ease-in-out;
        }
        input[type='range']::-webkit-slider-thumb:hover {
          transform: scale(1.15);
          box-shadow: 0 0 0 3px white, 0 0 0 7px rgba(20, 184, 166, 0.4);
        }
        input[type='range']::-moz-range-thumb {
          height: 18px;
          width: 18px;
          border-radius: 50%;
          background: #14b8a6;
          border: none;
          cursor: pointer;
        }
      `}</style>
    </motion.div>
  );
}
