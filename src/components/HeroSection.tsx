import heroCampus from "@/assets/hero-campus.jpg";
import { Button } from "./ui/button";
import { ChevronDown } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0">
        <img
          src={heroCampus}
          alt="Umbrella University Gothic Campus"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-background/70 via-background/50 to-background" />
      </div>

      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 text-center pt-20">
        <div className="animate-fade-in">
          <p className="text-primary font-semibold tracking-widest uppercase mb-4">
            Est. 1968 • Raccoon City, Kyrgyzstan
          </p>
          <h1 className="text-5xl md:text-7xl font-bold text-foreground mb-6 tracking-tight">
            Our Business is{" "}
            <span className="text-primary">Life Itself</span>
          </h1>
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Where groundbreaking pharmaceutical research meets cutting-edge
            bioengineering. Join the next generation of scientists shaping
            humanity's future.
          </p>
          <p className="text-sm text-muted-foreground italic mb-8">
            *97.3% Graduate Employment Rate | 2.7% Student Survival Rate
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="text-lg px-8">
              Begin Your Journey
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Virtual Campus Tour
            </Button>
          </div>
        </div>

        {/* Scroll Indicator */}
        <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
          <ChevronDown className="w-8 h-8 text-primary" />
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
