import {
  hero1,
  hero2,
  hero3,
  destacadoPollo,
  destacadoSalchipapas,
  cartaMockup,
  rappiBag,
  mapa,
  instagram1,
  instagram2,
  instagram3,
  instagram4,
} from '../assets'

// ---------------------------------------------------------------
// TODO antes de publicar: confirmar estos links y datos de contacto
// ---------------------------------------------------------------
export const LINKS = {
  rappi: 'https://www.rappi.com.pe/', // TODO: link real de la tienda en Rappi
  cartaPdf: '/carta-mama-rosa.pdf', // TODO: reemplazar public/carta-mama-rosa.pdf por la carta real
  instagram: 'https://www.instagram.com/mamarosapolleria/',
  whatsapp: 'https://wa.me/51936123456', // TODO: confirmar número
  email: 'mailto:mamarosapolleria@gmail.com',
  maps: 'https://www.google.com/maps/search/?api=1&query=Paracas+429+Ate+Lima+Peru',
}

export const NAV_ITEMS = [
  { label: 'Inicio', href: '#inicio' },
  { label: 'Carta', href: '#carta' },
  { label: 'Promociones', href: '#promociones' },
  { label: 'Nosotros', href: '#nosotros' },
  { label: 'Ubicación', href: '#ubicacion' },
]

export const HERO = {
  lineOne: 'EL VERDADERO SABOR',
  lineTwo: 'A LA BRASA',
  text: ['Pollo jugoso, dorado y lleno de sabor', 'Hecho como en casa, para ti.'],
  // TODO: ajustar el alt de cada imagen cuando pongas las fotos reales
  images: [
    { src: hero1, alt: 'Pollo a la brasa dorado sobre las llamas de la parrilla' },
    { src: hero2, alt: 'Pollo a la brasa con papas fritas y ensalada' },
    { src: hero3, alt: 'Combo de pollo a la brasa listo para compartir' },
  ],
}

export const DESTACADOS = {
  lead: 'NUESTROS',
  title: 'DESTACADOS',
  items: [
    {
      title: 'POLLO\nA LA BRASA',
      text: 'Jugoso, dorado y marinado con nuestra receta secreta.',
      image: destacadoPollo,
      alt: 'Pollo a la brasa entero acompañado de papas fritas',
      icon: 'flame',
    },
    {
      title: 'SALCHIPAPAS',
      text: 'Crujientes, abundantes y con ese toque especial que te encanta.',
      image: destacadoSalchipapas,
      alt: 'Plato de salchipapas con papas fritas y salchichas',
      icon: 'fries',
    },
  ],
}

export const CARTA = {
  lead: 'DESCUBRE',
  title: 'NUESTRA CARTA',
  text: ['Variedad, sabor y opciones para todos.', 'Explora nuestra carta completa.'],
  button: 'Ver carta completa (PDF)',
  image: cartaMockup,
  alt: 'Carta de Mamá Rosa Pollería con el logo en la tapa',
}

export const RAPPI = {
  lead: 'PIDE TU FAVORITO',
  title: 'POR RAPPI',
  text: 'Disfruta de MAMÁ ROSA en la comodidad de tu casa. Rápido, fácil y seguro.',
  button: 'Pedir por Rappi',
  image: rappiBag,
  alt: 'Mochila de reparto de Rappi junto a un plato de pollo a la brasa con papas',
}

export const NOSOTROS = {
  label: 'NOSOTROS', // TODO: en la captura se lee "VIGOTROS"; se asumió "NOSOTROS"
  title: 'TRADICIÓN QUE SE SABOREA',
  text: [
    'En ',
    { strong: 'MAMÁ ROSA' },
    ' llevamos el sabor de la tradición a tu mesa. Nuestro pollo a la brasa es preparado con dedicación, ingredientes de calidad y el toque casero que nos hace únicos.',
  ],
  values: [
    { icon: 'flame', title: 'RECETA TRADICIONAL', text: 'Sabor único con el toque de siempre.' },
    { icon: 'chicken', title: 'POLLO DE CALIDAD', text: 'Seleccionado especialmente para ti.' },
    { icon: 'heart', title: 'HECHO CON PASIÓN', text: 'Cocinamos cada día pensando en ti.' },
  ],
}

export const UBICACION = {
  label: 'VISÍTANOS',
  title: 'ESTAMOS EN ATE',
  address: 'Paracas 429, Urb., Ate, Lima, Perú', // TODO: completar nombre de la urbanización
  hoursLabel: 'HORARIO DE ATENCIÓN',
  hours: '12:00 p.m. a 10:00 p.m.',
  map: mapa,
  mapAlt: 'Mapa con la ubicación de Mamá Rosa Pollería en Paracas 429, Ate, Lima',
}

export const INSTAGRAM = {
  lead: 'SÍGUENOS EN',
  title: 'INSTAGRAM',
  text: 'Novedades, promociones y mucho más.',
  handle: '@mamarosapolleria',
  photos: [
    { src: instagram1, alt: 'Pollo a la brasa recién salido de la parrilla' },
    { src: instagram2, alt: 'Pollo a la brasa con tomates asados' },
    { src: instagram3, alt: 'Plato de salchipapas bien servido' },
    { src: instagram4, alt: 'Pollo a la brasa con salsa criolla' },
  ],
}

export const FOOTER = {
  quickLinksTitle: 'ENLACES RÁPIDOS',
  contactTitle: 'CONTÁCTANOS',
  paymentsTitle: 'ACEPTAMOS',
  phone: '936 123 456', // TODO: confirmar número
  instagramHandle: '@mamarosapolleria',
  email: 'mamarosapolleria@gmail.com',
  payments: ['VISA', 'Mastercard', 'Apple Pay', 'BCP', 'yape'],
  copyright: '© 2024 Pollería MAMÁ ROSA. Todos los derechos reservados.',
  credit: 'Desarrollado con',
  creditBrand: 'por tu marca', // TODO: poner el nombre de tu marca
}