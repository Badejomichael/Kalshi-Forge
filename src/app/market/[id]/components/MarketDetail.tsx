'use client';
import { Market } from '../../../../types/market';
import { useEffect, useState } from 'react';
import { nextPrice } from '../../../../lib/simulatePrice';
import { LineChart, Line, XAxis, YAxis, Tooltip, ResponsiveContainer } from 'recharts';

export default function MarketDetail({ market }: { market: Market }) {
  const [prob, setProb] = useState(market.currentProbability);
  const [series, setSeries] = useState<{ t: number; p: number }[]>(
    Array.from({ length: 16 }, (_, i) => ({ t: i, p: market.currentProbability })),
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

  return (
    <div>
      <div className="card">
        <div className="flex justify-between items-start">
          <div>
            <h1 className="text-2xl font-semibold">{market.title}</h1>
            <p className="text-sm text-gray-500 mt-1">{market.category} • Resolution {market.resolutionDate}</p>
          </div>
          <div className="text-3xl font-bold">{Math.round(prob * 100)}%</div>
        </div>

        <div style={{ width: '100%', height: 260 }} className="mt-6">
          <ResponsiveContainer>
            <LineChart data={series.map((d) => ({ time: d.t, prob: Math.round(d.p * 100) }))}>
              <XAxis dataKey="time" hide />
              <YAxis domain={[0, 100]} tickFormatter={(v) => `${v}%`} />
              <Tooltip formatter={(v: any) => `${v}%`} />
              <Line type="monotone" dataKey="prob" stroke="#14b8a6" strokeWidth={2} dot={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>

        <div className="mt-6 flex gap-3">
          <button className="flex-1 px-4 py-3 rounded-lg border text-left">
            <div className="text-sm text-gray-500">Buy Yes</div>
            <div className="text-lg font-semibold text-[#14b8a6] mt-1">{Math.round(prob * 100)}%</div>
          </button>
          <button className="flex-1 px-4 py-3 rounded-lg border text-left">
            <div className="text-sm text-gray-500">Buy No</div>
            <div className="text-lg font-semibold text-red-500 mt-1">{100 - Math.round(prob * 100)}%</div>
          </button>
        </div>
      </div>

      <div className="mt-6 card">
        <h3 className="font-semibold">About this simulation</h3>
        <p className="text-sm text-gray-600 mt-2">
          This is a simulated market created in Kalshi Forge. Prices are for illustrative purposes only.
        </p>
      </div>
    </div>
  );
}
