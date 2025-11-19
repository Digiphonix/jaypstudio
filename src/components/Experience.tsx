import { Camera, Heart, Sparkles, Calendar } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      icon: Camera,
      title: "Portrait Sessions",
      description: "Timeless portraits that capture your unique essence and personality.",
    },
    {
      icon: Heart,
      title: "Family Photography",
      description: "Preserve precious moments with your loved ones for generations to come.",
    },
    {
      icon: Sparkles,
      title: "Headshots",
      description: "Professional headshots that elevate your personal brand.",
    },
    {
      icon: Calendar,
      title: "Events & Weddings",
      description: "Document life's most important celebrations with artistry and care.",
    },
  ];

  return (
    <section className="py-20 px-6 bg-background">
      <div className="container mx-auto max-w-6xl">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-foreground mb-6">
            JayPStudios Experience
          </h2>
          <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
            Every session is crafted with intention, artistry, and a deep commitment to telling your unique story.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {experiences.map((experience, index) => {
            const Icon = experience.icon;
            return (
              <div
                key={index}
                className="bg-card border border-border rounded-lg p-8 text-center hover:shadow-lg transition-shadow"
              >
                <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-primary/10 flex items-center justify-center">
                  <Icon className="w-8 h-8 text-primary" strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-serif font-bold text-foreground mb-4">
                  {experience.title}
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  {experience.description}
                </p>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Experience;
