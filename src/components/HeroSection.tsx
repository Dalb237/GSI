import { Play } from "lucide-react";
import { Button } from "@/components/ui/button";
import heroStudent from "@/assets/hero-student.png";

const HeroSection = () => {
  return (
    <section className="relative px-8 max-w-7xl mx-auto pt-8 pb-0 overflow-hidden">
      <div className="grid md:grid-cols-2 gap-8 items-center">
        {/* Left Content */}
        <div className="space-y-6 z-10">
          <h1 className="text-5xl lg:text-6xl font-bold font-heading text-foreground leading-tight">
            Développez vos compétences d'une manière nouvelle et unique
          </h1>
          <p className="text-muted-foreground font-body text-base max-w-md leading-relaxed">
            Explorez une approche transformative du développement des compétences sur notre
            plateforme d'apprentissage en ligne. Découvrez un nouveau monde d'expériences
            éducatives et élevez votre expertise de manière unique.
          </p>
          <div className="flex items-center gap-6">
            <Button className="rounded-full bg-primary text-primary-foreground px-8 py-6 text-base font-body hover:opacity-90">
              S'inscrire
            </Button>
            <button className="flex items-center gap-2 text-foreground font-body text-sm group">
              <span className="w-10 h-10 rounded-full bg-primary flex items-center justify-center group-hover:opacity-90 transition-opacity">
                <Play className="w-4 h-4 text-primary-foreground fill-current" />
              </span>
              C'est quoi Etech ?
            </button>
          </div>
        </div>

        {/* Right - Hero Image with floating cards */}
        <div className="relative flex justify-center items-end">
          {/* Background circle */}
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[420px] h-[420px] rounded-full bg-secondary" />
          
          {/* Student Image */}
          <img
            src={heroStudent}
            alt="Student celebrating"
            className="relative z-10 w-[380px] h-auto object-contain"
            width={800}
            height={900}
          />

          {/* Floating Card - 50+ Online Courses */}
          <div className="absolute top-20 left-4 z-20 bg-card rounded-2xl shadow-lg px-4 py-3 flex items-center gap-3 animate-float">
            <div className="w-9 h-9 rounded-full bg-primary flex items-center justify-center">
              <span className="text-primary-foreground text-xs font-bold">&lt;</span>
            </div>
            <div>
              <p className="font-bold text-foreground text-sm font-heading">50+</p>
              <p className="text-muted-foreground text-xs font-body">Cours en ligne</p>
            </div>
          </div>

          {/* Floating Card - 10k+ Online Students */}
          <div className="absolute top-32 right-0 z-20 bg-card rounded-2xl shadow-lg px-4 py-3 animate-float" style={{ animationDelay: '0.5s' }}>
            <p className="font-bold text-foreground text-sm font-heading">10k+</p>
            <p className="text-muted-foreground text-xs font-body">Étudiants en ligne</p>
            <div className="flex -space-x-2 mt-2">
              {[1,2,3,4].map(i => (
                <div key={i} className="w-7 h-7 rounded-full bg-secondary border-2 border-card" />
              ))}
            </div>
          </div>

          {/* Floating Card - UI Design Class */}
          <div className="absolute bottom-24 left-12 z-20 bg-card rounded-2xl shadow-lg px-4 py-3 animate-float" style={{ animationDelay: '1s' }}>
            <p className="font-bold text-foreground text-xs font-heading">Cours UI Design</p>
            <p className="text-muted-foreground text-[10px] font-body">Aujourd'hui à 12h00</p>
            <Button className="mt-2 rounded-full bg-primary text-primary-foreground text-[10px] px-3 py-1 h-auto hover:opacity-90">
              Rejoindre
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
