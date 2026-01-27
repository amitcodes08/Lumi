import HeroSection from "./components/HeroSection";
import Navbar from "./components/Navbar";
import SideBar from "./components/SideBar";

function App() {
  return (
    <div className="flex h-screen bg-brand-900 text-white overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <HeroSection />
      </div>
    </div>
  );
}

export default App;
