import { useEffect, useState } from "react";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787')] bg-cover bg-center opacity-60" />
      </div>

      <div className="absolute inset-0 flex items-center justify-center">
        <div
          className={`text-center px-6 transition-all duration-1000 delay-300 ${
            isLoaded
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-6 tracking-tight">
            Photography Studio
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-light tracking-wide italic max-w-3xl mx-auto">
            Capturing Motion, Emotion, & Film Feels
          </p>
        </div>
      </div>

      <div className="absolute bottom-12 left-1/2 -translate-x-1/2 animate-bounce">
        <svg
          className="w-6 h-6 text-primary-foreground"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M19 14l-7 7m0 0l-7-7m7 7V3"
          />
        </svg>
      </div>
    </section>
  );
};

export default Hero;
