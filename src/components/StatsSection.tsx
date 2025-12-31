const stats = [
  { value: "1968", label: "Founded", subtext: "Same year as some incidents" },
  { value: "47", label: "Research Labs", subtext: "12 still accessible" },
  { value: "2.7%", label: "Survival Rate", subtext: "Above industry average" },
  { value: "∞", label: "Career Possibilities", subtext: "Afterlife included" },
];

const StatsSection = () => {
  return (
    <section className="py-16 bg-primary">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div key={index} className="text-center">
              <p className="text-4xl md:text-5xl font-bold text-primary-foreground mb-2">
                {stat.value}
              </p>
              <p className="text-lg font-medium text-primary-foreground/90">
                {stat.label}
              </p>
              <p className="text-sm text-primary-foreground/70 italic">
                {stat.subtext}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
