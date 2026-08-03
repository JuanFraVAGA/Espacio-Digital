const SERVICIOS = [
  {
    title: "Asesoramiento personalizado",
    description:
      "Escuchamos tu necesidad y te proponemos la mejor solución, sin vueltas.",
  },
  {
    title: "Diseño y fabricación a medida",
    description:
      "Desarrollamos cada producto adaptado a lo que tu proyecto realmente necesita.",
  },
  {
    title: "Entrega y seguimiento",
    description:
      "Coordinamos la entrega y te acompañamos después, ante cualquier consulta o ajuste.",
  },
];

export default function QueHacemos() {
  return (
    <section id="nosotros" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <h2 className="text-3xl font-bold tracking-tight">Qué hacemos</h2>
        <p className="mt-4 max-w-2xl text-foreground/70">
          En Espacio Digital trabajamos junto a cada cliente para transformar
          una idea en un resultado concreto, con calidad y cumplimiento de
          plazos.
        </p>
        <div className="mt-12 grid gap-8 sm:grid-cols-3">
          {SERVICIOS.map((servicio) => (
            <div key={servicio.title}>
              <h3 className="text-lg font-semibold">{servicio.title}</h3>
              <p className="mt-2 text-sm text-foreground/70">
                {servicio.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
