"use client";

import { useState } from "react";

export default function AccountPage() {
  const [mode, setMode] = useState<"signin" | "register">("signin");

  return (
    <main className="min-h-screen bg-[#e8e2d8] px-5 py-8 text-[#171714]">

      <header className="flex items-center justify-between">
        <a
          href="/"
          className="text-[15px] font-medium tracking-[0.18em]"
        >
          LUMYUN
        </a>

        <span className="text-[9px] tracking-[0.16em]">
          ACCOUNT
        </span>
      </header>

      <section className="mx-auto max-w-[420px] pb-16 pt-24">

        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[52px] font-normal leading-[0.9] tracking-[-0.055em]">
          {mode === "signin" ? "Welcome back." : "Create account."}
        </h1>

        <p className="mt-6 max-w-[300px] text-[14px] leading-[1.5]">
          {mode === "signin"
            ? "Sign in to access your LUMYUN account."
            : "Create your LUMYUN account and keep everything in one place."}
        </p>

        <form className="mt-12 space-y-5">

          {mode === "register" && (
            <div>
              <label className="mb-2 block text-[9px] tracking-[0.18em]">
                FULL NAME
              </label>

              <input
                type="text"
                placeholder="Your name"
                className="w-full border-b border-[#171714]/30 bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#171714]/40 focus:border-[#171714]"
              />
            </div>
          )}

          <div>
            <label className="mb-2 block text-[9px] tracking-[0.18em]">
              EMAIL
            </label>

            <input
              type="email"
              placeholder="you@example.com"
              className="w-full border-b border-[#171714]/30 bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#171714]/40 focus:border-[#171714]"
            />
          </div>

          <div>
            <label className="mb-2 block text-[9px] tracking-[0.18em]">
              PASSWORD
            </label>

            <input
              type="password"
              placeholder="••••••••"
              className="w-full border-b border-[#171714]/30 bg-transparent px-0 py-3 text-[15px] outline-none placeholder:text-[#171714]/40 focus:border-[#171714]"
            />
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-[#171714] py-4 text-[10px] tracking-[0.18em] text-[#e8e2d8]"
          >
            {mode === "signin" ? "SIGN IN" : "CREATE ACCOUNT"}
          </button>

        </form>

        <div className="mt-8 text-center">

          <button
            type="button"
            onClick={() =>
              setMode(mode === "signin" ? "register" : "signin")
            }
            className="text-[10px] tracking-[0.12em] underline underline-offset-4"
          >
            {mode === "signin"
              ? "CREATE A LUMYUN ACCOUNT"
              : "ALREADY HAVE AN ACCOUNT? SIGN IN"}
          </button>

        </div>

      </section>

    </main>
  );
}