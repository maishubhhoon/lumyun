export default function ReturnsPage() {
  return (
    <main className="min-h-screen bg-[#e8e2d8] px-5 py-8 text-[#171714]">
      <header className="flex items-center justify-between">
        <a href="/" className="text-[15px] font-medium tracking-[0.18em]">
          LUMYUN
        </a>

        <span className="text-[9px] tracking-[0.16em]">RETURNS</span>
      </header>

      <section className="mx-auto max-w-[700px] pb-20 pt-24">
        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[52px] font-normal leading-[0.9] tracking-[-0.055em]">
          Returns &
          <br />
          Refunds.
        </h1>

        <p className="mt-8 text-[13px] leading-[1.6] text-[#171714]/70">
          Temporary return information — final policy will be
          published before launch.
        </p>

        <div className="mt-16 space-y-10 text-[14px] leading-[1.7]">
          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              ELIGIBILITY
            </h2>
            <p>
              Return eligibility, applicable conditions and timelines
              will be clearly communicated before the store goes live.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              REFUNDS
            </h2>
            <p>
              Approved refunds will be processed according to the
              final LUMYUN refund policy and applicable payment
              provider timelines.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              DAMAGED ORDERS
            </h2>
            <p>
              If an order arrives damaged or incorrect, customers will
              be able to contact LUMYUN for assistance.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}