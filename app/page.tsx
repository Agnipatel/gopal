import Ticker from "./components/Ticker";
import Clock from "./components/Clock";
import Sparkline from "./components/Sparkline";
import {
  TELEGRAM_URL,
  instruments,
  badges,
  focus,
  curriculum,
  insights,
  whyJoin,
  stats,
  dayPlan,
} from "@/lib/data";

export default function Home() {
  return (
    <>
      <div className="grid-bg" />

      {/* ================= NAV ================= */}
      <header className="nav">
        <div className="wrap nav-inner">
          <div className="brand">
            <div className="avatar" style={{ width: 32, height: 32, fontSize: 13, marginRight: 4 }}>GS</div>
            <div style={{ display: "flex", flexDirection: "column" }}>
              GOPAL SHINDE
              <small>MARKET EDUCATOR</small>
            </div>
          </div>
          <nav className="nav-links">
            <a href="#markets">Markets</a>
            <a href="#learn">What You&apos;ll Learn</a>
            <a href="#why">Why Join</a>
            <a href="#day">Trading Day</a>
          </nav>
          <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            Join on Telegram
          </a>
        </div>
      </header>

      {/* ================= TICKER TAPE ================= */}
      <Ticker />

      {/* ================= HERO ================= */}
      <section className="hero" style={{ borderTop: "none", paddingTop: 64 }}>
        <div className="wrap hero-grid">
          <div>
            <div className="eyebrow">
              GOPAL SHINDE · MARKET EDUCATOR
            </div>
            <h1>
              Learn XAUUSD, Crypto & <span className="accent">Bitcoin</span> Trading With
              Practical Market Insights
            </h1>
            <p className="sub">
              Get daily market insights, trading concepts and educational breakdowns focused
              on XAUUSD, Crypto, Bitcoin and Day Trading — all through one Telegram channel.
            </p>
            <p className="offer">◆ 1,00,000+ TRADERS ALREADY ON TELEGRAM</p>
            <div className="hero-cta">
              <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
                Follow on Telegram
                <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4">
                  <path d="M5 12h14M13 6l6 6-6 6" />
                </svg>
              </a>
            </div>
            <p className="cta-note">No cost, no upsell — just daily setups on gold, crypto and forex.</p>
          </div>

          <div className="hero-visual">
            <div className="hv-top">
              <div className="hv-id">
                <div className="avatar">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                    <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                    <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                  </svg>
                </div>
                <div>
                  <div className="name">Gopal Shinde</div>
                  <div className="handle">@tradewith_gopal · 71.6K followers</div>
                </div>
              </div>
            </div>
            <div className="chart-area">
              <svg viewBox="0 0 400 150" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chartFill" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="#1fdd8c" stopOpacity="0.35" />
                    <stop offset="100%" stopColor="#1fdd8c" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <polyline
                  points="0,110 30,100 60,108 90,80 120,90 150,60 180,72 210,48 240,58 270,34 300,44 330,20 360,30 400,10"
                  fill="none"
                  stroke="#1fdd8c"
                  strokeWidth="2.2"
                />
                <polygon
                  points="0,110 30,100 60,108 90,80 120,90 150,60 180,72 210,48 240,58 270,34 300,44 330,20 360,30 400,10 400,150 0,150"
                  fill="url(#chartFill)"
                />
              </svg>
            </div>
            <div className="hv-stats">
              <div className="hv-stat">
                <div className="lbl">XAUUSD</div>
                <div className="val" style={{ color: "var(--green)" }}>+0.34%</div>
              </div>
              <div className="hv-stat">
                <div className="lbl">BTC/USD</div>
                <div className="val" style={{ color: "var(--green)" }}>+1.12%</div>
              </div>
              <div className="hv-stat">
                <div className="lbl">EXPERIENCE</div>
                <div className="val">4 Yrs</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ================= MARKET WATCH ================= */}
      <section id="markets">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">MARKET WATCH SNAPSHOT</span>
            <h2>Tracking the pairs that matter, in real time</h2>
            <p>
              Delayed pricing shown for learning purposes only — not a trade signal. <Clock />
            </p>
          </div>
          <div className="watch-grid">
            {instruments.map((i) => (
              <div className="watch-card" key={i.short}>
                <div className="inst">{i.short}</div>
                <div className={`chg ${i.up ? "up" : "down"}`}>{i.pct}</div>
                <div className="spark">
                  <Sparkline up={i.up} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= INSTRUMENT WIDGETS ================= */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">INSTRUMENT DETAIL</span>
            <h2>Every instrument, broken down</h2>
            <p>
              Each instrument in the Market Watch Snapshot gets its own detail view, matching
              the figures shown above.
            </p>
          </div>
          <div className="instrument-grid">
            {instruments.map((i) => (
              <div className="instr-card" key={i.name}>
                <div className="ihead">
                  <span className="iname">{i.name}</span>
                  <span className={`ichg ${i.up ? "up" : "down"}`}>{i.change}</span>
                </div>
                <div className="ibig">{i.current}</div>
                <div className="imetrics">
                  <div>
                    <div className="l">HIGH</div>
                    <div className="v">{i.high}</div>
                  </div>
                  <div>
                    <div className="l">LOW</div>
                    <div className="v">{i.low}</div>
                  </div>
                  <div>
                    <div className="l">PREV CLOSE</div>
                    <div className="v">{i.prev}</div>
                  </div>
                </div>
                <div className="idisc">{i.disc}</div>
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn btn-gold" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              See Full Breakdowns on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ================= FEATURE BADGES ================= */}
      <section>
        <div className="wrap">
          <div className="badge-strip">
            {badges.map(([label, desc]) => (
              <div className="fbadge" key={label}>
                <span className="ic" />
                <b>{label}</b> — {desc}
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Unlock Free Access
            </a>
          </div>
        </div>
      </section>

      {/* ================= MARKET FOCUS ================= */}
      <section>
        <div className="wrap">
          <div className="section-head center">
            <span className="kicker">FOCUS ON THE MARKETS YOU TRADE</span>
            <h2>Understand the markets with simple, practical, easy-to-follow education</h2>
          </div>
          <div className="focus-grid">
            {focus.map(([tag, desc]) => (
              <div className="focus-card" key={tag}>
                <div className="tag">{tag}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Explore These Markets on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHAT YOU'LL LEARN ================= */}
      <section id="learn">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">CURRICULUM</span>
            <h2>Here&apos;s what you&apos;ll actually walk away knowing</h2>
          </div>
          <div className="curric-list">
            {curriculum.map(([title, desc], idx) => (
              <div className="curric-item" key={title}>
                <div className="num">{String(idx + 1).padStart(2, "0")}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= DAILY INSIGHTS ================= */}
      <section>
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">GET DAILY MARKET INSIGHTS</span>
            <h2>Stay updated on the instruments that matter to you</h2>
          </div>
          <div className="insight-grid">
            {insights.map(([tag, desc]) => (
              <div className="insight-card" key={tag}>
                <div className="tag">{tag}</div>
                <p>{desc}</p>
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Follow on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ================= WHY JOIN ================= */}
      <section id="why">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">WHY FOLLOW ON TELEGRAM</span>
            <h2>Five reasons traders stick around</h2>
          </div>
          <div className="why-grid">
            {whyJoin.map(([num, title, desc]) => (
              <div className="why-item" key={num}>
                <div className="num">{num}</div>
                <div>
                  <h3>{title}</h3>
                  <p>{desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn btn-gold" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              See What You&apos;re Missing — Follow Now
            </a>
          </div>
        </div>
      </section>

      {/* ================= STATS STRIP ================= */}
      <section>
        <div className="wrap">
          <div className="stats-strip">
            {stats.map(([num, lbl]) => (
              <div className="stat" key={num}>
                <div className="num">{num}</div>
                <div className="lbl">{lbl.toUpperCase()}</div>
              </div>
            ))}
          </div>
          <div className="section-cta center">
            <a className="btn" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Be Part of the Community
            </a>
          </div>
        </div>
      </section>


      {/* ================= DAY TRADING PLAN ================= */}
      <section id="day">
        <div className="wrap">
          <div className="section-head">
            <span className="kicker">INSIDE THE DAY</span>
            <h2>A look inside Gopal&apos;s trading day</h2>
          </div>
          <div className="timeline">
            {dayPlan.map(([title, desc]) => (
              <div className="tl-item" key={title}>
                <h4>{title}</h4>
                <p>{desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ================= CLOSING CTA ================= */}
      <section>
        <div className="wrap">
          <div className="closing">
            <h2>Join 1,00,000+ Traders on Telegram</h2>
            <p>No cost, no upsell — just daily setups on gold, crypto and forex.</p>
            <a className="btn btn-gold" href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
              Follow on Telegram
            </a>
          </div>
        </div>
      </section>

      {/* ================= DISCLAIMER ================= */}
      <section style={{ paddingTop: 0, paddingBottom: 56, borderTop: "none" }}>
        <div className="wrap">
          <div className="disclaimer">
            <strong style={{ color: "var(--text-dim)" }}>
              Disclaimer (draft — pending client/legal confirmation):
            </strong>{" "}
            For educational purposes only. This is not investment or trading advice. Trading in
            forex, gold (XAUUSD) and cryptocurrency carries a high level of risk and may not be
            suitable for everyone. Past performance does not guarantee future results.
          </div>
        </div>
      </section>

      {/* ================= FOOTER ================= */}
      <footer>
        <div className="wrap footer-inner">
          <span>© 2026 Gopal Shinde · Trading education you can actually understand</span>
          <a href={TELEGRAM_URL} target="_blank" rel="noopener noreferrer">
            t.me/tradewith_gopal
          </a>
        </div>
      </footer>
    </>
  );
}
