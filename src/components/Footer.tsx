import UmbrellaLogo from "./UmbrellaLogo";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    academics: [
      "Undergraduate Programs",
      "Graduate Studies",
      "Research Opportunities",
      "Lab Safety Guidelines",
    ],
    campus: [
      "Housing (Underground)",
      "Dining Services",
      "Health Center",
      "Evacuation Routes",
    ],
    resources: [
      "Student Portal",
      "Emergency Protocols",
      "Incident Reports",
      "Alumni Network",
    ],
    connect: [
      "Contact Us",
      "Campus Map",
      "Virtual Tour",
      "Careers at Umbrella",
    ],
  };

  return (
    <footer className="bg-secondary/50 border-t border-border">
      <div className="container mx-auto px-4 py-12">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-8">
          {/* Logo & Info */}
          <div className="lg:col-span-1">
            <div className="flex items-center gap-3 mb-4">
              <UmbrellaLogo className="w-10 h-10" />
              <div className="flex flex-col">
                <span className="text-lg font-bold tracking-wide text-foreground">
                  UMBRELLA
                </span>
                <span className="text-xs text-muted-foreground -mt-1">
                  UNIVERSITY
                </span>
              </div>
            </div>
            <p className="text-sm text-muted-foreground mb-4">
              Advancing humanity through science since 1968.
            </p>
            <p className="text-xs text-muted-foreground italic">
              "Obedience Breeds Discipline,
              <br />
              Discipline Breeds Unity,
              <br />
              Unity Breeds Power,
              <br />
              Power is Life."
            </p>
          </div>

          {/* Links */}
          <div>
            <h4 className="font-semibold text-foreground mb-4">Academics</h4>
            <ul className="space-y-2">
              {footerLinks.academics.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Campus</h4>
            <ul className="space-y-2">
              {footerLinks.campus.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Resources</h4>
            <ul className="space-y-2">
              {footerLinks.resources.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="font-semibold text-foreground mb-4">Connect</h4>
            <ul className="space-y-2">
              {footerLinks.connect.map((link) => (
                <li key={link}>
                  <a
                    href="#"
                    className="text-sm text-muted-foreground hover:text-primary transition-colors"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="border-t border-border mt-8 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-sm text-muted-foreground">
            © {currentYear} Umbrella University. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            umbrella.edu.kg | Raccoon City, Kyrgyzstan | Not affiliated with
            any bioweapons programs
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
