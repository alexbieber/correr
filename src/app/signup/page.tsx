import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import Link from "next/link";
import React from "react";

export default function SignUpPage() {
  return (
    <>
      <TopNavigation showClose />

      <main className="relative min-h-screen flex items-center justify-center md:justify-start lg:px-24 md:px-12 px-6 pt-20 pb-24 kinetic-bg">
        <div className="w-full max-w-md bg-white/80 backdrop-blur-xl p-8 rounded-xl editorial-shadow border-none relative overflow-hidden z-10">
          <div className="absolute top-0 left-0 w-1 h-full bg-primary"></div>

          <div className="mb-10">
            <h2 className="font-headline text-4xl font-extrabold tracking-tighter text-on-surface mb-2 uppercase">
              Join the Pack
            </h2>
            <p className="font-body text-on-surface-variant text-sm">
              Every second counts. Start your journey today.
            </p>
          </div>

          <form className="space-y-6">
            <div className="group">
              <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Full Name
              </label>
              <input
                type="text"
                placeholder="ALEX RUNNER"
                className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg font-body text-on-surface placeholder:text-outline-variant/50 transition-all"
              />
            </div>

            <div className="group">
              <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Email Address
              </label>
              <input
                type="email"
                placeholder="alex@correr.com"
                className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg font-body text-on-surface placeholder:text-outline-variant/50 transition-all"
              />
            </div>

            <div className="group">
              <label className="block font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant mb-1 group-focus-within:text-primary transition-colors">
                Password
              </label>
              <div className="relative">
                <input
                  type="password"
                  placeholder="••••••••"
                  className="w-full bg-surface-container-low border-none border-b-2 border-transparent focus:ring-0 focus:border-primary px-4 py-3 rounded-t-lg font-body text-on-surface placeholder:text-outline-variant/50 transition-all"
                />
                <span className="material-symbols-outlined absolute right-4 top-1/2 -translate-y-1/2 text-on-surface-variant cursor-pointer">
                  visibility
                </span>
              </div>
            </div>

            <div className="flex items-start gap-3 mt-4">
              <input
                type="checkbox"
                id="terms"
                className="mt-1 rounded-sm border-outline-variant text-primary focus:ring-primary/20 transition-all cursor-pointer"
              />
              <label
                htmlFor="terms"
                className="font-body text-xs text-on-surface-variant leading-relaxed"
              >
                I agree to the{" "}
                <Link href="#" className="text-primary font-bold hover:underline">
                  Terms of Service
                </Link>{" "}
                and{" "}
                <Link href="#" className="text-primary font-bold hover:underline">
                  Privacy Policy
                </Link>
                .
              </label>
            </div>

            <button className="w-full bg-gradient-to-br from-primary to-primary-container text-on-primary py-4 rounded-full font-headline font-extrabold text-sm uppercase tracking-widest shadow-lg shadow-primary/20 hover:opacity-90 active:scale-95 transition-all duration-200">
              CREATE ACCOUNT
            </button>
          </form>

          <div className="flex items-center gap-4 my-8">
            <div className="flex-1 h-px bg-outline-variant/20"></div>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest text-on-surface-variant/60">
              OR CONTINUE WITH
            </span>
            <div className="flex-1 h-px bg-outline-variant/20"></div>
          </div>

          <div className="grid grid-cols-2 gap-4">
            <button className="flex items-center justify-center gap-2 py-3 bg-white rounded-full border border-outline-variant/10 hover:bg-surface transition-colors active:scale-95 duration-150">
              <img
                src="https://lh3.googleusercontent.com/aida-public/AB6AXuBwFwJgG-OWPSbaE9890ySe_OC7G03QXE8Z5Q0lJIixNIzsluEagrMYm_2ITLHRRMMdiJXwa9zjBLINXr6rWxC2SWbJZSo2sCQuL-vsn8Vngnhy4fI4MHcEJ9T7pgz8Xsbyl0CI-zdgNExJnCM0vFqN8DK-1zYxHxVJe6THmB-V-fvN8SqVq0ngvboX5DqPBbneuyLymnqRVSC0ijRzcqR4EF8yVMx9w91PbKhUUeL8bfgBkiue9koicwEO4W-5PqZJQ04ZSXY8eNTv"
                alt="Google"
                className="w-4 h-4"
              />
              <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">
                Google
              </span>
            </button>
            <button className="flex items-center justify-center gap-2 py-3 bg-white rounded-full border border-outline-variant/10 hover:bg-surface transition-colors active:scale-95 duration-150">
              <span
                className="material-symbols-outlined text-base"
                style={{ fontVariationSettings: "'FILL' 1" }}
              >
                ios
              </span>
              <span className="font-label text-xs font-bold uppercase tracking-widest text-on-surface">
                Apple
              </span>
            </button>
          </div>
        </div>

        <div className="hidden lg:flex flex-col flex-1 justify-center items-end text-right pl-12 pointer-events-none z-10">
          <h3 className="font-headline text-[12vw] leading-[0.85] font-black text-primary/10 tracking-tighter uppercase select-none">
            BEYOND
            <br />
            LIMITS
          </h3>
        </div>
      </main>

      <div className="fixed top-6 right-6 z-50 hidden md:block">
        <p className="font-body text-xs text-on-surface-variant font-medium">
          Already have an account?
          <Link
            href="/signin"
            className="text-primary font-extrabold uppercase tracking-widest ml-2 hover:opacity-80 transition-opacity"
          >
            Sign In
          </Link>
        </p>
      </div>

      <BottomNavigation activeTab="signup" />
    </>
  );
}
