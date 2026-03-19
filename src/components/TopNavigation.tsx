
import React from "react";

interface TopNavigationProps {
  title?: string;
  showBack?: boolean;
  showClose?: boolean;
  rightAction?: React.ReactNode;
  transparent?: boolean;
}

export default function TopNavigation({
  title = "CORRER",
  showBack = false,
  showClose = false,
  rightAction,
  transparent = false,
}: TopNavigationProps) {
  const bgClass = transparent
    ? "bg-transparent"
    : "bg-[#fff4f3] dark:bg-[#1a1110]";

  return (
    <header
      className={`fixed top-0 left-0 w-full z-50 flex justify-between items-center px-6 py-4 transition-colors ${bgClass}`}
    >
      <div className="flex items-center gap-4">
        {showClose && (
          <button className="text-[#a93000] dark:text-[#ff784e] active:scale-95 transition-transform duration-150 cursor-pointer">
            <span className="material-symbols-outlined">close</span>
          </button>
        )}
        {showBack && (
          <button className="text-[#a93000] dark:text-[#ff784e] active:scale-95 transition-transform duration-150 cursor-pointer">
            <span className="material-symbols-outlined">arrow_back</span>
          </button>
        )}
        {!showClose && !showBack && (
          <button className="text-[#a93000] dark:text-[#ff784e] active:scale-95 transition-transform duration-150 cursor-pointer">
            <span className="material-symbols-outlined">menu</span>
          </button>
        )}
        {title === "CORRER" ? (
          <h1 className="font-headline font-black text-2xl text-[#a93000] dark:text-[#ff784e] tracking-[0.2em] uppercase italic">
            CORRER
          </h1>
        ) : (
          <h1 className="font-headline font-bold text-lg text-on-surface">
            {title}
          </h1>
        )}
      </div>

      <div className="flex items-center gap-4">
        {rightAction ? (
          rightAction
        ) : (
          <button className="text-[#a93000] dark:text-[#ff784e] active:scale-95 transition-transform duration-150 cursor-pointer">
            <span className="material-symbols-outlined">notifications</span>
          </button>
        )}
      </div>
    </header>
  );
}
