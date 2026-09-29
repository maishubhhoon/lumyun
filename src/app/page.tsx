import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#e8e2d8] text-[#171714]">
      <Navbar />

      <section className="relative flex min-h-[calc(100svh-72px)] flex-col justify-between overflow-hidden px-5 pb-8 pt-20">
        <div className="relative z-10">
          <p className="mb-6 text-[9px] tracking-[0.22em]">
            LUMYUN COSMETICS
          </p>

          <h1 className="max-w-[370px] text-[clamp(52px,15vw,76px)] font-normal leading-[0.88] tracking-[-0.055em]">
            Something
            <br />
            beautiful
            <br />
            is coming.
          </h1>

          <p className="mt-8 max-w-[290px] text-[14px] leading-[1.55]">
            Thoughtful skincare,
            <br />
            beautifully simplified.
          </p>
        </div>

        <div className="pointer-events-none absolute bottom-[18%] right-[-15%] h-64 w-64 rounded-full border border-[#171714]/10">
          <div className="absolute inset-6 rounded-full border border-[#171714]/10" />
          <div className="absolute inset-12 rounded-full border border-[#171714]/10" />
        </div>

        <div className="relative z-10">
          <div className="mb-5 h-px w-full bg-[#171714]/20" />

          <div className="flex items-end justify-between">
            <p className="text-[9px] tracking-[0.18em]">
              EST. 2026
            </p>

            <p className="text-[9px] tracking-[0.18em]">
              INDIA
            </p>
          </div>
        </div>
      </section>
      <Footer />
    </main>
  );
}