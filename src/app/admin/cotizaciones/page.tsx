import { prisma } from "@/lib/prisma";

export const dynamic = "force-dynamic";

export default async function CotizacionesPage() {
  const quotes = await prisma.quoteRequest.findMany({
    orderBy: { createdAt: "desc" },
  });

  return (
    <div className="mx-auto max-w-5xl px-6 py-12">
      <h1 className="text-2xl font-bold tracking-tight">
        Solicitudes de cotización
      </h1>
      <p className="mt-2 text-sm text-foreground/70">
        {quotes.length} solicitud{quotes.length === 1 ? "" : "es"} recibida
        {quotes.length === 1 ? "" : "s"}.
      </p>

      <div className="mt-8 overflow-x-auto rounded-2xl border border-black/10 dark:border-white/10">
        <table className="w-full text-left text-sm">
          <thead className="border-b border-black/10 bg-foreground/[0.03] dark:border-white/10">
            <tr>
              <th className="px-4 py-3 font-medium">Fecha</th>
              <th className="px-4 py-3 font-medium">Nombre</th>
              <th className="px-4 py-3 font-medium">Email</th>
              <th className="px-4 py-3 font-medium">Teléfono</th>
              <th className="px-4 py-3 font-medium">Mensaje</th>
            </tr>
          </thead>
          <tbody>
            {quotes.map((quote) => (
              <tr
                key={quote.id}
                className="border-b border-black/5 last:border-0 dark:border-white/5"
              >
                <td className="px-4 py-3 whitespace-nowrap text-foreground/70">
                  {quote.createdAt.toLocaleString("es-AR")}
                </td>
                <td className="px-4 py-3">{quote.name}</td>
                <td className="px-4 py-3">{quote.email}</td>
                <td className="px-4 py-3">{quote.phone ?? "—"}</td>
                <td className="px-4 py-3 max-w-xs">{quote.message}</td>
              </tr>
            ))}
            {quotes.length === 0 && (
              <tr>
                <td
                  colSpan={5}
                  className="px-4 py-6 text-center text-foreground/60"
                >
                  Todavía no hay solicitudes.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}
