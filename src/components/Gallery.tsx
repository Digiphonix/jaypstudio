import { useState } from "react";

const Gallery = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const images = [
    {
      url: "https://images.unsplash.com/photo-1519741497674-611481863552?q=80&w=2070",
      alt: "Wedding celebration moment",
    },
    {
      url: "https://images.unsplash.com/photo-1606216794074-735e91aa2c92?q=80&w=2787",
      alt: "Couple portrait",
    },
    {
      url: "https://images.unsplash.com/photo-1591604466107-ec97de577aff?q=80&w=2071",
      alt: "Candid laughter",
    },
    {
      url: "https://images.unsplash.com/photo-1522673607200-164d1b6ce486?q=80&w=2070",
      alt: "Group celebration",
    },
    {
      url: "https://images.unsplash.com/photo-1523438097201-512ae7d59c44?q=80&w=2787",
      alt: "Joyful moment",
    },
    {
      url: "https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&w=2069",
      alt: "Portrait session",
    },
  ];

  return (
    <section id="gallery" className="py-24 px-6 bg-muted/30">
      <div className="container mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-4">
            Recent Work
          </h2>
          <p className="text-lg text-muted-foreground">
            A glimpse into our photography journey
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/5] overflow-hidden group cursor-pointer"
              onMouseEnter={() => setHoveredIndex(index)}
              onMouseLeave={() => setHoveredIndex(null)}
            >
              <img
                src={image.url}
                alt={image.alt}
                className={`w-full h-full object-cover transition-all duration-700 ${
                  hoveredIndex === index ? "scale-110" : "scale-100"
                }`}
              />
              <div
                className={`absolute inset-0 bg-black transition-opacity duration-300 ${
                  hoveredIndex === index ? "opacity-20" : "opacity-0"
                }`}
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
