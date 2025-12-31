import { Beaker, Bug, Brain, Dna, Skull, Syringe } from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "./ui/card";

const programs = [
  {
    icon: Beaker,
    title: "Pharmaceutical Sciences",
    description: "Master the art of creating compounds that definitely won't cause any mutations.",
    duration: "4 years",
    note: "Lab safety training mandatory (but often ignored)",
  },
  {
    icon: Dna,
    title: "Genetic Engineering",
    description: "Learn to splice genes with confidence. Side effects are just happy accidents.",
    duration: "5 years",
    note: "Pet policy: No bringing projects home",
  },
  {
    icon: Bug,
    title: "Viral Studies",
    description: "Study the most fascinating pathogens in our state-of-the-art containment facilities.",
    duration: "3 years",
    note: "100% indoor program",
  },
  {
    icon: Brain,
    title: "Neuroengineering",
    description: "Explore the mysteries of consciousness and learn to enhance human potential.",
    duration: "4 years",
    note: "Memory of coursework not guaranteed",
  },
  {
    icon: Syringe,
    title: "Experimental Medicine",
    description: "Push the boundaries of what's medically possible. Ethics committee optional.",
    duration: "6 years",
    note: "Volunteer test subjects appreciated",
  },
  {
    icon: Skull,
    title: "Thanatology Studies",
    description: "Death is just another door. Learn to open it... and occasionally close it.",
    duration: "4 years",
    note: "Field trips to Arklay Mountains",
  },
];

const ProgramsSection = () => {
  return (
    <section id="programs" className="py-24 bg-secondary/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <p className="text-primary font-semibold tracking-widest uppercase mb-2">
            Academic Excellence
          </p>
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
            Our Distinguished Programs
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose from our world-renowned programs designed to create the
            scientists of tomorrow. NDA required upon enrollment.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {programs.map((program, index) => (
            <Card
              key={index}
              className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
            >
              <CardHeader>
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                  <program.icon className="w-6 h-6 text-primary" />
                </div>
                <CardTitle className="text-xl text-foreground">
                  {program.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  {program.description}
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="flex justify-between items-center text-sm">
                  <span className="text-primary font-medium">
                    {program.duration}
                  </span>
                  <span className="text-muted-foreground italic text-xs">
                    {program.note}
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

export default ProgramsSection;
