import Image from "next/image";

const PRODUCTOS = [
  { src: "/products/producto-1.svg", name: "Producto 1" },
  { src: "/products/producto-2.svg", name: "Producto 2" },
  { src: "/products/producto-3.svg", name: "Producto 3" },
  { src: "/products/producto-4.svg", name: "Producto 4" },
];

export default function Productos() {
  return (
    <section id="productos" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Nuestros productos</h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Una muestra de lo que hacemos. Contanos qué necesitás y te
          preparamos una propuesta a tu medida.
        </p>
        <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {PRODUCTOS.map((producto) => (
            <figure
              key={producto.src}
              className="overflow-hidden rounded-2xl border border-black/10 dark:border-white/10"
            >
              <Image
                src={producto.src}
                alt={producto.name}
                width={600}
                height={450}
                className="h-auto w-full"
              />
              <figcaption className="px-4 py-3 text-sm font-medium">
                {producto.name}
              </figcaption>
            </figure>
          ))}
        </div>
      </div>
    </section>
  );
}
