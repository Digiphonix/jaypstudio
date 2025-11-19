import { Heart, BookOpen, Award } from "lucide-react";

const About = () => {
  return (
    <section className="py-24 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Heart className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Authentic Moments
            </h3>
            <p className="text-muted-foreground">
              Capturing genuine emotions and real connections
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <BookOpen className="w-16 h-16 text-primary" />
            </div>
            <h3 className="text-2xl font-serif font-bold text-foreground mb-3">
              Emotional Storytelling
            </h3>
            <p className="text-muted-foreground">
              Every image tells a story worth remembering
            </p>
          </div>

          <div className="text-center">
            <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
              <Award className="w-16 h-16 text-primary" />
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
