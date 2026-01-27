const HeroSection = () => {
  return (
    // Removed h-screen, used h-full to fill the available space left by Navbar
    <div className="flex flex-col items-center justify-center h-full bg-brand-100 dark:bg-brand-900 transition-colors duration-300">
      <p className="text-4xl font-semibold font-display text-brand-950 dark:text-white">
        Let's make the <span className="text-brand-500">AI unboring</span>.
      </p>
    </div>
  );
};

export default HeroSection;
