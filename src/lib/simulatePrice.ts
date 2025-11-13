export function nextPrice(current: number, volatility = 0.02) {
  const delta = (Math.random() - 0.5) * volatility * 2;
  let next = current + delta;
  if (next < 0.01) next = 0.01;
  if (next > 0.99) next = 0.99;
  return Math.round(next * 100) / 100;
}
