import { ChevronDown } from "lucide-react";
import { Button } from "@/components/ui/button";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between px-8 py-5 max-w-7xl mx-auto">
      <div className="text-2xl font-bold font-heading text-foreground">Etech.</div>
      
      <div className="hidden md:flex items-center gap-8">
        {["Cours", "Professeurs", "Offres"].map((item) => (
          <button key={item} className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
            {item} <ChevronDown className="w-4 h-4" />
          </button>
        ))}
        <button className="text-muted-foreground hover:text-foreground transition-colors font-body text-sm">
          Contact
        </button>
      </div>

      <div className="flex items-center gap-3">
        <Button variant="outline" className="rounded-full border-border text-foreground font-body">
          Connexion
        </Button>
        <Button className="rounded-full bg-primary text-primary-foreground font-body hover:opacity-90">
          Essai Gratuit
        </Button>
      </div>
    </nav>
  );
};

export default Navbar;
