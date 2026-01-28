import HeartIcon from "./HeartIcon";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="flex h-screen bg-brand-900 text-white overflow-hidden">
      <SideBar />
      <div className="flex flex-col flex-1">
        <Navbar />

        <div className="relative flex-1 w-full">
          <HeartIcon className="absolute top-[22%] right-[10%] z-20" />

          <HeroSection />
        </div>
      </div>
    </div>
  );
};

export default Home;
