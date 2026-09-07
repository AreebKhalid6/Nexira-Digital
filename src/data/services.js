import {
  Globe,
  Smartphone,
  Palette,
  ShoppingBag,
  Layout,
  TrendingUp,
  Store,
  Megaphone,
} from 'lucide-react';

export const services = [
  {
    id: 1,
    title: 'Web Development',
    icon: Globe,
    category: 'Build',
    shortDescription:
      'Custom websites built with modern technologies for optimal performance and user experience.',
    keyBenefit: 'Fast, responsive websites designed to engage and convert visitors.',
    fullDescription:
      'We design and develop custom websites that are fast, responsive and built around your business goals. From marketing sites to complex web platforms, every build prioritises performance, usability and long-term scalability.',
    features: [
      'Custom responsive websites',
      'Performance optimisation',
      'CMS integration',
      'SEO-ready structure',
      'Secure hosting setup',
      'Ongoing maintenance options',
    ],
    deliverables: [
      'Fully responsive website',
      'CMS training & documentation',
      'Analytics setup',
      'Launch support',
    ],
    faqs: [
      {
        q: 'How long does a typical website project take?',
        a: 'Most marketing websites take 4–8 weeks depending on scope, content readiness and feedback cycles.',
      },
      {
        q: 'Do you rebuild existing websites?',
        a: 'Yes. We can redesign and rebuild existing sites for better performance, UX and conversion.',
      },
    ],
  },
  {
    id: 2,
    title: 'App Development',
    icon: Smartphone,
    category: 'Build',
    shortDescription:
      'Native and cross-platform mobile applications that engage users and support business growth.',
    keyBenefit: 'Scalable mobile apps designed for engagement and long-term growth.',
    fullDescription:
      'We build mobile applications that feel polished, perform reliably and support real business workflows. Whether you need iOS, Android or a cross-platform solution, we focus on usability, scalability and clean architecture.',
    features: [
      'iOS & Android apps',
      'Cross-platform development',
      'API & backend integration',
      'Push notifications',
      'App store submission support',
      'Post-launch iteration',
    ],
    deliverables: [
      'Production-ready app builds',
      'Admin / backend setup',
      'Store listing assets',
      'Launch & support plan',
    ],
    faqs: [
      {
        q: 'Do you build native or cross-platform apps?',
        a: 'Both. We recommend the right approach based on your product goals, budget and timeline.',
      },
      {
        q: 'Can you help with app store approval?',
        a: 'Yes. We support listing setup, asset preparation and submission for App Store and Google Play.',
      },
    ],
  },
  {
    id: 3,
    title: 'Logo & Brand Design',
    icon: Palette,
    category: 'Design',
    shortDescription:
      'Distinctive visual identities that capture your brand essence and leave lasting impressions.',
    keyBenefit: 'A cohesive identity that sets you apart from competitors.',
    fullDescription:
      'We create brand identities that communicate who you are and what you stand for. From logo systems to visual guidelines, we build brands that feel consistent across digital and commercial touchpoints.',
    features: [
      'Logo design systems',
      'Colour & typography',
      'Brand guidelines',
      'Visual identity assets',
      'Social brand kits',
      'Brand positioning support',
    ],
    deliverables: [
      'Primary & secondary logos',
      'Brand style guide',
      'Colour and type system',
      'Export-ready asset pack',
    ],
    faqs: [
      {
        q: 'Do you only design logos?',
        a: 'No. We can deliver a full brand identity including guidelines, social kits and supporting assets.',
      },
      {
        q: 'Can you refresh an existing brand?',
        a: 'Yes. We often evolve existing brands to feel more modern while protecting recognition.',
      },
    ],
  },
  {
    id: 4,
    title: 'UI/UX Design',
    icon: Layout,
    category: 'Design',
    shortDescription:
      'Intuitive interfaces and experiences designed to delight users and achieve business goals.',
    keyBenefit: 'Interfaces that are easy to use and designed around real user behaviour.',
    fullDescription:
      'Our UI/UX work focuses on clarity, conversion and ease of use. We design interfaces that look refined and feel intuitive — whether for websites, products or marketplace experiences.',
    features: [
      'User research & flows',
      'Wireframes & prototypes',
      'High-fidelity UI design',
      'Design systems',
      'Conversion-focused layouts',
      'Handoff for development',
    ],
    deliverables: [
      'UX wireframes',
      'Interactive prototypes',
      'Final UI screens',
      'Developer-ready design files',
    ],
    faqs: [
      {
        q: 'Do you design before development starts?',
        a: 'Yes. We typically validate structure and UX before moving into build to reduce rework.',
      },
      {
        q: 'Can you redesign an existing product interface?',
        a: 'Absolutely. We improve usability, hierarchy and conversion without losing your brand voice.',
      },
    ],
  },
  {
    id: 5,
    title: 'Shopify Store Development',
    icon: ShoppingBag,
    category: 'Sell',
    shortDescription:
      'High-converting Shopify stores optimised for sales, speed and seamless customer journeys.',
    keyBenefit:
      'A Shopify store built to convert, with fast load times and intuitive navigation.',
    fullDescription:
      'We build Shopify stores designed to sell. From theme customisation to conversion-focused product pages and checkout optimisation, we help brands create smooth shopping experiences that support growth.',
    features: [
      'Custom Shopify themes',
      'Product page optimisation',
      'Checkout improvements',
      'App & integration setup',
      'Speed optimisation',
      'Conversion-focused UX',
    ],
    deliverables: [
      'Live Shopify store',
      'Configured apps & payments',
      'Training for your team',
      'Launch checklist',
    ],
    faqs: [
      {
        q: 'Do you work with Shopify Plus?',
        a: 'Yes. We support both standard Shopify and Shopify Plus depending on your scale.',
      },
      {
        q: 'Can you migrate an existing store?',
        a: 'Yes. We can migrate products, collections and content into a cleaner Shopify setup.',
      },
    ],
  },
  {
    id: 6,
    title: 'TikTok Shop Management',
    icon: Store,
    category: 'Sell',
    shortDescription:
      'Complete TikTok Shop solutions including store setup, product listing, optimisation and growth.',
    keyBenefit: 'Tap into social commerce with a properly managed TikTok Shop presence.',
    fullDescription:
      'We help brands set up and manage TikTok Shop with clear listings, product optimisation and a commercial structure built for social commerce discovery and conversion.',
    features: [
      'TikTok Shop setup',
      'Product listing optimisation',
      'Content-commerce alignment',
      'Catalogue management',
      'Performance monitoring',
      'Growth recommendations',
    ],
    deliverables: [
      'Live TikTok Shop presence',
      'Optimised listings',
      'Operations checklist',
      'Monthly improvement plan',
    ],
    faqs: [
      {
        q: 'Do you manage TikTok Shop ongoing?',
        a: 'Yes. We can support setup only or ongoing listing and performance management.',
      },
      {
        q: 'Is TikTok Shop suitable for every brand?',
        a: 'Not always. We assess product fit, creative readiness and commercial goals first.',
      },
    ],
  },
  {
    id: 7,
    title: 'Amazon Store Management',
    icon: Store,
    category: 'Sell',
    shortDescription:
      'Professional Amazon services including seller account setup, listing optimisation and growth.',
    keyBenefit: 'Improved visibility and sales through properly optimised Amazon listings.',
    fullDescription:
      'We help brands establish and improve their Amazon presence with stronger listings, clearer storefront structures and ongoing optimisation focused on visibility and conversion.',
    features: [
      'Seller account setup support',
      'Listing optimisation',
      'A+ / storefront structure',
      'Keyword-focused content',
      'Catalogue organisation',
      'Performance reviews',
    ],
    deliverables: [
      'Optimised Amazon listings',
      'Storefront structure',
      'Content guidelines',
      'Growth recommendations',
    ],
    faqs: [
      {
        q: 'Do you create Amazon listings from scratch?',
        a: 'Yes. We can build or rewrite listings with stronger titles, bullets, images guidance and structure.',
      },
      {
        q: 'Can you improve an existing Amazon account?',
        a: 'Yes. We focus on listing quality, structure and conversion opportunities.',
      },
    ],
  },
  {
    id: 8,
    title: 'eBay Store Management',
    icon: Store,
    category: 'Sell',
    shortDescription:
      'End-to-end eBay store solutions including setup, listing optimisation, inventory and sales.',
    keyBenefit: 'Maximise your eBay marketplace performance with properly managed listings.',
    fullDescription:
      'We support eBay store setup and optimisation so your listings are clearer, more discoverable and easier to manage as your catalogue grows.',
    features: [
      'eBay store setup',
      'Listing optimisation',
      'Category & inventory structure',
      'Store branding support',
      'Sales performance review',
      'Ongoing listing support',
    ],
    deliverables: [
      'Configured eBay store',
      'Optimised listing templates',
      'Inventory structure',
      'Operating guidelines',
    ],
    faqs: [
      {
        q: 'Do you manage listings ongoing?',
        a: 'Yes. We can support both one-off optimisation and ongoing store management.',
      },
      {
        q: 'Can you help with store branding on eBay?',
        a: 'Yes. We improve store presentation, listing consistency and overall buyer experience.',
      },
    ],
  },
  {
    id: 9,
    title: 'Etsy Store Management',
    icon: Store,
    category: 'Sell',
    shortDescription:
      'Creative Etsy solutions including shop setup, listings, SEO optimisation and branding.',
    keyBenefit:
      'Stand out in the handmade and vintage marketplace with a well-branded shop.',
    fullDescription:
      'We help makers and brands build stronger Etsy shops with clearer branding, better listings and SEO-minded product content that improves discoverability.',
    features: [
      'Etsy shop setup',
      'Listing SEO',
      'Product photography guidance',
      'Brand-aligned shop design',
      'Category optimisation',
      'Growth recommendations',
    ],
    deliverables: [
      'Optimised Etsy shop',
      'Listing templates',
      'SEO keyword guidance',
      'Shop branding updates',
    ],
    faqs: [
      {
        q: 'Do you rewrite Etsy listings?',
        a: 'Yes. We improve titles, tags, descriptions and listing structure for better search visibility.',
      },
      {
        q: 'Can you help new shops launch?',
        a: 'Yes. We support full setup from branding through to first listings.',
      },
    ],
  },
  {
    id: 10,
    title: 'Digital Growth Solutions',
    icon: TrendingUp,
    category: 'Grow',
    shortDescription:
      'Comprehensive strategies to scale your digital presence and maximise online potential.',
    keyBenefit: 'A data-driven approach to improving visibility, traffic and conversions.',
    fullDescription:
      'We help businesses grow after launch with practical digital strategies focused on visibility, conversion and long-term improvement across your website, commerce channels and campaigns.',
    features: [
      'Growth audits',
      'Conversion optimisation',
      'Channel strategy',
      'Analytics & insights',
      'Funnel improvements',
      'Roadmap planning',
    ],
    deliverables: [
      'Growth audit report',
      'Prioritised action plan',
      'KPI recommendations',
      'Implementation roadmap',
    ],
    faqs: [
      {
        q: 'Is this only for new websites?',
        a: 'No. Growth solutions are especially useful for businesses that already have a digital presence and want better results.',
      },
      {
        q: 'Do you implement the recommendations?',
        a: 'Yes. We can advise only or continue into implementation across design, development and marketing.',
      },
    ],
  },
  {
    id: 11,
    title: 'Digital Marketing',
    icon: Megaphone,
    category: 'Grow',
    shortDescription:
      'Data-led digital marketing strategies to improve visibility, engagement and conversions.',
    keyBenefit:
      'Data-led strategies designed to improve visibility, engagement and conversion.',
    fullDescription:
      'We plan and support digital marketing activity that connects your brand with the right audience. The focus is clarity, measurable performance and campaigns that support commercial goals.',
    features: [
      'Campaign strategy',
      'Paid media planning',
      'Content direction',
      'Landing page alignment',
      'Performance tracking',
      'Ongoing optimisation',
    ],
    deliverables: [
      'Marketing strategy plan',
      'Campaign structure',
      'Creative direction',
      'Reporting framework',
    ],
    faqs: [
      {
        q: 'Do you run ads in-house?',
        a: 'We can support strategy, structure and optimisation. Setup depth depends on your channels and goals.',
      },
      {
        q: 'Can marketing work with your web and Shopify services?',
        a: 'Yes. Marketing performs best when pages, offers and tracking are aligned — we connect those pieces.',
      },
    ],
  },
];
