import gallery1 from "@/assets/gallery-1.jpg";
import gallery4 from "@/assets/gallery-4.jpg";
import gallery10 from "@/assets/gallery-10.jpg";

const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif font-bold text-foreground mb-4 uppercase tracking-wide">
            Ottawa Personal Branding, Family Portrait and Wedding Photographer
          </h2>
          <p className="text-base md:text-lg text-muted-foreground">
            Capturing Motion, Emotion, & Film Feels.
          </p>
        </div>

        {/* Feature Section with Circular Images */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img src={gallery1} alt="Authentic Moments" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Authentic Moments
            </h3>
            <p className="text-muted-foreground">
              Capturing genuine emotions and real connections
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img src={gallery4} alt="Emotional Storytelling" className="w-full h-full object-cover" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Emotional Storytelling
            </h3>
            <p className="text-muted-foreground">
              Every image tells a story worth remembering
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full overflow-hidden">
              <img src={gallery10} alt="Timeless Quality" className="w-full h-full object-cover" />
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
  );
};

export default About;
