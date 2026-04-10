const mediaLibrary = {
  homeHeroMango:
    'https://images.pexels.com/photos/918643/pexels-photo-918643.jpeg?auto=compress&cs=tinysrgb&w=1400',
  aboutHeroField:
    'https://images.pexels.com/photos/11754100/pexels-photo-11754100.jpeg?auto=compress&cs=tinysrgb&w=1400',
  productsHeroVineyard:
    'https://images.pexels.com/photos/5393082/pexels-photo-5393082.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryHeroFarmer:
    'https://images.pexels.com/photos/11588042/pexels-photo-11588042.jpeg?auto=compress&cs=tinysrgb&w=1400',
  cartHeroBanana:
    'https://images.pexels.com/photos/26447849/pexels-photo-26447849.jpeg?auto=compress&cs=tinysrgb&w=1400',
  contactHeroSeedlings:
    'https://images.pexels.com/photos/7728082/pexels-photo-7728082.jpeg?auto=compress&cs=tinysrgb&w=1400',
  aboutPreviewFarmer:
    'https://images.pexels.com/photos/12558312/pexels-photo-12558312.jpeg?auto=compress&cs=tinysrgb&w=1400',
  aboutPreviewHarvestBasket:
    'https://images.pexels.com/photos/5502856/pexels-photo-5502856.jpeg?auto=compress&cs=tinysrgb&w=1400',
  farmStoryHarvestTeam:
    'https://images.pexels.com/photos/13947628/pexels-photo-13947628.jpeg?auto=compress&cs=tinysrgb&w=1400',
  farmStorySeedSowing:
    'https://images.pexels.com/photos/35268554/pexels-photo-35268554.jpeg?auto=compress&cs=tinysrgb&w=1400',
  farmerProfileField:
    'https://images.pexels.com/photos/16622632/pexels-photo-16622632.jpeg?auto=compress&cs=tinysrgb&w=1400',
  productGrapes:
    'https://images.pexels.com/photos/5645123/pexels-photo-5645123.jpeg?auto=compress&cs=tinysrgb&w=1400',
  productBanana:
    'https://images.pexels.com/photos/2238308/pexels-photo-2238308.jpeg?auto=compress&cs=tinysrgb&w=1400',
  productKesarMango:
    'https://images.pexels.com/photos/2294471/pexels-photo-2294471.jpeg?auto=compress&cs=tinysrgb&w=1400',
  productJambhul:
    'https://images.pexels.com/photos/5097569/pexels-photo-5097569.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryGrapes:
    'https://images.pexels.com/photos/12625834/pexels-photo-12625834.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryMango:
    'https://images.pexels.com/photos/11552820/pexels-photo-11552820.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryJambhul:
    'https://images.pexels.com/photos/8703806/pexels-photo-8703806.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryBanana:
    'https://images.pexels.com/photos/365810/pexels-photo-365810.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryFarmerField:
    'https://images.pexels.com/photos/16846730/pexels-photo-16846730.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryHarvestMotion:
    'https://images.pexels.com/photos/9798969/pexels-photo-9798969.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryGreenhouse:
    'https://images.pexels.com/photos/8342806/pexels-photo-8342806.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryCropDetail:
    'https://images.pexels.com/photos/12656497/pexels-photo-12656497.jpeg?auto=compress&cs=tinysrgb&w=1400',
  galleryFarmerPortrait:
    'https://images.pexels.com/photos/27126558/pexels-photo-27126558.jpeg?auto=compress&cs=tinysrgb&w=1400',
  videoFieldPoster:
    'https://images.pexels.com/photos/18860448/pexels-photo-18860448.jpeg?auto=compress&cs=tinysrgb&w=1400',
  videoGrapesPoster:
    'https://images.pexels.com/photos/20327984/pexels-photo-20327984.jpeg?auto=compress&cs=tinysrgb&w=1400',
  videoMangoPoster:
    'https://images.pexels.com/photos/13893775/pexels-photo-13893775.jpeg?auto=compress&cs=tinysrgb&w=1400',
  videoBananaPoster:
    'https://images.pexels.com/photos/5945880/pexels-photo-5945880.jpeg?auto=compress&cs=tinysrgb&w=1400',
};

const uiAddress =
  '101/102/103, 1st Floor, Suyog Fusion, Opposite Madhuban Hotel, Dhole Patil Road, Pune - 411001';
const uiAddressQuery = encodeURIComponent(uiAddress);
const uiEmail = 'Marketing@shelkegroup.in';
const uiPhone = '+91 89563 08972';
const uiPhoneDigits = '918956308972';

export const companyInfo = {
  brand: 'Shelke Organic Farm',
  shortTagline:
    'Farm-fresh organic grapes, banana, jambhul, and Kesar mango grown with care and packed for freshness.',
  heroTagline: 'Pure Organic Fruit, Grown with Care.',
  address: uiAddress,
  email: uiEmail,
  emailHref: `mailto:${uiEmail}`,
  mapEmbedUrl: `https://www.google.com/maps?q=${uiAddressQuery}&output=embed`,
  mapUrl: `https://www.google.com/maps?q=${uiAddressQuery}`,
  phone: uiPhone,
  phoneHref: `tel:+${uiPhoneDigits}`,
  whatsAppHref: `https://wa.me/${uiPhoneDigits}`,
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
    alt: 'Ripe Kesar mangoes arranged together in a fresh harvest display',
    url: mediaLibrary.homeHeroMango,
  },
  aboutHero: {
    alt: 'Working farmland under active seasonal cultivation',
    url: mediaLibrary.aboutHeroField,
  },
  productsHero: {
    alt: 'Long rows of grape vines in a healthy vineyard',
    url: mediaLibrary.productsHeroVineyard,
  },
  galleryHero: {
    alt: 'Farmer working carefully through a cultivated green field',
    url: mediaLibrary.galleryHeroFarmer,
  },
  cartHero: {
    alt: 'Fresh bananas displayed after harvest',
    url: mediaLibrary.cartHeroBanana,
  },
  contactHero: {
    alt: 'Seedlings being planted carefully into prepared soil',
    url: mediaLibrary.contactHeroSeedlings,
  },
};

export const homeHero = {
  description:
    'Shelke Organic Farm now presents a focused four-fruit selection: grapes, banana, jambhul, and Keshar Amba. Every harvest is grown with care, handled thoughtfully, and shared fresh.',
  bottomCard: {
    label: 'Focused fruit lineup',
    text:
      'The website now highlights only grapes, banana, jambhul, and Keshar Amba so the collection stays clear and easy to browse.',
    value: '4 featured fruits',
  },
  eyebrow: 'Shelke Organic Farm',
  topCard: {
    label: 'Family-grown care',
    text: 'Traditional farm knowledge and disciplined organic methods shape each growing season.',
    value: '3 generations',
  },
};

export const homeStats = [
  { label: 'Family farming legacy', value: '3 generations' },
  { label: 'Organic cultivation promise', value: '100%' },
  { label: 'Fruits on the website', value: '4' },
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
      'We prepare the soil naturally and plan each block carefully before new growth begins.',
    title: 'Careful Preparation',
  },
  {
    description:
      'Daily field work, steady irrigation, and close observation keep every plant healthy through the season.',
    title: 'Nurturing Growth',
  },
  {
    description:
      'Fruit is harvested at the right moment so it reaches customers with freshness, flavor, and texture intact.',
    title: 'Peak Harvest',
  },
];

export const aboutPreview = {
  description:
    'Our farm combines traditional knowledge with sustainable practice to grow a focused collection of premium organic fruits with consistency and care.',
  image: {
    alt: 'Farmer working in the field with direct hands-on care',
    url: mediaLibrary.aboutPreviewFarmer,
  },
  secondaryImage: {
    alt: 'Harvest basket filled with fresh farm produce',
    url: mediaLibrary.aboutPreviewHarvestBasket,
  },
  title: 'A Heritage of Purity',
};

export const farmStory = {
  headline: 'Rooted in tradition, growing toward a sustainable future.',
  imagePrimary: {
    alt: 'Farm workers moving through an active harvest scene',
    url: mediaLibrary.farmStoryHarvestTeam,
  },
  imageSecondary: {
    alt: 'Farmer sowing into a prepared field during the growing season',
    url: mediaLibrary.farmStorySeedSowing,
  },
  paragraphs: [
    'For over three generations, our family has been dedicated to sustainable agriculture and careful seasonal growing.',
    'Today, we focus on a tighter fruit collection so every bunch, basket, and box of produce reflects the same standards of quality, freshness, and respect for the land.',
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
  alt: 'Farmer working directly in the field at Shelke Organic Farm',
  highlights: [
    '100% organic farming methods across every harvest block.',
    'Zero harmful pesticides or chemicals in our cultivation process.',
    'Sustainable water management and soil-conscious field planning.',
    'A steady commitment to supporting local biodiversity.',
  ],
  image: mediaLibrary.farmerProfileField,
  name: 'Shelke Family Farm',
  role: 'Three generations of organic growers',
  story:
    'Our farm heritage is built on patience, discipline, and gratitude for the land. The Shelke family continues to grow with the belief that healthy food should be accessible, sustainable farming should remain profitable, and every harvest should honor both community and environment.',
};

export const products = [
  {
    availability: 'Seasonal harvest',
    badge: 'Fresh vineyard pick',
    description:
      'Sweet, juicy organic grapes grown for snacking, serving, and everyday freshness. Each bunch is selected for natural sweetness, clean texture, and vibrant taste.',
    id: 'organic-grapes',
    image: mediaLibrary.productGrapes,
    imageAlt: 'Organic grapes arranged on a wooden board',
    name: 'Organic Grapes (Draksh)',
    origin: 'Shelke vineyard plots',
    price: 180,
    shortDescription: 'Sweet, juicy, and fresh organic grapes for daily enjoyment.',
    storageTip: 'Keep refrigerated and rinse only before serving to protect the natural bloom.',
    tags: ['Fresh harvest', 'Naturally sweet', 'Vineyard grown'],
    unit: 'kg',
  },
  {
    availability: 'Daily table fruit',
    badge: 'Family staple',
    description:
      'Naturally sweet, energy-rich organic bananas that fit easily into breakfast, tiffins, and everyday meals. We select bunches for dependable flavor, smooth texture, and steady ripening.',
    id: 'organic-banana',
    image: mediaLibrary.productBanana,
    imageAlt: 'Organic banana bunch arranged after harvest',
    name: 'Organic Banana (Keli)',
    origin: 'Shelke banana rows',
    price: 80,
    shortDescription: 'Creamy, naturally sweet bananas suited for everyday use.',
    storageTip: 'Store at room temperature and separate bunches if you want to slow ripening.',
    tags: ['Energy rich', 'Creamy texture', 'Everyday fruit'],
    unit: 'dozen',
  },
  {
    availability: 'Limited seasonal lot',
    badge: 'Special orchard pick',
    description:
      'Deep-colored organic jambhul with a tart-sweet finish and refreshing bite. This seasonal fruit is harvested carefully for its distinctive flavor and rich character.',
    id: 'organic-jambhul',
    image: mediaLibrary.productJambhul,
    imageAlt: 'Organic jambhul also known as jamun or black plum',
    name: 'Organic Jambhul (Jamun)',
    origin: 'Specialty orchard block',
    price: 220,
    shortDescription: 'Bold, tart-sweet jambhul with a deep color and refreshing finish.',
    storageTip: 'Keep chilled and consume soon after purchase for the best texture and flavor.',
    tags: ['Seasonal', 'Bold flavor', 'Deep color'],
    unit: 'kg',
  },
  {
    availability: 'Summer signature',
    badge: 'Premium mango pick',
    description:
      'Keshar Amba, also known as Kesar mango, is grown for its aroma, sweetness, and rich saffron tone. Each fruit is harvested with care so it ripens beautifully and delivers a full tropical finish.',
    id: 'organic-keshar-amba',
    image: mediaLibrary.productKesarMango,
    imageAlt: 'Keshar Amba also known as Kesar mango',
    name: 'Organic Keshar Amba (Kesar Mango)',
    origin: 'Shelke mango orchard',
    price: 350,
    shortDescription: 'Aromatic Kesar mango with signature sweetness and saffron color.',
    storageTip: 'Ripen at room temperature and chill briefly before serving for the best finish.',
    tags: ['Aromatic', 'Summer harvest', 'Premium fruit'],
    unit: 'kg',
  },
];

export const galleryImages = [
  {
    description: 'Fresh grapes in close detail, ready for harvest and packing.',
    image: mediaLibrary.galleryGrapes,
    layout: 'wide',
    title: 'Organic Grapes (Draksh)',
  },
  {
    description: 'A bright look at the Keshar Amba selection highlighted on the website.',
    image: mediaLibrary.galleryMango,
    layout: 'standard',
    title: 'Organic Keshar Amba (Kesar Mango)',
  },
  {
    description: 'A close, dark-toned fruit image of the seasonal jambhul harvest.',
    image: mediaLibrary.galleryJambhul,
    layout: 'standard',
    title: 'Organic Jambhul (Jamun)',
  },
  {
    description: 'A harvest-ready banana bunch representing our daily table fruit selection.',
    image: mediaLibrary.galleryBanana,
    layout: 'tall',
    title: 'Organic Banana (Keli)',
  },
  {
    description: 'Hands-on field work that reflects the daily rhythm of cultivation on the farm.',
    image: mediaLibrary.galleryFarmerField,
    layout: 'wide',
    title: 'Farmer at Work',
  },
  {
    description: 'A close agricultural field detail that reflects careful crop monitoring through the season.',
    image: mediaLibrary.galleryCropDetail,
    layout: 'standard',
    title: 'Crop Detail in the Field',
  },
  {
    description: 'A portrait of field work that shows patient, day-to-day care in active cultivation.',
    image: mediaLibrary.galleryFarmerPortrait,
    layout: 'tall',
    title: 'Field Care in Progress',
  },
  {
    description: 'A working harvest scene that captures movement, teamwork, and seasonal intensity.',
    image: mediaLibrary.galleryHarvestMotion,
    layout: 'wide',
    title: 'Harvest in Motion',
  },
  {
    description: 'Lush greenhouse rows showing another side of attentive plant care and farm planning.',
    image: mediaLibrary.galleryGreenhouse,
    layout: 'standard',
    title: 'Greenhouse Cultivation',
  },
];

export const featuredVideos = [
  {
    description: 'A grape-focused clip showing fruit hanging and moving naturally on the vine.',
    id: 'grape-harvest-video',
    poster: mediaLibrary.videoGrapesPoster,
    title: 'Grape Harvest Detail',
    videoTitle: 'Grape harvest detail video',
    videoUrl: 'https://www.pexels.com/download/video/5372082/',
  },
  {
    description: 'A mango clip showing fruit being gathered during harvest.',
    id: 'mango-harvest-video',
    poster: mediaLibrary.videoMangoPoster,
    title: 'Mango Harvest in Motion',
    videoTitle: 'Mango harvest in motion video',
    videoUrl: 'https://www.pexels.com/download/video/11760137/',
  },
  {
    description: 'A short banana clip that adds a close fruit-detail moment to the gallery.',
    id: 'banana-video',
    poster: mediaLibrary.videoBananaPoster,
    title: 'Banana Fruit Detail',
    videoTitle: 'Banana fruit detail video',
    videoUrl: 'https://www.pexels.com/download/video/7010669/',
  },
];

export const contactHighlights = [
  {
    description: 'Call our Pune office for product questions, order requests, or business enquiries.',
    icon: 'phone',
    title: 'Phone',
    value: companyInfo.phone,
  },
  {
    description: 'Reach our marketing team and we will respond as quickly as possible.',
    icon: 'mail',
    title: 'Email',
    value: companyInfo.email,
  },
  {
    description: 'Visit or courier documents to our Pune office using the address below.',
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
  formIntro: 'Have questions about our products, sourcing, or services? We would love to hear from you.',
  visitDescription:
    'Plan a visit to our Pune office to discuss product availability, sourcing requirements, or partnership opportunities.',
  visitTitle: 'Visit Our Office',
  visitNote: 'Please call ahead before visiting our office.',
  whatsappDescription: 'Chat with our team directly on WhatsApp for a faster response.',
  whatsappTitle: 'Chat on WhatsApp',
};
