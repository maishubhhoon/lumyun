export default function AboutPage() {
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
          ABOUT
        </span>
      </header>

      <section className="pb-20 pt-28">

        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN COSMETICS
        </p>

        <h1 className="max-w-[350px] text-[clamp(50px,14vw,72px)] font-normal leading-[0.9] tracking-[-0.055em]">
          Skincare,
          <br />
          thoughtfully
          <br />
          simplified.
        </h1>

        <div className="mt-12 max-w-[340px]">
          <p className="text-[16px] leading-[1.6]">
            LUMYUN is a modern skincare brand built around
            simplicity, intention, and everyday rituals.
          </p>

          <p className="mt-6 text-[16px] leading-[1.6]">
            We believe skincare should feel effortless —
            products that fit naturally into your routine,
            without unnecessary complexity.
          </p>
        </div>

      </section>

      <section className="border-t border-[#171714]/20 pb-12 pt-8">

        <p className="mb-4 text-[9px] tracking-[0.22em]">
          CURRENTLY
        </p>

        <p className="text-[24px] tracking-[-0.02em]">
          Something beautiful is coming.
        </p>

        <p className="mt-4 max-w-[300px] text-[13px] leading-[1.5]">
          Our first collection is currently under development.
          Stay tuned.
        </p>

      </section>

      <footer className="flex justify-between border-t border-[#171714]/20 pt-5 text-[8px] tracking-[0.14em]">
        <span>© 2026 LUMYUN</span>
        <span>INDIA</span>
      </footer>

    </main>
  );
}