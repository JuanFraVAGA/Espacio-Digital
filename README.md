# Espacio Digital

Sitio institucional (landing page) con formulario de solicitud de cotización.

## Stack

- [Next.js](https://nextjs.org) (App Router) + TypeScript
- Tailwind CSS
- Prisma + SQLite (persistencia de las solicitudes de cotización)

## Primeros pasos

1. Instalar dependencias:

   ```bash
   npm install
   ```

2. Copiar `.env.example` a `.env` y ajustar los valores (usuario/clave del panel de administración):

   ```bash
   cp .env.example .env
   ```

3. Crear la base de datos local:

   ```bash
   npx prisma migrate dev
   ```

4. Levantar el servidor de desarrollo:

   ```bash
   npm run dev
   ```

   Abrir [http://localhost:3000](http://localhost:3000).

## Estructura del contenido

- `src/components/Hero.tsx`, `QueHacemos.tsx`, `Diferenciales.tsx`, `Productos.tsx`, `Contacto.tsx`: secciones de la landing. El texto es contenido de ejemplo, listo para reemplazar por el contenido real del negocio (servicios, diferenciales, datos de contacto).
- `public/products/`: imágenes de ejemplo (placeholders). Reemplazar por fotos reales de los productos, manteniendo los mismos nombres de archivo o actualizando las referencias en `Productos.tsx`.

## Formulario de cotización

El formulario en la sección "Contacto" envía los datos a `POST /api/cotizacion`, que valida y guarda la solicitud en la base de datos (`QuoteRequest` en `prisma/schema.prisma`).

## Panel de administración

Las solicitudes recibidas se pueden ver en `/admin/cotizaciones`, protegido con HTTP Basic Auth usando las variables de entorno `ADMIN_USER` y `ADMIN_PASSWORD`. Cambiar la clave por defecto antes de desplegar a producción.

## Deploy

Al desplegar (por ejemplo en Vercel), configurar las variables de entorno `DATABASE_URL`, `ADMIN_USER` y `ADMIN_PASSWORD`. Para producción se recomienda migrar de SQLite a una base de datos administrada (Postgres, por ejemplo) si se espera más de un servidor/instancia activa.
