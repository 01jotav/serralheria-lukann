import Hero from "@/components/sections/Hero";
import Authority from "@/components/sections/Authority";
import Services from "@/components/sections/Services";
import Differentials from "@/components/sections/Differentials";
import Portfolio from "@/components/sections/Portfolio";
import Footer from "@/components/sections/Footer";

function App() {
  return (
    <div className="min-h-screen bg-zinc-950 text-zinc-100 antialiased">
      <Hero />
      <Authority />
      <Services />
      <Differentials />
      <Portfolio />
      <Footer />
    </div>
  );
}

export default App;
