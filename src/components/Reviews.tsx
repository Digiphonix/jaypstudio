import {
  Carousel,
  CarouselContent,
  CarouselItem,
  CarouselNext,
  CarouselPrevious,
} from "@/components/ui/carousel";
import { Card, CardContent } from "@/components/ui/card";
import { Star } from "lucide-react";
import review1 from "@/assets/review-1.jpg";
import review2 from "@/assets/review-2.jpg";
import review3 from "@/assets/review-3.jpg";
import review4 from "@/assets/review-4.jpg";

const reviews = [
  {
    id: 1,
    title: "It was a Creative Experience!",
    text: "Working with Jay was such a smooth and rewarding experience. From the moment I stepped into the session, he made me feel comfortable and confident in front of the camera. I wasn't expecting to love the photos as much as I do, but wow — he truly delivered beyond my expectations. The attention to detail, lighting, and the way he captured my personality through each shot was next level. When I received the final gallery, I was honestly blown away. Every photo felt like a polished version of a real moment. You can tell Jay genuinely loves what he does — and that passion shows in the results.",
    image: review1,
  },
  {
    id: 2,
    title: "Every cent was worth it — I couldn't be happier.",
    text: "Good morning John — I just finished going through the pictures, and I'm honestly blown away. Every single shot reminded me why I put so much effort into planning my outfit — and I'm so glad I did! You captured everything beautifully, and the final edits are flawless. There's not a single thing I would change. It's rare to find a photographer who gets the vibe and delivers on the technical quality — but you and your wife absolutely nailed it. Her welcoming spirit, energy, and presence made me feel so comfortable in front of the camera. I genuinely felt seen, celebrated, and cared for throughout the shoot. Thank you both for turning this into more than just a photoshoot — it was a full experience. I walked away with not just amazing images, but a memory I'll hold onto. I'm so grateful.",
    image: review2,
  },
  {
    id: 3,
    title: "Can't wait to work together again!",
    text: "Jay didn't just take photos — he captured the energy behind my brand. I came in needing shots for my athletic wear line, but what I got was way more than product images. The way he played with movement, lighting, and body angles made the gear pop exactly how I envisioned. He understood the vibe I was going for right away and made the entire shoot feel effortless. I've already used the photos across my website, socials, and ads — and the feedback has been incredible.",
    image: review3,
  },
  {
    id: 4,
    title: "The pictures came out beautiful.",
    text: "That was the first thing Mrs. B said when she saw the final gallery from her family portrait session — and it meant the world. This wasn't just any shoot; it was a big, multi-generational gathering filled with laughter, love, and legacy. Mrs. B wanted something timeless — images that captured not just faces, but the bond between her children, grandchildren, and extended family. After sharing the photos, she reached out again: 'I asked everyone, and the feedback was great.' From aunties to toddlers, every person found a favorite shot. The lighting, the composition, the candid smiles — it all came together in a way that felt personal and polished.",
    image: review4,
  },
];

const Reviews = () => {
  return (
    <section className="py-20 px-6 bg-muted/30">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif font-bold text-center text-foreground mb-16 uppercase tracking-wide">
          Reviews
        </h2>
        
        <Carousel
          opts={{
            align: "start",
            loop: true,
          }}
          className="w-full"
        >
          <CarouselContent>
            {reviews.map((review) => (
              <CarouselItem key={review.id} className="md:basis-1/2 lg:basis-1/3">
                <Card className="h-full border-border/50 bg-card/50 backdrop-blur-sm">
                  <CardContent className="p-8 flex flex-col h-full">
                    <div className="flex mb-4">
                      {[...Array(5)].map((_, i) => (
                        <Star
                          key={i}
                          className="w-5 h-5 fill-primary text-primary"
                        />
                      ))}
                    </div>
                    <h3 className="text-lg font-semibold text-foreground mb-4">
                      {review.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed flex-grow mb-6">
                      {review.text}
                    </p>
                    <div className="flex justify-center mt-auto">
                      <img
                        src={review.image}
                        alt="Client"
                        className="w-20 h-20 rounded-full object-cover border-4 border-background shadow-lg"
                      />
                    </div>
                  </CardContent>
                </Card>
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="hidden md:flex" />
          <CarouselNext className="hidden md:flex" />
        </Carousel>
      </div>
    </section>
  );
};

export default Reviews;
