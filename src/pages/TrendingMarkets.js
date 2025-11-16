import React from "react";

export default function TrendingMarkets() {
  return (
    <div className="doc-page">
      <h1>Trending Markets</h1>
      <p>Explore the markets with the most activity and highest trading volume.</p>

      <section>
        <h2>Market Overview</h2>
        <p>
          Each market has a question, YES/NO outcome, total volume, and
          resolution timestamp. Here’s a quick guide:
        </p>
        <ul>
          <li><strong>Question:</strong> What the market predicts</li>
          <li><strong>Volume:</strong> Total tokens traded</li>
          <li><strong>Resolve:</strong> When the market closes</li>
          <li><strong>Trend:</strong> Percentage of YES vs NO</li>
        </ul>
      </section>

      <section>
        <h2>Live Market Stats</h2>
        <p>Markets are updated in real-time. Users can track their positions, watchlists, and trading activity.</p>
        <img src="/placeholder-market.png" alt="Market example" style={{width: '100%', borderRadius: '8px'}}/>
      </section>
    </div>
  );
}
