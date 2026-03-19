import Link from "next/link";
import React from "react";

interface BottomNavigationProps {
  activeTab?: "feed" | "record" | "plans" | "ranks" | "profile" | "signin" | "signup";
}

export default function BottomNavigation({ activeTab = "feed" }: BottomNavigationProps) {
  if (activeTab === "signin" || activeTab === "signup") {
    return (
      <nav className="fixed bottom-0 left-0 w-full z-50 flex justify-around items-center px-8 pb-8 pt-4 bg-white/80 dark:bg-[#1a1110]/80 backdrop-blur-xl no-border shadow-[0_-4px_24px_rgba(78,33,32,0.06)] md:hidden">
        <Link
          href="/signin"
          className={`flex flex-col items-center justify-center transition-all duration-200 px-4 py-2 rounded-xl ${
            activeTab === "signin"
              ? "bg-gradient-to-br from-[#a93000] to-[#ff784e] text-white active:scale-90"
              : "text-[#4e2120] dark:text-[#efdfde] opacity-40 hover:bg-[#ffedeb] dark:hover:bg-[#2d1a18]"
          }`}
        >
          <span className="material-symbols-outlined">login</span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">
            Sign In
          </span>
        </Link>
        <Link
          href="/signup"
          className={`flex flex-col items-center justify-center transition-all duration-200 px-8 py-2 rounded-full ${
            activeTab === "signup"
              ? "bg-gradient-to-br from-[#a93000] to-[#ff784e] text-white active:scale-90"
              : "text-[#4e2120] dark:text-[#efdfde] opacity-40 hover:bg-[#ffedeb] dark:hover:bg-[#2d1a18]"
          }`}
        >
          <span
            className="material-symbols-outlined"
            style={{ fontVariationSettings: activeTab === "signup" ? "'FILL' 1" : "" }}
          >
            person_add
          </span>
          <span className="font-label text-[11px] font-bold uppercase tracking-widest mt-1">
            Join Now
          </span>
        </Link>
      </nav>
    );
  }

  const tabs = [
    { id: "feed", icon: "explore", label: "Feed", path: "/feed" },
    { id: "record", icon: "radio_button_checked", label: "Record", path: "/record" },
    { id: "plans", icon: "event_note", label: "Plans", path: "/plans" },
    { id: "ranks", icon: "leaderboard", label: "Ranks", path: "/achievements" },
    { id: "profile", icon: "person", label: "Profile", path: "/profile" },
  ];

  return (
    <footer className="fixed bottom-0 left-0 w-full flex justify-around items-center px-4 pb-6 pt-2 bg-white/80 dark:bg-[#1a0f0e]/80 backdrop-blur-xl z-50 rounded-t-3xl shadow-[0_-4px_24px_rgba(78,33,32,0.06)]">
      {tabs.map((tab) => {
        const isActive = activeTab === tab.id;
        return (
          <Link
            key={tab.id}
            href={tab.path}
            className={`flex flex-col items-center justify-center p-2 transition-all duration-200 ${
              isActive
                ? "bg-gradient-to-br from-[#a93000] to-[#ff784e] text-white rounded-2xl scale-110 -translate-y-1"
                : "text-[#4e2120]/60 dark:text-slate-500 hover:text-[#a93000] dark:hover:text-[#ff784e] active:scale-90"
            }`}
          >
            <span
              className="material-symbols-outlined"
              style={{ fontVariationSettings: isActive ? "'FILL' 1" : "" }}
            >
              {tab.icon}
            </span>
            <span className="font-label text-[10px] font-bold uppercase tracking-widest mt-1">
              {tab.label}
            </span>
          </Link>
        );
      })}
    </footer>
  );
}
