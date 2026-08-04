import Reveal from "./Reveal";

const SERVICIOS = [
  "Agendas corporativas personalizadas",
  "Hojas membretadas",
  "Tarjetas de presentación",
  "Carpetas institucionales",
  "Manuales y catálogos",
  "Formatos empresariales",
  "Material publicitario",
  "Señalización y gran formato",
  "Impresión offset y digital",
];

export default function QueHacemos() {
  return (
    <section id="servicios" className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-20">
        <Reveal>
          <h2 className="text-3xl font-bold tracking-tight">Qué hacemos</h2>
          <p className="mt-4 max-w-2xl text-foreground/70">
            Ofrecemos soluciones integrales de impresión para empresas que
            buscan calidad, consistencia y un proveedor confiable. Entre
            nuestros servicios destacan:
          </p>
        </Reveal>
        <Reveal>
          <ul className="mt-12 grid gap-x-8 gap-y-4 sm:grid-cols-2 lg:grid-cols-3">
            {SERVICIOS.map((servicio) => (
              <li key={servicio} className="flex items-start gap-3 text-sm font-medium">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-cyan" />
                {servicio}
              </li>
            ))}
          </ul>
        </Reveal>
        <Reveal>
          <p className="mt-12 max-w-2xl text-foreground/70">
            Trabajamos contigo para desarrollar materiales que fortalezcan la
            imagen de tu empresa y generen un impacto positivo en cada
            interacción con tus clientes.
          </p>
        </Reveal>
      </div>
    </section>
  );
}