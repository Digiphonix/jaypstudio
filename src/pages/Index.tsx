import Navigation from "@/components/Navigation";
import Hero from "@/components/Hero";
import About from "@/components/About";
import ServiceSection from "@/components/ServiceSection";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import gallery1 from "@/assets/gallery-1.jpg";
import gallery2 from "@/assets/gallery-2.jpg";
import gallery3 from "@/assets/gallery-3.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery5 from "@/assets/gallery-5.jpg";
import gallery6 from "@/assets/gallery-6.jpg";
import gallery8 from "@/assets/gallery-8.jpg";
import gallery10 from "@/assets/gallery-10.jpg";
import gallery13 from "@/assets/gallery-13.jpg";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Navigation />
      <Hero />
      
      <ServiceSection
        title="Personal Branding"
        description="Your personal brand is often the first thing people encounter, before a meeting, a pitch or even a conversation. Lets capture your personality, fuel your content and grow your audience"
        images={[gallery1, gallery2, gallery3]}
      />
      
      <ServiceSection
        title="Family Portraits"
        description="Timeless family portrait designed to preserve your legacy and fill your home with love. Preserve precious moments with your loved ones for generations to come"
        images={[gallery4, gallery5, gallery6]}
        reverse
      />
      
      <ServiceSection
        title="Personal Portraits"
        description="Personal portraits that capture your unique essesce and personality. You deserve more than snapshots, you deserve a masterpiece"
        images={[gallery8, gallery10, gallery13]}
      />
      
      <ServiceSection
        title="Events & Weddings"
        description="Document life's most important celebrations with artistry and care"
        images={[gallery1, gallery4, gallery5]}
        reverse
      />
      
      <About />
      <Contact />
      <Footer />
    </div>
  );
};

export default Index;
