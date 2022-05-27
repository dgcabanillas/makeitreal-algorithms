function maxProfit(prices: number[]): number {
  let buyIn = prices[0];
  let sellIn = prices[0];
  let profit = 0;
  for(let i=1; i<prices.length; i++ ) {
    if( buyIn > prices[i] ) {
      profit = sellIn - buyIn > profit ? sellIn - buyIn : profit;
      buyIn = prices[i];
      sellIn = prices[i];
    }
    if( sellIn < prices[i] && prices[i] > buyIn ) {
      sellIn = prices[i];
    }
  }

  profit = sellIn - buyIn > profit ? sellIn - buyIn : profit;
  return profit;
};

const test = [
  { prices: [7,1,5,3,6,4], output: 5 },
  { prices: [7,6,4,3,1], output: 0 },
] 

