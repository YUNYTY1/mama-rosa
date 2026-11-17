# Mamá Rosa Pollería — Landing

Vite + React + Tailwind CSS (v3) + lucide-react. Tipografías locales con `@fontsource` (Bebas Neue y Poppins).

## Cómo correrlo

```bash
npm install
npm run dev      # desarrollo
npm run build    # build de producción (carpeta dist/)
npm run preview  # previsualizar el build
```

## Estructura

```
public/            favicon.svg, og-image.jpg, carta-mama-rosa.pdf (placeholders)
src/
  assets/          imágenes locales (hero.jpg, gallery, etc.) + index.js
  data/site.js     TODOS los textos, links y listas
  components/      Logo, Button, NavBar, SectionTitle, DestacadoCard, ValueItem, Sello, PaymentBadge
  sections/        Header, Hero, Destacados, Carta, Rappi, Nosotros, Ubicacion, InstagramSection, Footer
  App.jsx          solo ordena las secciones
```

Para cambiar una foto: reemplaza el archivo en `src/assets/` por el tuyo con el **mismo nombre**.

## Pendientes antes de publicar

- [ ] Reemplazar todas las imágenes de `src/assets/` (hero, destacados, carta-mockup.png, rappi-bag.png, mapa.jpg, instagram-1..4).
- [ ] Subir la carta real en `public/carta-mama-rosa.pdf`.
- [ ] Link real de Rappi, WhatsApp y teléfono (hoy `936 123 456` es el de la captura) en `src/data/site.js`.
- [ ] Confirmar textos: label "NOSOTROS" (la captura se lee "VIGOTROS"), urbanización en la dirección ("Urb.,"), año del copyright y "por tu marca" del footer.
- [ ] "Promociones" no tiene sección propia en el diseño: el menú apunta a "Nuestros destacados". Cambiar si hace falta.
- [ ] Mapa: hoy es una imagen con link a Google Maps; se puede cambiar por un iframe de Google Maps.
- [ ] Logos oficiales de Visa, Mastercard, Apple Pay, BCP y Yape (hoy son badges simples).
- [ ] Logo real de Mamá Rosa (hoy es texto con la fuente Bebas Neue) en `src/components/Logo.jsx`.
- [ ] Open Graph: poner URL absoluta de `og-image.jpg` en `index.html` con el dominio final.
