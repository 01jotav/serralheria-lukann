import Header from "@/components/sections/Header";
import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Portfolio from "@/components/sections/Portfolio";
import FAQ from "@/components/sections/FAQ";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Header />
      <Hero />
      <Services />
      <Portfolio />
      <Differentials />
      <Authority />
      <FAQ />
      <Footer />
    </div>
  );
}

export default App;
