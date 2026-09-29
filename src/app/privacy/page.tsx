export default function PrivacyPage() {
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
          PRIVACY
        </span>
      </header>

      <section className="mx-auto max-w-[700px] pb-20 pt-24">
        <p className="mb-6 text-[9px] tracking-[0.22em]">
          LUMYUN OFFICIAL
        </p>

        <h1 className="text-[52px] font-normal leading-[0.9] tracking-[-0.055em]">
          Privacy
          <br />
          Policy.
        </h1>

        <p className="mt-8 text-[13px] leading-[1.6] text-[#171714]/70">
          Temporary legal copy — the final privacy policy will be
          published before LUMYUN officially launches.
        </p>

        <div className="mt-16 space-y-10 text-[14px] leading-[1.7]">
          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              INFORMATION WE COLLECT
            </h2>
            <p>
              Information provided through account creation, orders,
              payments, customer support and other interactions with
              LUMYUN may be collected as necessary to operate our
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              USE OF INFORMATION
            </h2>
            <p>
              Information may be used to process orders, provide
              customer support, maintain accounts and improve our
              services.
            </p>
          </section>

          <section>
            <h2 className="mb-3 text-[11px] tracking-[0.16em]">
              DATA SECURITY
            </h2>
            <p>
              Appropriate measures will be implemented to protect
              information handled through the LUMYUN platform.
            </p>
          </section>
        </div>
      </section>
    </main>
  );
}