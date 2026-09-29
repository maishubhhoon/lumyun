export default function Footer() {
  return (
    <footer className="border-t border-[#171714]/20 px-5 py-10 text-[#171714]">
      <div className="flex flex-col gap-10">

        <div className="grid grid-cols-2 gap-y-5 text-[9px] tracking-[0.16em]">
          <a href="/shop">SHOP</a>
          <a href="/about">ABOUT</a>

          <a href="/terms">TERMS</a>
          <a href="/privacy">PRIVACY</a>

          <a href="/shipping">SHIPPING</a>
          <a href="/returns">RETURNS</a>

          <a href="/contact">CONTACT</a>
        </div>

        <a
          href="https://www.instagram.com/maishubhhoon/?__pwa=1"
          target="_blank"
          rel="noopener noreferrer"
          aria-label="Instagram"
          className="flex h-9 w-9 items-center justify-center rounded-full border border-[#171714]/30 text-[13px] font-medium"
        >
          IG
        </a>

        <div className="flex justify-between border-t border-[#171714]/20 pt-5 text-[8px] tracking-[0.14em]">
          <span>© 2026 LUMYUN</span>
          <span>INDIA</span>
        </div>

      </div>
    </footer>
  );
}