import Link from "next/link";

const links = [
  { href: "/", label: "Home" },
  { href: "/projects", label: "Projects" },
  { href: "/work", label: "Work" },
  { href: "/blog", label: "Blog" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/40 backdrop-blur">
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-5 py-4">
        <Link href="/" className="font-semibold tracking-wide">
          <span className="text-white">ANJILE</span>
          <span className="text-white/50">.dev</span>
        </Link>

        <div className="hidden gap-5 text-sm text-white/70 md:flex">
          {links.map((l) => (
            <Link key={l.href} href={l.href} className="hover:text-white">
              {l.label}
            </Link>
          ))}
        </div>

        <Link
          href="/contact"
          className="rounded-full border border-white/15 px-4 py-2 text-sm text-white/80 hover:text-white glow-purple"
        >
          Let’s talk
        </Link>
      </nav>
    </header>
  );
}
