import mascotRaccoon from "@/assets/mascot-raccoon.png";

const MascotSection = () => {
  return (
    <section id="campus" className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            <p className="text-primary font-semibold tracking-widest uppercase mb-2">
              Meet Our Mascot
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
              Ricky the Raccoon
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              Named after our beloved hometown of Raccoon City, Ricky embodies
              the spirit of our university: resourceful, adaptable, and
              surprisingly hard to get rid of.
            </p>
            <ul className="space-y-4 text-muted-foreground">
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong className="text-foreground">Curious Nature:</strong>{" "}
                  Ricky loves exploring restricted areas and biohazard zones.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong className="text-foreground">Night Owl:</strong>{" "}
                  Perfect for late-night lab experiments and emergency
                  evacuations.
                </span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-primary font-bold">•</span>
                <span>
                  <strong className="text-foreground">Team Player:</strong>{" "}
                  Will eat anything, including expired samples.
                </span>
              </li>
            </ul>
            <p className="text-sm text-muted-foreground italic mt-6">
              Fun fact: We're on our 47th Ricky. The previous ones are in a
              better place now.*
            </p>
            <p className="text-xs text-muted-foreground mt-2">
              *The Arklay Research Facility basement.
            </p>
          </div>
          <div className="flex justify-center">
            <div className="relative">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-3xl animate-pulse" />
              <img
                src={mascotRaccoon}
                alt="Ricky the Raccoon - Umbrella University Mascot"
                className="relative w-80 h-80 object-contain drop-shadow-2xl"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default MascotSection;
