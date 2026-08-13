export default function Sparkline({ up }: { up: boolean }) {
  const points = up
    ? "0,24 15,20 30,22 45,14 60,16 75,8 90,10 105,4 120,6"
    : "0,6 15,9 30,7 45,13 60,11 75,17 90,15 105,21 120,19";
  const color = up ? "#1fdd8c" : "#ff5f6d";

  return (
    <svg
      viewBox="0 0 120 30"
      preserveAspectRatio="none"
      style={{ width: "100%", height: "100%" }}
    >
      <polyline points={points} fill="none" stroke={color} strokeWidth="1.6" />
    </svg>
  );
}
