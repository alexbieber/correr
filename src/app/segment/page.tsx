import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function SegmentPage() {
  return (
    <>
      <TopNavigation showBack />

      <main className="pb-32">
        <section className="relative h-[397px] w-full overflow-hidden">
          <img
            alt="Marine Drive Mumbai at sunrise"
            className="w-full h-full object-cover"
            src="https://lh3.googleusercontent.com/aida-public/AB6AXuCktM_TKMruyvdZ18kdpMqeZG92HJpYVz-vn9bqGwlpKUd2Iyfle1qZLYrv21uc560217gRgdvpusLsLrynT2ylOaQLM3y5G3fkrlEXna8cz9KFxf5dKHpzB_EBrTilS6RQsBVDywrx0yobUsrl2Rp849QSkvA0D8qGNogMoZVEnk7r53_PdFKZqUeDuI72Z3Fkvnon4Aoc9FF4Tv714-Bxpi8iQs9o31WUQCB7jqSAuiyECQild6fc2oU_710KQlZTkHvgOo7QefvQ"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-on-surface via-transparent to-transparent opacity-60"></div>
          <div className="absolute bottom-0 left-0 p-8 w-full">
            <span className="inline-block px-3 py-1 bg-primary text-on-primary text-[10px] font-bold uppercase tracking-[0.2em] rounded-sm mb-3">
              Popular Segment
            </span>
            <h2 className="font-headline text-4xl font-extrabold text-surface tracking-tighter leading-none mb-1">
              Marine Drive 5K Loop
            </h2>
            <p className="text-surface-dim font-medium flex items-center gap-2">
              <span className="material-symbols-outlined text-sm">location_on</span>{" "}
              Mumbai, Maharashtra
            </p>
          </div>
        </section>

        <section className="px-6 -mt-10 relative z-10">
          <div className="grid grid-cols-3 gap-1 bg-surface-container-lowest p-1 rounded-xl shadow-2xl shadow-on-surface/5">
            <div className="bg-surface-container-low p-6 rounded-lg text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Distance
              </p>
              <p className="font-headline text-2xl font-black text-primary italic">
                5.02<span className="text-xs ml-1 italic">KM</span>
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Avg Grade
              </p>
              <p className="font-headline text-2xl font-black text-on-surface italic">
                0.2<span className="text-xs ml-1 italic">%</span>
              </p>
            </div>
            <div className="bg-surface-container-low p-6 rounded-lg text-center">
              <p className="text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1">
                Attempts
              </p>
              <p className="font-headline text-2xl font-black text-on-surface italic">
                12.4K
              </p>
            </div>
          </div>
        </section>

        <section className="mt-12 px-6">
          <div className="flex justify-between items-end mb-6">
            <div>
              <h3 className="font-headline text-2xl font-extrabold tracking-tighter text-on-surface">
                Pace Density
              </h3>
              <p className="text-secondary text-sm">How athletes perform on this loop</p>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-widest text-primary">
                Target
              </p>
              <p className="font-headline font-bold text-on-surface">4:15/km</p>
            </div>
          </div>

          <div className="bg-surface-container-low p-8 rounded-xl relative overflow-hidden">
            <div className="flex items-end justify-between h-32 gap-1">
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[20%]"></div>
              <div className="flex-1 bg-primary/20 rounded-t-sm h-[35%]"></div>
              <div className="flex-1 bg-primary/40 rounded-t-sm h-[60%]"></div>
              <div className="flex-1 bg-primary/60 rounded-t-sm h-[85%]"></div>
              <div className="flex-1 bg-primary rounded-t-sm h-[100%] relative">
                <div className="absolute -top-10 left-1/2 -translate-x-1/2 flex flex-col items-center">
                  <span className="bg-on-surface text-surface text-[10px] px-2 py-0.5 rounded-full font-bold">
                    YOU
                  </span>
                  <div className="w-0.5 h-4 bg-on-surface"></div>
                </div>
              </div>
              <div className="flex-1 bg-primary/70 rounded-t-sm h-[75%]"></div>
              <div className="flex-1 bg-primary/50 rounded-t-sm h-[50%]"></div>
              <div className="flex-1 bg-primary/30 rounded-t-sm h-[30%]"></div>
              <div className="flex-1 bg-primary/10 rounded-t-sm h-[15%]"></div>
            </div>

            <div className="flex justify-between mt-4 border-t border-outline-variant/20 pt-2 text-[10px] font-bold text-secondary tracking-widest uppercase">
              <span>6:30/km</span>
              <span>5:15/km</span>
              <span>4:00/km</span>
            </div>
          </div>
        </section>

        <section className="mt-8 px-6">
          <div className="bg-primary bg-gradient-to-br from-primary to-primary-dim p-6 rounded-xl text-on-primary flex items-center justify-between shadow-xl shadow-primary/20">
            <div className="flex items-center gap-5">
              <div className="w-16 h-16 rounded-full border-4 border-on-primary/20 overflow-hidden relative">
                <img
                  alt="Athlete Profile"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDUTYvASXRJG97VVSTUn0LQe47oL93VwV-7AFKWtTO1q7Psku2NVunZrQv0DHjvmTIk0rdJmBvNEKqsDtJa-KSlvB8jlQQ9Irr7w8vizaQ_76eEWylIsIDQG3wt2MMblO2Rr-yPaYua7XWvIC_12FZgyyQJDzQu7DBLo5vjiDHk4HUmTSH5_ww3PA35iGOjUeglBp_XBbqodd4y3il9FZTmFhrRpNRo9WaQHAIeP8dFJTLIkp962mqs1OglNpqrSM5iszVKeO3TVn3c"
                />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                  Your Rank
                </p>
                <h4 className="font-headline text-3xl font-black tracking-tighter italic">
                  #142<span className="text-sm font-bold opacity-70 ml-1 italic">/ 12.4K</span>
                </h4>
              </div>
            </div>
            <div className="text-right">
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] opacity-80">
                Personal Best
              </p>
              <p className="font-headline text-xl font-bold italic">21:14</p>
            </div>
          </div>
        </section>

        <section className="mt-12 px-6">
          <div className="flex justify-between items-center mb-6">
            <h3 className="font-headline text-2xl font-extrabold tracking-tighter text-on-surface uppercase italic">
              Top Athletes
            </h3>
            <button className="text-xs font-bold text-primary flex items-center gap-1">
              VIEW ALL <span className="material-symbols-outlined text-sm">chevron_right</span>
            </button>
          </div>

          <div className="space-y-4">
            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl group hover:bg-surface-container transition-colors">
              <span className="font-headline font-black italic text-primary text-xl w-8">
                01
              </span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-container">
                <img
                  alt="Arjun Mehta"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAeFJE2lCKS-Oz_v7GxEzjWkBfcWSsCF5eQKRjDeGP-6LnJT546JBbkU1sb4g6kguUNiQuyIWLNBO42dGSLdIFfDAL9bpMSFm9cvTR2QNforNBLFzgcv1i0fWUOn3J61UcqpupxBarB21IFjPH5ino_YXMSnOZl674A5Fw-NsCy5acefAIIoFDVLZpwPk49bgc1Ienjk7GCRp7jmPQgiqc9c3QxODj8itbO_SJMEm6wWX2YlLom_vV8d6M_l-1-a68hqoSFIdQ4EUPq"
                />
              </div>
              <div className="flex-1">
                <p className="font-headline font-bold text-on-surface">Arjun Mehta</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                  Team Mumbai Roadies
                </p>
              </div>
              <div className="text-right">
                <p className="font-headline font-black italic text-on-surface">
                  17:42
                </p>
                <p className="text-[10px] text-primary font-bold">3:32/km</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl group hover:bg-surface-container transition-colors">
              <span className="font-headline font-black italic text-on-surface-variant text-xl w-8">
                02
              </span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-container">
                <img
                  alt="Priya Singh"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuCg5cXsf2tB8po9kJ0RrC8jtMZxigY3ueZRDG8V0k4SNWvGWYu-iGTVhYn4LrurEDVMbpsGG7m4ERYoXcnsBpomnlhKlxWB4ecCHmvbLplk8PKZLW8l-NC7UdVUy243N1eP8E4J8ext8sqZbGXXo6pV7wTz9oGvffjq2z2U-UFMlPFutV85sa1gKFKidfx9Tol0dz23tFUGP0k6oWdhDXMxwhAl1pYDVCJf25hsQkGJ96H4rw875nRnm1gCd-e5-1aQ2MHBktq20aSs"
                />
              </div>
              <div className="flex-1">
                <p className="font-headline font-bold text-on-surface">Priya Singh</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                  Solo Runner
                </p>
              </div>
              <div className="text-right">
                <p className="font-headline font-black italic text-on-surface">
                  18:05
                </p>
                <p className="text-[10px] text-primary font-bold">3:37/km</p>
              </div>
            </div>

            <div className="flex items-center gap-4 bg-surface-container-low p-4 rounded-xl group hover:bg-surface-container transition-colors">
              <span className="font-headline font-black italic text-on-surface-variant text-xl w-8">
                03
              </span>
              <div className="w-12 h-12 rounded-full overflow-hidden bg-secondary-container">
                <img
                  alt="Kabir Das"
                  className="w-full h-full object-cover"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAOn-GXms27V0DH-lp5_LC4n0_303qak8W2oLtCw_2tJP09mY6DH83Ie0Cx6PAnbZXRW-UCWszNRw6XQOzJXuAZoyN5FAwQEmLtr2X1czhryKOl4R2mbkllzz8GPWHQAJF1YRXCsWKVDMOzzSCttmg9UWDhy4KPME11NSkw_K5VxbeWbswGxQDBVgHF1BSBPxGWUoIBQX-DwYbuGRgqBe9C4kwunUznvkwiuvnABWSiHQmTWzpSegqeRnksRUYt7BK7Vbw-9kauslnb"
                />
              </div>
              <div className="flex-1">
                <p className="font-headline font-bold text-on-surface">Kabir Das</p>
                <p className="text-[10px] text-secondary font-bold uppercase tracking-widest">
                  Marine Striders
                </p>
              </div>
              <div className="text-right">
                <p className="font-headline font-black italic text-on-surface">
                  18:12
                </p>
                <p className="text-[10px] text-primary font-bold">3:38/km</p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-12 px-6">
          <h3 className="font-headline text-2xl font-extrabold tracking-tighter text-on-surface mb-4">
            Segment Route
          </h3>
          <div className="rounded-2xl overflow-hidden h-48 bg-surface-container relative">
            <img
              alt="Map of Marine Drive Loop"
              className="w-full h-full object-cover opacity-50 grayscale hover:grayscale-0 transition-all duration-500"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuDU7DU077z_PwSCSDXSzQIedG9lb3Qop-o_OpvSM8DdI2u5g2KKbAaGmS7xoUjocdx8qkSvV21YIBY4HZ195ZC-S_78Xomfh9jVQuVUabbBaiFdcUuO8oPSqdVh-JXZdpsC8dtp4OWQSQMeZkJ53VyxKgZUiVRXt0SxOwA_N_xXk4Dd7ZB9XUba5fzyzyxeYGpmYMsDbbdX5ssDczXFdPLCwquw_WRTHJQ93eOpfRlQFpMsUZ7GkuY8urI9xAFZYPOjn89Sqhp0JJMk"
            />
            <div className="absolute inset-0 flex items-center justify-center">
              <button className="bg-primary text-on-primary font-bold py-3 px-8 rounded-full shadow-lg shadow-primary/40 flex items-center gap-2">
                <span className="material-symbols-outlined">map</span> VIEW INTERACTIVE MAP
              </button>
            </div>
          </div>
        </section>
      </main>

      <button className="fixed bottom-28 right-6 w-16 h-16 bg-primary rounded-full shadow-2xl shadow-primary/40 flex items-center justify-center text-on-primary active:scale-90 transition-transform z-40">
        <span
          className="material-symbols-outlined text-3xl"
          style={{ fontVariationSettings: "'FILL' 1" }}
        >
          play_arrow
        </span>
      </button>

      <BottomNavigation activeTab="feed" />
    </>
  );
}
