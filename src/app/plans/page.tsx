import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function PlansPage() {
  return (
    <>
      <TopNavigation />

      <main className="pt-20 pb-32 px-4 max-w-5xl mx-auto space-y-10">
        <section className="relative group">
          <div className="relative overflow-hidden rounded-full aspect-[4/5] md:aspect-[21/9] bg-surface-container-highest">
            <img
              alt="Runner on Marine Drive Mumbai"
              className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700"
              src="https://lh3.googleusercontent.com/aida-public/AB6AXuBnxYua8_azMxrLO4F3mPVLU5jjyAR0tmpBZkrrQT3w8_KWudlksMSonvVCehkXLVWkyoKWwNssBWX5gDSr0DSE8H_JpTH-FuHK8q6NCiMUO7cLDY_QWKorGd7kZ40qgP6TAN-kpo82SSV0nlEA0qmKMT0fI5BccGe9g_W0ZveSAQMUcXPe3cRudSkGLp5tXnmzgQJG_N7Fc64ta4UbudrWvLiv9p8ZFTL804Yy3seA99nkpIeFai-CcbD6X-SEYPlLZGDlOr8aqjJi"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-primary/90 via-primary/20 to-transparent"></div>
            <div className="absolute bottom-0 left-0 p-8 w-full md:w-2/3 space-y-4">
              <div className="inline-flex items-center gap-2 bg-surface-container-lowest/20 backdrop-blur-md px-3 py-1 rounded-full text-white text-[10px] font-bold uppercase tracking-[0.2em]">
                <span
                  className="material-symbols-outlined text-sm"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  star
                </span>
                Featured Program
              </div>
              <h1 className="font-headline font-extrabold italic text-4xl md:text-6xl text-white leading-[0.9] tracking-tighter uppercase">
                Mumbai Half <br />
                Marathon Prep
              </h1>
              <div className="flex flex-wrap gap-4 items-center pt-2">
                <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    Duration
                  </span>
                  <span className="text-white font-headline font-bold">
                    12 Weeks
                  </span>
                </div>
                <div className="h-8 w-[1px] bg-white/20"></div>
                <div className="flex flex-col">
                  <span className="text-white/60 text-[10px] uppercase font-bold tracking-widest">
                    Level
                  </span>
                  <span className="text-white font-headline font-bold text-primary-container">
                    Intermediate
                  </span>
                </div>
                <button className="ml-auto bg-gradient-to-br from-[#a93000] to-[#ff784e] text-white px-8 py-4 rounded-full font-headline font-extrabold italic tracking-tight hover:shadow-2xl hover:shadow-primary/30 transition-all active:scale-95">
                  ENROLL NOW
                </button>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between px-2">
            <div>
              <span className="text-primary font-bold text-xs uppercase tracking-[0.3em]">
                Start Today
              </span>
              <h2 className="font-headline font-extrabold italic text-3xl tracking-tighter uppercase text-on-surface">
                Running Foundation
              </h2>
            </div>
            <button className="text-primary font-bold text-[10px] uppercase tracking-widest border-b-2 border-primary/20 pb-1 hover:border-primary transition-all">
              View All
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <div className="bg-surface-container-low rounded-full overflow-hidden flex flex-col group border border-transparent hover:border-outline-variant/20 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Urban running track"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuDb5zyGWo4z_9pmrNOY93C0e3-TqvKISGh9naD1g79YL2rEgwZRJM_uyI8924EDUmMn3uZbqt7HhIFS0T4owUH6f-ZeNDyvtetZ5ZVtQhATxlCD7RUFfYT8y1EcOJinBtYtMXNWOMvyrhe5ZZkernLbHpldioEEMwT8EDH0_LjlmTeqKT3qzCht155b2Nn44LbtAQ4El48ZuqEymAnjZtoWPib29-qwJ93XLW3YAhSySkw9aGdLMDTKBEK9k1prLv0GRmBw6wU2qfcs"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[10px] font-black font-headline text-primary uppercase">
                    Beginner
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-extrabold text-2xl tracking-tight leading-tight uppercase">
                    5K Foundation
                  </h3>
                  <span className="font-headline font-black text-3xl text-outline-variant/30 italic">
                    01
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                  Build your aerobic base and learn the fundamentals of sustainable
                  pace management over 8 weeks.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-[11px] font-bold uppercase text-on-secondary-container">
                      <span className="material-symbols-outlined text-sm">
                        calendar_today
                      </span>{" "}
                      8w
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold uppercase text-on-secondary-container">
                      <span className="material-symbols-outlined text-sm">
                        fitness_center
                      </span>{" "}
                      3 sessions/wk
                    </span>
                  </div>
                  <button className="bg-on-surface text-surface px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-surface-container-low rounded-full overflow-hidden flex flex-col group border border-transparent hover:border-outline-variant/20 transition-all">
              <div className="relative h-64 overflow-hidden">
                <img
                  alt="Legs running fast"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuAYtmB10-OGpsRxsj2P0FyqqaFLOtmlXRxpiSHCWYUD1ruLfCLvQV23WArOStsA0FunpdMZ72QntKKgSTUklfG1JCNv8ePby8miPFtL5Uv7R_HhbXsOyyZnM_n_wCaRibur0lN47sO1Vk6vutEg0Cx9luyXwX8gYcfhSwpBBku_W2eebzZNGGZ8CJFuymgqZisEFDR5VVBhdapb3eRWF_bZviUTukvuL1oe2qwRR2ul9xIIbklehHI5yEkKZLANzh7B4TwIhO6FVrbj"
                />
                <div className="absolute top-4 right-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-sm">
                  <span className="text-[10px] font-black font-headline text-primary-dim uppercase">
                    Advanced
                  </span>
                </div>
              </div>
              <div className="p-8 space-y-4">
                <div className="flex justify-between items-start">
                  <h3 className="font-headline font-extrabold text-2xl tracking-tight leading-tight uppercase">
                    10K Speed Elite
                  </h3>
                  <span className="font-headline font-black text-3xl text-outline-variant/30 italic">
                    02
                  </span>
                </div>
                <p className="text-on-surface-variant text-sm font-medium leading-relaxed">
                  Threshold training and interval blocks designed to crush your
                  personal best on the 10K distance.
                </p>
                <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                  <div className="flex gap-4">
                    <span className="flex items-center gap-1 text-[11px] font-bold uppercase text-on-secondary-container">
                      <span className="material-symbols-outlined text-sm">
                        calendar_today
                      </span>{" "}
                      10w
                    </span>
                    <span className="flex items-center gap-1 text-[11px] font-bold uppercase text-on-secondary-container">
                      <span className="material-symbols-outlined text-sm">
                        fitness_center
                      </span>{" "}
                      5 sessions/wk
                    </span>
                  </div>
                  <button className="bg-on-surface text-surface px-6 py-2 rounded-full text-[11px] font-black uppercase tracking-widest hover:bg-primary transition-colors">
                    Enroll
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="space-y-6">
          <div className="flex items-end justify-between px-2">
            <h2 className="font-headline font-extrabold italic text-3xl tracking-tighter uppercase text-on-surface">
              Endurance Clusters
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="md:col-span-2 relative h-[400px] rounded-full overflow-hidden group">
              <img
                alt="Cyclist on mountain"
                className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDsZJchUhFadwxdrrkKG9Griay50Lf1ZOHm3C6TG4dg-wkOx8KKYQyxikCYjuO1Z0L_x10uA_URy1NBdmUsyBITGsbI6ErFLWOHlGAqAltY-79wmeZep7lhkT7KhLrUKu7xMTZEStR6163eHgJsFTEYWHQ2uLap5jiccfahQ7wAdZGkvI9YPJiZLqIff9f2eANQh9n53hLCszA5OkymFQeiXLhwUWSFk_wTrlX7zdMn_B3XSjEIdsIlomIJaotEZNcCQHdDUWTnO3Ny"
              />
              <div className="absolute inset-0 bg-gradient-to-r from-on-surface/80 via-on-surface/40 to-transparent"></div>
              <div className="absolute inset-0 p-10 flex flex-col justify-end">
                <h3 className="font-headline font-extrabold text-3xl text-white uppercase italic tracking-tighter leading-none mb-2">
                  Cycle Century Club
                </h3>
                <p className="text-white/80 text-sm max-w-sm mb-6">
                  Elite 100km preparation program with wattage-based intervals and
                  recovery protocols.
                </p>
                <div className="flex items-center gap-4">
                  <div className="px-4 py-2 bg-primary text-white rounded-full font-headline font-bold text-xs italic tracking-tighter">
                    16 WEEK PROGRAM
                  </div>
                  <button className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white hover:bg-white hover:text-primary transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>

            <div className="bg-primary-container/10 rounded-full p-8 flex flex-col justify-between border border-primary-container/20">
              <div>
                <span className="material-symbols-outlined text-primary text-4xl mb-4">
                  self_improvement
                </span>
                <h3 className="font-headline font-extrabold text-xl text-on-surface leading-tight uppercase mb-2">
                  Athlete <br />
                  Mobility
                </h3>
                <p className="text-on-surface-variant text-xs font-medium">
                  Daily 15-minute routines to improve joint range and reduce injury
                  risk.
                </p>
              </div>
              <div className="space-y-4">
                <div className="flex -space-x-3">
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-variant overflow-hidden">
                    <img
                      alt="User 1"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAKHR99-zo51989ANekUcZVO2nLUZNEtYAP4BlzGCfKRJj509mWF-ihxwAFktDe49Iot9lvNYSMHpCPR5w6_WJMyuRaEJP1u2ePWxhC5i5nAuL997wfQUhiw7N4hOAaFLpZ6x6PycPBrxtONgkmGNa37NVLk5LBUwhXi1qroSW032u3-7pbGKWaKwEPKHbPENxa32fdWNfXNA5KnS9B7f-mme-txLHWvQbkOz8FapP6Ln09QemhwQ0ik-_LD92xV0zqaZTBbZ-4GA1C"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-surface-variant overflow-hidden">
                    <img
                      alt="User 2"
                      src="https://lh3.googleusercontent.com/aida-public/AB6AXuAkoeg1tvcZuwVEgVr_Y2zSyggu31A32MZxRqIcl_H-9vWnZvUgcRk60WXBEPajggyDgTxJdE3Wu-_EWiv3ziPCVeDYL2QyBbq_QZFZQMjn36-aBMbyW4j75EQz2OBPm-XBRBSacTMiIHgwLSd3ul5mzgZ7UrhLje6ZCPFcTn0j2cbpLYHdHM1Rh3Joy22TF8i7eaCZh_2qTKaRmPGSFIbPdlMOCDZlRCtZoxPSW1bfBaa5sVm0KH0FNNlWBVR6JMj3d1sSOR9SJGjo"
                    />
                  </div>
                  <div className="w-8 h-8 rounded-full border-2 border-surface bg-primary text-white flex items-center justify-center text-[8px] font-black italic">
                    +2k
                  </div>
                </div>
                <button className="w-full bg-surface-container-lowest text-primary py-3 rounded-full text-[10px] font-black uppercase tracking-widest shadow-sm">
                  Explore Lab
                </button>
              </div>
            </div>
          </div>
        </section>
      </main>

      <BottomNavigation activeTab="plans" />
    </>
  );
}
