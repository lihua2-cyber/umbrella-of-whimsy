import { Card, CardContent } from "./ui/card";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Dr. William B.",
    role: "Class of 1998",
    quote: "Umbrella University changed my life forever. Literally. I'm not the same person I was before.",
    status: "Location: Unknown",
  },
  {
    name: "Jill V.",
    role: "Former Student",
    quote: "The campus security training was surprisingly useful. I use those skills every day now.",
    status: "Currently: Alive",
  },
  {
    name: "Albert W.",
    role: "Distinguished Alumni",
    quote: "The connections I made here opened so many doors. Some underground, some in volcano bases.",
    status: "Status: It's complicated",
  },
  {
    name: "Chris R.",
    role: "Campus Visitor",
    quote: "I only visited once but the impression lasted a lifetime. The architecture is to die for.",
    status: "Will not return",
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-2">
            Success Stories
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            What Our Survivors Say
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Hear from the alumni who made it through our rigorous programs.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="bg-card border-border">
              <CardContent className="pt-6">
                <Quote className="w-8 h-8 text-primary/30 mb-4" />
                <p className="text-lg text-foreground mb-6 italic">
                  "{testimonial.quote}"
                </p>
                <div className="flex justify-between items-end">
                  <div>
                    <p className="font-semibold text-foreground">
                      {testimonial.name}
                    </p>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.role}
                    </p>
                  </div>
                  <span className="text-xs text-primary/70 italic">
                    {testimonial.status}
                  </span>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
