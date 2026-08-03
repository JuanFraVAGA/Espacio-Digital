import Link from "next/link";

const NAV_LINKS = [
  { href: "#servicios", label: "Qué hacemos" },
  { href: "#diferenciales", label: "Por qué elegirnos" },
  { href: "#productos", label: "Productos" },
  { href: "#contacto", label: "Contacto" },
];

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-black/10 bg-white/80 backdrop-blur dark:border-white/10 dark:bg-black/60">
      <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
        <Link href="#top" className="text-lg font-semibold tracking-tight">
          Espacio Digital
        </Link>
        <nav className="hidden gap-8 text-sm font-medium sm:flex">
          {NAV_LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-foreground/70 transition-colors hover:text-foreground"
            >
              {link.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contacto"
          className="rounded-full bg-foreground px-4 py-2 text-sm font-medium text-background transition-opacity hover:opacity-90"
        >
          Pedir cotización
        </Link>
      </div>
    </header>
  );
}
