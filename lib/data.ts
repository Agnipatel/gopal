export const TELEGRAM_URL = "https://t.me/tradewith_gopal";

export type Instrument = {
  name: string;
  short: string;
  current: string;
  change: string;
  pct: string;
  up: boolean;
  high: string;
  low: string;
  prev: string;
  disc: string;
};

export const instruments: Instrument[] = [
  {
    name: "XAUUSD (Gold)",
    short: "XAUUSD",
    current: "2,412.50",
    change: "+8.20 (0.34%)",
    pct: "+0.34%",
    up: true,
    high: "2,418.90",
    low: "2,401.30",
    prev: "2,404.30",
    disc: "Prices shown are delayed and for learning purposes — not a trade signal.",
  },
  {
    name: "BTC/USD (Bitcoin)",
    short: "BTC/USD",
    current: "68,240.00",
    change: "+760.00 (1.12%)",
    pct: "+1.12%",
    up: true,
    high: "68,410.00",
    low: "67,395.00",
    prev: "67,480.00",
    disc: "Prices shown are delayed and for learning purposes — not a trade signal.",
  },
  {
    name: "ETH/USD (Ethereum)",
    short: "ETH/USD",
    current: "3,215.40",
    change: "+25.10 (0.78%)",
    pct: "+0.78%",
    up: true,
    high: "3,228.90",
    low: "3,175.60",
    prev: "3,190.30",
    disc: "Prices shown are delayed and for learning purposes — not a trade signal.",
  },
  {
    name: "EUR/USD",
    short: "EUR/USD",
    current: "1.0865",
    change: "-0.0013 (-0.12%)",
    pct: "-0.12%",
    up: false,
    high: "1.0891",
    low: "1.0852",
    prev: "1.0878",
    disc: "Prices shown are delayed and for learning purposes — not a trade signal.",
  },
  {
    name: "Crypto Volatility Index",
    short: "CVI",
    current: "42.15",
    change: "+0.11 (0.26%)",
    pct: "+0.26%",
    up: true,
    high: "42.30",
    low: "41.85",
    prev: "42.04",
    disc: "Index shown for context only — not a trade signal.",
  },
];

export const badges: [string, string][] = [
  ["VIP", "Free to unlock"],
  ["DAILY", "Fresh lessons"],
  ["GOLD + CRYPTO", "Core focus"],
  ["FREE", "Always free to join"],
];

export const focus: [string, string][] = [
  ["XAUUSD", "Understand Gold price movements, market structure and key trading concepts."],
  ["BITCOIN", "Follow Bitcoin market movements and learn the concepts behind crypto price action."],
  ["CRYPTO", "Explore important crypto market concepts, trends and price behaviour."],
  ["DAY TRADING", "Learn practical concepts around short-term market analysis, trade planning and discipline."],
];

export const curriculum: [string, string][] = [
  ["Reading Gold Like a Pro", "What actually moves XAUUSD — the drivers behind every rally and pullback, broken down without the noise."],
  ["The Bitcoin & Altcoin Playbook", "How to track BTC dominance, spot key levels early, and make sense of why crypto swings the way it does."],
  ["The Day Trader's Discipline", "Entries, exits, stop-losses and position sizing — the unglamorous habits that separate consistent traders from the rest."],
  ["Charts, Minus the Confusion", "Candlesticks, price action, volume and indicators, explained the way Gopal wishes someone had explained them to him."],
  ["Plain English, Always", "No jargon-heavy lectures — every lesson is built for someone starting from scratch."],
];

export const insights: [string, string][] = [
  ["XAUUSD", "Gold market observations and important price levels."],
  ["BITCOIN", "Bitcoin market structure and price movement analysis."],
  ["CRYPTO", "Selected crypto market observations and educational breakdowns."],
  ["DAY TRADING", "Short-term market concepts and trading setups explained for educational purposes."],
];

export const whyJoin: [string, string, string][] = [
  ["01", "Focused Market Coverage", "Content focused on XAUUSD, Bitcoin, Crypto and Day Trading."],
  ["02", "Simple Explanations", "Trading concepts explained in an easy-to-understand format."],
  ["03", "Regular Market Insights", "Follow market observations and educational analysis regularly."],
  ["04", "Learn From Real Market Conditions", "Understand how trading concepts are applied while observing actual market movements."],
  ["05", "Trading Education", "Improve your understanding of technical analysis, market structure and trading discipline."],
];

export const stats: [string, string][] = [
  ["4 Years", "In the markets, learning what works"],
  ["1,00,000+", "Traders in the community"],
  ["1:2", "Risk-to-reward, taught from day one"],
  ["100%", "Educational, always"],
];

export const dayPlan: [string, string][] = [
  ["Before the Open", "Checking global cues, the dollar index and overnight crypto action."],
  ["London–New York Overlap", "Where XAUUSD volatility usually shows up first."],
  ["Crypto Watch", "Bitcoin dominance, key levels and unusual volume."],
  ["After the Close", "Reviewing charts and logging every trade honestly."],
];
