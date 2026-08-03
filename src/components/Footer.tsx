export default function Footer() {
  return (
    <footer className="border-t border-black/10 dark:border-white/10">
      <div className="mx-auto max-w-6xl px-6 py-8 text-sm text-foreground/60">
        © {new Date().getFullYear()} Espacio Digital. Todos los derechos reservados.
      </div>
    </footer>
  );
}
