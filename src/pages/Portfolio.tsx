import { useState } from "react";
import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery13 from "@/assets/gallery-13.jpg";
import gallery14 from "@/assets/gallery-14.jpg";
import gallery15 from "@/assets/gallery-15.jpg";
import gallery16 from "@/assets/gallery-16.jpg";
import gallery18 from "@/assets/gallery-18.jpg";

const Portfolio = () => {
  const [hoveredIndex, setHoveredIndex] = useState<number | null>(null);

  const portfolioData = {
    all: [
      { url: gallery1, alt: "Portrait photography by Jaypstudios" },
      { url: gallery2, alt: "Professional headshot by Jaypstudios" },
      { url: gallery3, alt: "Family portrait session" },
      { url: gallery4, alt: "Wedding celebration moment" },
      { url: gallery5, alt: "Personal branding photography" },
      { url: gallery6, alt: "Candid portrait photography" },
      { url: gallery8, alt: "Group portrait photography" },
      { url: gallery10, alt: "Professional portrait session" },
      { url: gallery13, alt: "Expressive portrait by Jaypstudios" },
      { url: gallery14, alt: "Elegant portrait photography" },
      { url: gallery15, alt: "Creative portrait session" },
      { url: gallery16, alt: "Candid wedding moment" },
      { url: gallery18, alt: "Joyful celebration portrait" },
    ],
    familyPortraits: [
      { url: gallery1, alt: "Portrait photography by Jaypstudios" },
      { url: gallery3, alt: "Family portrait session" },
      { url: gallery6, alt: "Candid portrait photography" },
      { url: gallery10, alt: "Professional portrait session" },
      { url: gallery13, alt: "Expressive portrait by Jaypstudios" },
      { url: gallery15, alt: "Creative portrait session" },
    ],
    personalPortraits: [
      { url: gallery2, alt: "Personal portrait by Jaypstudios" },
      { url: gallery5, alt: "Individual portrait photography" },
      { url: gallery6, alt: "Candid personal portrait" },
      { url: gallery13, alt: "Expressive personal portrait" },
      { url: gallery14, alt: "Elegant personal portrait" },
    ],
    branding: [
      { url: gallery2, alt: "Professional headshot by Jaypstudios" },
      { url: gallery8, alt: "Group portrait photography" },
      { url: gallery5, alt: "Personal branding photography" },
      { url: gallery14, alt: "Elegant portrait photography" },
    ],
    weddings: [
      { url: gallery4, alt: "Wedding celebration moment" },
      { url: gallery16, alt: "Candid wedding moment" },
      { url: gallery18, alt: "Joyful wedding celebration" },
    ],
  };

  const renderGallery = (images: typeof portfolioData.all) => (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in">
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
  );

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-24 px-6 bg-background">
        <div className="container mx-auto">
          <div className="text-center mb-16">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
              Our Portfolio
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Explore our collection of captured moments across weddings, portraits, and events
            </p>
          </div>

          <Tabs defaultValue="all" className="w-full">
            <TabsList className="grid w-full max-w-3xl mx-auto grid-cols-5 mb-12">
              <TabsTrigger value="all" className="text-sm md:text-base">
                All
              </TabsTrigger>
              <TabsTrigger value="familyPortraits" className="text-sm md:text-base">
                Family Portraits
              </TabsTrigger>
              <TabsTrigger value="personalPortraits" className="text-sm md:text-base">
                Personal Portraits
              </TabsTrigger>
              <TabsTrigger value="branding" className="text-sm md:text-base">
                Branding
              </TabsTrigger>
              <TabsTrigger value="weddings" className="text-sm md:text-base">
                Weddings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="all" className="mt-0">
              {renderGallery(portfolioData.all)}
            </TabsContent>

            <TabsContent value="familyPortraits" className="mt-0">
              {renderGallery(portfolioData.familyPortraits)}
            </TabsContent>

            <TabsContent value="personalPortraits" className="mt-0">
              {renderGallery(portfolioData.personalPortraits)}
            </TabsContent>

            <TabsContent value="branding" className="mt-0">
              {renderGallery(portfolioData.branding)}
            </TabsContent>

            <TabsContent value="weddings" className="mt-0">
              {renderGallery(portfolioData.weddings)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
