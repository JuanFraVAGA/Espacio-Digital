import ContactForm from "./ContactForm";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="border-t border-black/10 bg-foreground/[0.03] dark:border-white/10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <div>
          <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
          <p className="mt-4 max-w-md text-foreground/70">
            ¿Tenés un proyecto en mente? Escribinos y te respondemos con una
            cotización a medida.
          </p>
          <dl className="mt-8 space-y-4 text-sm">
            <div>
              <dt className="font-medium">Email</dt>
              <dd className="text-foreground/70">contacto@espaciodigital.com</dd>
            </div>
            <div>
              <dt className="font-medium">Teléfono</dt>
              <dd className="text-foreground/70">+54 9 11 0000-0000</dd>
            </div>
            <div>
              <dt className="font-medium">Ubicación</dt>
              <dd className="text-foreground/70">Buenos Aires, Argentina</dd>
            </div>
          </dl>
        </div>
        <div className="rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10">
          <h3 className="text-lg font-semibold">Pedí tu cotización</h3>
          <p className="mt-1 text-sm text-foreground/70">
            Completá el formulario y nos comunicamos con vos.
          </p>
          <div className="mt-6">
            <ContactForm />
          </div>
        </div>
      </div>
    </section>
  );
}
