export type Locale = 'es' | 'en' | 'fr'

export const locales: Locale[] = ['es', 'en', 'fr']

export const localeLabels: Record<Locale, string> = {
  es: 'ES',
  en: 'EN',
  fr: 'FR',
}

export type Dictionary = {
  meta: { title: string; description: string }
  nav: {
    filter: string
    benefits: string
    economy: string
    standard: string
    access: string
    menuOpen: string
  }
  hero: {
    tagline: string
    description: string
    cta: string
    ctaNote: string
    scrollDown: string
  }
  filter: {
    title: string
    subtitle: string
    founder: { label: string; description: string; benefits: string[] }
    entry: { label: string; description: string; benefits: string[] }
    footnote: string
  }
  benefits: {
    title: string
    subtitle: string
    items: { title: string; description: string }[]
    edition: string
  }
  economy: {
    title: string
    stats: { value: string; label: string }[]
    description: string
  }
  standard: { quote: string; footnote: string }
  cta: {
    title: string
    description: string
    placeholder: string
    button: string
    footnote: string
  }
  footer: { links: string[]; note: string }
}

export const dictionary: Record<Locale, Dictionary> = {
  es: {
    meta: {
      title: 'Alpha — No es un club. Es un filtro.',
      description:
        'Un círculo cerrado de individuos que ya demostraron de qué están hechos. Sin cursos. Sin promesas. Solo estándar.',
    },
    nav: {
      filter: 'El Filtro',
      benefits: 'Beneficios',
      economy: 'Economía',
      standard: 'El Estándar',
      access: 'Acceder',
      menuOpen: 'Abrir menú',
    },
    hero: {
      tagline: 'No es un club. Es un filtro.',
      description:
        'Un círculo cerrado de individuos que ya demostraron de qué están hechos. Sin cursos. Sin promesas. Solo estándar.',
      cta: 'Solicitar Invitación',
      ctaNote: 'Solo por invitación',
      scrollDown: 'Desplazarse hacia abajo',
    },
    filter: {
      title: 'El Filtro',
      subtitle: 'Dos niveles. Sin excepciones.',
      founder: {
        label: 'Nivel Alpha · Fundador',
        description:
          'Para ser miembro con derecho a invitar. Skin in the game real. Quien no tiene un millón, no tiene voz en quién entra.',
        benefits: [
          'Derecho a proponer nuevos miembros',
          'Acceso a deal flow de primera ronda',
          'Voto en decisiones del círculo',
        ],
      },
      entry: {
        label: 'Nivel Alpha · Ingreso',
        description:
          'Mínimo para entrar con invitación. No es un precio, es un compromiso. Si no crees en el círculo, no perteneces a él.',
        benefits: [
          'Requiere invitación de un Fundador',
          'Acceso a cenas y eventos privados',
          'Hold obligatorio mientras seas miembro',
        ],
      },
      footnote:
        'Si vendes tus tokens, pierdes tu ficha. Sin reembolsos. Sin apelaciones.',
    },
    benefits: {
      title: 'Lo que obtienes',
      subtitle:
        'No es un producto. Es una red de confianza pre-filtrada por capital comprometido.',
      items: [
        {
          title: 'Cenas Mensuales Privadas',
          description: 'Madrid, Barcelona, Miami, Dubai. Mesas de 12. Sin agenda.',
        },
        {
          title: 'Deal Flow Exclusivo',
          description: 'Oportunidades que no llegan al mercado. Primera ronda.',
        },
        {
          title: 'Concierge Alpha',
          description: 'Red de servicios élite: salud, legal, viajes, seguridad.',
        },
        {
          title: 'La Ficha',
          description:
            'Pieza física de titanio mate. Sin logo visible. Quien conoce, sabe.',
        },
      ],
      edition: 'Edición Fundadores · 001/500',
    },
    economy: {
      title: 'La Economía',
      stats: [
        { value: '500', label: 'Fichas máximas' },
        { value: '1M', label: '$ALPHA · Fundador' },
        { value: '100K', label: '$ALPHA · Ingreso' },
      ],
      description:
        'Supply fijo. Sin inflación. Sin staking pasivo. El único valor del token es el acceso que desbloquea y la red que representa.',
    },
    standard: {
      quote:
        '"No buscamos gente que quiera ser Alpha. Buscamos gente que ya lo es y solo necesita encontrar a los otros."',
      footnote: 'Si tienes que preguntar si calificas, probablemente no sea para ti.',
    },
    cta: {
      title: 'La puerta está cerrada',
      description: 'Si un Fundador te ha mencionado Alpha, usa el enlace que te compartió.',
      placeholder: 'Código de invitación',
      button: 'Acceder',
      footnote: 'Sin código, sin acceso. Sin excepciones.',
    },
    footer: {
      links: ['Privacidad', 'Términos', 'Contacto'],
      note: 'Solo 500 fichas. Nunca más.',
    },
  },
  en: {
    meta: {
      title: 'Alpha — Not a club. A filter.',
      description:
        'A closed circle of individuals who have already proven what they are made of. No courses. No promises. Only standard.',
    },
    nav: {
      filter: 'The Filter',
      benefits: 'Benefits',
      economy: 'Economy',
      standard: 'The Standard',
      access: 'Access',
      menuOpen: 'Open menu',
    },
    hero: {
      tagline: 'Not a club. A filter.',
      description:
        'A closed circle of individuals who have already proven what they are made of. No courses. No promises. Only standard.',
      cta: 'Request Invitation',
      ctaNote: 'Invitation only',
      scrollDown: 'Scroll down',
    },
    filter: {
      title: 'The Filter',
      subtitle: 'Two tiers. No exceptions.',
      founder: {
        label: 'Alpha Tier · Founder',
        description:
          'For members with the right to invite. Real skin in the game. Those without a million have no voice in who enters.',
        benefits: [
          'Right to propose new members',
          'Access to first-round deal flow',
          'Vote on circle decisions',
        ],
      },
      entry: {
        label: 'Alpha Tier · Entry',
        description:
          'Minimum to enter with an invitation. Not a price — a commitment. If you don\u2019t believe in the circle, you don\u2019t belong in it.',
        benefits: [
          'Requires invitation from a Founder',
          'Access to private dinners and events',
          'Mandatory hold while a member',
        ],
      },
      footnote:
        'Sell your tokens, lose your seat. No refunds. No appeals.',
    },
    benefits: {
      title: 'What you get',
      subtitle:
        'Not a product. A trust network pre-filtered by committed capital.',
      items: [
        {
          title: 'Private Monthly Dinners',
          description: 'Madrid, Barcelona, Miami, Dubai. Tables of 12. No agenda.',
        },
        {
          title: 'Exclusive Deal Flow',
          description: 'Opportunities that never reach the market. First round.',
        },
        {
          title: 'Alpha Concierge',
          description: 'A network of elite services: health, legal, travel, security.',
        },
        {
          title: 'The Seal',
          description:
            'A physical piece in matte titanium. No visible logo. Those who know, know.',
        },
      ],
      edition: 'Founders Edition · 001/500',
    },
    economy: {
      title: 'The Economy',
      stats: [
        { value: '500', label: 'Maximum seats' },
        { value: '1M', label: '$ALPHA · Founder' },
        { value: '100K', label: '$ALPHA · Entry' },
      ],
      description:
        'Fixed supply. No inflation. No passive staking. The only value of the token is the access it unlocks and the network it represents.',
    },
    standard: {
      quote:
        '"We\u2019re not looking for people who want to be Alpha. We\u2019re looking for people who already are, and just need to find the others."',
      footnote: 'If you have to ask whether you qualify, it probably isn\u2019t for you.',
    },
    cta: {
      title: 'The door is closed',
      description: 'If a Founder mentioned Alpha to you, use the link they shared.',
      placeholder: 'Invitation code',
      button: 'Access',
      footnote: 'No code, no access. No exceptions.',
    },
    footer: {
      links: ['Privacy', 'Terms', 'Contact'],
      note: 'Only 500 seats. Never more.',
    },
  },
  fr: {
    meta: {
      title: 'Alpha — Pas un club. Un filtre.',
      description:
        'Un cercle fermé d\u2019individus qui ont déjà prouvé de quoi ils sont faits. Pas de cours. Pas de promesses. Seulement un standard.',
    },
    nav: {
      filter: 'Le Filtre',
      benefits: 'Avantages',
      economy: 'Économie',
      standard: 'Le Standard',
      access: 'Accéder',
      menuOpen: 'Ouvrir le menu',
    },
    hero: {
      tagline: 'Pas un club. Un filtre.',
      description:
        'Un cercle fermé d\u2019individus qui ont déjà prouvé de quoi ils sont faits. Pas de cours. Pas de promesses. Seulement un standard.',
      cta: 'Demander une invitation',
      ctaNote: 'Sur invitation uniquement',
      scrollDown: 'Défiler vers le bas',
    },
    filter: {
      title: 'Le Filtre',
      subtitle: 'Deux niveaux. Aucune exception.',
      founder: {
        label: 'Niveau Alpha · Fondateur',
        description:
          'Pour être membre avec droit d\u2019inviter. Un engagement réel. Qui n\u2019a pas un million n\u2019a pas voix au chapitre sur qui entre.',
        benefits: [
          'Droit de proposer de nouveaux membres',
          'Accès au deal flow de première ronde',
          'Vote sur les décisions du cercle',
        ],
      },
      entry: {
        label: 'Niveau Alpha · Entrée',
        description:
          'Minimum requis pour entrer sur invitation. Ce n\u2019est pas un prix, c\u2019est un engagement. Si vous ne croyez pas au cercle, vous n\u2019y appartenez pas.',
        benefits: [
          'Invitation d\u2019un Fondateur requise',
          'Accès aux dîners et événements privés',
          'Détention obligatoire en tant que membre',
        ],
      },
      footnote:
        'Si vous vendez vos tokens, vous perdez votre place. Pas de remboursement. Pas d\u2019appel.',
    },
    benefits: {
      title: 'Ce que vous obtenez',
      subtitle:
        'Pas un produit. Un réseau de confiance pré-filtré par du capital engagé.',
      items: [
        {
          title: 'Dîners Privés Mensuels',
          description: 'Madrid, Barcelone, Miami, Dubaï. Tables de 12. Sans agenda.',
        },
        {
          title: 'Deal Flow Exclusif',
          description: 'Des opportunités qui n\u2019atteignent jamais le marché. Première ronde.',
        },
        {
          title: 'Concierge Alpha',
          description: 'Un réseau de services d\u2019élite : santé, juridique, voyages, sécurité.',
        },
        {
          title: 'Le Sceau',
          description:
            'Une pièce physique en titane mat. Sans logo visible. Qui sait, sait.',
        },
      ],
      edition: 'Édition Fondateurs · 001/500',
    },
    economy: {
      title: 'L\u2019Économie',
      stats: [
        { value: '500', label: 'Places maximum' },
        { value: '1M', label: '$ALPHA · Fondateur' },
        { value: '100K', label: '$ALPHA · Entrée' },
      ],
      description:
        'Offre fixe. Pas d\u2019inflation. Pas de staking passif. La seule valeur du token est l\u2019accès qu\u2019il débloque et le réseau qu\u2019il représente.',
    },
    standard: {
      quote:
        '« Nous ne cherchons pas des gens qui veulent être Alpha. Nous cherchons des gens qui le sont déjà et qui ont juste besoin de trouver les autres. »',
      footnote: 'Si vous devez demander si vous êtes qualifié, ce n\u2019est probablement pas pour vous.',
    },
    cta: {
      title: 'La porte est fermée',
      description: 'Si un Fondateur vous a parlé d\u2019Alpha, utilisez le lien qu\u2019il vous a partagé.',
      placeholder: 'Code d\u2019invitation',
      button: 'Accéder',
      footnote: 'Pas de code, pas d\u2019accès. Aucune exception.',
    },
    footer: {
      links: ['Confidentialité', 'Conditions', 'Contact'],
      note: 'Seulement 500 places. Jamais plus.',
    },
  },
} as const
