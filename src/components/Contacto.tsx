import ContactForm from "./ContactForm";
import Reveal from "./Reveal";

export default function Contacto() {
  return (
    <section
      id="contacto"
      className="border-t border-black/10 bg-foreground/[0.03] dark:border-white/10"
    >
      <div className="mx-auto grid max-w-6xl gap-12 px-6 py-20 lg:grid-cols-2">
        <Reveal>
          <div>
            <h2 className="text-3xl font-bold tracking-tight">Contacto</h2>
            <p className="mt-4 max-w-md text-foreground/70">
              ¿Tienes un proyecto en mente? Escríbenos y te respondemos con
              una cotización a medida.
            </p>
            <dl className="mt-8 space-y-4 text-sm">
              <div>
                <dt className="font-medium">Email</dt>
                <dd className="text-foreground/70">espaciodigital.sci@gmail.com</dd>
              </div>
              <div>
                <dt className="font-medium">Ubicación</dt>
                <dd className="text-foreground/70">Ciudad de México, México</dd>
              </div>
            </dl>
          </div>
        </Reveal>
        <Reveal>
          <div className="cmyk-shadow rounded-2xl border border-black/10 bg-background p-6 dark:border-white/10">
            <h3 className="text-lg font-semibold">Pide tu cotización</h3>
            <p className="mt-1 text-sm text-foreground/70">
              Completa el formulario y nos comunicamos contigo.
            </p>
            <div className="mt-6">
              <ContactForm />
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}