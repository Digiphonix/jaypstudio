import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Portrait Sessions",
      description: "Authentic and expressive portraits that capture your unique personality",
      price: "Starting at $350",
      features: [
        "1-2 hour session",
        "Professional editing",
        "20+ digital images",
        "Online gallery",
        "Personal consultation",
        "Location of your choice",
      ],
    },
    {
      title: "Wedding Photography",
      description: "Complete coverage of your special day from beginning to end",
      price: "Starting at $2,500",
      features: [
        "8-10 hours coverage",
        "Two photographers",
        "500+ edited images",
        "Engagement session included",
        "Online gallery with print rights",
        "Custom wedding album option",
      ],
    },
    {
      title: "Event Photography",
      description: "Professional coverage for corporate events, parties, and celebrations",
      price: "Starting at $500",
      features: [
        "Up to 4 hours coverage",
        "Professional editing",
        "100+ digital images",
        "Fast turnaround (3-5 days)",
        "Online gallery",
        "Print release included",
      ],
    },
  ];

  return (
    <div className="min-h-screen">
      <Navigation />
      
      <section className="pt-32 pb-16 px-6 bg-background">
        <div className="container mx-auto max-w-6xl text-center">
          <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-bold text-foreground mb-6">
            Services & Pricing
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
            Professional photography services tailored to capture your most important moments
          </p>
        </div>
      </section>

      <section className="py-16 px-6 bg-muted/30">
        <div className="container mx-auto max-w-6xl">
          <div className="grid md:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="border-2 hover:shadow-lg transition-shadow">
                <CardHeader>
                  <CardTitle className="text-2xl font-serif">{service.title}</CardTitle>
                  <CardDescription className="text-base">{service.description}</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="mb-6">
                    <p className="text-3xl font-bold text-foreground">{service.price}</p>
                  </div>
                  <ul className="space-y-3">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-2">
                        <Check className="w-5 h-5 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full mt-6" size="lg">
                    Book Now
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      <section className="py-16 px-6 bg-background">
        <div className="container mx-auto max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-serif font-bold text-foreground mb-4">
              Custom Packages Available
            </h2>
            <p className="text-lg text-muted-foreground">
              Every event is unique. Let's create a package that perfectly fits your needs and budget.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            <Card>
              <CardHeader>
                <CardTitle className="text-xl">Add-Ons</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Second photographer - $400</li>
                  <li>• Additional hour - $200</li>
                  <li>• Rush delivery (24-48hrs) - $150</li>
                  <li>• Printed album - Starting at $500</li>
                  <li>• Canvas prints - Starting at $150</li>
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle className="text-xl">What's Included</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="space-y-2 text-muted-foreground">
                  <li>• Professional editing & color correction</li>
                  <li>• High-resolution digital files</li>
                  <li>• Online gallery for 1 year</li>
                  <li>• Print release & download rights</li>
                  <li>• Password-protected sharing</li>
                </ul>
              </CardContent>
            </Card>
          </div>

          <div className="text-center mt-12">
            <Button size="lg" className="px-8">
              Request Custom Quote
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Services;
