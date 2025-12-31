import { Button } from "./ui/button";
import { AlertTriangle } from "lucide-react";

const CTASection = () => {
  return (
    <section id="admissions" className="py-24 bg-background relative overflow-hidden">
      {/* Biohazard background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute top-1/4 left-1/4 w-64 h-64 rounded-full border-8 border-primary" />
        <div className="absolute bottom-1/4 right-1/4 w-48 h-48 rounded-full border-8 border-primary" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 text-primary px-4 py-2 rounded-full mb-6">
            <AlertTriangle className="w-4 h-4" />
            <span className="text-sm font-medium">
              Applications closing soon - Limited containment capacity
            </span>
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Ready to Join the Future of Science?
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Submit your application today and take the first step toward a
            career in groundbreaking research. Waivers and NDAs provided upon
            acceptance. Next of kin information required.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="default" className="text-lg px-8">
              Apply for Fall 2025
            </Button>
            <Button size="lg" variant="outline" className="text-lg px-8">
              Request Information Packet
            </Button>
          </div>
          <p className="text-xs text-muted-foreground mt-6 italic">
            By applying, you agree to potential exposure to experimental
            compounds and waive all rights to legal action against Umbrella
            Corporation and its subsidiaries.
          </p>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
