'use client';
import { Dispatch, SetStateAction } from 'react';
import { Market } from '../../../types/market';
import { motion } from 'framer-motion';
import { FaRegQuestionCircle, FaTags, FaCalendarAlt, FaArrowRight } from 'react-icons/fa';

export default function Step1DefineEvent({
  draft,
  setDraft,
  next,
}: {
  draft: Partial<Market>;
  setDraft: Dispatch<SetStateAction<Partial<Market>>>;
  next: () => void;
}) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <FaRegQuestionCircle className="text-[#14b8a6]" />
        Define Your Event
      </h2>
      <p className="text-gray-500 mt-1">
        Start with a clear yes/no question and set when it resolves.
      </p>

      {/* Event Question */}
      <div className="mt-6">
        <label className="block text-sm font-medium text-gray-700 mb-1">
          Event Question
        </label>
        <div className="relative">
          <input
            value={draft.title}
            onChange={(e) => setDraft({ ...draft, title: e.target.value })}
            placeholder="Will Bitcoin hit $200k by 2026?"
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gradient-to-br from-white to-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-[#14b8a6] transition placeholder:text-gray-400"
          />
        </div>
      </div>

      {/* Category & Date */}
      <div className="mt-6 grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Category */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <FaTags className="text-[#14b8a6]" /> Category
          </label>
          <div className="relative">
            <select
              value={draft.category}
              onChange={(e) => setDraft({ ...draft, category: e.target.value })}
              className="appearance-none w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gradient-to-br from-white to-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-[#14b8a6] transition cursor-pointer pr-10"
            >
              <option value="" disabled>
                Select a category
              </option>
              <option className="py-2">Crypto</option>
              <option className="py-2">Politics</option>
              <option className="py-2">Sports</option>
              <option className="py-2">Tech</option>
              <option className="py-2">Science</option>
              <option className="py-2">Culture</option>
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

        {/* Resolution Date */}
        <div>
          <label className="block text-sm font-medium text-gray-700 mb-1 flex items-center gap-1">
            <FaCalendarAlt className="text-[#14b8a6]" /> Resolution Date
          </label>
          <input
            type="date"
            value={draft.resolutionDate}
            onChange={(e) =>
              setDraft({ ...draft, resolutionDate: e.target.value })
            }
            className="w-full border border-gray-200 rounded-xl px-4 py-3 text-gray-800 bg-gradient-to-br from-white to-gray-50 shadow-sm focus:outline-none focus:ring-2 focus:ring-[#14b8a6] focus:border-[#14b8a6] transition cursor-pointer"
          />
        </div>
      </div>

      {/* Next Button */}
      <div className="mt-8 flex justify-end">
        <motion.button
          whileHover={{ scale: 1.03 }}
          whileTap={{ scale: 0.98 }}
          onClick={next}
          className="inline-flex items-center gap-2 bg-[#14b8a6] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all"
        >
          Next Step
          <FaArrowRight className="w-4 h-4" />
        </motion.button>
      </div>
    </motion.div>
  );
}
