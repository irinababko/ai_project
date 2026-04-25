// Reusable atoms for the Proximity Ranking marketing site UI kit.
// Loaded as Babel JSX. Exposes components on window so other scripts can use them.

const { useState } = React;

function Logo({ size = "default" }) {
  const fontSize = size === "small" ? 18 : 22;
  return (
    <a className="logo" href="#" style={{ fontSize, textDecoration: "none" }}>
      <span className="logo-mark"></span>
      Proximity
    </a>
  );
}

function EyebrowPill({ children, withDot = true }) {
  return (
    <span className="eyebrow-pill">
      {withDot && <span className="blue-dot"></span>}
      {children}
    </span>
  );
}

function PrimaryCTA({ children = "book a call", framed = false, onClick }) {
  if (framed) {
    return (
      <button className="cta-frame" onClick={onClick}>
        <span>{children}</span>
      </button>
    );
  }
  return <button className="cta-primary" onClick={onClick}>{children}</button>;
}

function SecondaryCTA({ children, onClick }) {
  return <button className="cta-secondary" onClick={onClick}>{children}</button>;
}

function AIChip({ name, color1, color2, glyph }) {
  return (
    <span className="ai-chip">
      <span
        className="ai-dot"
        style={{ background: `linear-gradient(135deg, ${color1}, ${color2})` }}
      >{glyph}</span>
      {name}
    </span>
  );
}

const AI_PLATFORMS = [
  { name: "Claude",     color1: "#e8a07a", color2: "#c45a36", glyph: "A" },
  { name: "ChatGPT",    color1: "#1a1a1a", color2: "#000",    glyph: "a" },
  { name: "Perplexity", color1: "#0d2c2c", color2: "#000",    glyph: "P" },
  { name: "Gemini",     color1: "#4285f4", color2: "#1a73e8", glyph: "G" },
  { name: "Grok",       color1: "#1a1a1a", color2: "#000",    glyph: "𝕏" },
  { name: "Copilot",    color1: "#36c5f0", color2: "#0078d4", glyph: "▦" },
];

function FlashLight() {
  return (
    <>
      <div className="flash left"></div>
      <div className="flash right"></div>
    </>
  );
}

function HexagonTile({ icon }) {
  return (
    <div style={{
      width: 55, height: 48, borderRadius: 12,
      background: "rgba(255,255,255,0.04)",
      border: "1px solid rgba(255,255,255,0.08)",
      backdropFilter: "blur(24px)",
      display: "flex", alignItems: "center", justifyContent: "center",
      color: "#fff", fontSize: 22,
    }}>{icon}</div>
  );
}

Object.assign(window, {
  Logo, EyebrowPill, PrimaryCTA, SecondaryCTA,
  AIChip, AI_PLATFORMS, FlashLight, HexagonTile,
});
