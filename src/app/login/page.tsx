"use client";

import Link from "next/link";
import { useState } from "react";

export default function LoginPage() {
  const [step] = useState(1);

  return (
    <div className="flex flex-col justify-between min-h-screen" style={{ backgroundColor: "#FFFEF0" }}>
      {/* Header */}
      <div className="w-full rounded-b-lg" style={{ backgroundColor: "#444444" }}>
        <nav className="relative flex flex-col gap-8 pb-4 pt-2 md:py-8">
          <div className="flex h-14 flex-row items-center justify-between px-6 py-2">
            {/* Back button */}
            <button className="mr-auto flex items-center gap-1 text-white/70 hover:text-white transition-colors">
              <svg viewBox="0 0 20 20" className="w-5 fill-current">
                <path fillRule="evenodd" d="M11.78 5.47a.75.75 0 0 1 0 1.06l-3.47 3.47 3.47 3.47a.75.75 0 1 1-1.06 1.06l-4-4a.75.75 0 0 1 0-1.06l4-4a.75.75 0 0 1 1.06 0Z" />
              </svg>
              <span className="text-xs font-bold">Back</span>
            </button>

            {/* Logo */}
            <span className="absolute left-0 right-0 mx-auto w-fit">
              <h1 className="text-xl font-bold text-[#FFDD00]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>GOLD PEPTIDES</h1>
            </span>

            {/* Help button */}
            <div className="ml-auto">
              <button className="text-white/70 hover:text-white transition-colors">
                <svg viewBox="0 0 20 20" className="h-5 w-5 fill-current">
                  <path fillRule="evenodd" d="M10 7.25c-.69 0-1.25.56-1.25 1.25a.75.75 0 0 1-1.5 0 2.75 2.75 0 1 1 3.758 2.56.61.61 0 0 0-.226.147.154.154 0 0 0-.032.046.75.75 0 0 1-1.5-.003c0-.865.696-1.385 1.208-1.586a1.25 1.25 0 0 0-.458-2.414Z" />
                  <path d="M10 14.5a1 1 0 1 0 0-2 1 1 0 0 0 0 2Z" />
                  <path fillRule="evenodd" d="M10 17a7 7 0 1 0 0-14 7 7 0 0 0 0 14Zm0-1.5a5.5 5.5 0 1 0 0-11 5.5 5.5 0 0 0 0 11Z" />
                </svg>
              </button>
            </div>
          </div>

          {/* Progress bar */}
          <div className="w-full px-9">
            <div className="mx-auto flex max-w-[320px] gap-1">
              {[1, 2, 3, 4].map((s) => (
                <div key={s} className="h-2 w-1/4 rounded-full" style={{ backgroundColor: "rgba(255, 221, 0, 0.2)" }}>
                  <div
                    className="h-full rounded-full transition-all duration-500"
                    style={{ width: s <= step ? "100%" : "0%", backgroundColor: "#FFDD00" }}
                  />
                </div>
              ))}
            </div>
          </div>
        </nav>
      </div>

      {/* Main content */}
      <div className="flex w-full flex-col items-center flex-grow py-8 px-4">
        <div className="w-full max-w-sm flex flex-col gap-6">
          {/* Heading */}
          <div>
            <h2 className="text-3xl font-bold text-[#444444]" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Welcome</h2>
            <p className="text-sm text-[#444444]/50 mt-1">Enter your email to continue</p>
          </div>

          {/* Form */}
          <form className="flex flex-col gap-4">
            <input
              autoComplete="email"
              placeholder="Email Address"
              type="email"
              className="w-full h-[60px] px-5 py-4 rounded-2xl border border-[#444444]/15 bg-transparent text-[#444444] placeholder:text-[#444444]/40 focus:outline-none focus:border-[#FFDD00] focus:ring-2 focus:ring-[#FFDD00]/20 transition-colors text-base"
            />

            <button
              type="submit"
              className="w-full h-[60px] rounded-2xl font-bold text-sm text-white transition-colors"
              style={{ backgroundColor: "#444444", fontFamily: "var(--font-oswald), sans-serif" }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#555555")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#444444")}
            >
              Continue
            </button>

            <div className="flex items-center justify-center gap-1">
              <p className="text-sm font-bold text-[#444444]/50" style={{ fontFamily: "var(--font-oswald), sans-serif" }}>Don&apos;t have an account?</p>
              <button type="button" className="text-sm underline text-[#444444] font-semibold">
                Create an account
              </button>
            </div>
          </form>

          {/* Privacy notice */}
          <div className="flex items-center justify-center gap-2 border border-[#444444]/10 p-5 rounded-lg mt-2">
            <svg viewBox="0 0 20 20" className="h-6 w-6 flex-shrink-0" style={{ fill: "#FFDD00" }}>
              <path d="M10.75 13.05a1.5 1.5 0 1 0-1.5 0v.45a.75.75 0 0 0 1.5 0v-.45Z" />
              <path fillRule="evenodd" d="M6.25 7.095v-.345a3.75 3.75 0 1 1 7.5 0v.345a3.001 3.001 0 0 1 2.25 2.905v4a3 3 0 0 1-3 3h-6a3 3 0 0 1-3-3v-4a3 3 0 0 1 2.25-2.905Zm1.5-.345a2.25 2.25 0 0 1 4.5 0v.25h-4.5v-.25Zm-2.25 3.25a1.5 1.5 0 0 1 1.5-1.5h6a1.5 1.5 0 0 1 1.5 1.5v4a1.5 1.5 0 0 1-1.5 1.5h-6a1.5 1.5 0 0 1-1.5-1.5v-4Z" />
            </svg>
            <span className="text-sm text-[#444444]/50">Gold Peptides takes your privacy seriously with industry leading encryption.</span>
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="w-full" style={{ backgroundColor: "#444444" }}>
        <footer className="mx-auto flex w-full flex-col items-center justify-between gap-4 px-8 py-5 md:flex-row md:items-end">
          <div className="flex flex-col items-center gap-1 md:items-start">
            <Link href="mailto:support@goldpeptides.com" className="text-xs text-white/70 hover:text-white transition-colors">
              support@goldpeptides.com
            </Link>
          </div>
          <div className="flex flex-col items-center gap-1 md:items-end">
            <Link href="/privacy" className="text-xs text-white/70 hover:text-white transition-colors">Privacy</Link>
            <Link href="/terms" className="text-xs text-white/70 hover:text-white transition-colors">Terms &amp; Conditions</Link>
            <p className="text-xs text-white/50">&copy; Gold Peptides 2025</p>
          </div>
        </footer>
      </div>
    </div>
  );
}
