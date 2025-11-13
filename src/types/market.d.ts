export type Market = {
  id: string;
  title: string;
  category: string;
  resolutionDate: string;
  initialProbability: number; // 0..1
  currentProbability: number; // 0..1
  volume: number;
  creator?: string;
  createdAt: number;
};
