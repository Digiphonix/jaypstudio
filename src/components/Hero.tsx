import { useEffect, useState } from "react";
import heroImage1 from "@/assets/hero-main.jpg";
import heroImage2 from "@/assets/gallery-1.jpg";
import heroImage3 from "@/assets/gallery-2.jpg";

const Hero = () => {
  const [isLoaded, setIsLoaded] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const images = [heroImage1, heroImage2, heroImage3];

  useEffect(() => {
    setIsLoaded(true);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section className="relative h-screen w-full overflow-hidden">
      <div
        className={`absolute inset-0 bg-gradient-to-br from-gray-900 via-gray-800 to-black transition-opacity duration-1000 ${
          isLoaded ? "opacity-100" : "opacity-0"
        }`}
      >
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-30 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        />
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
            From Candid Laughter to Joyful Celebrations
          </h1>
          <p className="text-lg md:text-xl lg:text-2xl text-primary-foreground/90 font-light tracking-wide max-w-3xl mx-auto">
            At Jaypstudios, we believe that great photography isn&apos;t just about capturing faces — it&apos;s about capturing the emotions behind the facial expressions, and creating images that feel as powerful as the memories themselves.
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
