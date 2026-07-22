import { BrowserRouter, Routes, Route } from "react-router-dom";
import NavBar from "./sections/NavBar";
import HeroSection from "./sections/HeroSection";
import PortfolioSection from "./sections/PortfolioSection";

function App() {
  return (
    <BrowserRouter>
      <div className="min-h-screen bg-background">
        <NavBar />
        <Routes>
          <Route path="/" element={<HeroSection />} />
          <Route path="/portfolio" element={<PortfolioSection />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
