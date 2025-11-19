import { Button } from "@/components/ui/button";

const GetQuote = () => {
  return (
    <section className="py-12 px-6 bg-background">
      <div className="container mx-auto text-center">
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
