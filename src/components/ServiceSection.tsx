import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

interface ServiceSectionProps {
  title: string;
  description: string;
  images: string[];
  reverse?: boolean;
}

const ServiceSection = ({ title, description, images, reverse = false }: ServiceSectionProps) => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-7xl">
        <div className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${reverse ? 'lg:flex-row-reverse' : ''}`}>
          {/* Text Content */}
          <div className={`${reverse ? 'lg:order-2' : 'lg:order-1'}`}>
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground mb-6 uppercase tracking-wide">
              {title}
            </h2>
            <p className="text-lg md:text-xl text-muted-foreground mb-8 leading-relaxed">
              {description}
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link to="/#contact">
                <Button size="lg" className="px-6">
                  Get a Quote
                </Button>
              </Link>
              <Link to="/portfolio">
                <Button size="lg" variant="outline" className="px-6">
                  View Portfolio
                </Button>
              </Link>
            </div>
          </div>

          {/* Image Grid */}
          <div className={`${reverse ? 'lg:order-1' : 'lg:order-2'}`}>
            <div className="grid grid-cols-2 gap-4">
              <div className="space-y-4">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={images[0]} alt={`${title} 1`} className="w-full h-full object-cover" />
                </div>
              </div>
              <div className="space-y-4 pt-8">
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={images[1]} alt={`${title} 2`} className="w-full h-full object-cover" />
                </div>
                <div className="aspect-[3/4] overflow-hidden rounded-lg">
                  <img src={images[2]} alt={`${title} 3`} className="w-full h-full object-cover" />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceSection;
