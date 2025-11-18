import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import heroImage from "@/assets/hero-main.jpg";

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
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20 transition-opacity duration-1000"
          style={{ backgroundImage: `url(${heroImage})` }}
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
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-bold text-primary-foreground mb-12 tracking-tight">
            From Candid Laughter to Joyful Celebrations
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
            <Link to="/#contact">
              <Button size="lg" className="px-8 py-6 text-lg">
                Book Your Session
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button size="lg" variant="outline" className="px-8 py-6 text-lg bg-background/10 border-primary-foreground text-primary-foreground hover:bg-primary-foreground hover:text-background">
                View Portfolio
              </Button>
            </Link>
          </div>
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
