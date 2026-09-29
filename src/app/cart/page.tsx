export default function CartPage() {
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
          BAG (0)
        </span>
      </header>

      <section className="flex min-h-[70svh] flex-col items-center justify-center text-center">

        <p className="mb-5 text-[9px] tracking-[0.22em]">
          YOUR BAG
        </p>

        <h1 className="text-[48px] font-normal leading-[0.9] tracking-[-0.05em]">
          Your bag
          <br />
          is empty.
        </h1>

        <p className="mt-6 max-w-[270px] text-[13px] leading-[1.5]">
          Your LUMYUN essentials will appear here.
        </p>

        <a
          href="/shop"
          className="mt-8 bg-[#171714] px-8 py-4 text-[10px] tracking-[0.18em] text-[#e8e2d8]"
        >
          EXPLORE SHOP
        </a>

      </section>

    </main>
  );
}