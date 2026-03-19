import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function ClubsPage() {
  return (
    <>
      <TopNavigation />

      <main className="pt-20 pb-32 px-6 max-w-5xl mx-auto">
        <section className="relative mb-14">
          <div className="relative w-full h-[480px] rounded-xl overflow-hidden editorial-shadow">
            <img
              alt="Group of runners training together in Mumbai"
              className="w-full h-full object-cover"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDGi146dBr98ki6GYpm_I_ANCbnhBN8zXqjV5y7UfgcOXQ4ZxXJAq9J44k4NCLCuFwk7TRV-YGodgis9qySRCaX93NwElu-mwwj9ZhJ-iHFvD_xY3LqyNts0GX0t1YubNk0aZUjiuNCDqnb3Y5eHThRlavc-ylZFYHOA9ylD0kOXRVZ966MQrpdQFS_4sl3kiYc99QT1kv0RMjrK_xtzyoRItwZFUF_OPHwuS2NVAOsZmLswtPZRbaTBQY7XqbG4-CArrdihgLfXZ_q"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-on-surface/90 via-on-surface/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full">
              <div className="inline-flex items-center gap-2 bg-primary text-on-primary px-3 py-1 rounded-sm mb-4">
                <span className="text-[10px] font-bold uppercase tracking-widest font-label">
                  Featured Club
                </span>
              </div>
              <h2 className="text-4xl md:text-6xl font-headline font-extrabold text-white tracking-tighter leading-none mb-4">
                Mumbai Road Runners
              </h2>
              <div className="flex flex-wrap items-center gap-6 text-white/80">
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed">
                    groups
                  </span>
                  <span className="font-semibold">4.2k Members</span>
                </div>
                <div className="flex items-center gap-2">
                  <span className="material-symbols-outlined text-primary-fixed">
                    location_on
                  </span>
                  <span className="font-semibold">Mumbai, MH</span>
                </div>
              </div>
            </div>

            <div className="absolute top-8 right-8 glass-shard p-6 rounded-xl border border-white/10 hidden md:block">
              <p className="text-white font-headline font-bold mb-4">
                Ready to push limits?
              </p>
              <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary px-8 py-4 rounded-full font-headline font-bold text-lg hover:opacity-90 transition-all shadow-xl">
                Join Club
              </button>
            </div>
          </div>

          <div className="mt-6 md:hidden">
            <button className="w-full bg-gradient-to-r from-primary to-primary-container text-on-primary py-5 rounded-full font-headline font-bold text-lg">
              Join Mumbai Road Runners
            </button>
          </div>
        </section>

        <section className="mb-14">
          <div className="flex justify-between items-end mb-8">
            <div>
              <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-1">
                Local Chapters
              </h3>
              <h2 className="text-3xl font-headline font-extrabold tracking-tighter">
                Nearby Communities
              </h2>
            </div>
            <button className="text-primary font-bold text-sm hover:underline">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div className="bg-surface-container-low p-1 rounded-xl flex items-center">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img
                  alt="Runners at night"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2aujppI6_QoQtt-JEBfI1tgailtdy89OZrASSDsGBMutfy2cCu5UuMYmcMwWzL9wykGRfvqJiQXIDURPKchWI9VfuJ60gp9SKK5y3Ca1MpEbTNDXfUTlkWNfp8JrirIGnf3SigZ9IRIm2sFG6GTcP18j7NiaFjPYClisZeXHLOpMu2HSzVqLhfKuAmP0E-R7IERRlvuE0TDOb3jQX92iMgmLt1ka5OgzOMsmWclysDvTVCs9Q0ZdnRTOWO2EGFLhPHnjZEXlG0WPe"
                />
              </div>
              <div className="px-5 py-2 grow">
                <h4 className="font-headline font-bold text-xl tracking-tight">
                  Midnight Milers
                </h4>
                <p className="text-sm text-secondary mb-3">
                  560 active runners • Night runs
                </p>
                <button className="text-primary font-bold text-sm px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  Join
                </button>
              </div>
            </div>

            <div className="bg-surface-container-low p-1 rounded-xl flex items-center">
              <div className="w-24 h-24 rounded-lg overflow-hidden shrink-0">
                <img
                  alt="Early morning run"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAP6TFWxHvDy1x5Eq-boN4kDdV0Sfe-dTllHjvzFkTFE921mBw-bkQtiDEIZ2NKngdg71fkkbCkQAsOaQVvtBiLssqrFsC_a55e2Ge9QcCaG0_eyDYtJaAkgjJXetkNUFEPYUAFFsHF261wZ3SwQyDiBp_ifQrN86TcE0JXZa_Ap-IkC8vyU6iWFKA3rQNdmBwY2YWedNhpEAB11qWbB0P2D0zNQh6U326E3jKtXZ6b2eUKLRoky6TbcWVS4P-z8bbE00qOWAzC7yJm"
                />
              </div>
              <div className="px-5 py-2 grow">
                <h4 className="font-headline font-bold text-xl tracking-tight">
                  Parel Pacers
                </h4>
                <p className="text-sm text-secondary mb-3">
                  1.2k active runners • Technical
                </p>
                <button className="text-primary font-bold text-sm px-4 py-1.5 rounded-full bg-primary/10 hover:bg-primary/20 transition-colors">
                  Join
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          <div className="mb-8">
            <h3 className="text-sm font-bold text-primary uppercase tracking-[0.2em] mb-1">
              Live Feed
            </h3>
            <h2 className="text-3xl font-headline font-extrabold tracking-tighter text-on-surface">
              Community Pulse
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 bg-surface-container-lowest rounded-xl p-8 editorial-shadow">
              <div className="flex items-center gap-4 mb-6">
                <div className="w-12 h-12 rounded-full overflow-hidden">
                  <img
                    alt="Runner profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuAQWF2UquMJgNwDQxBS5tZHgqWwWryVkGycXUWkWk0lDUZA7QtyjrqPznwi89sRdkREWdepmRMY_CltSP3KPRLbIG2c4vtYU_hc0_CoWy09Amco5EPQKG_1VT_oRz0ihKPhVb41SZoWU5uOrGyJ2oYJk-i9QdCb1HsC8sn3DGzdburNI-bjDIqSNuS9Vj5zZAPG3qbJyToegMFE4mIvo5_rhE464Nd7HgAYKtVyn80kcIGNsgCyoMDs97V8ZrJg5rJ933-J8b9t9INK"
                  />
                </div>
                <div>
                  <h5 className="font-bold text-on-surface">Arjun Mehta</h5>
                  <p className="text-xs text-secondary">
                    Mumbai Road Runners • 2h ago
                  </p>
                </div>
              </div>
              <h4 className="text-2xl font-headline font-bold tracking-tight mb-4 leading-snug">
                Conquered the Worli Sea Link stretch this morning. PR alert! 🚀
              </h4>
              <div className="flex gap-8 border-t border-outline-variant/10 pt-6">
                <div>
                  <span className="block text-xs uppercase font-bold text-secondary tracking-widest mb-1">
                    Distance
                  </span>
                  <span className="text-2xl font-headline font-black text-primary italic">
                    21.1<small className="text-sm italic">km</small>
                  </span>
                </div>
                <div>
                  <span className="block text-xs uppercase font-bold text-secondary tracking-widest mb-1">
                    Pace
                  </span>
                  <span className="text-2xl font-headline font-black text-primary italic">
                    4:45<small className="text-sm italic">/km</small>
                  </span>
                </div>
              </div>
            </div>

            <div className="bg-primary text-on-primary rounded-xl p-8 flex flex-col justify-between">
              <div>
                <span
                  className="material-symbols-outlined text-4xl mb-4"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  emoji_events
                </span>
                <h4 className="text-xl font-headline font-bold leading-tight">
                  Weekly Challenge: Sea Breeze Run
                </h4>
              </div>
              <div className="mt-8">
                <div className="w-full bg-white/20 h-1.5 rounded-full mb-2">
                  <div className="bg-white w-3/4 h-full rounded-full"></div>
                </div>
                <p className="text-sm font-bold">1,240 runners joined</p>
              </div>
            </div>

            <div className="bg-surface-container rounded-xl p-6">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-10 h-10 rounded-full overflow-hidden">
                  <img
                    alt="Runner"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDXiVDfAbVWDQCQvlaul85PWh4wJd45OTdiJo119cLQKMRMOSZoza8odCFFI-F9J10LYmc0TZ4ZyxHlx9tlB0Wm1AyeCQEagkpIlbGsxTRjuAdl3CRQEgTQcfAe8LycZXXvxVdtsyYdhtsKc1JWYI8_Fb3xpmSRv5e2twQlFMwPX9qN5beOBRx8WsQgzkBByomV0lvLzd3ZtQuTBeAphpQkXcODOj5aGwqrEUhFClkUT-4TGHV28j6gb55sXBEWLNWpETv8p6qIbm-9"
                  />
                </div>
                <span className="font-bold text-sm">Priya S. posted an update</span>
              </div>
              <div className="aspect-square rounded-lg overflow-hidden mb-4">
                <img
                  alt="Shoes"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBP2fjihaOIQUh4zd3BiEIUdlOT3rnvnQes7bd9qfGK0krVUlSwPfZVpPAKO51yS76CWxE4f9YKIF_f9QJ-54sE8doEJ7XPe9vIacaQOxA08xqgTJ8RUKUUT1oVlsdtDTr4olem3tMkyXz5vhmuSMyMwVGvn4egl4uuroERB-OxFepeB5RmXVK4EvH4tt4q_G_VKVJ8LdRwDCAXVVpsOio06lTMMO3HybwPO9jH69lN6R0btrYkdp83AcqN3Lt1YZni8r7Ce60LBNm8"
                />
              </div>
              <p className="text-sm font-medium leading-relaxed">
                New gear day! Ready for the Midnight Milers meetup tonight at
                Marine Drive.
              </p>
            </div>

            <div className="bg-surface-container-high rounded-xl p-6 flex flex-col justify-center items-center text-center">
              <span className="material-symbols-outlined text-primary text-4xl mb-2">
                forum
              </span>
              <span className="text-3xl font-headline font-black text-on-surface">
                15+
              </span>
              <p className="text-xs font-bold uppercase tracking-widest text-secondary">
                Active Discussions
              </p>
            </div>

            <div className="md:col-span-1 bg-white rounded-xl p-6 border-l-4 border-primary shadow-sm">
              <p className="text-sm text-secondary italic mb-2">
                &quot;The best way to see Mumbai is at 5 AM with 50 other crazy people.&quot;
              </p>
              <p className="font-bold text-on-surface">— Rahul K., Parel Pacers</p>
            </div>
          </div>
        </section>
      </main>

      <BottomNavigation activeTab="feed" />
    </>
  );
}
