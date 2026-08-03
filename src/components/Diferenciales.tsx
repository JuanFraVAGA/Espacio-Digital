const DIFERENCIALES = [
  {
    title: "Atención directa",
    description: "Hablás con quienes van a resolver tu pedido, sin intermediarios.",
  },
  {
    title: "Calidad garantizada",
    description: "Cada producto pasa por un control antes de llegar a tus manos.",
  },
  {
    title: "Tiempos claros",
    description: "Te decimos de entrada cuánto va a tardar y cumplimos con eso.",
  },
  {
    title: "Precios a medida",
    description: "Cotizamos según tu proyecto, sin cargos ocultos.",
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
      </div>
    </section>
  );
}
