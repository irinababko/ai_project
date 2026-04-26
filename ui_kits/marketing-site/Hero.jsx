// Top navbar + Hero (the headliner with orbit visual).

function Navbar() {
  return (
    <div style={{ display: "flex", justifyContent: "center", padding: "32px 24px 0", position: "relative", zIndex: 5 }}>
      <nav className="navbar" style={{ width: "min(1026px, 100%)" }}>
        <Logo />
        <div className="navbar-links">
          <a href="#services">Services</a>
          <a href="#how">How It Works</a>
          <a href="#why">Why Us</a>
          <a href="#faq">FAQ</a>
        </div>
        <PrimaryCTA>book a call</PrimaryCTA>
      </nav>
    </div>
  );
}

/* ---------- Orbit visual: globe + concentric rings + AI chips + stat widgets ---------- */
function HeroOrbit() {
  return (
    <div style={{
      position: "relative",
      width: 580, height: 580,
      margin: "40px auto 0",
    }}>
      {/* concentric rings */}
      <div style={{
        position: "absolute", inset: "0",
        borderRadius: "50%", border: "0.8px solid rgba(255,255,255,0.5)",
      }}/>
      <div style={{
        position: "absolute", left: 80, top: 80, right: 80, bottom: 80,
        borderRadius: "50%", border: "0.8px solid rgba(255,255,255,0.5)",
      }}/>
      {/* central globe */}
      <div style={{
        position: "absolute", left: 70, top: 70, width: 440, height: 440,
        borderRadius: "50%",
        background: "url('../../assets/images/orb-globe.jpg') center / cover no-repeat",
        opacity: 0.76,
      }}/>
      {/* violet glow behind */}
      <div style={{
        position: "absolute", left: 175, top: 195, width: 230, height: 220,
        borderRadius: "50%", background: "rgb(78,47,255)", opacity: 0.5,
        filter: "blur(20px)",
      }}/>

      {/* Rotating orbit ring — chips orbit, counter-rotation keeps labels upright */}
      <div className="orbit-ring">
        <div style={{ position: "absolute", left: "50%", top: -22, transform: "translateX(-50%)" }}>
          <AIChip {...AI_PLATFORMS[3]} />
        </div>
        <div style={{ position: "absolute", right: -10, top: 80 }}>
          <AIChip {...AI_PLATFORMS[2]} />
        </div>
        <div style={{ position: "absolute", left: -32, top: 162 }}>
          <AIChip {...AI_PLATFORMS[0]} />
        </div>
        <div style={{ position: "absolute", left: -18, bottom: 110 }}>
          <AIChip {...AI_PLATFORMS[5]} />
        </div>
        <div style={{ position: "absolute", right: 18, bottom: 130 }}>
          <AIChip {...AI_PLATFORMS[1]} />
        </div>
        <div style={{ position: "absolute", right: 230, bottom: 60 }}>
          <AIChip {...AI_PLATFORMS[4]} />
        </div>
      </div>

      {/* Inner stat panels — subtle float, positioned outside the rotating ring */}
      <div className="float-card" style={{ left: 210, top: 130 }}>
        <StatPanelLarge />
      </div>
      <div className="float-card float-card--2" style={{ left: 100, top: 280 }}>
        <StatPanelTrend />
      </div>
      <div className="float-card float-card--3" style={{ left: 175, top: 410 }}>
        <StatPanelLeads />
      </div>

      {/* "Visible on" caption */}
      <div style={{
        position: "absolute", left: "50%", bottom: 145, transform: "translateX(-50%)",
        font: "500 17.7px/1 var(--font-display)", color: "#fff", letterSpacing: "0.02em",
      }}>Visible on</div>
    </div>
  );
}

function StatPanelLarge({ style }) {
  return (
    <div className="glass-card" style={{
      width: 270, height: 148, borderRadius: 20, padding: 18, ...style,
    }}>
      <div style={{ font: "500 15px/1 var(--font-data)", color: "#fff" }}>Local Ranking Growth</div>
      <div style={{ font: "500 11px/1 var(--font-data)", color: "rgb(200,177,248)", marginTop: 8 }}>Month</div>
      <svg width="220" height="60" viewBox="0 0 220 60" style={{ marginTop: 18 }}>
        <path d="M 0 50 Q 40 30 70 38 T 130 22 T 220 12" fill="none" stroke="#fff" strokeWidth="0.7" />
        <circle cx="190" cy="14" r="6" fill="#5e42fc" stroke="#fff" strokeWidth="2"/>
      </svg>
      <div style={{
        position: "absolute", right: 14, top: 14,
        font: "500 13px/1 var(--font-data)", color: "#fff",
      }}>68.5%</div>
    </div>
  );
}

function StatPanelTrend({ style }) {
  return (
    <div className="glass-card" style={{
      width: 187, height: 187, borderRadius: 20, padding: 14, overflow: "hidden", ...style,
    }}>
      <div style={{ font: "400 11px/1.2 var(--font-data)", color: "#fff" }}>Search Visibility</div>
      <div style={{ font: "700 24px/1 var(--font-display)", color: "rgb(255,255,253)", letterSpacing: "-0.02em", marginTop: 6 }}>+112.10%</div>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 0, height: 70,
        background: "linear-gradient(180deg, rgb(104,79,244) 0%, rgb(65,39,216) 100%)",
        borderRadius: "0 0 20px 20px",
      }}/>
      <div style={{
        position: "absolute", left: 14, right: 14, bottom: 14,
        display: "flex", justifyContent: "space-between",
        font: "400 10px/1 var(--font-data)", color: "#fff", letterSpacing: "-0.04em",
      }}>
        <span>1 Aug</span><span>2 Aug</span><span>3 Aug</span>
      </div>
      <div style={{
        position: "absolute", left: 0, right: 0, bottom: 70, height: 4, background: "#fff",
      }}/>
      <div style={{
        position: "absolute", left: "55%", bottom: 60, width: 9, height: 9, borderRadius: "50%",
        background: "rgb(78,47,255)", border: "2.7px solid #fff",
      }}/>
      <div style={{
        position: "absolute", left: "50%", bottom: 78, transform: "translateX(-50%)",
        font: "400 11px/1 var(--font-data)", color: "#fff",
      }}>101.04</div>
    </div>
  );
}

function StatPanelLeads({ style }) {
  return (
    <div className="glass-card" style={{
      width: 270, height: 126, borderRadius: 20, padding: 18, ...style,
    }}>
      <div style={{ font: "500 14px/1.2 var(--font-display)", color: "#fff" }}>Qualified Leads</div>
      <div style={{ font: "400 13px/1.4 var(--font-body)", color: "rgba(255,255,255,0.6)", marginTop: 6 }}>
        Growth in calls and enquiries from search
      </div>
      <div style={{
        marginTop: 14, height: 18, background: "#fff", borderRadius: 9, overflow: "hidden",
      }}>
        <div style={{ width: "70%", height: "100%", background: "rgb(90,65,234)", borderRadius: 9 }}/>
      </div>
      <div style={{
        position: "absolute", right: 16, top: 14,
        font: "700 18px/1 var(--font-display)", color: "#fff",
      }}>+80.9%</div>
    </div>
  );
}

function Hero() {
  return (
    <section className="relative" style={{ paddingTop: 72, paddingBottom: 80 }}>
      <FlashLight />
      <div className="bg-grid"></div>

      <div className="relative z1" style={{ maxWidth: 1100, margin: "0 auto", padding: "0 24px", textAlign: "center" }}>
        <EyebrowPill>SEO + GEO + AEO — One System</EyebrowPill>
        <h1 style={{ marginTop: 28, marginBottom: 0 }}>
          Rank Where Customers Ask&nbsp;Google,<br/>Maps, and AI&nbsp;answers
        </h1>
        <p className="lead" style={{ margin: "26px auto 36px", maxWidth: 620 }}>
          Get a visibility audit and a practical plan: what to publish, what to fix,
          and where to build authority so your brand becomes the recommended option.
        </p>
        <div style={{ display: "inline-flex", gap: 18 }}>
          <PrimaryCTA framed>book a call</PrimaryCTA>
          <SecondaryCTA>Get a Visibility Audit</SecondaryCTA>
        </div>
        <HeroOrbit />
        <div style={{
          font: "500 18px/1 var(--font-display)", color: "#fff",
          marginTop: 24,
        }}>⚡ Limited free audits available this month</div>
      </div>

      {/* off-canvas blue glow */}
      <div className="glow" style={{ left: -200, top: 1000, width: 720, height: 320, background: "rgb(10,92,255)", opacity: 0.5 }}></div>
    </section>
  );
}

Object.assign(window, { Navbar, Hero, HeroOrbit, StatPanelLarge, StatPanelTrend, StatPanelLeads });
