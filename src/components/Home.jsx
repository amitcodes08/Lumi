import HeartIcon from "./HeartIcon";
import HeroSection from "./HeroSection";
import Navbar from "./Navbar";
import SideBar from "./SideBar";

const Home = () => {
  return (
    <div className="flex h-screen bg-brand-900 text-white overflow-hidden">
      {/* 1. Sidebar stays fixed to the left */}
      <SideBar />

      <div className="flex flex-col flex-1 min-w-0">
        {/* 2. Navbar stays at the top */}
        <Navbar />

        {/* 3. Main Content Area */}
        <main className="relative flex-1 w-full overflow-y-auto custom-scrollbar">
          {/* Positioning the Heart: 
              - Added 'hidden md:block' if you want to hide it on tiny screens
              - Ensure HeroSection is relative so heart stays within bounds
          */}
          <div className="absolute top-[20%] right-[5%] lg:right-[10%] z-20">
            <HeartIcon />
          </div>

          <HeroSection />
        </main>
      </div>
    </div>
  );
};

export default Home;
