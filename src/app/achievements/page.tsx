import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function AchievementsPage() {
  return (
    <>
      <TopNavigation />

      <main className="pt-24 pb-32 px-6 max-w-5xl mx-auto">
        <section className="mb-10">
          <p className="text-primary font-label font-bold uppercase tracking-[0.2em] text-xs mb-2">
            Elite Performance
          </p>
          <h2 className="font-headline font-extrabold text-5xl md:text-7xl text-on-surface tracking-tighter leading-[0.9]">
            Push Your <br /> <span className="text-primary italic">Limits</span>
          </h2>
        </section>

        <section className="relative mb-12 rounded-xl overflow-hidden group">
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent z-10 opacity-80"></div>
          <img
            alt="Epic mountain trail"
            className="w-full h-[450px] object-cover transition-transform duration-700 group-hover:scale-105"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuDwiekjhO_0VE2L9CeI1FgMyeJ_2Cv_-ibh4b-vjQsowVFS3CAdLsvQ0D5BXIZ-a7g-xTrP5-M7xlVDa0p_dHNiFFP3QGCry9uaeRmnkiUlzXwTTaWRQ-CxBh8D6Q6L9YLMLaZgWlIisQd2g7SqMsUDlcecjxTtwiiV6L3XF_gXINumOs0hlWF5fgVLLe7Hxoqx1I9cgGb21mCS4-5pwQ9ZWML1B20L740oiFf6VREUvvLhwmrHKNiS2Fsk1vnto5IjbkACW1ufeste"
          />
          <div className="absolute bottom-0 left-0 p-8 z-20 w-full">
            <div className="flex items-center gap-2 mb-4">
              <span className="px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-sm">
                Featured Challenge
              </span>
              <span className="px-3 py-1 glass-shard text-on-primary text-[10px] font-bold uppercase tracking-widest rounded-sm">
                12 Days Left
              </span>
            </div>
            <h3 className="font-headline text-4xl md:text-5xl font-extrabold text-white mb-4 tracking-tight">
              Monthly 100K Streak
            </h3>
            <div className="flex flex-wrap items-end justify-between gap-6">
              <div className="flex items-center gap-4">
                <div className="w-16 h-16 rounded-full border-4 border-primary/30 flex items-center justify-center relative">
                  <svg
                    className="absolute inset-0 w-full h-full -rotate-90"
                    viewBox="0 0 36 36"
                  >
                    <path
                      className="stroke-primary fill-none"
                      d="M18 2.0845 a 15.9155 15.9155 0 0 1 0 31.831 a 15.9155 15.9155 0 0 1 0 -31.831"
                      strokeDasharray="75, 100"
                      strokeLinecap="round"
                      strokeWidth="4"
                    ></path>
                  </svg>
                  <span className="text-white font-bold text-lg leading-none">
                    75%
                  </span>
                </div>
                <div>
                  <p className="text-on-primary/60 text-sm font-medium">
                    Current Progress
                  </p>
                  <p className="text-white text-xl font-bold">75.4 / 100.0 KM</p>
                </div>
              </div>
              <button className="bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-bold uppercase tracking-widest text-sm hover:opacity-90 transition-all active:scale-95 duration-100 shadow-xl">
                Log Today&apos;s Run
              </button>
            </div>
          </div>
        </section>

        <section className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto md:h-48 border-l-4 border-primary">
            <span className="material-symbols-outlined text-primary text-3xl">
              military_tech
            </span>
            <div>
              <h4 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
                Total Points
              </h4>
              <p className="font-headline text-3xl font-black text-on-surface">
                12,480
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto md:h-48">
            <span className="material-symbols-outlined text-primary text-3xl">
              public
            </span>
            <div>
              <h4 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
                World Rank
              </h4>
              <p className="font-headline text-3xl font-black text-on-surface">
                #412
              </p>
              <p className="text-primary text-[10px] font-bold">+12 Positions</p>
            </div>
          </div>

          <div className="bg-on-surface p-6 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto md:h-48">
            <span className="material-symbols-outlined text-primary-container text-3xl">
              verified
            </span>
            <div>
              <h4 className="text-surface-container-highest/60 text-xs font-bold uppercase tracking-widest mb-1">
                Badges
              </h4>
              <p className="font-headline text-3xl font-black text-surface">24</p>
              <p className="text-surface-container-highest/40 text-[10px] font-medium">
                3 Unlocked this week
              </p>
            </div>
          </div>

          <div className="bg-surface-container-low p-6 rounded-xl flex flex-col justify-between aspect-square md:aspect-auto md:h-48 overflow-hidden relative">
            <div className="absolute -right-4 -top-4 opacity-5 rotate-12">
              <span className="material-symbols-outlined text-9xl">
                local_fire_department
              </span>
            </div>
            <span
              className="material-symbols-outlined text-primary text-3xl"
              style={{ fontVariationSettings: "'FILL' 1" }}
            >
              local_fire_department
            </span>
            <div>
              <h4 className="text-on-surface-variant text-xs font-bold uppercase tracking-widest mb-1">
                Day Streak
              </h4>
              <p className="font-headline text-3xl font-black text-on-surface">
                18
              </p>
            </div>
          </div>
        </section>

        <section>
          <div className="flex items-center justify-between mb-8 border-b border-outline-variant/15 pb-4">
            <h3 className="font-headline text-2xl font-bold tracking-tight">
              Recent Milestones
            </h3>
            <button className="text-primary font-bold text-xs uppercase tracking-widest flex items-center gap-1">
              View All{" "}
              <span className="material-symbols-outlined text-sm">
                arrow_forward
              </span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-container-lowest group hover:bg-surface-container-low transition-colors duration-300">
              <div className="w-16 h-16 bg-surface-container-highest rounded-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">
                  rocket_launch
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline font-bold text-lg text-on-surface">
                    Speed Demon
                  </h4>
                  <span className="text-on-surface-variant text-[10px] font-medium uppercase tracking-widest">
                    Yesterday
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">
                  Completed 5km under 20 minutes for the first time.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="px-3 py-1 bg-primary-container/20 text-primary text-[10px] font-bold rounded-sm">
                  +500 PTS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-container-lowest group hover:bg-surface-container-low transition-colors duration-300">
              <div className="w-16 h-16 bg-surface-container-highest rounded-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-primary text-4xl">
                  terrain
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline font-bold text-lg text-on-surface">
                    Elevation Master
                  </h4>
                  <span className="text-on-surface-variant text-[10px] font-medium uppercase tracking-widest">
                    3 Days Ago
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">
                  Reached a total of 5,000m vertical climb this month.
                </p>
              </div>
              <div className="hidden md:block">
                <span className="px-3 py-1 bg-primary-container/20 text-primary text-[10px] font-bold rounded-sm">
                  +850 PTS
                </span>
              </div>
            </div>

            <div className="flex items-center gap-6 p-4 rounded-xl bg-surface-container-lowest group hover:bg-surface-container-low transition-colors duration-300 opacity-60">
              <div className="w-16 h-16 bg-surface-container-highest rounded-sm flex items-center justify-center shrink-0">
                <span className="material-symbols-outlined text-outline text-4xl">
                  lock
                </span>
              </div>
              <div className="grow">
                <div className="flex justify-between items-start mb-1">
                  <h4 className="font-headline font-bold text-lg text-on-surface">
                    Centurion Run
                  </h4>
                  <span className="text-on-surface-variant text-[10px] font-medium uppercase tracking-widest">
                    Locked
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm">
                  Run 100km total within a single calendar week.
                </p>
              </div>
              <div className="hidden md:block">
                <div className="w-24 bg-outline-variant/30 h-1.5 rounded-full overflow-hidden">
                  <div className="bg-primary h-full w-1/3"></div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNavigation activeTab="ranks" />
    </>
  );
}
