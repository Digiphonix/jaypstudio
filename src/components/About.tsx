import { Heart, BookOpen, Award } from "lucide-react";
import { Facebook, Instagram } from "lucide-react";
import johnPortrait from "@/assets/john-portrait.jpg";

const About = () => {
  return (
    <>
      {/* Existing About Section with Icons */}
      <section className="py-24 px-6 bg-background">
        <div className="container mx-auto max-w-6xl">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Heart className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Authentic Moments
              </h3>
              <p className="text-muted-foreground">
                Capturing genuine emotions and real connections
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <BookOpen className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Emotional Storytelling
              </h3>
              <p className="text-muted-foreground">
                Every image tells a story worth remembering
              </p>
            </div>

            <div className="text-center">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                <Award className="w-16 h-16 text-primary" />
              </div>
              <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
                Timeless Quality
              </h3>
              <p className="text-muted-foreground">
                Creating images as powerful as the memories
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* About Me Section */}
      <section className="py-24 px-6 bg-muted/30">
        <div className="container mx-auto max-w-7xl">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Text Content */}
            <div className="space-y-6">
              <h2 className="text-5xl md:text-6xl font-serif font-bold text-foreground">
                About Me
              </h2>
              <p className="text-xl text-foreground font-light">
                My name is John, the creative director
              </p>
              <p className="text-base text-muted-foreground leading-relaxed">
                Jaypstudios is a professional photography studio that specializes in capturing the essence of every moment. Our team is dedicated to providing top-notch portrait photography, lifestyle photography, and event photography services. We take pride in our ability to create stunning visual stories that resonate with our clients. Our journey began with a passion for photography and a relentless commitment to delivering exceptional services. What sets us apart from the rest is our unwavering dedication to producing high-quality images and providing our customers with the best possible experiences. Studio is located in Kanata, ON but we are also available for location photoshoots around Ottawa-Gattineau area.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-4 pt-4">
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors"
                  aria-label="Facebook"
                >
                  <Facebook className="w-6 h-6 text-background" />
                </a>
                <a 
                  href="#" 
                  className="w-12 h-12 rounded-full bg-foreground flex items-center justify-center hover:bg-foreground/90 transition-colors"
                  aria-label="Instagram"
                >
                  <Instagram className="w-6 h-6 text-background" />
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative h-[600px] lg:h-[700px]">
              <img 
                src={johnPortrait} 
                alt="John, creative director at Jaypstudios" 
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;
