import { createFileRoute } from '@tanstack/react-router';
import { Shield, Map, Users, Scroll, Sword, Skull } from 'lucide-react';

export const Route = createFileRoute('/')({
  component: LandingPage,
});

function SteamButton({ className = '' }: { className?: string }) {
  return (
    <a
      href="https://store.steampowered.com/app/3422000?utm_source=LandingPage"
      target="_blank"
      rel="noopener noreferrer"
      className={`inline-flex items-center justify-center gap-3 bg-red-900 hover:bg-red-800 text-stone-100 font-serif font-bold tracking-wider uppercase px-8 py-4 rounded-sm border border-red-700 shadow-[0_0_15px_rgba(153,27,27,0.4)] transition-all hover:shadow-[0_0_25px_rgba(153,27,27,0.7)] hover:-translate-y-0.5 ${className}`}
    >
      <Sword className="w-5 h-5" />
      <span>Wishlist on Steam</span>
    </a>
  );
}

function LandingPage() {
  return (
    <div className="min-h-screen bg-stone-950 text-stone-300 font-sans selection:bg-red-900/50">
      {/* Hero Section */}
      <section className="relative w-full min-h-[90vh] flex items-center justify-center overflow-hidden border-b border-stone-800/50">
        {/* Cinematic Background Gradient */}
        <div className="absolute inset-0 bg-gradient-to-br from-stone-900 via-stone-950 to-red-950/20 z-0" />
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/black-scales.png')] opacity-10 z-0 mix-blend-overlay" />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-transparent to-transparent z-10" />

        <div className="relative z-20 container mx-auto px-6 text-center max-w-4xl flex flex-col items-center gap-8 pt-20">
          <div className="inline-flex items-center justify-center gap-2 mb-4">
            <Skull className="w-6 h-6 text-amber-600/70" />
            <span className="uppercase tracking-[0.3em] text-amber-600/70 text-sm font-semibold">A New Era of Strategy</span>
            <Skull className="w-6 h-6 text-amber-600/70" />
          </div>
          
          <h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-black text-transparent bg-clip-text bg-gradient-to-b from-stone-100 via-stone-300 to-stone-500 tracking-tight drop-shadow-2xl">
            [Game Name]
          </h1>
          
          <p className="text-xl md:text-2xl text-stone-400 font-serif max-w-2xl mx-auto leading-relaxed">
            Forge your empire in a brutal, turn-based strategy RPG inspired by the savage tales of Conan. Conquer a dark, unforgiving open world.
          </p>
          
          <div className="mt-8">
            <SteamButton className="text-lg md:text-xl px-12 py-5" />
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="relative py-24 px-6 border-b border-stone-800/50 bg-stone-900/30">
        <div className="container mx-auto max-w-5xl">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div className="space-y-6 text-lg text-stone-400 leading-relaxed">
              <h2 className="text-3xl md:text-4xl font-serif font-bold text-stone-100 mb-8 pb-4 border-b border-red-900/30">
                Survive the Hyborian Wastes
              </h2>
              <p>
                Step into a world where steel and sorcery clash, where weak kings crumble and warlords rise. <strong className="text-amber-500/90">[Game Name]</strong> is a dark, gritty turn-based strategy RPG set in a ruthless, Conan the Barbarian-inspired open world.
              </p>
              <p>
                Command fearsome warbands, siege ancient fortresses, and carve your saga in blood. Whether you rule through fear, diplomacy, or sheer martial might, the world reacts to your every decision.
              </p>
            </div>
            <div className="relative aspect-square md:aspect-[4/3] bg-stone-900 rounded-sm border border-stone-800 shadow-2xl overflow-hidden group">
               <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-30 group-hover:opacity-40 transition-opacity" />
               <div className="absolute inset-0 bg-gradient-to-tr from-red-950/40 to-transparent mix-blend-overlay" />
               {/* Decorative border corners */}
               <div className="absolute top-2 left-2 w-4 h-4 border-t-2 border-l-2 border-amber-700/50" />
               <div className="absolute top-2 right-2 w-4 h-4 border-t-2 border-r-2 border-amber-700/50" />
               <div className="absolute bottom-2 left-2 w-4 h-4 border-b-2 border-l-2 border-amber-700/50" />
               <div className="absolute bottom-2 right-2 w-4 h-4 border-b-2 border-r-2 border-amber-700/50" />
               
               <div className="absolute inset-0 flex items-center justify-center flex-col gap-4 text-stone-500 group-hover:text-stone-400 transition-colors">
                 <Shield className="w-16 h-16 opacity-50" />
                 <span className="font-serif tracking-widest text-sm uppercase">Gameplay Footage</span>
               </div>
            </div>
          </div>
        </div>
      </section>

      {/* Mid-page CTA */}
      <section className="py-20 px-6 bg-red-950/20 border-b border-red-900/20 text-center relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/worn-dots.png')] opacity-10" />
        <div className="relative z-10 container mx-auto max-w-3xl flex flex-col items-center gap-6">
          <h3 className="text-2xl md:text-3xl font-serif font-bold text-stone-200">The battle for the wastes begins soon.</h3>
          <SteamButton />
        </div>
      </section>

      {/* Features Section */}
      <section className="py-24 px-6 border-b border-stone-800/50">
        <div className="container mx-auto max-w-6xl">
          <h2 className="text-3xl md:text-5xl font-serif font-bold text-stone-100 text-center mb-16">
            Forge Your Legend
          </h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: Sword,
                title: "Turn-Based Combat",
                desc: "Deep, tactical grid-based battles where positioning, terrain, and brutal flanking maneuvers mean the difference between victory and death."
              },
              {
                icon: Map,
                title: "Rich Story in an Open World",
                desc: "Explore a vast map in a dark, Conan the Barbarian-inspired setting. Discover ancient ruins, hostile tribes, and a savage, branching narrative."
              },
              {
                icon: Users,
                title: "Army Building & Management",
                desc: "Recruit mercenaries, enslave foes, or rally loyal bannermen. Manage morale, wages, and provisions to keep your horde marching."
              },
              {
                icon: Scroll,
                title: "Deep RPG Character Sheet & Stats",
                desc: "Complex character sheets and stat progression. Customize your warlord with specialized skill trees, legendary gear, and dark sorceries."
              }
            ].map((feature, i) => (
              <div key={i} className="bg-stone-900/40 border border-stone-800 p-8 rounded-sm hover:border-red-900/50 transition-colors group relative overflow-hidden">
                <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-red-900 to-amber-700 transform origin-left scale-x-0 group-hover:scale-x-100 transition-transform duration-300" />
                <feature.icon className="w-10 h-10 text-amber-600/80 mb-6 group-hover:scale-110 transition-transform duration-300" />
                <h3 className="text-xl font-serif font-bold text-stone-200 mb-3">{feature.title}</h3>
                <p className="text-stone-400 leading-relaxed text-sm">
                  {feature.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Inspirations Section */}
      <section className="py-24 px-6 bg-stone-900/30 border-b border-stone-800/50">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="text-2xl md:text-3xl font-serif font-bold text-stone-300 mb-6">
            A Spiritual Successor
          </h2>
          <p className="text-lg text-stone-400 mb-12 max-w-2xl mx-auto">
            Drawing heavy inspiration from the genre's greatest titans. If you've spent countless hours conquering maps and managing warbands, you are home.
          </p>
          
          <div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16">
            <div className="flex items-center gap-4 text-stone-400">
              <span className="font-serif font-bold text-xl uppercase tracking-widest text-amber-600/70">Heroes of Might and Magic</span>
            </div>
            <div className="text-stone-600 hidden md:block">
              <Sword className="w-6 h-6 rotate-45" />
            </div>
            <div className="flex items-center gap-4 text-stone-400">
              <span className="font-serif font-bold text-xl uppercase tracking-widest text-amber-600/70">Mount & Blade</span>
            </div>
          </div>
        </div>
      </section>

      {/* Bottom CTA */}
      <section className="py-32 px-6 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-b from-stone-950 to-red-950/20 z-0" />
        <div className="relative z-10 container mx-auto max-w-4xl text-center flex flex-col items-center gap-8">
          <h2 className="text-4xl md:text-5xl font-serif font-black text-stone-100">
            Ready to claim your throne?
          </h2>
          <p className="text-xl text-stone-400 font-serif max-w-2xl">
            Wishlist <strong className="text-amber-500/90">[Game Name]</strong> today and join the vanguard.
          </p>
          <div className="mt-4">
            <SteamButton className="text-xl px-16 py-6" />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-stone-800/50 bg-stone-950 py-12 px-6 text-center">
        <div className="container mx-auto">
          <div className="flex flex-col md:flex-row items-center justify-between gap-6 opacity-60 hover:opacity-100 transition-opacity">
            <span className="font-serif font-bold text-xl tracking-widest text-stone-300 uppercase">[Game Name]</span>
            <div className="flex items-center gap-6">
              <a href="https://store.steampowered.com/app/3422000?utm_source=LandingPage" className="text-sm text-stone-400 hover:text-stone-200 transition-colors uppercase tracking-wider">
                Steam Store Page
              </a>
              <a href="#" className="text-sm text-stone-400 hover:text-stone-200 transition-colors uppercase tracking-wider">
                Press Kit
              </a>
            </div>
          </div>
          <div className="mt-12 text-stone-600 text-sm border-t border-stone-800/50 pt-8">
            &copy; {new Date().getFullYear()} Savage Domains Studio. All rights reserved. Not affiliated with Conan Properties International.
          </div>
        </div>
      </footer>
    </div>
  );
}
