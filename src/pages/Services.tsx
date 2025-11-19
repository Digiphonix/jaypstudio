import Navigation from "@/components/Navigation";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

const Services = () => {
  const services = [
    {
      title: "Personal Branding",
      description: "Personal branding photography – be seen as the go-to in your field. Show up with purpose. Connect with your audience. Attract your ideal clients through editorial-quality images that tell your story.",
      price: "Starting at $1,200",
      typicalSpend: "$2,500",
      customQuote: "Packages start at $1,200 and client's typically spend around $2,500. Please complete the contact form below and I'll reach out with a custom quote right away.",
      features: [
        "Professional brand strategy session",
        "Multiple outfit changes",
        "Location scouting included",
        "Professional editing & retouching",
        "High-resolution digital files",
        "Online gallery with download rights",
      ],
    },
    {
      title: "Weddings & Events",
      description: "Complete coverage of your special day from beginning to end. Capturing every meaningful moment with artistry and precision.",
      price: "Starting at $1,999",
      typicalSpend: "$3,000",
      customQuote: "Packages start at $1,999 and client's typically spend around $3,000. Please complete the contact form below and I'll reach out with a custom quote right away.",
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
      title: "Portrait Sessions",
      description: "Authentic and expressive portraits that capture your unique personality",
      price: "Starting at $350",
      typicalSpend: "$500",
      customQuote: "Packages start at $350 and are perfect for individual portraits, headshots, and personal photography needs. Please complete the contact form below and I'll reach out with a custom quote right away.",
      features: [
        "1-2 hour session",
        "Professional editing",
        "20+ digital images",
        "Online gallery",
        "Personal consultation",
        "Location of your choice",
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

      {services.map((service, index) => (
        <section key={index} className={`py-20 px-6 ${index % 2 === 0 ? 'bg-background' : 'bg-muted/30'}`}>
          <div className="container mx-auto max-w-7xl">
            <div className={`grid lg:grid-cols-2 gap-12 items-center ${index % 2 === 1 ? 'lg:flex-row-reverse' : ''}`}>
              <div className={`space-y-6 ${index % 2 === 1 ? 'lg:order-2' : ''}`}>
                <h2 className="text-4xl md:text-5xl font-serif font-bold text-foreground uppercase tracking-wide">
                  {service.title}
                </h2>
                <p className="text-lg text-muted-foreground leading-relaxed">
                  {service.description}
                </p>
                <div className="pt-4">
                  <p className="text-lg text-muted-foreground mb-6 leading-relaxed">
                    {service.customQuote}
                  </p>
                  <ul className="space-y-4">
                    {service.features.map((feature, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <Check className="w-6 h-6 text-primary mt-0.5 flex-shrink-0" />
                        <span className="text-muted-foreground text-lg">{feature}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="pt-6">
                  <Button 
                    size="lg" 
                    className="px-8 py-6 text-base"
                    onClick={() => window.location.href = "/#contact"}
                  >
                    BOOK NOW →
                  </Button>
                </div>
              </div>
              
              <div className={`grid grid-cols-2 gap-4 ${index % 2 === 1 ? 'lg:order-1' : ''}`}>
                <Card className="col-span-2 border-2">
                  <CardContent className="p-8">
                    <h3 className="text-2xl font-serif font-bold mb-4">What's Included</h3>
                    <div className="grid sm:grid-cols-2 gap-4">
                      {service.features.slice(0, 3).map((feature, idx) => (
                        <div key={idx} className="flex items-center gap-2">
                          <Check className="w-5 h-5 text-primary flex-shrink-0" />
                          <span className="text-sm text-muted-foreground">{feature}</span>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-foreground mb-2">{service.price.split(' ')[2]}</p>
                      <p className="text-sm text-muted-foreground">Starting Price</p>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-2">
                  <CardContent className="p-6">
                    <div className="text-center">
                      <p className="text-3xl font-bold text-foreground mb-2">{service.typicalSpend}</p>
                      <p className="text-sm text-muted-foreground">Typical Spend</p>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </section>
      ))}

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
            <Button 
              size="lg" 
              className="px-8"
              onClick={() => window.location.href = "/#contact"}
            >
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
