import { Button } from "@/components/ui/button";

const GetQuote = () => {
  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-foreground mb-6 uppercase tracking-wide">
          Ready to Capture Your Story?
        </h2>
        <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
          Let's create something beautiful together. Get in touch for a personalized quote tailored to your vision.
        </p>
        <Button 
          asChild
          size="lg"
          className="text-lg px-8 py-6 uppercase tracking-wide"
        >
          <a href="/#contact">Get a Quote</a>
        </Button>
      </div>
    </section>
  );
};

export default GetQuote;
