import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Home = () => {
  return (<div className="flex h-screen bg-brand-900 text-white overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Navbar />
        <HeroSection />
      </div>
    </div>)
};

export default Home;
