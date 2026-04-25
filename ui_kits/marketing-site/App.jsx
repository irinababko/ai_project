// Root app — composes the full landing page.
function App() {
  return (
    <div data-screen-label="Landing — Proximity Ranking">
      <Navbar />
      <Hero />
      <ServicesSection />
      <HowItWorks />
      <WhyUs />
      <OurWork />
      <Testimonials />
      <FAQSection />
      <FinalCTA />
      <Footer />
    </div>
  );
}

ReactDOM.createRoot(document.getElementById("root")).render(<App/>);
