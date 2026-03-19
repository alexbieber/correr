"use client";

import BottomNavigation from "@/components/BottomNavigation";
import TopNavigation from "@/components/TopNavigation";
import Link from "next/link";
import { useRouter } from "next/navigation";
import React from "react";

export default function SignInPage() {
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    router.push("/feed");
  };

  return (
    <>
      <TopNavigation showClose />

      <main className="min-h-screen grid grid-cols-1 lg:grid-cols-12 relative overflow-hidden">
        <section className="hidden lg:flex lg:col-span-7 relative overflow-hidden">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{
              backgroundImage:
                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAY_ALsT1B17gWnA0hNVDQ6mckwjl0XEeqUeQLIGcsirbxQOyME2gs_uOeVAzqGNEupdxLLez9n-7FjrB_Ng98nJn6jd0iB7i0rk5oPMlQigmvAEjloom-WbJdyL8Eiqll6S2FkV16UmS0837fYgyyvOkNgwkmB54cVrG0GcbcEvbqh3S-SNB9kQBaQLHhVQ8KSaQJJ0Mdkc2Vxhkl8F9dq-3NZxJMbvC6UBv2elbontAIkVvxed7oBz0h2tgXjwONW7yNXLdKQnYze')",
            }}
          ></div>
          <div className="absolute inset-0 kinetic-overlay backdrop-blur-[2px]"></div>

          <div className="relative z-10 flex flex-col justify-end p-16 w-full">
            <div className="max-w-xl">
              <h2 className="font-headline text-[5rem] font-extrabold text-on-primary leading-none tracking-tighter mb-6">
                BEYOND
                <br />
                THE LIMIT.
              </h2>
              <p className="text-on-primary text-xl font-medium opacity-90 max-w-md border-l-4 border-on-primary pl-6">
                Indian performance, engineered for the elite. Your dawn pursuit starts here.
              </p>
            </div>
          </div>

          <div className="absolute top-32 right-12 flex flex-col gap-4">
            <div className="bg-surface-container-lowest/20 backdrop-blur-xl p-6 rounded-xl border border-white/10">
              <span className="text-on-primary font-headline text-3xl font-black block">
                42.2K
              </span>
              <span className="text-on-primary/70 text-xs font-bold tracking-widest uppercase">
                Distance Target
              </span>
            </div>
            <div className="bg-primary/30 backdrop-blur-xl p-6 rounded-xl border border-white/10 self-end">
              <span className="text-on-primary font-headline text-3xl font-black block">
                04:12
              </span>
              <span className="text-on-primary/70 text-xs font-bold tracking-widest uppercase">
                Target Pace
              </span>
            </div>
          </div>
        </section>

        <section className="lg:col-span-5 flex items-center justify-center p-6 lg:p-16 pt-24 lg:pt-16 bg-surface-bright">
          <div className="w-full max-w-md">
            <div className="mb-12">
              <h1 className="font-headline text-4xl font-extrabold text-on-surface tracking-tight mb-2">
                Welcome Back.
              </h1>
              <p className="text-on-surface-variant font-medium">
                Continue your high-performance journey.
              </p>
            </div>

            <form className="space-y-6" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label
                  className="text-xs font-bold text-on-surface-variant uppercase tracking-widest ml-1"
                  htmlFor="email"
                >
                  Email Address
                </label>
                <div className="relative">
                  <input
                    type="email"
                    id="email"
                    name="email"
                    placeholder="runner@correr.fit"
                    className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-4 rounded-xl text-on-surface placeholder:text-outline/50 transition-all font-medium"
                  />
                </div>
              </div>

              <div className="space-y-2">
                <div className="flex justify-between items-center ml-1">
                  <label
                    className="text-xs font-bold text-on-surface-variant uppercase tracking-widest"
                    htmlFor="password"
                  >
                    Password
                  </label>
                  <Link
                    href="#"
                    className="text-xs font-bold text-primary hover:opacity-70 transition-opacity uppercase tracking-widest"
                  >
                    Forgot Password?
                  </Link>
                </div>
                <div className="relative">
                  <input
                    type="password"
                    id="password"
                    name="password"
                    placeholder="••••••••"
                    className="w-full bg-surface-container-low border-b-2 border-transparent focus:border-primary focus:ring-0 px-4 py-4 rounded-xl text-on-surface placeholder:text-outline/50 transition-all font-medium"
                  />
                </div>
              </div>

              <button
                type="submit"
                className="w-full py-5 bg-gradient-to-br from-primary to-primary-container text-on-primary font-headline font-extrabold text-lg rounded-full shadow-lg shadow-primary/20 hover:shadow-xl hover:scale-[1.02] active:scale-95 transition-all duration-200 uppercase tracking-tighter"
              >
                Sign In
              </button>
            </form>

            <div className="relative my-10 flex items-center">
              <div className="flex-grow h-[1px] bg-outline-variant/20"></div>
              <span className="px-4 text-[10px] font-black text-outline uppercase tracking-[0.3em]">
                Or connect with
              </span>
              <div className="flex-grow h-[1px] bg-outline-variant/20"></div>
            </div>

            <div className="grid grid-cols-2 gap-4">
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-lowest border border-outline-variant/10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
                <img
                  src="https://lh3.googleusercontent.com/aida-public/AB6AXuBi2_PjlSuhQK5I098mmOIqy_USXZiFFOSdhLYctsr-1V4RSVNF8bpeDLgfAP7kNN3p6ZWuN3mk0T0TaCb4xBd_ICUCFsGjP6M8X79QQ_9pNeIaNidMJ3Brlzhur5MPfCeDUXFwdcGNWyN1CG9fDh2U1FBd4mD465S001KuQCfpRUfMAbjPEw_b6YLHr78LnUowiQsj5SQUfe1VodGkVigH0MG3zGIIGroY5TS59peNlGi95KwKCqzbbSltEygO-gY5tcMA9gu8-v1I"
                  alt="Google"
                  className="w-5 h-5"
                />
                <span className="text-sm font-bold text-on-surface tracking-tight">
                  Google
                </span>
              </button>
              <button className="flex items-center justify-center gap-3 py-4 bg-surface-container-lowest border border-outline-variant/10 rounded-full hover:bg-surface-container-low transition-colors active:scale-95">
                <span
                  className="material-symbols-outlined text-xl"
                  style={{ fontVariationSettings: "'FILL' 1" }}
                >
                  ios
                </span>
                <span className="text-sm font-bold text-on-surface tracking-tight">
                  Apple
                </span>
              </button>
            </div>

            <div className="mt-12 text-center">
              <p className="text-on-surface-variant text-sm font-medium">
                Don&apos;t have an account?
                <Link
                  href="/signup"
                  className="text-primary font-bold ml-1 hover:underline underline-offset-4"
                >
                  Join Now
                </Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <BottomNavigation activeTab="signin" />
    </>
  );
}
