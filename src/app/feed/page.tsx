import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import React from "react";

export default function FeedPage() {
  return (
    <>
      <TopNavigation />

      <main className="pt-20 pb-32 px-4 max-w-2xl mx-auto space-y-8">
        <section className="grid grid-cols-2 gap-3">
          <div className="col-span-2 p-6 bg-surface-container-low rounded-xl relative overflow-hidden flex flex-col justify-end min-h-[160px]">
            <div className="absolute inset-0 z-0">
              <img
                alt="Runner in Mumbai"
                className="w-full h-full object-cover opacity-20 grayscale"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDqSLUyMV7O6F0YNl3A0CIIfwkj9ccsHILWb42j3mZL_NTpe17GH_uRCW_xNjD8tXo1uLuX2HliVbneb163Kt7wW_ofIRL4VDkx5y6Q6kDFh0EsosQ_JzauMDUVIBJHTHukKtlXQns2-i9-uver25OjoLkDeiu7XNX2f0iDDdvnmBxh0b6L8ASUWXxeTCjvbwnBPutsZLssOjetht6KyJIt7NI1-ArCNuH5SR5Q-k1A1Bg80omjOFmOcBgSQREl8Cl8j_-BosBPZRHC"
              />
            </div>
            <div className="relative z-10">
              <span className="text-[10px] font-bold uppercase tracking-widest text-primary mb-1 block">
                Weekly Streak
              </span>
              <h2 className="text-4xl font-headline font-extrabold italic tracking-tighter text-on-surface">
                5 DAYS
              </h2>
            </div>
          </div>

          <div className="p-4 bg-primary rounded-xl text-on-primary">
            <span className="text-[10px] font-bold uppercase tracking-widest opacity-80 block mb-1">
              Total Distance
            </span>
            <p className="text-2xl font-headline font-bold">
              42.2<span className="text-sm ml-1 opacity-80">KM</span>
            </p>
          </div>

          <div className="p-4 bg-surface-container rounded-xl">
            <span className="text-[10px] font-bold uppercase tracking-widest text-primary block mb-1">
              Rank
            </span>
            <p className="text-2xl font-headline font-bold text-on-surface">
              #12<span className="text-sm ml-1 text-on-surface-variant font-medium">Local</span>
            </p>
          </div>
        </section>

        <div className="space-y-6">
          {/* Activity Card 1 */}
          <article className="bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
                  <img
                    alt="Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuDq7YOl-e-B-zS0fX4s6c6FM0M80vLbI5Cjbp2O2f61h_6hfm-_P4HXB61nIfGJLMRYDqRNqa-YPW-MXKURbb539f03wDbFfml9fPEc4_PHdT269inwiGtMw5kkAFQAnNwVbNA2lyoD-6pxReL1NjKWMx-zIfTAR1Ua1t3YVKx6xEosySuS9zRXGVvD5TjDE39H5JWK3ZCM1k_sYp-q46e71QyJQLasNJr2VZ0hgGdBjLIHMmZsASvfjwqg36_zv4F9-oLSoYNJpUgH"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Arjun Mehta</h3>
                  <p className="text-xs text-on-surface-variant">
                    2 hours ago • Marine Drive, Mumbai
                  </p>
                </div>
              </div>
              <button className="text-on-surface-variant">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>

            <div className="px-4 pb-2">
              <h4 className="text-xl font-headline font-extrabold italic text-primary">
                Sea Breeze Morning Run
              </h4>
            </div>

            <div className="relative aspect-[4/3] bg-surface-container">
              <img
                alt="Marine Drive Run"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDA3VHjRkq1xXAjXX1N6xFE-pby5LMzT8fXVGaWVNMWX2Xkd-qSdgCU59mQo8r2GyA6t3USVtebgeGWW1MssycicHj32jwKejVDx4dDwHkWtOARAOFlGKwr7uJMc83z2jAaKhQEWNhCWNUxoOFkwHGmWhM6iqRIb0bFrcqjZ2sNwL4k3j-Dt9IR5VCsS2kr95she1kF7ZUlsc1BO_dKOMMm8SFTxiQ7N9GAABBGos_WrsoajOIJEIkeZKUTC0eqk4WTNknwISj1ncOU"
              />
              <div className="absolute bottom-4 left-4 bg-white/80 backdrop-blur-xl p-3 rounded-lg flex gap-4">
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                    Distance
                  </p>
                  <p className="font-headline font-bold text-primary">12.4 km</p>
                </div>
                <div className="w-px bg-outline-variant/30"></div>
                <div>
                  <p className="text-[10px] font-bold uppercase text-on-surface-variant">
                    Pace
                  </p>
                  <p className="font-headline font-bold text-primary">5:12 /km</p>
                </div>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-6 mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Time
                  </span>
                  <span className="font-semibold text-sm">1:04:22</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Elevation
                  </span>
                  <span className="font-semibold text-sm">42m</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Calories
                  </span>
                  <span className="font-semibold text-sm">840 kcal</span>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-primary group">
                    <span
                      className="material-symbols-outlined text-xl transition-transform group-active:scale-125"
                      style={{ fontVariationSettings: "'FILL' 1" }}
                    >
                      favorite
                    </span>
                    <span className="text-sm font-bold">24</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                    <span className="text-sm font-bold">8</span>
                  </button>
                </div>
                <button className="text-on-surface-variant">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </article>

          {/* Activity Card 2 */}
          <article className="bg-surface-container-lowest rounded-xl editorial-shadow overflow-hidden">
            <div className="p-4 flex items-center justify-between">
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-surface-variant overflow-hidden">
                  <img
                    alt="Profile"
                    src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_zfazfFaSf44L2MmlHq_NhqJkkWLTekozJJ7qDcvXGO-RPiDDrCa0aJ4HDiuzZhPqUehxBr9CEFMCYwMMOFFfsZeCy_H_wEuy2JsLpIyUPgiYikPqt4auor9P08ieD1z1diFOimqeKGM98nMrcxyXfuQwxtgTpD_mDInQTWPCFVpHHaDxdFGeHGuY6F0C0fzxQPWOTOITgZypmk_TnaSKJ8ub7yejgyK5JOPWNlkIBp0ClzFqE7N0SQLybJSj2MlA1gofHWbwO9t2"
                  />
                </div>
                <div>
                  <h3 className="font-bold text-sm">Priya Sharma</h3>
                  <p className="text-xs text-on-surface-variant">
                    5 hours ago • Cubbon Park, Bengaluru
                  </p>
                </div>
              </div>
              <button className="text-on-surface-variant">
                <span className="material-symbols-outlined">more_horiz</span>
              </button>
            </div>

            <div className="px-4 pb-2">
              <h4 className="text-xl font-headline font-extrabold italic text-primary">
                Garden City Loop
              </h4>
            </div>

            <div className="relative aspect-[4/3] bg-surface-container">
              <img
                alt="Cycling Cubbon"
                className="w-full h-full object-cover"
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBKxqnzbVZumHcN96zyiiX-5RbnPPXpstJjVfkdkdNzb82nzpK18Qszd4XZB9lsqQYE16F6P_EMezAh60NYkX1tGzQG-32FrWw4GgsuYdzCXnTICeMJSXsiwyHVlgY7rsq5s8_NHwUVMlpCKGGDR4w-MFNhxYzzGffFoFNR7001dFBgZWEj2tcPdN8cROdU4DI_I6ZhwQHpvRBYOz-14rlmVjwMFbq64U6i9vWO2fY_8-fuphD4Go5Yxz-ZLeUGhR5tsHhw0Y7_Yn8T"
              />
              <div className="absolute top-4 right-4 bg-primary/90 text-on-primary backdrop-blur-md p-2 rounded-lg text-center min-w-[60px]">
                <p className="text-[8px] font-bold uppercase tracking-tighter">
                  Avg Speed
                </p>
                <p className="text-lg font-headline font-bold">28.5</p>
                <p className="text-[8px] font-bold uppercase">km/h</p>
              </div>
            </div>

            <div className="p-4">
              <div className="flex items-center gap-6 mb-4">
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Distance
                  </span>
                  <span className="font-semibold text-sm">34.0 km</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Time
                  </span>
                  <span className="font-semibold text-sm">1:12:10</span>
                </div>
                <div className="flex flex-col">
                  <span className="text-[10px] font-bold text-on-surface-variant uppercase">
                    Kudos
                  </span>
                  <div className="flex -space-x-2 mt-1">
                    <div className="w-5 h-5 rounded-full border border-white bg-slate-200"></div>
                    <div className="w-5 h-5 rounded-full border border-white bg-slate-300"></div>
                    <div className="w-5 h-5 rounded-full border border-white bg-slate-400"></div>
                  </div>
                </div>
              </div>

              <div className="flex items-center justify-between pt-4 border-t border-outline-variant/10">
                <div className="flex items-center gap-4">
                  <button className="flex items-center gap-1.5 text-on-surface-variant group">
                    <span className="material-symbols-outlined text-xl transition-transform group-active:scale-125">
                      favorite
                    </span>
                    <span className="text-sm font-bold">42</span>
                  </button>
                  <button className="flex items-center gap-1.5 text-on-surface-variant">
                    <span className="material-symbols-outlined text-xl">
                      chat_bubble
                    </span>
                    <span className="text-sm font-bold">15</span>
                  </button>
                </div>
                <button className="text-on-surface-variant">
                  <span className="material-symbols-outlined">share</span>
                </button>
              </div>
            </div>
          </article>
        </div>
      </main>

      <button className="fixed bottom-24 right-6 w-14 h-14 bg-gradient-to-br from-primary to-primary-container text-on-primary rounded-full shadow-2xl flex items-center justify-center z-50 active:scale-90 transition-transform">
        <span className="material-symbols-outlined text-3xl">add</span>
      </button>

      <BottomNavigation activeTab="feed" />
    </>
  );
}
