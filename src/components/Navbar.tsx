import { ShoppingBag, X } from "lucide-react";

export default function Navbar() {
  return (
    <header className="relative z-[100] flex h-[72px] items-center justify-between px-5 md:px-8">

      {/* Mobile Menu */}
      <div className="md:hidden">
        <input
          type="checkbox"
          id="mobile-menu"
          className="peer hidden"
        />

        {/* Hamburger */}
        <label
          htmlFor="mobile-menu"
          className="flex h-10 w-10 cursor-pointer items-center"
        >
          <span className="flex flex-col gap-[5px]">
            <span className="block h-[1.5px] w-7 bg-[#171714]" />
            <span className="block h-[1.5px] w-7 bg-[#171714]" />
            <span className="block h-[1.5px] w-7 bg-[#171714]" />
          </span>
        </label>

        {/* Full Screen Menu */}
        <div className="pointer-events-none fixed inset-0 z-[999] min-h-screen bg-[#e8e2d8] opacity-0 transition-opacity duration-200 peer-checked:pointer-events-auto peer-checked:opacity-100">

          {/* Menu Header */}
          <div className="flex h-[72px] items-center justify-between px-5">

            <a
              href="/"
              className="text-[15px] font-medium tracking-[0.18em]"
            >
              LUMYUN
            </a>

            {/* Close */}
            <label
              htmlFor="mobile-menu"
              className="flex h-10 w-10 cursor-pointer items-center justify-end"
              aria-label="Close menu"
            >
              <X size={22} strokeWidth={1.5} />
            </label>

          </div>

          {/* Links */}
          <nav className="flex flex-col px-5 pt-12">

            <a
              href="/shop"
              className="border-b border-[#171714]/15 py-5 text-[32px] tracking-[-0.04em]"
            >
              Shop
            </a>

            <a
              href="/about"
              className="border-b border-[#171714]/15 py-5 text-[32px] tracking-[-0.04em]"
            >
              About
            </a>

            <a
              href="/search"
              className="border-b border-[#171714]/15 py-5 text-[32px] tracking-[-0.04em]"
            >
              Search
            </a>

            <a
              href="/account"
              className="border-b border-[#171714]/15 py-5 text-[32px] tracking-[-0.04em]"
            >
              Account
            </a>

          </nav>
        </div>
      </div>

      {/* Logo */}
      <a
        href="/"
        className="text-[15px] font-medium tracking-[0.18em]"
      >
        LUMYUN
      </a>

      {/* Desktop Navigation */}
      <nav className="hidden items-center gap-8 md:flex">
        <a href="/shop" className="text-[10px] tracking-[0.16em]">
          SHOP
        </a>

        <a href="/about" className="text-[10px] tracking-[0.16em]">
          ABOUT
        </a>

        <a href="/search" className="text-[10px] tracking-[0.16em]">
          SEARCH
        </a>

        <a href="/account" className="text-[10px] tracking-[0.16em]">
          ACCOUNT
        </a>
      </nav>

      {/* Bag */}
      <a
        href="/cart"
        className="flex items-center gap-2"
        aria-label="Shopping bag"
      >
        <ShoppingBag size={19} strokeWidth={1.5} />

        <span className="hidden text-[10px] tracking-[0.16em] md:inline">
          BAG (0)
        </span>
      </a>

    </header>
  );
}