export default function ShippingPage() {
  return (
    <main className="min-h-screen bg-[#e8e2d8] px-5 py-8 text-[#171714]">
      <header className="flex items-center justify-between">
        <a href="/" className="text-[15px] font-medium tracking-[0.18em]">
          LUMYUN
        </a>

        <span className="text-[9px] tracking-[0.16em]">SHIPPING</span>
      </header>

      <section className="mx-auto max-w-[700px] pb-20 pt-24">
        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[52px] font-normal leading-[0.9] tracking-[-0.055em]">
          Shipping
          <br />
          Policy.
        </h1>

        <p className="mt-8 text-[13px] leading-[1.6] text-[#171714]/70">
          Temporary shipping information — final policy will be
          published before launch.
        </p>

        <div className="mt-16 space-y-10 text-[14px] leading-[1.7]">
          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              PROCESSING
            </h2>
            <p>
              Orders will be processed and prepared for dispatch after
              successful payment confirmation.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              DELIVERY
            </h2>
            <p>
              Available shipping methods, estimated delivery times and
              applicable charges will be displayed during checkout.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              TRACKING
            </h2>
            <p>
              Tracking information will be provided when available
              after an order has been dispatched.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}