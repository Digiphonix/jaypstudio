import { Button } from "@/components/ui/button";

const CallToAction = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-4xl text-center">
        <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
          Love What You See?
        </h2>
        <p className="text-lg md:text-xl text-muted-foreground mb-10 max-w-2xl mx-auto">
          Let's create stunning images that tell your unique story.
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
          <Button 
            asChild
            size="lg"
            className="text-base px-8 py-6"
          >
            <a href="/#contact">Request a Quote</a>
          </Button>
          <Button 
            asChild
            size="lg"
            variant="outline"
            className="text-base px-8 py-6"
          >
            <a href="/blog">View Blog</a>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CallToAction;
