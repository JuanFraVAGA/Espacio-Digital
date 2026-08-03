const DIFERENCIALES = [
  {
    title: "La primera impresión",
    description: "Es la primera impresión que recibe un cliente de tu empresa.",
  },
  {
    title: "Un año entero",
    description: "Es la agenda que acompañará a un ejecutivo durante todo el año.",
  },
  {
    title: "Respaldo profesional",
    description: "Es la carpeta que respalda una propuesta importante.",
  },
  {
    title: "Tu identidad en cada detalle",
    description: "Es la identidad de tu empresa representada en cada detalle.",
  },
];

export default function Diferenciales() {
  return (
    <section
      id="diferenciales"
      className="border-t border-black/10 bg-foreground/[0.03] dark:border-white/10"
    >
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Qué nos diferencia</h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          Entendemos que una impresión no es solo tinta sobre papel.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-4">
          {DIFERENCIALES.map((item) => (
            <div
              key={item.title}
              className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10"
            >
              <h3 className="text-base font-semibold">{item.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {item.description}
              </p>
            </div>
          ))}
        </div>
        <p className="mt-12 max-w-2xl text-foreground/70">
          Nuestro compromiso es ayudarte a que cada pieza comunique la calidad
          y el prestigio de tu marca.
        </p>
      </div>
    </section>
  );
}
