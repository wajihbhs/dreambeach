export type Locale = "fr" | "en" | "ar"

export interface Translations {
  nav: {
    home: string
    about: string
    services: string
    restaurant: string
    excursion: string
    gallery: string
    contact: string
  }
  hero: {
    badge: string
    title: string
    subtitle: string
    cta: string
    ctaSecondary: string
  }
  about: {
    tag: string
    title: string
    description: string
    values: Array<{ icon: string; title: string; text: string }>
  }
  services: {
    tag: string
    title: string
    subtitle: string
    items: Array<{ title: string; description: string; tag?: string }>
  }
  activities: {
    tag: string
    title: string
    subtitle: string
    items: Array<{ title: string; description: string }>
  }
  restaurant: {
    tag: string
    title: string
    subtitle: string
    description: string
    features: string[]
    basket: string
    basketDesc: string
  }
  excursion: {
    tag: string
    title: string
    subtitle: string
    features: string[]
    destinations: Array<{ name: string; description: string }>
  }
  transport: {
    title: string
    description: string
  }
  gallery: {
    tag: string
    title: string
    subtitle: string
  }
  contact: {
    tag: string
    title: string
    subtitle: string
    reservation: string
    reservationDesc: string
    phones: string
    address: string
    addressValue: string
    hours: string
    hoursValue: string
    noAlcohol: string
    noAlcoholDesc: string
  }
  footer: {
    tagline: string
    rights: string
    links: string[]
  }
}

export const translations: Record<Locale, Translations> = {
  fr: {
    nav: {
      home: "Accueil",
      about: "À propos",
      services: "Hébergement",
      restaurant: "Restaurant",
      excursion: "Excursions",
      gallery: "Galerie",
      contact: "Contact",
    },
    hero: {
      badge: "Détente · Confort · Sérénité",
      title: "Votre Paradis\nFamilial en Tunisie",
      subtitle: "Plage Degla · Zawiet El Megueiz · Haouaria, Nabeul",
      cta: "Réserver maintenant",
      ctaSecondary: "Découvrir",
    },
    about: {
      tag: "Notre histoire",
      title: "Le meilleur endroit pour toute la famille",
      description:
        "Niché entre mer et terre, Healthy Dream House est un espace familial unique situé à la plage Degla de Zawiet El Megueiz, près d'Haouaria. Notre propriétaire y cultive sur sa ferme adjacente tous les légumes servis au restaurant — une expérience 100 % bio et authentique, dans un cadre propre et sécurisé face à la Méditerranée.",
      values: [
        { icon: "🌿", title: "100% Bio", text: "Légumes et fruits cultivés sur notre ferme voisine, récoltés chaque matin." },
        { icon: "👨‍👩‍👧‍👦", title: "Espace Familial", text: "Un environnement sûr, accueillant et fun pour parents et enfants." },
        { icon: "🌊", title: "Face à la Mer", text: "Accès direct à la plage et aux eaux cristallines de la Méditerranée." },
        { icon: "🏡", title: "Cadre Authentique", text: "Architecture en bois naturel, atmosphère chaleureuse et authentique." },
      ],
    },
    services: {
      tag: "Hébergement",
      title: "Restez dans notre havre de paix",
      subtitle: "Choisissez votre espace pour une expérience inoubliable face à la mer",
      items: [
        {
          title: "Chalet",
          description: "Petite maison en bois robuste et permanente, idéale pour les familles souhaitant confort et intimité à deux pas de la plage.",
          tag: "Populaire",
        },
        {
          title: "Bungalow",
          description: "Hébergement léger et convivial intégré dans un cadre naturel exceptionnel. Parfait pour vivre l'expérience de plein air en famille ou entre amis.",
        },
        {
          title: "Parasols & Transats",
          description: "Location de parasols et chaises longues directement sur la plage. Profitez du soleil en toute sérénité avec vue sur la mer.",
        },
      ],
    },
    activities: {
      tag: "Activités",
      title: "Profitez de la plage à fond",
      subtitle: "Des activités pour tous les âges et tous les niveaux",
      items: [
        { title: "Volleyball", description: "Courts aménagés sur la plage pour des parties animées avec la famille ou entre amis." },
        { title: "Beach Ball", description: "Ambiance détendue au bord de l'eau, idéale pour petits et grands." },
        { title: "Tournois de Football", description: "Organisez ou rejoignez un tournoi sur notre terrain de foot en sable." },
        { title: "Baignade", description: "Eaux claires et sécurisées de la plage Degla pour se baigner en famille." },
      ],
    },
    restaurant: {
      tag: "Restaurant",
      title: "S7an La7mer – 100% Bio",
      subtitle: "Une cuisine saine, savoureuse et locale",
      description:
        "Notre grand restaurant S7an La7mer propose une cuisine 100 % bio et healthy. Tous les légumes — pommes de terre, tomates, piments, oignons, ail — sont cultivés dans notre ferme voisine et récoltés le matin même. Des plats savoureux pour toute la famille.",
      features: [
        "Légumes 100% cultivés sur place",
        "Repas sur réservation",
        "Sandwichs frais et variés",
        "Boissons fraîches",
        "Des plats savoureux pour toute la famille",
        "Cuisine saine et équilibrée",
      ],
      basket: "Composez votre panier",
      basketDesc:
        "Vivez une expérience unique : cueillez vous-même vos fruits et légumes dans notre ferme pour composer votre propre plat. Un moment magique pour les petits comme pour les grands.",
    },
    excursion: {
      tag: "Excursions en mer",
      title: "Partez à la découverte des îles",
      subtitle: "Une vedette à votre disposition pour explorer le large",
      features: [
        "Découverte du littoral de Haouaria",
        "Moments inoubliables en famille ou entre amis",
        "Sorties disponibles toute la journée",
        "Capitaine expérimenté à bord",
      ],
      destinations: [
        { name: "Île de Zembra", description: "Réserve naturelle protégée aux eaux turquoise et à la faune exceptionnelle." },
        { name: "Île de Zembretta", description: "Petite île sauvage et isolée, un trésor caché de la Méditerranée." },
        { name: "Cap Haouaria", description: "Découvrez les falaises spectaculaires et les grottes de Haouaria depuis la mer." },
      ],
    },
    transport: {
      title: "Transport 4×4 Offroad",
      description:
        "Pour rejoindre la plage en toute aventure, nous mettons à disposition un 4×4 pour transporter votre famille depuis la route jusqu'à la plage, à travers les dunes et pistes naturelles de la zone Degla.",
    },
    gallery: {
      tag: "Galerie",
      title: "La beauté de Degla en images",
      subtitle: "Découvrez notre univers à travers quelques clichés de notre coin de paradis",
    },
    contact: {
      tag: "Réservation",
      title: "Venez vivre des moments inoubliables",
      subtitle: "La réservation se fait par téléphone. Contactez-nous pour vérifier les disponibilités.",
      reservation: "Réserver par téléphone",
      reservationDesc: "Nos équipes sont disponibles pour répondre à vos questions et organiser votre séjour.",
      phones: "Téléphones",
      address: "Adresse",
      addressValue: "XR4Q+G9F, Zouiet El Mgaiez\nTunisie",
      hours: "Horaires",
      hoursValue: "Ouvert tous les jours\nde 8h00 à 20h00",
      noAlcohol: "Zone sans alcool",
      noAlcoholDesc:
        "Healthy Dream House est un espace familial sans alcool. Nous vous remercions de respecter cette règle pour le bien de tous.",
    },
    footer: {
      tagline: "Détente · Confort · Sérénité",
      rights: "© 2026 Healthy Dream House. Tous droits réservés.",
      links: ["Accueil", "Hébergement", "Restaurant", "Excursions", "Contact"],
    },
  },

  en: {
    nav: {
      home: "Home",
      about: "About",
      services: "Accommodation",
      restaurant: "Restaurant",
      excursion: "Excursions",
      gallery: "Gallery",
      contact: "Contact",
    },
    hero: {
      badge: "Relax · Comfort · Serenity",
      title: "Your Family Paradise\nin Tunisia",
      subtitle: "Degla Beach · Zawiet El Megueiz · Haouaria, Nabeul",
      cta: "Book Now",
      ctaSecondary: "Discover",
    },
    about: {
      tag: "Our Story",
      title: "The best place for the whole family",
      description:
        "Nestled between sea and land, Healthy Dream House is a unique family space located at Degla Beach in Zawiet El Megueiz, near Haouaria. Our owner grows all the restaurant vegetables on his adjacent farm — a 100% organic, 100% authentic experience in a clean and secure setting facing the Mediterranean.",
      values: [
        { icon: "🌿", title: "100% Organic", text: "Vegetables and fruits grown on our neighboring farm, harvested every morning." },
        { icon: "👨‍👩‍👧‍👦", title: "Family Space", text: "A safe, welcoming and fun environment for parents and children alike." },
        { icon: "🌊", title: "Seafront", text: "Direct access to the beach and crystal-clear Mediterranean waters." },
        { icon: "🏡", title: "Authentic Setting", text: "Natural wood architecture, warm and genuine atmosphere." },
      ],
    },
    services: {
      tag: "Accommodation",
      title: "Stay in our haven of peace",
      subtitle: "Choose your space for an unforgettable experience by the sea",
      items: [
        {
          title: "Chalet",
          description: "A small, sturdy and permanent wooden house, ideal for families seeking comfort and privacy just steps from the beach.",
          tag: "Popular",
        },
        {
          title: "Bungalow",
          description: "Light and friendly accommodation set in an exceptional natural environment. Perfect for an outdoor experience with family or friends.",
        },
        {
          title: "Parasols & Sun Loungers",
          description: "Rent parasols and sun loungers directly on the beach. Enjoy the sun in complete serenity with sea views.",
        },
      ],
    },
    activities: {
      tag: "Activities",
      title: "Make the most of the beach",
      subtitle: "Activities for all ages and skill levels",
      items: [
        { title: "Volleyball", description: "Organized courts on the beach for lively games with family or friends." },
        { title: "Beach Ball", description: "Relaxed atmosphere by the water, perfect for young and old alike." },
        { title: "Football Tournaments", description: "Organize or join a tournament on our sandy football pitch." },
        { title: "Swimming", description: "Clear and safe waters at Degla beach for family swimming." },
      ],
    },
    restaurant: {
      tag: "Restaurant",
      title: "S7an La7mer – 100% Organic",
      subtitle: "Healthy, delicious and local cuisine",
      description:
        "Our large restaurant S7an La7mer offers 100% organic and healthy cuisine. All vegetables — potatoes, tomatoes, peppers, onions, garlic — are grown on our neighboring farm and harvested that very morning. Delicious meals for the whole family.",
      features: [
        "100% locally grown vegetables",
        "Meals by reservation",
        "Fresh and varied sandwiches",
        "Cold drinks",
        "Delicious dishes for the whole family",
        "Healthy and balanced cooking",
      ],
      basket: "Build your own basket",
      basketDesc:
        "Live a unique experience: pick your own fruits and vegetables from our farm to compose your own dish. A magical moment for young and old alike.",
    },
    excursion: {
      tag: "Sea Excursions",
      title: "Discover the islands",
      subtitle: "A motorboat at your disposal to explore the open sea",
      features: [
        "Discovery of the Haouaria coastline",
        "Unforgettable moments with family or friends",
        "Trips available throughout the day",
        "Experienced captain on board",
      ],
      destinations: [
        { name: "Zembra Island", description: "Protected nature reserve with turquoise waters and exceptional wildlife." },
        { name: "Zembretta Island", description: "Small, wild and isolated island — a hidden gem of the Mediterranean." },
        { name: "Cap Haouaria", description: "Discover the spectacular cliffs and caves of Haouaria from the sea." },
      ],
    },
    transport: {
      title: "4×4 Offroad Transport",
      description:
        "To reach the beach in full adventure mode, we provide a 4×4 to transport your family from the road to the beach, through the dunes and natural tracks of the Degla area.",
    },
    gallery: {
      tag: "Gallery",
      title: "The beauty of Degla in pictures",
      subtitle: "Discover our world through a few snapshots of our corner of paradise",
    },
    contact: {
      tag: "Reservation",
      title: "Come and live unforgettable moments",
      subtitle: "Reservations are made by phone. Contact us to check availability.",
      reservation: "Book by phone",
      reservationDesc: "Our teams are available to answer your questions and organize your stay.",
      phones: "Phone Numbers",
      address: "Address",
      addressValue: "XR4Q+G9F, Zouiet El Mgaiez\nTunisia",
      hours: "Opening Hours",
      hoursValue: "Open every day\nfrom 8:00 AM to 8:00 PM",
      noAlcohol: "Alcohol-free zone",
      noAlcoholDesc:
        "Healthy Dream House is a family, alcohol-free space. We kindly ask you to respect this rule for the well-being of all.",
    },
    footer: {
      tagline: "Relax · Comfort · Serenity",
      rights: "© 2026 Healthy Dream House. All rights reserved.",
      links: ["Home", "Accommodation", "Restaurant", "Excursions", "Contact"],
    },
  },

  ar: {
    nav: {
      home: "الرئيسية",
      about: "من نحن",
      services: "الإقامة",
      restaurant: "المطعم",
      excursion: "الرحلات",
      gallery: "معرض الصور",
      contact: "اتصل بنا",
    },
    hero: {
      badge: "راحة · راحة · سكينة",
      title: "جنتك العائلية\nفي تونس",
      subtitle: "شاطئ دڤلة · زاوية المقايز · الهوارية، نابل",
      cta: "احجز الآن",
      ctaSecondary: "اكتشف",
    },
    about: {
      tag: "قصتنا",
      title: "أفضل مكان للعائلة بأكملها",
      description:
        "يقع Healthy Dream House في شاطئ دڤلة بزاوية المقايز، قرب الهوارية بولاية نابل. يمتلك صاحبنا مزرعة مجاورة للشاطئ تزرع فيها جميع الخضروات المقدمة في المطعم — تجربة 100% عضوية وأصيلة في بيئة نظيفة وآمنة مطلة على البحر المتوسط.",
      values: [
        { icon: "🌿", title: "100% عضوي", text: "خضروات وفواكه تزرع في مزرعتنا المجاورة وتحصد كل صباح." },
        { icon: "👨‍👩‍👧‍👦", title: "فضاء عائلي", text: "بيئة آمنة ومرحبة وممتعة للآباء والأطفال على حد سواء." },
        { icon: "🌊", title: "على الشاطئ مباشرة", text: "وصول مباشر إلى الشاطئ والمياه الصافية للبحر المتوسط." },
        { icon: "🏡", title: "أجواء أصيلة", text: "عمارة من الخشب الطبيعي وأجواء دافئة وأصيلة." },
      ],
    },
    services: {
      tag: "الإقامة",
      title: "أقم في واحتنا الهادئة",
      subtitle: "اختر مساحتك لتجربة لا تنسى بجانب البحر",
      items: [
        {
          title: "شاليه",
          description: "منزل خشبي صغير متين ودائم، مثالي للعائلات التي تبحث عن الراحة والخصوصية على بعد خطوات من الشاطئ.",
          tag: "الأكثر طلباً",
        },
        {
          title: "بانغالو",
          description: "إقامة خفيفة وودية في بيئة طبيعية استثنائية. مثالية لتجربة الهواء الطلق مع العائلة أو الأصدقاء.",
        },
        {
          title: "مظلات وكراسي الشاطئ",
          description: "استئجار مظلات وكراسي مريحة مباشرة على الشاطئ. استمتع بالشمس بكل هدوء مع إطلالة على البحر.",
        },
      ],
    },
    activities: {
      tag: "الأنشطة",
      title: "استمتع بالشاطئ إلى أقصاه",
      subtitle: "أنشطة لجميع الأعمار والمستويات",
      items: [
        { title: "كرة الطائرة", description: "ملاعب منظمة على الشاطئ لمباريات حماسية مع العائلة أو الأصدقاء." },
        { title: "كرة الشاطئ", description: "أجواء مريحة على حافة الماء، مثالية لكبار وصغار." },
        { title: "دوريات كرة القدم", description: "نظم أو انضم إلى دوري على ملعبنا الرملي." },
        { title: "السباحة", description: "مياه صافية وآمنة في شاطئ دڤلة للسباحة العائلية." },
      ],
    },
    restaurant: {
      tag: "المطعم",
      title: "صحن البحر – 100% عضوي",
      subtitle: "طعام صحي، لذيذ، ومحلي",
      description:
        "يقدم مطعمنا الكبير صحن البحر مأكولات 100% عضوية وصحية. جميع الخضروات — بطاطا، طماطم، فلفل، بصل، ثوم — تزرع في مزرعتنا المجاورة وتحصد في الصباح ذاته. أطباق شهية للعائلة بأكملها.",
      features: [
        "خضروات مزروعة محلياً 100%",
        "وجبات عند الحجز",
        "سندويشات طازجة ومتنوعة",
        "مشروبات باردة",
        "أطباق شهية للعائلة",
        "طبخ صحي ومتوازن",
      ],
      basket: "اصنع سلتك الخاصة",
      basketDesc:
        "عش تجربة فريدة: اختر بنفسك الفواكه والخضروات من مزرعتنا لتحضير طبقك الخاص. لحظة سحرية للصغار والكبار.",
    },
    excursion: {
      tag: "رحلات بحرية",
      title: "اكتشف الجزر",
      subtitle: "زورق سريع رهن إشارتكم طوال اليوم",
      features: [
        "اكتشاف الساحل الهواري",
        "لحظات لا تنسى مع العائلة أو الأصدقاء",
        "رحلات متاحة طوال اليوم",
        "ربان ذو خبرة على متن القارب",
      ],
      destinations: [
        { name: "جزيرة زمبرة", description: "محمية طبيعية مائية ذات مياه فيروزية وحياة برية استثنائية." },
        { name: "جزيرة زمبريطة", description: "جزيرة صغيرة برية ومعزولة، كنز خفي في البحر المتوسط." },
        { name: "رأس الهوارية", description: "اكتشف الجروف الرائعة وكهوف الهوارية من البحر." },
      ],
    },
    transport: {
      title: "نقل بسيارة 4×4 خارج الطريق",
      description:
        "للوصول إلى الشاطئ بروح المغامرة، نوفر سيارة 4×4 لنقل عائلتك من الطريق إلى الشاطئ عبر الكثبان الرملية والمسالك الطبيعية في منطقة دڤلة.",
    },
    gallery: {
      tag: "معرض الصور",
      title: "جمال دڤلة في الصور",
      subtitle: "اكتشف عالمنا من خلال لقطات من ركننا في الجنة",
    },
    contact: {
      tag: "الحجز",
      title: "تعال وعش لحظات لا تنسى",
      subtitle: "الحجز يتم عبر الهاتف. تواصل معنا للتحقق من التوفر.",
      reservation: "احجز عبر الهاتف",
      reservationDesc: "فريقنا متاح للإجابة على أسئلتكم وتنظيم إقامتكم.",
      phones: "أرقام الهاتف",
      address: "العنوان",
      addressValue: "XR4Q+G9F، زويتل مڤايز\nتونس",
      hours: "أوقات العمل",
      hoursValue: "مفتوح كل يوم\nمن 8:00 صباحاً حتى 8:00 مساءً",
      noAlcohol: "منطقة خالية من الكحول",
      noAlcoholDesc:
        "Healthy Dream House فضاء عائلي خالٍ من الكحول. نشكركم على احترام هذه القاعدة من أجل راحة الجميع.",
    },
    footer: {
      tagline: "راحة · راحة · سكينة",
      rights: "© 2026 Healthy Dream House. جميع الحقوق محفوظة.",
      links: ["الرئيسية", "الإقامة", "المطعم", "الرحلات", "اتصل بنا"],
    },
  },
}
