'use client';
import { Dispatch, SetStateAction, useEffect, useState } from 'react';
import { Market } from '../../../types/market';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';
import { nextPrice } from '../../../lib/simulatePrice';
import { motion } from 'framer-motion';
import { FaChartArea, FaArrowLeft, FaHammer } from 'react-icons/fa';

export default function Step3Preview({
  draft,
  setDraft,
  prev,
  onCreate,
}: {
  draft: Partial<Market>;
  setDraft: Dispatch<SetStateAction<Partial<Market>>>;
  prev: () => void;
  onCreate: () => void;
}) {
  const [data, setData] = useState<{ t: number; p: number }[]>([]);

  useEffect(() => {
    const initial = Math.round((draft.initialProbability ?? 0.5) * 100) / 100;
    let series = Array.from({ length: 12 }, (_, i) => ({ t: i, p: initial }));
    setData(series);

    const id = setInterval(() => {
      series = series.slice(1);
      const last = series[series.length - 1].p;
      const np = nextPrice(last, 0.03);
      series.push({ t: series[series.length - 1].t + 1, p: np });
      setData([...series]);
      setDraft((d) => ({ ...d, currentProbability: np }));
    }, 1200);

    return () => clearInterval(id);
  }, []);

  const chartData = data.map((d) => ({ time: d.t, prob: Math.round(d.p * 100) }));

  return (
    <motion.div
      initial={{ opacity: 0, y: 15 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.3 }}
      className="max-w-2xl mx-auto"
    >
      <h2 className="text-2xl font-bold text-gray-900 flex items-center gap-2">
        <FaChartArea className="text-[#14b8a6]" />
        Visualization Preview
      </h2>
      <p className="text-gray-500 mt-1">
        A live preview of your market’s simulated price movement.
      </p>

      {/* Chart */}
      <div className="mt-6 bg-white border border-gray-200 rounded-2xl shadow-sm p-4">
        <div style={{ width: '100%', height: 220 }}>
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <XAxis dataKey="time" hide />
              <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip
                formatter={(v: any) => `${v}%`}
                contentStyle={{
                  backgroundColor: 'white',
                  borderRadius: '8px',
                  border: '1px solid #14b8a6',
                }}
              />
              <Line
                type="monotone"
                dataKey="prob"
                stroke="#14b8a6"
                strokeWidth={2.5}
                dot={false}
              />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Probability + Actions */}
      <div className="mt-8 flex items-center justify-between probabilty-cta">
        <div>
          <div className="text-sm text-gray-500">
            Current simulated probability
          </div>
          <div className="text-3xl font-bold text-gray-900">
            {Math.round((draft.currentProbability ?? 0.5) * 100)}%
          </div>
        </div>

        <div className="flex items-center gap-3">
          <button
            onClick={prev}
            className="inline-flex items-center gap-2 border border-gray-200 bg-white text-gray-700 font-medium px-6 py-3 rounded-xl shadow-sm hover:bg-gray-50 transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          >
            <FaArrowLeft className="w-4 h-4" />
            Back
          </button>

          <button
            onClick={onCreate}
            className="inline-flex items-center gap-2 bg-[#14b8a6] text-white font-medium px-6 py-3 rounded-xl shadow-md hover:shadow-lg hover:opacity-95 transition-all focus:outline-none focus:ring-2 focus:ring-[#14b8a6]"
          >
            <FaHammer className="w-4 h-4" />
            Forge Market
          </button>
        </div>
      </div>

      {/* Remove any default blue outlines */}
      <style jsx global>{`
        input,
        select,
        button {
          outline: none !important;
          box-shadow: none !important;
        }
        input:focus,
        select:focus,
        button:focus {
          border-color: #14b8a6 !important;
        }
      `}</style>
    </motion.div>
  );
}

