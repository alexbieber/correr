import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function ExplorePage() {
  return (
    <>
      <TopNavigation />

      <main className="pt-16 pb-32">
        <section className="relative h-[397px] w-full overflow-hidden mb-12">
          <img
            alt="Runner at sunrise on Marine Drive"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuAEqDA-Hl6LT14UGKZpYjBBZOs4Lb-5MsR5dRKpRfPyPReG_q4OENdnZsVc1YckbJI9Ey3kRt7kosBMXWmOvu5M7F8QrvsNYymnLwPY03E-TQku63zYY1twPyztsvQqza7l3lwAWLxSxC_ydozCyZOPztiUE_cRO_zMQcTsXGzqXuxLwiHavrHFePdgoC49g0p1_HlSIvQhgELXicuilUg5Yd54MuFAX9ZApdEUYWcSAMcQj1BZx45le5ALXGwHqSFqxo3LP5PLGpjg"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent"></div>
          <div className="absolute bottom-8 left-6 right-6">
            <span className="inline-block bg-primary px-3 py-1 rounded-sm text-[10px] font-bold text-on-primary uppercase tracking-widest mb-4">
              MUMBAI EDITION
            </span>
            <h2 className="font-headline font-extrabold text-5xl tracking-tighter text-on-surface mb-2 leading-none">
              MARINE DRIVE
              <br />
              LOOPS
            </h2>
            <p className="font-body text-on-surface-variant max-w-[280px]">
              The Queen&apos;s Necklace at dawn. High speed, low traffic, pure performance.
            </p>
          </div>
        </section>

        <section className="px-6 mb-12">
          <div className="flex flex-col gap-6">
            <div className="relative">
              <input
                type="text"
                placeholder="Search routes in Mumbai..."
                className="w-full bg-surface-container-low border-none rounded-xl h-14 pl-12 focus:ring-2 focus:ring-primary text-on-surface placeholder:text-on-surface-variant/50"
              />
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-primary">
                search
              </span>
            </div>

            <div className="flex p-1 bg-surface-container rounded-full w-fit">
              <button className="px-8 py-2 bg-primary text-on-primary rounded-full font-bold text-sm shadow-xl flex items-center gap-2">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  directions_run
                </span>
                Running
              </button>
              <button className="px-8 py-2 text-on-surface-variant font-bold text-sm flex items-center gap-2">
                <span className="material-symbols-outlined text-sm">
                  directions_bike
                </span>
                Cycling
              </button>
            </div>
          </div>
        </section>

        <section className="px-6 mb-16">
          <div className="group relative aspect-video w-full rounded-2xl overflow-hidden shadow-2xl">
            <div className="absolute inset-0 bg-surface-container-high">
              <img
                alt="Mumbai Map"
                className="w-full h-full object-cover opacity-60"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwN1zykuST-jiKHMNDl-I-oxJR4ncy8T3qZpCgERvCPGnXjdpvT8eIKR4PIzRnHw9-4LgVxkPTG_mR7ghlO-EymqYgLpGdqT8yOkPlyt2n08pfGIz44Y1gdGqfe9Td-SrRjEoFOGG3sntDS8BOTlKA9PN2c4JqMrYvJM9FPZsiqBsYKe0N2oPeLoduyArkYVFBW_e5W-MUdtuqQJv9jtsYvzIFwH9JvILUsGVI2Sja8C41WxrunPrstsivf4RG5x3MKn2DfU4tkAE9"
              />
            </div>

            <div className="absolute top-4 left-4 right-4 flex justify-between">
              <div className="bg-primary-container/80 backdrop-blur-xl px-4 py-2 rounded-xl flex items-center gap-2 border border-white/20">
                <span className="w-2 h-2 rounded-full bg-on-primary animate-pulse"></span>
                <span className="text-xs font-bold text-on-primary-container tracking-wider uppercase">
                  Live Activity: 243 Athletes
                </span>
              </div>
            </div>

            <div className="absolute top-1/2 left-1/3 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
              <div className="bg-primary p-2 rounded-full shadow-lg border-4 border-surface-container-lowest">
                <span
                  className="material-symbols-outlined text-on-primary text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  location_on
                </span>
              </div>
              <div className="mt-2 bg-white px-3 py-1 rounded-lg shadow-sm border border-outline-variant/10">
                <p className="text-[10px] font-black text-primary">
                  MARINE DRIVE 10K
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="px-6">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="font-headline font-extrabold text-3xl tracking-tight text-on-surface">
                NEARBY
                <br />
                ROUTES
              </h3>
            </div>
            <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
              View All{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col gap-6 group hover:bg-surface-container transition-colors duration-300">
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-primary-container flex items-center justify-center text-on-primary-container">
                  <span className="material-symbols-outlined">polyline</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-4xl font-black font-headline tracking-tighter text-on-surface">
                    8.4<span className="text-lg">km</span>
                  </span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Total Distance
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-1">
                  Worli Sea Face Sprint
                </h4>
                <p className="text-sm text-on-surface-variant line-clamp-2">
                  Paved oceanfront route with steady winds and moderate climb at
                  the promenade edge.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">42m</span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Elevation
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-outline-variant/20"></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">Easy</span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Difficulty
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low p-6 rounded-3xl flex flex-col gap-6">
              <div className="flex justify-between items-start">
                <div className="h-12 w-12 rounded-full bg-surface-variant flex items-center justify-center text-on-surface-variant">
                  <span className="material-symbols-outlined">forest</span>
                </div>
                <div className="flex flex-col items-end">
                  <span className="text-4xl font-black font-headline tracking-tighter text-on-surface">
                    12.2<span className="text-lg">km</span>
                  </span>
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Total Distance
                  </span>
                </div>
              </div>
              <div>
                <h4 className="text-xl font-bold text-on-surface mb-1">
                  Sanjay Gandhi Trail
                </h4>
                <p className="text-sm text-on-surface-variant">
                  Forest canopy run. Technical terrain with steep elevation spikes
                  through the valley.
                </p>
              </div>
              <div className="flex items-center gap-4 pt-4">
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">215m</span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Elevation
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-outline-variant/20"></div>
                <div className="flex flex-col">
                  <span className="text-lg font-bold text-primary">Hard</span>
                  <span className="text-[9px] font-bold text-on-surface-variant uppercase tracking-widest">
                    Difficulty
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <div className="fixed bottom-24 right-6 z-[55]">
        <button className="h-16 w-16 bg-gradient-to-br from-primary to-primary-container rounded-full shadow-2xl flex items-center justify-center text-on-primary active:scale-95 duration-100">
          <span
            className="material-symbols-outlined text-3xl"
            style={{ fontVariationSettings: "'wght' 700" }}
          >
            add
          </span>
        </button>
      </div>

      <BottomNavigation activeTab="feed" />
    </>
  );
}
