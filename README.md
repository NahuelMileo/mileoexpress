# Mileo Express

Sitio de Mileo Express, transporte rodoviário internacional de cargas entre São Paulo y Montevideo. Next.js 15 + Tailwind 4, desplegado en Vercel desde `main`.

## Desarrollo

```bash
npm install
npm run dev     # http://localhost:3000
npm run lint
npm run build
```

## Estructura

- `app/(pt)` y `app/(es)/es`: portugués en `/` y español en `/es`, cada uno con su layout (idioma, metadata y datos estructurados).
- `components/Landing.tsx`: arma la página con las secciones de `components/`.
- `lib/empresa.ts`: **datos de la empresa** (WhatsApp de Brasil y Uruguay, email, razón social, CNPJ, datos operativos). Si cambia un número o un dato, se cambia acá.
- `lib/content.ts`: todos los textos en PT y ES, la flota y las paradas del mapa.
- `lib/site.tsx`: metadata, hreflang, Open Graph y JSON-LD (LocalBusiness + FAQPage).
- `public/brand`: logo y símbolo del manual de identidad de Bayou Estúdio (2026). Colores: vinho `#7C0F0F`, grafite `#353535`, branco suave `#F2F0EF`; tipografía Sora.

## Movimiento y accesibilidad

- El hero entra con una animación CSS y se ve completo sin JavaScript.
- El resto de las animaciones (`components/Motion.tsx`) solo se activan con JS y sin `prefers-reduced-motion`; sin eso, todo el contenido queda visible.

## Medición

Vercel Analytics (`@vercel/analytics`). Eventos:

- `cotacao_whatsapp` y `cotacao_email`: envío del formulario de cotización.
- Los clics en enlaces con `data-track` (botones de WhatsApp del header, hero, contacto, footer y barra del celular).

Hay que activar Web Analytics en el proyecto de Vercel para ver los datos.
