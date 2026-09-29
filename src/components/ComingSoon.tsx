export default function ComingSoon({
  title = "Coming soon.",
}: {
  title?: string;
}) {
  return (
    <main className="min-h-[calc(100svh-72px)] bg-[#e8e2d8] px-5 py-20 text-[#171714]">
      <div className="flex min-h-[70svh] flex-col justify-center">
        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[clamp(52px,15vw,76px)] font-normal leading-[0.88] tracking-[-0.055em]">
          {title}
        </h1>

        <p className="mt-8 max-w-[290px] text-[14px] leading-[1.55]">
          We're creating something beautiful.
          <br />
          Stay tuned.
        </p>
      </div>
    </main>
  );
}