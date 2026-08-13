import { instruments } from "@/lib/data";

function TickerItems() {
  return (
    <>
      {instruments.map((i) => (
        <div className="ticker-item" key={i.short}>
          <span className="sym">{i.short}</span> {i.current}{" "}
          <span className={i.up ? "up" : "down"}>{i.pct}</span>
        </div>
      ))}
    </>
  );
}

export default function Ticker() {
  return (
    <div className="ticker">
      <div className="ticker-track">
        <TickerItems />
        <TickerItems />
      </div>
    </div>
  );
}
