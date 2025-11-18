import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Gallery from "@/components/Gallery";
import ServiceSection from "@/components/ServiceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      <About />
      <Gallery />
      
      <ServiceSection
        title="Personal Branding"
        description="Your personal brand is often the first thing people encounter, before a meeting, a pitch or even a conversation. Let's capture your personality, fuel your content and grow your audience"
        image={gallery1}
      />
      
      <ServiceSection
        title="Family Portraits"
        description="Timeless family portraits designed to preserve your legacy and fill your home with love. Preserve precious moments with your loved ones for generations to come"
        image={gallery4}
        reverse
      />
      
      <ServiceSection
        title="Personal Portraits"
        description="Personal portraits that capture your unique essence and personality. You deserve more than snapshots, you deserve a masterpiece"
        image={gallery10}
      />
      
      <ServiceSection
        title="Events & Weddings"
        description="Document life's most important celebrations with artistry and care"
        image={gallery5}
        reverse
      />
      
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
