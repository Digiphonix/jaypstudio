import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ChevronRight } from "lucide-react";

interface ServiceSectionProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const ServiceSection = ({ title, description, images, reverse = false }: ServiceSectionProps) => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-16">
          {/* Text Content */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'} order-1 space-y-6`}>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-bold text-foreground uppercase tracking-tight">
              {title}
            </h2>
            <div className="space-y-4 text-lg text-muted-foreground leading-relaxed">
              {description.split('\n').map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>
          </div>

          {/* Image Grid */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'} order-2`}>
            <div className="grid grid-cols-2 gap-4 h-full">
              {/* Large Image - spans 2 rows */}
              <div className="row-span-2 overflow-hidden rounded-lg">
                <img 
                  src={images[0]} 
                  alt={`${title} showcase 1`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Top Right Image */}
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={images[1]} 
                  alt={`${title} showcase 2`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
              {/* Bottom Right Image */}
              <div className="overflow-hidden rounded-lg">
                <img 
                  src={images[2]} 
                  alt={`${title} showcase 3`} 
                  className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" 
                />
              </div>
            </div>
          </div>

          {/* Buttons - appear after images on mobile */}
          <div className={`${reverse ? 'lg:order-3' : 'lg:order-3'} order-3 lg:col-span-2 pt-4 flex flex-wrap gap-4 justify-center lg:justify-start`}>
            <a href="#contact">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide transition-all"
              >
                Get a Quote
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </a>
            <Link to="/portfolio">
              <Button 
                variant="outline" 
                size="lg"
                className="group border-2 border-foreground text-foreground hover:bg-foreground hover:text-background rounded-full px-8 py-6 text-base font-semibold uppercase tracking-wide transition-all"
              >
                View Portfolio
                <ChevronRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
