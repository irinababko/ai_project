
// Services + Why Us + How It Works + Our Work + Testimonials + FAQ + Footer

/* ---------- Services ---------- */
const SERVICES = [
  {
    icon: "⌖",
    title: "Local SEO + Map Pack Domination",
    a: "Outrank competitors in local searches that drive calls and bookings.",
    b: "Improve map pack visibility and local rankings with proximity signals and location-relevant content.",
    c: "AI-ready content designed to win citations — how-tos, comparisons, listicles, and local service pages.",
  },
  {
    icon: "✦",
    title: "AI-Generative Content Strategy",
    a: "Structure content so it's easy to cite in AI assistants, overviews, and conversational search.",
    b: "Improve map pack visibility and local rankings with proximity signals and location-relevant content.",
    c: "AI-ready content designed to win citations — how-tos, comparisons, listicles, and local service pages.",
  },
  {
    icon: "◬",
    title: "Technical SEO + LLM Visibility Tracking",
    a: "Fix crawlability, indexation, speed, internal linking, and structured data for search engines and AI crawlers.",
    b: "Earn relevant backlinks and mentions that improve credibility for traditional rankings and AI trust signals.",
    c: "Track how your brand appears across ChatGPT, Perplexity, Gemini, Claude, Grok, Copilot, and AI Overviews.",
  },
];

function ServiceRow({ s }) {
  return (
    <div className="glass-card" style={{
      padding: "32px 36px", borderRadius: 24,
      display: "grid", gridTemplateColumns: "minmax(280px,1fr) 2fr 2fr 2fr", gap: 32,
      alignItems: "flex-start",
    }}>
      <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
        <HexagonTile icon={s.icon} />
        <h3 style={{ margin: 0, fontSize: 24, lineHeight: 1.15 }}>{s.title}</h3>
      </div>
      <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 15, lineHeight: 1.5 }}>{s.a}</p>
      <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 15, lineHeight: 1.5 }}>{s.b}</p>
      <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 15, lineHeight: 1.5 }}>{s.c}</p>
    </div>
  );
}

function ServicesSection() {
  return (
    <section id="services" style={{ padding: "100px 24px", position: "relative" }}>
      <div className="glow" style={{ left: -300, top: 200, width: 720, height: 320, background: "rgb(10,92,255)", opacity: 0.5 }}></div>
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="section-head" style={{ marginBottom: 60 }}>
          <EyebrowPill>Services</EyebrowPill>
          <h2>Everything you need to dominate search</h2>
          <p className="lead">One strategy that supports both traditional rankings and AI-driven discovery.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 20 }}>
          {SERVICES.map((s, i) => <ServiceRow key={i} s={s}/>)}
        </div>
      </div>
    </section>
  );
}

/* ---------- How It Works ---------- */
const STEPS = [
  {
    n: "Step 01", icon: "▶",
    title: "Tell us about your business",
    short: "We run a deep visibility audit so the plan is grounded in your starting point — not a template.",
    long: "Site, profiles, content, AI mentions, technical health, and competitor positioning are all reviewed before we write a single line of plan.",
  },
  {
    n: "Step 02", icon: "◐",
    title: "Get a Clear Plan",
    short: "You get a roadmap plus the work completed for you.",
    long: "We outline what to fix, what to build, and what to improve — then implement site fixes, content creation, profile updates, and ongoing tracking so progress is visible week to week.",
  },
  {
    n: "Step 03", icon: "□",
    title: "Grow Visibility",
    short: "Become easier to find, easier to trust, and more likely to be recommended.",
    long: "Strong technical foundations, content that answers real questions, and consistent local presence earn you better rankings in Google and stronger visibility in AI answers.",
  },
];

function StepRow({ step, last }) {
  return (
    <div style={{ display: "grid", gridTemplateColumns: "84px 1fr", gap: 40 }}>
      <div style={{ display: "flex", flexDirection: "column", alignItems: "center" }}>
        <div style={{
          width: 84, height: 84, borderRadius: 16,
          background: "linear-gradient(180deg, rgba(40,49,74,0) 0%, rgb(85,96,117) 75%)",
          border: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(20px)",
          display: "flex", alignItems: "center", justifyContent: "center",
          color: "#fff", fontSize: 24,
        }}>{step.icon}</div>
        {!last && <div style={{ width: 2, flex: 1, background: "#fff", marginTop: 8, opacity: 0.6 }}></div>}
      </div>
      <div style={{ paddingBottom: 80 }}>
        <EyebrowPill>{step.n}</EyebrowPill>
        <h3 style={{ margin: "16px 0 8px", fontSize: 36, letterSpacing: "-0.02em", lineHeight: 1.05 }}>{step.title}</h3>
        <p style={{ margin: "0 0 12px", fontSize: 19, color: "var(--fg-2)" }}>{step.short}</p>
        <p style={{ margin: 0, fontSize: 16, color: "var(--fg-3)", maxWidth: 700, lineHeight: 1.55 }}>{step.long}</p>
      </div>
    </div>
  );
}

function HowItWorks() {
  return (
    <section id="how" style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1100, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="section-head" style={{ marginBottom: 80 }}>
          <EyebrowPill>How It Works</EyebrowPill>
          <h2>Three steps to measurable growth</h2>
        </div>
        {STEPS.map((s, i) => <StepRow key={i} step={s} last={i === STEPS.length - 1} />)}
      </div>
    </section>
  );
}

/* ---------- Why Us (icon grid) ---------- */
const WHY = [
  { icon: "⌖", title: "Visibility across Google + AI", body: "We optimise for the full search journey — map pack, organic results, and AI recommendations." },
  { icon: "◐", title: "Strategy + Implementation", body: "You get a plan, plus a team to execute it. Not advice-only." },
  { icon: "▣", title: "Local-First SEO", body: "Ranking where you actually do business, not vanity keywords outside your service area." },
  { icon: "▤", title: "Reporting You Can Understand", body: "Rankings, local visibility, and measurable improvements — tracked consistently." },
  { icon: "✦", title: "High-Intent Customers", body: "We target searches and prompts that lead to calls, bookings, and quotes." },
  { icon: "◇", title: "Better Trust Signals", body: "Consistent listings, stronger reviews, and credible content for Google and AI." },
  { icon: "◈", title: "Proximity AI SEO Engine", body: "SEO + GEO + AEO combined to improve classic rankings and AI citation likelihood." },
  { icon: "⊙", title: "Ongoing Tracking", body: "We monitor movement, spot opportunities, and make continuous improvements from real data." },
];

function WhyCard({ w }) {
  return (
    <div className="glass-card" style={{ padding: 28, borderRadius: 24, height: "100%" }}>
      <HexagonTile icon={w.icon} />
      <h3 style={{ margin: "20px 0 10px", fontSize: 22, lineHeight: 1.2 }}>{w.title}</h3>
      <p style={{ margin: 0, color: "var(--fg-3)", fontSize: 15, lineHeight: 1.5 }}>{w.body}</p>
    </div>
  );
}

function WhyUs() {
  return (
    <section id="why" style={{ padding: "100px 24px", position: "relative" }}>
      <div className="glow" style={{ right: -300, top: 100, width: 720, height: 320, background: "rgba(10,92,255,0.48)" }}></div>
      <div style={{ maxWidth: 1240, margin: "0 auto", position: "relative", zIndex: 1 }}>
        <div className="section-head" style={{ marginBottom: 60 }}>
          <EyebrowPill>Why Us</EyebrowPill>
          <h2>What sets us apart</h2>
          <p className="lead">Most agencies still focus on classic SEO only. We build for how people search now — Google, Maps, and AI answers. One strategy for both.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 20 }}>
          {WHY.map((w, i) => <WhyCard key={i} w={w} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Our Work / metric cards ---------- */
const METRICS = [
  { icon: "⌖", stat: "3x",  label: "More Qualified Leads",  body: "Local service businesses competing in crowded city markets" },
  { icon: "◎", stat: "68.5%", label: "Map Pack Visibility", body: "Multi-location brands building consistent rankings across regions" },
  { icon: "▣", stat: "2–6", label: "Weeks to First Results", body: "Websites rebuilt for speed, structure, and lead generation" },
];

function MetricCard({ m }) {
  return (
    <div className="glass-card" style={{ padding: 24, borderRadius: 32, height: 292 }}>
      <HexagonTile icon={m.icon} />
      <div style={{
        font: "500 42px/1 var(--font-data)", color: "#fff", letterSpacing: "-0.04em", marginTop: 50,
      }}>{m.stat}</div>
      <div style={{ font: "500 18px/1.3 var(--font-display)", color: "#fff", marginTop: 12 }}>{m.label}</div>
      <div style={{ marginTop: 30, color: "var(--fg-3)", fontSize: 16, lineHeight: 1.5 }}>{m.body}</div>
    </div>
  );
}

function OurWork() {
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1180, margin: "0 auto" }}>
        <div className="section-head" style={{ marginBottom: 56 }}>
          <EyebrowPill>Our Work</EyebrowPill>
          <h2>Real improvements you can measure</h2>
          <p className="lead">Higher local visibility, stronger keyword positions, better conversion, and more qualified calls.</p>
        </div>
        <div style={{ display: "grid", gridTemplateColumns: "repeat(3, 1fr)", gap: 50 }}>
          {METRICS.map((m, i) => <MetricCard key={i} m={m} />)}
        </div>
      </div>
    </section>
  );
}

/* ---------- Testimonials ---------- */
const TESTIMONIALS = [
  {
    quote: '"Their team handled the details — GBP updates, listings, technical fixes — and kept us in the loop."',
    name: "Chris D.", role: "Marketing Director",
  },
  {
    quote: '"Increasy has been a game-changer for our team. We save hours each week and the collaboration tools are fantastic."',
    name: "Mike T.", role: "Project Manager",
  },
  {
    quote: '"Since adopting Proximity, I\'ve seen a big boost in qualified calls. Map pack visibility is night and day."',
    name: "David K.", role: "Sales Executive",
  },
];

function Testimonials() {
  const [i, setI] = useState(0);
  const t = TESTIMONIALS[i];
  return (
    <section style={{ padding: "100px 24px", position: "relative" }}>
      <div style={{ maxWidth: 1080, margin: "0 auto" }}>
        <div className="section-head" style={{ marginBottom: 50 }}>
          <EyebrowPill>Testimonials</EyebrowPill>
          <h2>Our clients</h2>
        </div>
        <div className="glass-card" style={{
          padding: "48px 56px", borderRadius: 32,
          display: "grid", gridTemplateColumns: "auto 1fr auto", gap: 40, alignItems: "center",
        }}>
          <div style={{
            width: 217, height: 217, borderRadius: 20,
            background: "url('../../assets/images/testimonial-avatar.jpg') center / cover",
          }}/>
          <div>
            <p style={{ margin: 0, font: "500 23px/1.45 var(--font-display)", color: "#fff" }}>{t.quote}</p>
            <div style={{ marginTop: 22 }}>
              <div style={{ font: "500 16px/1.4 var(--font-body)", color: "#fff" }}>{t.name}</div>
              <div style={{ font: "400 14px/1.4 var(--font-body)", color: "rgba(255,255,255,0.7)" }}>{t.role}</div>
            </div>
          </div>
          <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
            <button className="btn-icon outline" onClick={() => setI((i - 1 + TESTIMONIALS.length) % TESTIMONIALS.length)}>←</button>
            <button className="btn-icon solid"   onClick={() => setI((i + 1) % TESTIMONIALS.length)}>→</button>
          </div>
        </div>
      </div>
    </section>
  );
}

/* ---------- FAQ ---------- */
const FAQ_ITEMS = [
  { q: "How long does it take to see results?",
    a: "Most businesses see early movement in 2–6 weeks (technical fixes, profile improvements, better indexing). Competitive keyword gains and stronger local dominance typically take 2–4 months, depending on your market and starting point." },
  { q: "Is this only for local businesses?",
    a: "Local service businesses are our core focus, but the same SEO + GEO + AEO playbook works for multi-location brands and any business that needs to be found and recommended." },
  { q: "What do you need from me to get started?",
    a: "Access to your site CMS, Google Business Profile, and analytics — plus a 30-minute kick-off call. We handle the rest." },
  { q: "How do you help with AI platforms like ChatGPT and Perplexity?",
    a: "We track how your brand is mentioned across the major AI assistants and shape content, citations, and structured data so models pick you as the recommended option." },
  { q: "Do you manage Google Business Profile for me?",
    a: "Yes. Posts, photos, Q&A, services, categories, and review replies are all part of the engagement." },
  { q: "Can you help if we have multiple locations?",
    a: "Yes — multi-location is a strength. We build location-specific pages, profiles, and tracking so each market gets attention." },
  { q: "What makes Proximity Ranking different from a typical SEO agency?",
    a: "We treat AI answers as a first-class channel, not an afterthought, and we ship the work — fixes, content, profiles — instead of handing you a report." },
];

function FAQRow({ item, open, onClick }) {
  return (
    <div className={`faq-row ${open ? "open" : ""}`}>
      <div className="faq-head" onClick={onClick}>
        <div className="faq-q">{item.q}</div>
        <div className="faq-chev">▾</div>
      </div>
      <div className="faq-body">{item.a}</div>
    </div>
  );
}

function FAQSection() {
  const [open, setOpen] = useState(0);
  return (
    <section id="faq" style={{ padding: "100px 24px" }}>
      <div style={{ maxWidth: 944, margin: "0 auto" }}>
        <div className="section-head" style={{ marginBottom: 50 }}>
          <EyebrowPill>FAQ</EyebrowPill>
          <h2>Frequently asked questions</h2>
          <p className="lead">Everything you need to know before getting started.</p>
        </div>
        <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
          {FAQ_ITEMS.map((item, i) => (
            <FAQRow key={i} item={item} open={open === i}
              onClick={() => setOpen(open === i ? -1 : i)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- Final CTA ---------- */
function FinalCTA() {
  return (
    <section style={{ padding: "60px 24px 100px" }}>
      <div className="glass-card" style={{
        maxWidth: 975, margin: "0 auto",
        borderRadius: 22.5, padding: "60px 80px", textAlign: "center", position: "relative",
        background: "rgba(5,5,5,0.9)",
        boxShadow: "0 22px 45px rgba(0,0,0,0.1), inset 0 38px 75px rgba(255,255,255,0.15)",
      }}>
        <div style={{ position: "absolute", right: -120, bottom: -50, width: 400, height: 200, borderRadius: 9999, background: "rgba(10,92,255,0.25)", filter: "blur(20px)" }}></div>
        <EyebrowPill>Free Visibility Audit</EyebrowPill>
        <h2 style={{ marginTop: 30, marginBottom: 0 }}>
          Want to know where you show up in<br/>
          <span style={{ fontWeight: 400 }}>AI Answers &amp; Local Search?</span>
        </h2>
        <p style={{ margin: "26px auto 36px", maxWidth: 660, color: "rgb(148,163,184)", fontSize: 18, lineHeight: 1.6 }}>
          Get a visibility audit and a practical plan: what to publish, what to fix, and where to build authority so your brand becomes the recommended option.
        </p>
        <div style={{ display: "inline-flex", gap: 24, alignItems: "center" }}>
          <PrimaryCTA framed>book a call</PrimaryCTA>
          <SecondaryCTA>Get a Visibility Audit</SecondaryCTA>
        </div>
        <div style={{ marginTop: 28, color: "#fff", font: "300 32px/1.4 var(--font-display)" }}>
          ⚡ Limited free audits available this month
        </div>
      </div>
    </section>
  );
}

/* ---------- Footer ---------- */
function Footer() {
  return (
    <footer className="footer" style={{ margin: "0 36px 36px" }}>
      <Logo />
      <div className="footer-links">
        <a href="#">Privacy</a>
        <a href="#">Terms</a>
        <a href="#">Contact</a>
      </div>
      <div className="copyright">© Proximity Ranking. All rights reserved · 2026</div>
    </footer>
  );
}

Object.assign(window, {
  ServicesSection, HowItWorks, WhyUs, OurWork, Testimonials, FAQSection, FinalCTA, Footer,
});
