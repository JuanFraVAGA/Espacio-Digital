import Link from "next/link";

export default function Hero() {
  return (
    <section id="top" className="mx-auto max-w-6xl px-6 pt-16 pb-20 sm:pt-24 sm:pb-28">
      <div className="max-w-2xl">
        <p className="mb-4 text-sm font-medium uppercase tracking-wide text-foreground/60">
          Espacio Digital
        </p>
        <h1 className="text-4xl font-bold tracking-tight sm:text-5xl">
          Ideas que se convierten en soluciones a medida
        </h1>
        <p className="mt-6 text-lg text-foreground/70">
          Acompañamos a nuestros clientes en cada etapa: desde entender lo que
          necesitan hasta entregar un producto terminado. Contanos tu proyecto
          y armamos una cotización a tu medida.
        </p>
        <div className="mt-8 flex flex-wrap gap-4">
          <Link
            href="#contacto"
            className="rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90"
          >
            Pedir cotización
          </Link>
          <Link
            href="#productos"
            className="rounded-full border border-foreground/20 px-6 py-3 text-sm font-semibold transition-colors hover:bg-foreground/5"
          >
            Ver productos
          </Link>
        </div>
      </div>
    </section>
  );
}
