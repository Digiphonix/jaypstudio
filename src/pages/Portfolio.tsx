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

  const categoryDescriptions = {
    familyPortraits: "My family sessions focus on capturing genuine connection, natural interactions, and the unique personalities within your household. I guide you gently while allowing plenty of room for spontaneous moments. Whether we're indoors or outdoors, I create a relaxed environment where everyone feels comfortable. The result is a set of warm, meaningful portraits that grow more precious with time.",
    personalPortraits: "Did you know that 50% of online consumers & clients say high quality images and videos are more important than reviews. Marketing tests reveal on average a customer is 40% more likely 'sign up' when presented with a real photograph when compared to a stock photograph. Let me tell your story to grow your audience and increase your sales.",
    branding: "At JayPstudios, We create strategic branding images that capture your unique personality, mission, and visual identity. Every session is tailored to highlight what sets your business apart in a crowded market. Through professional lighting and intentional styling, we ensure your brand looks polished and trustworthy. These images help you attract the right clients, strengthen credibility, and elevate your online presence.",
    weddings: "We document your wedding day with a storytelling approach that blends elegance, emotion, and authenticity. From morning preparations to your final dance, every detail is captured with care. My goal is to make you feel relaxed and fully immersed in your celebration while I preserve the moments you may miss. Your gallery becomes a timeless collection of memories you'll cherish for a lifetime.",
  };

  const renderGallery = (images: typeof portfolioData.familyPortraits, description: string) => (
    <div className="space-y-12">
      <div className="max-w-4xl mx-auto text-center px-6 py-8 bg-muted/30 rounded-lg">
        <p className="text-lg text-foreground leading-relaxed">
          {description}
        </p>
      </div>
      
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

          <Tabs defaultValue="familyPortraits" className="w-full">
            <TabsList className="flex flex-wrap justify-center gap-3 bg-transparent p-0 mb-12">
              <TabsTrigger 
                value="familyPortraits" 
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border shadow-sm transition-all"
              >
                Family Portraits
              </TabsTrigger>
              <TabsTrigger 
                value="personalPortraits" 
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border shadow-sm transition-all"
              >
                Personal Portraits
              </TabsTrigger>
              <TabsTrigger 
                value="branding" 
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border shadow-sm transition-all"
              >
                Branding
              </TabsTrigger>
              <TabsTrigger 
                value="weddings" 
                className="px-8 py-3 rounded-lg text-sm md:text-base font-medium data-[state=active]:bg-primary data-[state=active]:text-primary-foreground data-[state=inactive]:bg-background data-[state=inactive]:text-foreground data-[state=inactive]:border data-[state=inactive]:border-border shadow-sm transition-all"
              >
                Weddings
              </TabsTrigger>
            </TabsList>

            <TabsContent value="familyPortraits" className="mt-0">
              {renderGallery(portfolioData.familyPortraits, categoryDescriptions.familyPortraits)}
            </TabsContent>

            <TabsContent value="personalPortraits" className="mt-0">
              {renderGallery(portfolioData.personalPortraits, categoryDescriptions.personalPortraits)}
            </TabsContent>

            <TabsContent value="branding" className="mt-0">
              {renderGallery(portfolioData.branding, categoryDescriptions.branding)}
            </TabsContent>

            <TabsContent value="weddings" className="mt-0">
              {renderGallery(portfolioData.weddings, categoryDescriptions.weddings)}
            </TabsContent>
          </Tabs>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Portfolio;
