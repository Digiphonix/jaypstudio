import { Button } from "@/components/ui/button";

const Contact = () => {
  return (
    <section id="contact" className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-8">
          Let&apos;s Create Together
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-12 max-w-2xl mx-auto">
          Want to chat about your portrait vision? Ready to capture your special moments? Get in touch and let&apos;s discuss how we can bring your vision to life.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <Button
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground px-8 py-6 text-lg"
          >
            Get in Touch
          </Button>
          <Button
            size="lg"
            variant="outline"
            className="border-2 px-8 py-6 text-lg"
          >
            View Pricing
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Contact;
