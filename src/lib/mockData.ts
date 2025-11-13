import { Market } from '../types/market';

export const sampleMarkets: Market[] = [
  {
    id: 'm-1',
    title: 'Will Kalshi hit an annualized volume of $1T by 2026?',
    category: 'Crypto',
    resolutionDate: '2026-12-31',
    initialProbability: 0.80,
    currentProbability: 0.80,
    volume: 15240,
    creator: 'anon',
    createdAt: Date.now(),
  },
  {
    id: 'm-2',
    title: 'Will Apple ship AR glasses in 2026',
    category: 'Tech',
    resolutionDate: '2026-12-31',
    initialProbability: 0.49,
    currentProbability: 0.49,
    volume: 8240,
    creator: 'anon',
    createdAt: Date.now(),
  },
];
