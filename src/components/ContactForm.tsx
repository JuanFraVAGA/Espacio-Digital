"use client";

import { useState, type FormEvent } from "react";

type Status = "idle" | "loading" | "success" | "error";

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");
  const [errorMessage, setErrorMessage] = useState("");

  async function handleSubmit(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setStatus("loading");
    setErrorMessage("");

    const form = event.currentTarget;
    const formData = new FormData(form);
    const payload = {
      name: formData.get("name"),
      email: formData.get("email"),
      phone: formData.get("phone"),
      message: formData.get("message"),
    };

    try {
      const response = await fetch("/api/cotizacion", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });

      if (!response.ok) {
        const data = await response.json().catch(() => null);
        setErrorMessage(data?.error ?? "No pudimos enviar tu consulta. Intenta de nuevo.");
        setStatus("error");
        return;
      }

      form.reset();
      setStatus("success");
    } catch {
      setErrorMessage("No pudimos enviar tu consulta. Intenta de nuevo.");
      setStatus("error");
    }
  }

  if (status === "success") {
    return (
      <div className="rounded-2xl border border-black/10 bg-foreground/[0.03] p-6 text-sm dark:border-white/10">
        ¡Gracias! Recibimos tu consulta y te contactaremos a la brevedad con
        tu cotización.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="grid gap-4">
      <div className="grid gap-1.5">
        <label htmlFor="name" className="text-sm font-medium">
          Nombre *
        </label>
        <input
          id="name"
          name="name"
          type="text"
          required
          className="rounded-lg border border-black/15 bg-background px-3 py-2 text-sm outline-none focus:border-cyan dark:border-white/15"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="email" className="text-sm font-medium">
          Email *
        </label>
        <input
          id="email"
          name="email"
          type="email"
          required
          className="rounded-lg border border-black/15 bg-background px-3 py-2 text-sm outline-none focus:border-cyan dark:border-white/15"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="phone" className="text-sm font-medium">
          Teléfono
        </label>
        <input
          id="phone"
          name="phone"
          type="tel"
          className="rounded-lg border border-black/15 bg-background px-3 py-2 text-sm outline-none focus:border-cyan dark:border-white/15"
        />
      </div>
      <div className="grid gap-1.5">
        <label htmlFor="message" className="text-sm font-medium">
          Cuéntanos qué necesitas cotizar *
        </label>
        <textarea
          id="message"
          name="message"
          required
          rows={4}
          className="rounded-lg border border-black/15 bg-background px-3 py-2 text-sm outline-none focus:border-cyan dark:border-white/15"
        />
      </div>

      {status === "error" && (
        <p className="text-sm text-red-600 dark:text-red-400">{errorMessage}</p>
      )}

      <button
        type="submit"
        disabled={status === "loading"}
        className="mt-2 rounded-full bg-foreground px-6 py-3 text-sm font-semibold text-background transition-opacity hover:opacity-90 disabled:opacity-50"
      >
        {status === "loading" ? "Enviando..." : "Solicitar cotización"}
      </button>
    </form>
  );
}