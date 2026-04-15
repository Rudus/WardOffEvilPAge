import { createFileRoute } from '@tanstack/react-router';
import React, { useState, useEffect, ReactNode } from 'react';
import { Shield, Map, Users, Scroll, Sword, Menu, X, Play, ChevronRight, Award } from 'lucide-react';

/**
 * TYPE DEFINITIONS
 */
interface GameLogoProps {
  className?: string;
  glow?: boolean;
}

interface SteamButtonProps {
  className?: string;
  variant?: 'primary' | 'outline';
}

interface SectionHeadingProps {
  children: ReactNode;
  subtitle?: string;
  align?: 'center' | 'left';
}

/**
 * REUSABLE COMPONENTS
 */
const GameLogo: React.FC<GameLogoProps> = ({ className = "w-6 h-6", glow = false }) => (
  <div className={`relative flex items-center justify-center ${className}`}>
    {glow && (
      <div className="absolute inset-0 bg-red-600/20 blur-xl rounded-full scale-150 animate-pulse" />
    )}
    <img 
      src="/Icon A.png" 
      alt="Ward Off Evil Logo" 
      className="w-full h-full object-contain relative z-10"
      onError={(e) => {
        (e.target as HTMLImageElement).src = "https://via.placeholder.com/150/991b1b/FFFFFF?text=WOE";
      }}
    />
  </div>
);

const SteamButton: React.FC<SteamButtonProps> = ({ className = '', variant = 'primary' }) => {
  const baseStyles = "inline-flex items-center justify-center gap-3 font-serif font-bold tracking-wider uppercase transition-all duration-300 active:scale-95";
  const variants = {
    primary: "bg-red-900 hover:bg-red-800 text-stone-100 px-8 py-4 rounded-sm border border-red-700 shadow-[0_0_15px_rgba(153,27,27,0.4)] hover:shadow-[0_0_25px_rgba(153,27,27,0.7)] hover:-translate-y-0.5",
    outline: "bg-transparent hover:bg-stone-100/10 text-stone-200 px-8 py-4 rounded-sm border border-stone-700 hover:border-stone-500"
  };

  return (
    <a
      href="https://store.steampowered.com/app/3422000?utm_source=LandingPage"
      target="_blank"
      rel="noopener noreferrer"
      className={`${baseStyles} ${variants[variant]} ${className}`}
    >
      <Sword className="w-5 h-5" />
      <span>Wishlist on Steam</span>
    </a>
  );
};

const SectionHeading: React.FC<SectionHeadingProps> = ({ children, subtitle, align = 'center' }) => (
  <div className={`mb-16 ${align === 'center' ? 'text-center' : 'text-left'}`}>
    {subtitle && (
      <span className="text-amber-600/80 uppercase tracking-[0.3em] text-xs font-bold mb-3 block">
        {subtitle}
      </span>
    )}
    <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 tracking-tight">
      {children}
    </h2>
    <div className={`h-1 w-24 bg-red-900 mt-4 ${align === 'center' ? 'mx-auto' : ''}`} />
  </div>
);

/**
 * LANDING PAGE COMPONENT
 */
function LandingPage() {
  const [isScrolled, setIsScrolled] = useState<boolean>(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 50);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const gameTitle = "Ward Off Evil";

  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-red-900/50 overflow-x-hidden">
      {/* Texture Overlay */}
      <div className="fixed inset-0 pointer-events-none opacity-[0.03] z-[100] bg-[url('https://www.transparenttextures.com/patterns/asfalt-dark.png')]" />

      {/* Navigation */}
      <nav className={`fixed top-0 w-full z-50 transition-all duration-500 border-b ${isScrolled ? 'bg-stone-950/95 backdrop-blur-md py-3 border-stone-800' : 'bg-transparent py-6 border-transparent'}`}>
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <GameLogo className="w-8 h-8" />
            <span className="font-serif font-bold text-xl tracking-tighter text-stone-100 uppercase">{gameTitle}</span>
          </div>

          <div className="hidden md:flex items-center gap-8">
            {['World', 'Features', 'Community'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-sm font-serif uppercase tracking-widest text-stone-400 hover:text-red-500 transition-colors">
                {item}
              </a>
            ))}
            <SteamButton className="py-2.5 px-6 text-sm" />
          </div>

          <button className="md:hidden text-stone-100" onClick={() => setMobileMenuOpen(!mobileMenuOpen)}>
            {mobileMenuOpen ? <X /> : <Menu />}
          </button>
        </div>
        
        {mobileMenuOpen && (
          <div className="md:hidden bg-stone-950 border-b border-stone-800 p-6 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
            {['World', 'Features', 'Community'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} onClick={() => setMobileMenuOpen(false)} className="text-lg font-serif uppercase tracking-widest text-stone-300">
                {item}
              </a>
            ))}
            <SteamButton />
          </div>
        )}
      </nav>

      {/* Hero Section */}
      <section className="relative w-full min-h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-red-950/30 z-0" />
        <div className="relative z-20 container mx-auto px-6 text-center max-w-5xl flex flex-col items-center pt-20">
          <div className="inline-flex items-center justify-center gap-4 mb-6 bg-stone-900/50 backdrop-blur-sm border border-stone-800 px-5 py-2 rounded-full">
            <GameLogo className="w-5 h-5" />
            <span className="uppercase tracking-[0.4em] text-amber-600/70 text-[10px] font-bold">The Cycle is Ending</span>
            <GameLogo className="w-5 h-5" />
          </div>
          
          <h1 className="text-6xl md:text-8xl lg:text-9xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-50 via-stone-300 to-stone-600 tracking-tighter mb-8 leading-none">
            {gameTitle}
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-400 font-serif max-w-3xl mx-auto leading-relaxed mb-12">
            Forge your empire in a brutal, turn-based strategy RPG inspired by the savage tales of Conan. Conquer a dark, unforgiving open world where steel is the only law.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 items-center">
            <SteamButton className="text-lg px-10 py-5" />
          </div>
        </div>
      </section>

      {/* World Section */}
      <section id="world" className="relative py-32 px-6 border-y border-stone-800/50 bg-stone-900/20">
        <div className="container mx-auto max-w-6xl">
          <div className="grid lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-8">
              <SectionHeading subtitle="The World" align="left">
                Survive the <br/>Hyborian Wastes
              </SectionHeading>
              <p className="text-lg text-stone-400 leading-relaxed">
                Step into a world where steel and sorcery clash. <strong className="text-amber-500/90">{gameTitle}</strong> is a dark, gritty turn-based strategy RPG set in a ruthless open world.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Features Grid */}
      <section id="features" className="py-32 px-6">
        <div className="container mx-auto max-w-6xl">
          <SectionHeading subtitle="Gameplay Systems">
            Master the Art of War
          </SectionHeading>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              { icon: Sword, title: "Tactical Combat", desc: "Deep, grid-based battles deciding the fate of your clan." },
              { icon: Map, title: "Savage World", desc: "Explore a vast map inspired by Howard's dark vision." },
              { icon: Users, title: "Warband Logic", desc: "Recruit mercenaries or enslave foes. Manage morale and gold." },
              { icon: Scroll, title: "Deep RPG Stats", desc: "Complex character sheets and specialized skill trees." }
            ].map((feature, i) => (
              <div key={i} className="bg-stone-900/20 backdrop-blur-sm border border-stone-800/50 p-8 rounded-sm hover:border-red-900/50 transition-all group relative overflow-hidden">
                <div className="w-12 h-12 rounded-lg bg-stone-900 flex items-center justify-center mb-6">
                  <feature.icon className="w-6 h-6 text-amber-600/80" />
                </div>
                <h3 className="text-xl font-serif font-bold text-stone-200 mb-3">{feature.title}</h3>
                <p className="text-stone-500 leading-relaxed text-sm">{feature.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/50 bg-stone-950 py-16 px-6">
        <div className="container mx-auto max-w-7xl flex flex-col md:flex-row items-center justify-between gap-12">
          <div className="flex items-center gap-3">
            <GameLogo className="w-8 h-8" />
            <span className="font-serif font-bold text-xl tracking-tighter text-stone-100 uppercase">{gameTitle}</span>
          </div>
          <div className="text-stone-700 text-[10px] uppercase tracking-widest font-bold">
            &copy; {new Date().getFullYear()} Savage Domains Studio.
          </div>
        </div>
      </footer>
    </div>
  );
}

/**
 * EXPORT THE ROUTE
 */
export const Route = createFileRoute('/')({
  component: LandingPage,
});
