import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceSectionProps {
  title: string;
  description: string;
  image: string;
  reverse?: boolean;
}

const ServiceSection = ({ title, description, image, reverse = false }: ServiceSectionProps) => {
  return (
    <section className="relative w-full min-h-[600px] overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0">
        <img 
          src={image} 
          alt={title} 
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 via-black/50 to-transparent" />
      </div>

      {/* Content */}
      <div className="relative container mx-auto px-6 py-24 min-h-[600px] flex items-center">
        <div className={`max-w-2xl ${reverse ? 'ml-auto text-right' : ''}`}>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-white mb-6 uppercase tracking-wide">
            {title}
          </h2>
          <p className="text-lg md:text-xl text-white/90 mb-8 leading-relaxed">
            {description}
          </p>
          <div className={`flex flex-col sm:flex-row gap-4 ${reverse ? 'sm:justify-end' : ''}`}>
            <Link to="/#contact">
              <Button size="lg" className="px-8 py-6 text-base">
                Get a Quote
              </Button>
            </Link>
            <Link to="/portfolio">
              <Button 
                size="lg" 
                variant="outline" 
                className="px-8 py-6 text-base bg-white/10 border-white text-white hover:bg-white hover:text-foreground backdrop-blur-sm"
              >
                View Portfolio
              </Button>
            </Link>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
