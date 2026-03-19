import Link from "next/link";
import React from "react";

export default function Home() {
  return (
    <main className="relative z-10 flex flex-col justify-between min-h-screen p-8 md:p-16">
      <div className="fixed inset-0 z-0">
        <img
          alt="Athlete running at sunrise"
          className="w-full h-full object-cover"
          src="https://lh3.googleusercontent.com/aida-public/AB6AXuB3P4NAtHLsnmaWySlNx0dS3DJyGIOksUi98Twi86XCSWFqSmDHQq2jeYbjkdTP15kFP_51qWbNFfqPg1nYq2ANclifFa5jYQqMVUQvlSTM5kgCL9cqvCxASrG1xxAaIsUV8OG3LKUWeQsGZz0ygMu0lWB4n5Y-pXI4ObBBWmDUp7merpEVB2BiHTxFCsCVDQcoEGlONcqFHwB1-B_7-A_9ELO00CQqbmSvkPxdfuD8lWj-3BjGuxr0INMsA9iHsaPm9aBIqK0FqcJF"
        />
        <div className="absolute inset-0 hero-gradient"></div>
      </div>

      <header className="flex justify-between items-start relative z-10">
        <div className="space-y-1">
          <h1 className="text-3xl font-black italic tracking-tighter text-on-primary font-headline">
            CORRER
          </h1>
          <div className="h-1 w-12 bg-primary"></div>
        </div>

        <div className="hidden md:flex bg-primary-container/20 shard-blur border border-outline-variant/20 rounded-xl p-4 flex-col gap-1 items-end">
          <span className="text-[10px] font-bold uppercase tracking-widest text-primary-fixed">
            Live Pulse
          </span>
          <div className="flex items-center gap-2">
            <span
              className="material-symbols-outlined text-primary-fixed"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              favorite
            </span>
            <span className="text-2xl font-headline font-extrabold text-on-primary">
              142 <span className="text-xs font-normal opacity-70">BPM</span>
            </span>
          </div>
        </div>
      </header>

      <div className="max-w-3xl space-y-12 mb-8 relative z-10">
        <section className="space-y-6">
          <div className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm mb-2">
            Premium Performance
          </div>
          <h2 className="text-6xl md:text-8xl font-headline font-extrabold text-on-primary leading-[0.9] tracking-tighter uppercase italic">
            START YOUR <br />
            <span className="text-primary-fixed">LEGACY.</span>
          </h2>
          <p className="text-lg md:text-xl text-surface-container-high/90 max-w-md font-medium leading-relaxed">
            The most precise tracking for the Indian athlete. Built for the heat,
            the streets, and the podium.
          </p>
        </section>

        <div className="flex flex-col sm:flex-row gap-4">
          <Link
            href="/signup"
            className="group flex items-center justify-center gap-3 bg-gradient-to-r from-primary to-primary-container text-on-primary font-headline font-bold text-lg px-10 py-5 rounded-full shadow-2xl active:scale-95 transition-all duration-200"
          >
            Get Started
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">
              arrow_forward
            </span>
          </Link>
          <Link
            href="/signin"
            className="flex items-center justify-center gap-2 bg-white/10 shard-blur text-on-primary border border-white/20 font-headline font-semibold text-lg px-10 py-5 rounded-full hover:bg-white/20 active:scale-95 transition-all duration-200"
          >
            Sign In
          </Link>
        </div>

        <div className="flex flex-wrap gap-8 pt-8 border-t border-white/10">
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest">
              Accuracy
            </span>
            <span className="text-on-primary font-headline font-bold text-xl">
              99.9%
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest">
              Locales
            </span>
            <span className="text-on-primary font-headline font-bold text-xl">
              28 Cities
            </span>
          </div>
          <div className="flex flex-col">
            <span className="text-[10px] font-bold text-outline-variant uppercase tracking-widest">
              Status
            </span>
            <span className="text-on-primary font-headline font-bold text-xl flex items-center gap-2">
              <span className="w-2 h-2 bg-green-500 rounded-full"></span>
              Optimized
            </span>
          </div>
        </div>
      </div>

      <div className="fixed top-0 right-0 w-1/3 h-full pointer-events-none opacity-20 z-0">
        <div className="absolute inset-0 bg-gradient-to-l from-primary/30 to-transparent"></div>
      </div>
      <div className="fixed bottom-2 left-1/2 -translate-x-1/2 w-32 h-1 bg-on-primary/20 rounded-full md:hidden z-10"></div>
    </main>
  );
}
