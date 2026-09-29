export default function TermsPage() {
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
          TERMS
        </span>
      </header>

      <section className="mx-auto max-w-[700px] pb-20 pt-24">
        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[52px] font-normal leading-[0.9] tracking-[-0.055em]">
          Terms &
          <br />
          Conditions.
        </h1>

        <p className="mt-8 text-[13px] leading-[1.6] text-[#171714]/70">
          Temporary legal copy — final terms and conditions will be
          published before LUMYUN officially launches.
        </p>

        <div className="mt-16 space-y-10 text-[14px] leading-[1.7]">
          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              GENERAL
            </h2>
            <p>
              By using this website, you agree to comply with the
              applicable terms governing your use of the LUMYUN website
              and services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              PRODUCTS & ORDERS
            </h2>
            <p>
              Product information, pricing, availability, orders and
              payment terms will be provided on the website at the time
              of purchase.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              CONTACT
            </h2>
            <p>
              For questions regarding these terms, please contact
              LUMYUN through the official contact details provided on
              the website.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}