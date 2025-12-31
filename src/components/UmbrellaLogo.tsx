const UmbrellaLogo = ({ className = "w-12 h-12" }: { className?: string }) => {
  return (
    <svg viewBox="0 0 100 100" className={className}>
      {/* Red and white umbrella octagon logo */}
      <polygon
        points="50,5 85,20 95,55 80,85 50,95 20,85 5,55 15,20"
        fill="hsl(0 85% 45%)"
        stroke="hsl(0 0% 95%)"
        strokeWidth="2"
      />
      <polygon
        points="50,15 75,27 82,52 70,75 50,82 30,75 18,52 25,27"
        fill="hsl(0 0% 95%)"
      />
      <polygon
        points="50,25 65,33 70,50 60,65 50,70 40,65 30,50 35,33"
        fill="hsl(0 85% 45%)"
      />
      <circle cx="50" cy="50" r="12" fill="hsl(0 0% 95%)" />
    </svg>
  );
};

export default UmbrellaLogo;
