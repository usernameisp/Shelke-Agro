import { orderContact } from './orderConfig';

const wixImages = {
  heroProduce:
    'https://static.wixstatic.com/media/f94af1_4797056d9f814ecbab5a10db67047cb9~mv2.png/v1/fill/w_472,h_1024,al_c,q_90,enc_auto/f94af1_4797056d9f814ecbab5a10db67047cb9~mv2.png',
  farmerInspecting:
    'https://static.wixstatic.com/media/f94af1_2591136e6bf14ef19076de0857b341d0~mv2.png/v1/fill/w_669,h_836,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f94af1_2591136e6bf14ef19076de0857b341d0~mv2.png',
  productGrapesLarge:
    'https://static.wixstatic.com/media/f94af1_8a8b68cef7704517b847a6d8d38d68ba~mv2.png/v1/fill/w_384,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_8a8b68cef7704517b847a6d8d38d68ba~mv2.png',
  productMangoLarge:
    'https://static.wixstatic.com/media/f94af1_4b644a29c0f24457a6ad696f88a471e1~mv2.png/v1/fill/w_384,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_4b644a29c0f24457a6ad696f88a471e1~mv2.png',
  productJamunLarge:
    'https://static.wixstatic.com/media/f94af1_21540996a2984d93bb558034362036b3~mv2.png/v1/fill/w_384,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_21540996a2984d93bb558034362036b3~mv2.png',
  productBananaLarge:
    'https://static.wixstatic.com/media/f94af1_69d72b6b32644c6d86e521a97438e054~mv2.png/v1/fill/w_384,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_69d72b6b32644c6d86e521a97438e054~mv2.png',
  productCavendishLarge:
    'https://static.wixstatic.com/media/f94af1_a36986f830354116aadcfc6a499601ed~mv2.png/v1/fill/w_384,h_480,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_a36986f830354116aadcfc6a499601ed~mv2.png',
  farmTexture:
    'https://static.wixstatic.com/media/f94af1_44becfa6e9734a1f9c125ce55fd288f9~mv2.png/v1/fill/w_1280,h_544,al_c,q_90,enc_auto/f94af1_44becfa6e9734a1f9c125ce55fd288f9~mv2.png',
  morningPlowLarge:
    'https://static.wixstatic.com/media/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png/v1/fill/w_596,h_724,al_c,q_90,usm_0.66_1.00_0.01,enc_auto/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png',
  strawberryPicking:
    'https://static.wixstatic.com/media/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png/v1/fill/w_286,h_350,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png',
  aboutFarm:
    'https://static.wixstatic.com/media/f94af1_e0b5229315784e4b8139a9e6a3fa7d81~mv2.png/v1/fill/w_787,h_1024,al_c,q_90,enc_auto/f94af1_e0b5229315784e4b8139a9e6a3fa7d81~mv2.png',
  farmHeritage:
    'https://static.wixstatic.com/media/f94af1_3b93e80b98b9403ab1071b1c58e0fa0b~mv2.png/v1/fill/w_603,h_576,al_c,q_85,enc_auto/f94af1_3b93e80b98b9403ab1071b1c58e0fa0b~mv2.png',
  ourMission:
    'https://static.wixstatic.com/media/f94af1_4da94de712974ddd9ef692a3218c2c08~mv2.png/v1/fill/w_576,h_500,al_c,lg_1,q_85,enc_auto/f94af1_4da94de712974ddd9ef692a3218c2c08~mv2.png',
  productGrapesSmall:
    'https://static.wixstatic.com/media/f94af1_8a8b68cef7704517b847a6d8d38d68ba~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_8a8b68cef7704517b847a6d8d38d68ba~mv2.png',
  productMangoSmall:
    'https://static.wixstatic.com/media/f94af1_4b644a29c0f24457a6ad696f88a471e1~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_4b644a29c0f24457a6ad696f88a471e1~mv2.png',
  productJamunSmall:
    'https://static.wixstatic.com/media/f94af1_21540996a2984d93bb558034362036b3~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_21540996a2984d93bb558034362036b3~mv2.png',
  productBananaSmall:
    'https://static.wixstatic.com/media/f94af1_69d72b6b32644c6d86e521a97438e054~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_69d72b6b32644c6d86e521a97438e054~mv2.png',
  productCavendishSmall:
    'https://static.wixstatic.com/media/f94af1_a36986f830354116aadcfc6a499601ed~mv2.png/v1/fill/w_284,h_284,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_a36986f830354116aadcfc6a499601ed~mv2.png',
  morningPlowSmall:
    'https://static.wixstatic.com/media/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png/v1/fill/w_261,h_174,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_e64edf2ac7bd4c1b9b82cdd8e5ce7cb3~mv2.png',
  dairyFarmVideo:
    'https://static.wixstatic.com/media/f94af1_199aa5af915748259b05138cae7c70ad~mv2.png/v1/fill/w_389,h_219,al_c,q_85,usm_0.66_1.00_0.01,enc_auto/f94af1_199aa5af915748259b05138cae7c70ad~mv2.png',
};

export const companyInfo = {
  brand: 'Shelke Organic Farm',
  shortTagline:
    '100% organic fruits grown naturally and delivered fresh from our farm to your home.',
  heroTagline: 'Cultivating Elegance in Agriculture.',
  address: 'Village Road, Green Valley, District, State, India',
  email: orderContact.email,
  emailHref: `mailto:${orderContact.email}`,
  mapEmbedUrl:
    'https://www.google.com/maps?q=Village%20Road%20Green%20Valley%20District%20State%20India&output=embed',
  mapUrl: 'https://www.google.com/maps?q=Village%20Road%20Green%20Valley%20District%20State%20India',
  phone: orderContact.phoneDisplay,
  phoneHref: orderContact.phoneHref,
  whatsAppHref: orderContact.whatsappHref,
};

export const navLinks = [
  { label: 'Home', path: '/' },
  { label: 'About Us', path: '/about' },
  { label: 'Products', path: '/products' },
  { label: 'Gallery', path: '/gallery' },
  { label: 'Contact Us', path: '/contact' },
];

export const pageImages = {
  homeHero: {
    alt: 'Organic farm fresh fruits including grapes, Kesar mango, jamun, guava, and banana',
    url: wixImages.heroProduce,
  },
  aboutHero: {
    alt: 'About our farm visual from the Shelke Organic Farm website',
    url: wixImages.aboutFarm,
  },
  productsHero: {
    alt: 'Organic farm texture background from the Shelke Organic Farm website',
    url: wixImages.farmTexture,
  },
  galleryHero: {
    alt: 'Daily life on an organic dairy farm from the Shelke Organic Farm website',
    url: wixImages.dairyFarmVideo,
  },
  contactHero: {
    alt: 'Farmer inspecting organic crops in a lush green field',
    url: wixImages.farmerInspecting,
  },
};

export const homeHero = {
  description:
    'Experience the pure essence of organic farming. From our meticulously tended fields to your table, we harvest excellence with uncompromising quality.',
  bottomCard: {
    label: 'Curated harvest',
    text: 'Organic grapes, Kesar mango, jamun, banana, and Cavendish banana from one trusted farm.',
    value: '5 premium offerings',
  },
  eyebrow: 'Shelke Organic Farm',
  topCard: {
    label: 'A heritage of purity',
    text: 'Traditional wisdom and refined sustainable practices guide every season of cultivation.',
    value: '3 generations',
  },
};

export const homeStats = [
  { label: 'Family farming legacy', value: '3 generations' },
  { label: 'Organic cultivation promise', value: '100%' },
  { label: 'Fresh delivery focus', value: 'Farm to home' },
];

export const promisePoints = [
  {
    description:
      'Cultivated without synthetic intervention, honoring the earth and its natural rhythms.',
    icon: 'feather',
    title: 'Absolute Organic',
  },
  {
    description:
      'Meticulous inspection at every stage ensures that only the finest selection reaches customers.',
    icon: 'award',
    title: 'Rigorous Quality',
  },
  {
    description:
      'Thoughtful packing and timely dispatch help maintain peak freshness from soil to doorstep.',
    icon: 'truck',
    title: 'Pristine Delivery',
  },
  {
    description:
      'Our methods are designed to enrich the land, conserve resources, and support future harvests.',
    icon: 'shield',
    title: 'Ethical Stewardship',
  },
];

export const seasonalJourney = [
  {
    description:
      'We choose only the finest organic seeds and enrich the soil naturally before the season begins.',
    title: 'Careful Selection',
  },
  {
    description:
      'Our crops are tended daily with sustainable irrigation and natural pest management practices.',
    title: 'Nurturing Growth',
  },
  {
    description:
      'Produce is harvested at peak ripeness and moved quickly to preserve freshness and nutrition.',
    title: 'Perfect Harvest',
  },
];

export const aboutPreview = {
  description:
    'At Shelke Organic Farm, agriculture is not merely a process but an art form. We blend traditional wisdom with refined sustainable practices to cultivate produce of exceptional quality and purity.',
  image: {
    alt: 'Our farm heritage image from the Shelke Organic Farm website',
    url: wixImages.farmHeritage,
  },
  secondaryImage: {
    alt: 'Our mission image from the Shelke Organic Farm website',
    url: wixImages.ourMission,
  },
  title: 'A Heritage of Purity',
};

export const farmStory = {
  headline: 'Rooted in tradition, growing toward a sustainable future.',
  imagePrimary: {
    alt: 'Morning plow image from the Shelke Organic Farm website',
    url: wixImages.morningPlowLarge,
  },
  imageSecondary: {
    alt: 'Strawberry picking image from the Shelke Organic Farm website',
    url: wixImages.strawberryPicking,
  },
  paragraphs: [
    'For over three generations, our family has been dedicated to the art of sustainable agriculture. What began as a small plot of land has blossomed into a thriving farm serving communities with premium organic produce.',
    'Our journey has always been guided by a simple philosophy: respect the land, nurture the soil, and harvest with gratitude. Today, we combine time-honored farming techniques with modern sustainable practices so every product meets the highest standards of quality and purity.',
  ],
  quote: 'Respect the land, nurture the soil, and harvest with gratitude.',
};

export const farmValues = [
  {
    description:
      'We practice eco-friendly agriculture that preserves soil health and biodiversity for future generations.',
    icon: 'feather',
    title: 'Sustainable Farming',
  },
  {
    description:
      'We support local communities and create meaningful employment while delivering quality produce.',
    icon: 'users',
    title: 'Community First',
  },
  {
    description:
      'Every product undergoes careful quality checks so customers receive only the finest produce.',
    icon: 'award',
    title: 'Quality Excellence',
  },
  {
    description:
      'Customer satisfaction drives us, and we work to exceed expectations with every harvest.',
    icon: 'heart',
    title: 'Customer Focus',
  },
];

export const farmerProfile = {
  alt: 'Morning plow detail image from the Shelke Organic Farm website',
  highlights: [
    '100% organic farming methods across every harvest block.',
    'Zero harmful pesticides or chemicals in our cultivation process.',
    'Sustainable water management and soil-conscious field planning.',
    'A steady commitment to supporting local biodiversity.',
  ],
  image: wixImages.morningPlowSmall,
  name: 'Shelke Family Farm',
  role: 'Three generations of organic growers',
  story:
    'Our farm heritage is built on patience, discipline, and gratitude for the land. The Shelke family continues to grow with the belief that healthy food should be accessible, sustainable farming should remain profitable, and every harvest should honor both community and environment.',
};

export const products = [
  {
    availability: 'Seasonal harvest',
    badge: 'Popular selection',
    description:
      'Sweet, juicy, and seedless organic grapes grown with care for snacking, entertaining, and everyday freshness. Each bunch is harvested with attention to ripeness, texture, and natural sweetness.',
    id: 'organic-grapes',
    image: wixImages.productGrapesLarge,
    imageAlt: 'Organic Grapes (Draksh)',
    name: 'Organic Grapes (Draksh)',
    origin: 'Shelke vineyard plots',
    price: 180,
    shortDescription: 'Sweet, juicy, and seedless organic grapes, perfect for snacking.',
    storageTip: 'Keep refrigerated and rinse only before serving to protect the natural bloom.',
    tags: ['Seedless', 'Fresh harvest', 'Naturally sweet'],
    unit: 'kg',
  },
  {
    availability: 'Summer signature',
    badge: 'Seasonal favorite',
    description:
      "The Queen of Mangoes, grown for aroma, sweetness, and a rich saffron hue. Our organic Kesar mango is harvested with care so it ripens beautifully while keeping its full tropical character.",
    id: 'organic-kesar-mango',
    image: wixImages.productMangoLarge,
    imageAlt: 'Organic Kesar Mango',
    name: 'Organic Kesar Mango',
    origin: 'Shelke mango orchard',
    price: 350,
    shortDescription:
      "The Queen of Mangoes - aromatic, sweet, with a distinct saffron hue.",
    storageTip: 'Ripen at room temperature and chill briefly before serving for the best finish.',
    tags: ['Aromatic', 'Premium fruit', 'Summer harvest'],
    unit: 'kg',
  },
  {
    availability: 'Limited seasonal lot',
    badge: 'Nutrient-rich fruit',
    description:
      'Tart-sweet jamun with deep color, bold flavor, and a refreshing finish. This seasonal fruit is valued for its distinctive taste and careful harvest timing, making it one of the most special offerings in our catalog.',
    id: 'organic-jamun',
    image: wixImages.productJamunLarge,
    imageAlt: 'Organic Jamun (Black Plum)',
    name: 'Organic Jamun (Black Plum)',
    origin: 'Specialty orchard block',
    price: 220,
    shortDescription:
      'Tart and sweet purplish-black fruit known for its unique flavor and health value.',
    storageTip: 'Keep chilled and consume soon after purchase for the best texture and flavor.',
    tags: ['Seasonal', 'Bold flavor', 'Antioxidant rich'],
    unit: 'kg',
  },
  {
    availability: 'Daily table fruit',
    badge: 'Everyday essential',
    description:
      'Naturally sweet, energy-rich, and creamy organic bananas that fit seamlessly into daily meals. These bananas are selected for dependable quality, smooth texture, and clean flavor.',
    id: 'organic-banana',
    image: wixImages.productBananaLarge,
    imageAlt: 'Organic Banana (Keli)',
    name: 'Organic Banana (Keli)',
    origin: 'Shelke banana rows',
    price: 80,
    shortDescription:
      'Naturally sweet, energy-rich, and creamy organic bananas for everyday use.',
    storageTip: 'Store at room temperature and separate bunches if you want to slow ripening.',
    tags: ['Creamy texture', 'Energy rich', 'Family staple'],
    unit: 'dozen',
  },
  {
    availability: 'All-season stock',
    badge: 'Single fruit pricing',
    description:
      'Organic Cavendish bananas with a dependable sweet profile and bright yellow finish. Ideal for quick snacks, lunch boxes, and regular household use.',
    id: 'organic-cavendish-banana',
    image: wixImages.productCavendishLarge,
    imageAlt: 'Organic Cavendish Bananas',
    name: 'Organic Cavendish Bananas',
    origin: 'Shelke banana harvest program',
    price: 2.2,
    shortDescription: 'Naturally sweet and energy-boosting organic Cavendish bananas.',
    storageTip: 'Best kept in a cool room and eaten as they develop small brown speckles.',
    tags: ['Cavendish', 'Quick snack', 'Naturally sweet'],
    unit: 'piece',
  },
];

export const galleryImages = [
  {
    description: 'A close crop of the grape selection shown on the Shelke Organic Farm website.',
    image: wixImages.productGrapesSmall,
    layout: 'wide',
    title: 'Organic Grapes (Draksh)',
  },
  {
    description: 'A close crop of the Kesar mango selection presented in the Shelke product catalog.',
    image: wixImages.productMangoSmall,
    layout: 'standard',
    title: 'Organic Kesar Mango',
  },
  {
    description: 'A focused product view of the seasonal jamun offering from the Wix site.',
    image: wixImages.productJamunSmall,
    layout: 'standard',
    title: 'Organic Jamun (Black Plum)',
  },
  {
    description: 'A compact catalog image of the everyday organic banana harvest.',
    image: wixImages.productBananaSmall,
    layout: 'tall',
    title: 'Organic Banana (Keli)',
  },
  {
    description: 'A gallery crop of the organic Cavendish banana listing from the Wix site.',
    image: wixImages.productCavendishSmall,
    layout: 'wide',
    title: 'Organic Cavendish Bananas',
  },
];

export const contactHighlights = [
  {
    description: 'Call us for product questions, order requests, or farm visit planning.',
    icon: 'phone',
    title: 'Phone',
    value: companyInfo.phone,
  },
  {
    description: 'We usually respond to email enquiries within 24 hours.',
    icon: 'mail',
    title: 'Email',
    value: companyInfo.email,
  },
  {
    description: 'Reach us at our farm desk and orchard address in Green Valley.',
    icon: 'map',
    title: 'Address',
    value: companyInfo.address,
  },
  {
    description: 'Our team is available Monday through Saturday for direct support.',
    icon: 'clock',
    title: 'Working Hours',
    value: 'Mon - Sat, 9:00 AM - 6:00 PM',
  },
];

export const contactSupport = {
  formIntro: 'Have questions about our products or services? We would love to hear from you.',
  visitDescription:
    'Experience our farm firsthand. Schedule a visit to see our sustainable practices and meet the team behind your favorite products.',
  visitTitle: 'Visit Our Farm',
  visitNote: 'Please call ahead to arrange your visit.',
  whatsappDescription: 'Get instant responses to your queries on WhatsApp.',
  whatsappTitle: 'Chat on WhatsApp',
};
