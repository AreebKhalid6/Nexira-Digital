import React, { useState, useRef, useEffect } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';
import {
  ArrowRight,
  X,
  Check,
  Globe,
  Smartphone,
  Palette,
  Layout,
  Rocket,
  Megaphone,
} from 'lucide-react';

// ─── Brand Logos ───
const TikTokLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M12.53.02C13.84 0 15.14.01 16.44 0c.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
  </svg>
);

const AmazonLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M2.027 17.023c.061-.098.156-.105.289-.02 3.035 1.76 6.338 2.645 9.906 2.645 2.381 0 4.73-.447 7.051-1.332l.262-.117c.115-.051.195-.084.244-.109.189-.074.326-.037.438.109.102.143.076.279-.1.4-.213.158-.5.342-.84.545-1.037.619-2.203 1.098-3.492 1.441a14.815 14.815 0 0 1-3.77.508c-1.889 0-3.68-.33-5.369-.99a14.875 14.875 0 0 1-4.531-2.797c-.084-.061-.125-.123-.125-.184 0-.039.016-.074.041-.109l-.004.01zm5.479-5.189c0-.84.207-1.555.619-2.152.414-.592.977-1.041 1.703-1.346.666-.281 1.465-.48 2.43-.602.326-.037.861-.086 1.6-.145v-.31c0-.773-.084-1.299-.248-1.564-.252-.359-.65-.541-1.203-.541h-.15c-.4.039-.746.162-1.039.383a1.51 1.51 0 0 0-.564.916c-.049.25-.172.387-.361.426l-2.105-.264c-.209-.051-.311-.15-.311-.326 0-.037.006-.074.018-.123.209-1.078.715-1.881 1.52-2.404.814-.514 1.752-.814 2.828-.875h.451c1.379 0 2.469.361 3.244 1.076.115.123.227.25.34.398.1.139.188.264.234.377.063.111.127.275.164.475.051.213.088.352.113.426.023.086.051.25.064.514.006.262.016.41.016.461v4.406c0 .314.049.602.137.865.088.26.174.451.262.563l.428.561a.598.598 0 0 1 .111.303c0 .102-.049.188-.148.26-1.002.877-1.553 1.352-1.639 1.428-.137.113-.313.125-.525.039a5.397 5.397 0 0 1-.439-.414l-.258-.291c-.051-.063-.141-.174-.266-.352l-.25-.363c-.676.74-1.338 1.205-2.002 1.393-.414.125-.914.188-1.529.188-.926 0-1.701-.285-2.303-.863-.598-.576-.9-1.389-.9-2.453l-.043-.063.001-.007zm3.131-.367c0 .475.117.852.355 1.139.236.285.563.428.965.428.035 0 .088-.008.16-.018.078-.012.111-.02.141-.02.512-.133.902-.461 1.189-.982a2.62 2.62 0 0 0 .299-.758c.076-.268.1-.494.111-.666.016-.166.016-.453.016-.84v-.451c-.703 0-1.24.049-1.604.148-1.063.303-1.604.977-1.604 2.029l-.029-.016v.007zm7.646 5.865c.025-.051.063-.092.109-.143.301-.201.596-.342.877-.416a6.597 6.597 0 0 1 1.344-.201c.117-.01.234 0 .346.025.539.051.873.141.977.273.053.078.074.191.074.328v.125c0 .426-.117.926-.348 1.502s-.553 1.041-.963 1.402c-.061.049-.115.074-.164.074-.025 0-.051 0-.074-.01-.076-.037-.09-.1-.055-.201.451-1.051.672-1.787.672-2.201 0-.127-.025-.227-.074-.289-.119-.137-.457-.217-1.02-.217a9.42 9.42 0 0 0-.727.039c-.303.041-.582.078-.834.115-.074 0-.123-.014-.15-.037-.025-.025-.031-.039-.018-.064 0-.014.006-.025.018-.053v-.049l.01-.002z"/>
  </svg>
);

const EbayLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M6.056 12.13V7.21h1.2v3.026c.59-.703 1.402-.906 2.202-.906 1.34 0 2.828.904 2.828 2.855 0 .233-.015.457-.06.668.24-.953 1.274-1.305 2.896-1.344.51-.018 1.095-.018 1.56-.018v-.135c0-.885-.556-1.244-1.53-1.244-.72 0-1.245.3-1.305.81h-1.275c.136-1.29 1.5-1.62 2.686-1.62 1.064 0 1.995.27 2.415 1.02l-.436-.84h1.41l2.055 4.125 2.055-4.126H24l-3.72 7.305h-1.346l1.07-2.04-2.33-4.38c.13.255.2.555.2.93v2.46c0 .346.01.69.04 1.005H16.8c-.03-.255-.046-.51-.046-.765-.603.734-1.32.96-2.32.96-1.48 0-2.272-.78-2.272-1.695 0-.15.015-.284.037-.405-.3 1.246-1.36 2.086-2.767 2.086-.87 0-1.694-.315-2.2-.93 0 .24-.015.494-.04.734h-1.18c.02-.39.04-.855.04-1.245v-1.05h-4.83c.065 1.095.818 1.74 1.853 1.74.718 0 1.355-.3 1.568-.93h1.24c-.24 1.29-1.61 1.725-2.79 1.725C.95 15.007 0 13.82 0 12.23c0-1.754.982-2.91 3.116-2.91 1.688 0 2.93.886 2.94 2.806v.005zm9.137.183c-1.095.034-1.77.233-1.77.95 0 .465.36.97 1.305.97 1.26 0 1.935-.69 1.935-1.814v-.13c-.45 0-.99.006-1.484.022h.012zm-6.06 1.875c1.11 0 1.876-.806 1.876-2.02s-.768-2.02-1.893-2.02c-1.11 0-1.89.806-1.89 2.02s.765 2.02 1.875 2.02h.03zm-4.35-2.514c-.044-1.125-.854-1.546-1.725-1.546-.944 0-1.694.474-1.815 1.546h3.54z"/>
  </svg>
);

const EtsyLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 512 512" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M218 137c0-4 2-6 8-6h94c17 0 25 14 31 40l5 20h16c2-59 5-86 5-86s-40 5-64 5H194l-64-2v17l22 4c16 2 19 6 20 20 0 0 1 41 1 108s-1 108-1 108c0 12-5 17-20 19l-22 4v17l64-2h107c24 0 81 2 81 2 1-14 10-82 11-89h-16l-16 36c-13 29-31 30-52 30h-61c-20 0-30-8-30-25v-93s46 0 60 1c12 .8 18 4 22 20l5 22h18l-1-53 2-54h-18l-6 24c-4 16-6 18-22 20-20 2-60 1-60 1V135"/>
  </svg>
);

const ShopifyLogo = ({ className }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg">
    <path d="M15.337 23.979l7.216-1.561s-2.604-17.613-2.625-17.73c-.018-.116-.114-.192-.211-.192s-1.929-.136-1.929-.136-1.275-1.274-1.439-1.411c-.045-.037-.075-.057-.121-.074l-.914 21.104h.023zM11.71 11.305s-.81-.424-1.774-.424c-1.447 0-1.504.906-1.504 1.141 0 1.232 3.24 1.715 3.24 4.629 0 2.295-1.44 3.76-3.406 3.76-2.354 0-3.54-1.465-3.54-1.465l.646-2.086s1.245 1.066 2.28 1.066c.675 0 .975-.545.975-.932 0-1.619-2.654-1.694-2.654-4.359-.034-2.237 1.571-4.416 4.827-4.416 1.257 0 1.875.361 1.875.361l-.945 2.715-.02.01zM11.17.83c.136 0 .271.038.405.135-.984.465-2.064 1.639-2.508 3.992-.656.213-1.293.405-1.889.578C7.697 3.75 8.951.84 11.17.84V.83zm1.235 2.949v.135c-.754.232-1.583.484-2.394.736.466-1.777 1.333-2.645 2.085-2.971.193.501.309 1.176.309 2.1zm.539-2.234c.694.074 1.141.867 1.429 1.755-.349.114-.735.231-1.158.366v-.252c0-.752-.096-1.371-.271-1.871v.002zm2.992 1.289c-.02 0-.06.021-.078.021s-.289.075-.714.21c-.423-1.233-1.176-2.37-2.508-2.37h-.115C12.135.209 11.669 0 11.265 0 8.159 0 6.675 3.877 6.21 5.846c-1.194.365-2.063.636-2.16.674-.675.213-.694.232-.772.87-.075.462-1.83 14.063-1.83 14.063L15.009 24l.927-21.166z"/>
  </svg>
);

// ─── NexiraDigitalGrid (local) ───
function NexiraDigitalGrid({ opacity = 0.15, className = '' }) {
  return (
    <div className={`absolute inset-0 pointer-events-none overflow-hidden ${className}`} style={{ opacity }}>
      <svg className="w-full h-full" preserveAspectRatio="xMidYMid slice" viewBox="0 0 1200 800" fill="none" xmlns="http://www.w3.org/2000/svg">
        <g stroke="#3B82F6" strokeWidth="0.5" opacity="0.3">
          {[...Array(13)].map((_, i) => (
            <line key={`v${i}`} x1={i * 100} y1="0" x2={i * 100} y2="800" />
          ))}
          {[...Array(9)].map((_, i) => (
            <line key={`h${i}`} x1="0" y1={i * 100} x2="1200" y2={i * 100} />
          ))}
        </g>
        <g stroke="#3B82F6" strokeWidth="1.5" opacity="0.5">
          <path d="M200 700 L200 100 L1000 700 L1000 100" fill="none" />
        </g>
        <g fill="#3B82F6">
          {[
            [200, 700], [200, 100], [1000, 700], [1000, 100],
            [400, 300], [600, 500], [800, 200], [300, 600],
            [700, 400], [500, 200],
          ].map(([cx, cy], i) => (
            <motion.circle
              key={i}
              cx={cx}
              cy={cy}
              r="3"
              animate={{ opacity: [0.3, 1, 0.3] }}
              transition={{ duration: 3, repeat: Infinity, delay: i * 0.3, ease: "easeInOut" }}
            />
          ))}
        </g>
        <motion.path
          d="M200 700 L200 100 L1000 700 L1000 100"
          stroke="#60A5FA"
          strokeWidth="2"
          fill="none"
          strokeDasharray="20 1180"
          animate={{ strokeDashoffset: [0, -1200] }}
          transition={{ duration: 6, repeat: Infinity, ease: "linear" }}
          opacity="0.6"
        />
      </svg>
    </div>
  );
}

// ─── Services Data ───
const services = [
  {
    id: 'web-development',
    icon: Globe,
    title: 'Web Development',
    category: 'Build',
    shortDescription: 'Custom websites built with modern technologies for optimal performance and user experience.',
    keyBenefit: 'Fast, responsive websites designed to engage and convert visitors.',
    fullDescription: 'We craft custom websites that combine clean design with reliable functionality. Our development team uses modern frameworks and technologies to deliver fast, responsive, SEO-optimised websites that engage visitors and support your business goals.',
    features: ['Responsive Design', 'Fast Performance', 'SEO Optimised', 'Custom CMS', 'API Integration', 'Security Hardened'],
    deliverables: ['Fully responsive website', 'CMS setup', 'SEO foundations', 'Analytics integration', 'Documentation & training'],
    faqs: [
      { q: 'How long does a typical website take?', a: 'Most projects take 4–8 weeks depending on scope, content readiness and integrations.' },
      { q: 'Will I be able to update content myself?', a: 'Yes. We build on a CMS so you can manage content independently after launch.' },
      { q: 'Do you provide hosting?', a: 'We can recommend and configure hosting, or work with your existing provider.' },
    ],
  },
  {
    id: 'app-development',
    icon: Smartphone,
    title: 'App Development',
    category: 'Build',
    shortDescription: 'Native and cross-platform mobile applications that engage users and support business growth.',
    keyBenefit: 'Scalable mobile apps designed for engagement and long-term growth.',
    fullDescription: 'We build user-friendly mobile applications for iOS and Android that turn your ideas into engaging digital experiences. From concept to launch, we ensure your app is scalable, secure and designed for meaningful user engagement.',
    features: ['iOS & Android', 'Cross-Platform', 'Push Notifications', 'App Store Optimisation', 'Offline Support', 'Analytics Integration'],
    deliverables: ['Mobile app (iOS/Android)', 'App store submission', 'Source code', 'API & backend setup', 'Post-launch support'],
    faqs: [
      { q: 'Do you build for both iOS and Android?', a: 'Yes. We use cross-platform frameworks so your app runs on both from a single codebase.' },
      { q: 'Can you handle app store submission?', a: 'Yes, we manage the submission process for both the App Store and Google Play.' },
    ],
  },
  {
    id: 'logo-brand-design',
    icon: Palette,
    title: 'Logo & Brand Design',
    category: 'Design',
    shortDescription: 'Distinctive visual identities that capture your brand essence and leave lasting impressions.',
    keyBenefit: 'A cohesive identity that sets you apart from competitors.',
    fullDescription: 'We create distinctive visual identities that capture your brand essence and leave lasting impressions. Our branding process includes strategy, logo design, brand guidelines and complete visual identity systems that set you apart.',
    features: ['Logo Design', 'Brand Guidelines', 'Visual Identity', 'Brand Strategy', 'Colour Palette', 'Typography System'],
    deliverables: ['Logo in all formats', 'Brand guidelines document', 'Colour & typography system', 'Social media templates', 'Business card design'],
    faqs: [
      { q: 'How many logo concepts do you provide?', a: 'We typically present 3 initial concepts, then refine the chosen direction through revision rounds.' },
      { q: 'Do I own the final designs?', a: 'Yes, you receive full ownership of the final brand assets upon project completion.' },
    ],
  },
  {
    id: 'shopify-development',
    icon: ShopifyLogo,
    title: 'Shopify Store Development',
    category: 'Sell',
    shortDescription: 'High-converting Shopify stores optimised for sales, speed and seamless customer journeys.',
    keyBenefit: 'A Shopify store built to convert, with fast load times and intuitive navigation.',
    fullDescription: 'We create high-performing Shopify stores with custom design, seamless setup, secure payments and optimised user experience. Our Shopify experts ensure your store is built to convert, with fast load times and intuitive navigation.',
    features: ['Custom Themes', 'App Integration', 'Payment Setup', 'Inventory Management', 'Speed Optimisation', 'Conversion Optimisation'],
    deliverables: ['Custom Shopify theme', 'Product & collection setup', 'Payment & shipping config', 'App integrations', 'Launch & testing'],
    faqs: [
      { q: 'Do you work with existing Shopify stores?', a: 'Yes. We can audit and improve existing stores, or build a new one from scratch.' },
      { q: 'Can you migrate from another platform to Shopify?', a: 'Yes, we handle migrations from WooCommerce, Magento, Wix and other platforms.' },
    ],
  },
  {
    id: 'ui-ux-design',
    icon: Layout,
    title: 'UI/UX Design',
    category: 'Design',
    shortDescription: 'Intuitive interfaces and experiences designed to delight users and achieve business goals.',
    keyBenefit: 'Interfaces that are easy to use and designed around real user behaviour.',
    fullDescription: 'We design intuitive interfaces and experiences that delight users and achieve business goals. Our UX process includes user research, wireframing, prototyping and usability testing to ensure every interaction is meaningful and effective.',
    features: ['User Research', 'Wireframing', 'Prototyping', 'Usability Testing', 'Design Systems', 'Accessibility'],
    deliverables: ['Wireframes & prototypes', 'UI design files', 'Design system', 'Usability test report', 'Handoff documentation'],
    faqs: [
      { q: 'Do you conduct user research?', a: 'Yes. We start with research to understand your users before designing any interfaces.' },
      { q: 'Can you work with our existing design system?', a: 'Absolutely. We can extend your existing system or create a new one from scratch.' },
    ],
  },
  {
    id: 'digital-growth',
    icon: Rocket,
    title: 'Digital Growth Solutions',
    category: 'Grow',
    shortDescription: 'Comprehensive strategies to scale your digital presence and maximise online potential.',
    keyBenefit: 'A data-driven approach to improving visibility, traffic and conversions.',
    fullDescription: 'We deliver comprehensive strategies to scale your digital presence and maximise online potential. Our data-driven approach combines SEO, content marketing, analytics and conversion optimisation to drive measurable growth.',
    features: ['SEO Strategy', 'Content Marketing', 'Analytics', 'Conversion Optimisation', 'Social Media', 'PPC Management'],
    deliverables: ['Growth strategy document', 'SEO audit & roadmap', 'Analytics dashboard setup', 'Content plan', 'Monthly performance reports'],
    faqs: [
      { q: 'How soon will I see results?', a: 'SEO and organic growth typically show results in 3–6 months. Paid channels can drive traffic immediately.' },
      { q: 'Do you require a long-term contract?', a: 'We work on monthly retainers with no long-term lock-in. You can adjust or pause as needed.' },
    ],
  },
  {
    id: 'tiktok-shop',
    icon: TikTokLogo,
    title: 'TikTok Shop Management',
    category: 'Sell',
    shortDescription: 'Complete TikTok Shop solutions including store setup, product listing, optimisation and ongoing growth.',
    keyBenefit: 'Tap into social commerce with a properly managed TikTok Shop presence.',
    fullDescription: 'We provide complete TikTok Shop solutions to help you tap into the world of social commerce. From store setup and product listing to optimisation and order management, we handle everything to grow your TikTok Shop presence and drive sales.',
    features: ['Store Setup', 'Product Listing', 'Listing Optimisation', 'Order Management', 'Product Strategy', 'Ongoing Store Growth'],
    deliverables: ['TikTok Shop setup', 'Product listings', 'Listing optimisation', 'Order management workflow', 'Growth strategy'],
    faqs: [
      { q: 'Do I need an existing TikTok account?', a: 'We can work with your existing account or help you set up a new one for your shop.' },
      { q: 'Can you help with content creation?', a: 'We focus on shop management and listings. We can recommend content partners for video production.' },
    ],
  },
  {
    id: 'amazon-store',
    icon: AmazonLogo,
    title: 'Amazon Store Management',
    category: 'Sell',
    shortDescription: 'Professional Amazon services including seller account setup, listing optimisation, SEO and sales growth.',
    keyBenefit: 'Improved visibility and sales through properly optimised Amazon listings.',
    fullDescription: 'We offer professional Amazon services to help you succeed on the world\'s largest marketplace. From seller account setup and product listing optimisation to storefront development and SEO, we implement strategies that drive sales growth and improve visibility.',
    features: ['Seller Account Setup', 'Listing Optimisation', 'Storefront Development', 'Amazon SEO', 'Catalog Management', 'Sales Growth Strategy'],
    deliverables: ['Seller account setup', 'Optimised product listings', 'Storefront design', 'Keyword strategy', 'Catalog management plan'],
    faqs: [
      { q: 'Do you work with FBA or FBM?', a: 'We support both Fulfilment by Amazon and Fulfilment by Merchant models.' },
      { q: 'Can you help with Amazon advertising?', a: 'Yes, we can set up and manage sponsored product campaigns as part of the growth strategy.' },
    ],
  },
  {
    id: 'ebay-store',
    icon: EbayLogo,
    title: 'eBay Store Management',
    category: 'Sell',
    shortDescription: 'End-to-end eBay store solutions including setup, listing optimisation, inventory and SEO for visibility.',
    keyBenefit: 'Maximise your eBay marketplace performance with properly managed listings.',
    fullDescription: 'We deliver end-to-end eBay store solutions designed to increase visibility and sales. From store setup and product listing to optimisation and inventory management, our strategies are built to maximise your eBay marketplace performance.',
    features: ['Store Setup', 'Product Listing', 'Listing Optimisation', 'Inventory Management', 'eBay SEO', 'Visibility Strategies'],
    deliverables: ['eBay store setup', 'Product listings', 'Listing optimisation', 'Inventory workflow', 'Visibility strategy'],
    faqs: [
      { q: 'Can you manage an existing eBay store?', a: 'Yes, we can take over management of an existing store or set up a new one.' },
      { q: 'Do you handle international eBay listings?', a: 'Yes, we can configure multi-region listings and currency settings.' },
    ],
  },
  {
    id: 'etsy-store',
    icon: EtsyLogo,
    title: 'Etsy Store Management',
    category: 'Sell',
    shortDescription: 'Creative Etsy solutions including shop setup, listings, SEO optimisation and branding for conversions.',
    keyBenefit: 'Stand out in the handmade and vintage marketplace with a well-branded shop.',
    fullDescription: 'We provide creative and professional Etsy solutions to help your handmade and vintage products stand out. From shop setup and product listings to SEO optimisation and store branding, we implement strategies to improve traffic and conversions.',
    features: ['Shop Setup', 'Product Listings', 'SEO Optimisation', 'Product Presentation', 'Store Branding', 'Traffic & Conversion Strategy'],
    deliverables: ['Etsy shop setup', 'Product listings', 'SEO optimisation', 'Shop branding', 'Traffic strategy'],
    faqs: [
      { q: 'Do you work with new Etsy shops?', a: 'Yes, we can set up a new shop from scratch or improve an existing one.' },
      { q: 'Can you help with product photography?', a: 'We provide guidance on product presentation and can recommend photography partners.' },
    ],
  },
  {
    id: 'digital-marketing',
    icon: Megaphone,
    title: 'Digital Marketing',
    category: 'Grow',
    shortDescription: 'Data-led digital marketing strategies to improve visibility, engagement and conversion opportunities.',
    keyBenefit: 'Data-led strategies designed to improve visibility, engagement and conversion.',
    fullDescription: 'We deliver data-led digital marketing strategies designed to improve visibility, engagement and conversion opportunities. Our approach combines SEO, paid advertising, social media and content strategy to help your business reach the right audience and grow online.',
    features: ['SEO', 'Paid Advertising', 'Social Media', 'Content Strategy', 'Conversion Optimisation', 'eCommerce Growth'],
    deliverables: ['Marketing strategy document', 'Channel plan', 'Campaign setup', 'Analytics dashboard', 'Monthly performance reports'],
    faqs: [
      { q: 'Do you guarantee specific results?', a: 'No. We use data-led strategies to improve visibility and engagement, but we do not guarantee specific rankings, sales or revenue.' },
      { q: 'Which channels do you cover?', a: 'SEO, paid advertising, social media, content strategy and conversion optimisation, tailored to your business goals.' },
    ],
  },
];

// ─── Process & Categories ───
const process = [
  { step: '01', title: 'Discover', description: 'Understand your business, audience and objectives.' },
  { step: '02', title: 'Strategise', description: 'Create a clear digital roadmap.' },
  { step: '03', title: 'Design', description: 'Develop the visual direction and user experience.' },
  { step: '04', title: 'Build', description: 'Develop and integrate the solution.' },
  { step: '05', title: 'Launch', description: 'Test, optimise and launch.' },
  { step: '06', title: 'Grow', description: 'Continue improving your digital presence.' },
];

const categories = [
  { label: 'Build', filter: 'Build', cols: 'md:grid-cols-2' },
  { label: 'Design', filter: 'Design', cols: 'md:grid-cols-2' },
  { label: 'Sell', filter: 'Sell', cols: 'md:grid-cols-2 lg:grid-cols-3' },
  { label: 'Grow', filter: 'Grow', cols: 'md:grid-cols-2' },
];

// ─── ServiceModal (local) ───
function ServiceModal({ service, onClose }) {
  useEffect(() => {
    if (!service) return;
    const handleEsc = (e) => e.key === 'Escape' && onClose();
    window.addEventListener('keydown', handleEsc);
    document.body.style.overflow = 'hidden';
    return () => {
      window.removeEventListener('keydown', handleEsc);
      document.body.style.overflow = '';
    };
  }, [service, onClose]);

  return (
    <AnimatePresence>
      {service && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          onClick={onClose}
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95, y: 20 }}
            animate={{ opacity: 1, scale: 1, y: 0 }}
            exit={{ opacity: 0, scale: 0.95, y: 20 }}
            transition={{ type: 'spring', damping: 25, stiffness: 300 }}
            onClick={(e) => e.stopPropagation()}
            className="relative w-full max-w-2xl max-h-[90vh] overflow-y-auto rounded-3xl bg-[#0F172A] border border-[#3B82F6]/20 shadow-2xl shadow-[#3B82F6]/10"
          >
            <div className="absolute inset-0 rounded-3xl bg-gradient-to-br from-[#3B82F6]/10 to-transparent pointer-events-none" />

            <button onClick={onClose} className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all">
              <X className="w-5 h-5" />
            </button>

            <div className="relative p-8 md:p-10">
              <div className="w-16 h-16 rounded-2xl bg-[#3B82F6]/10 border border-[#3B82F6]/20 flex items-center justify-center mb-6">
                <service.icon className="w-8 h-8 text-[#3B82F6]" />
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-white mb-4">{service.title}</h2>
              <p className="text-gray-400 leading-relaxed mb-8">{service.fullDescription}</p>

              <div className="mb-8">
                <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Key Capabilities</h3>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  {service.features.map((feature, i) => (
                    <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                      <div className="w-5 h-5 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                        <Check className="w-3 h-3 text-[#3B82F6]" />
                      </div>
                      {feature}
                    </div>
                  ))}
                </div>
              </div>

              {service.deliverables && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">Deliverables</h3>
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                    {service.deliverables.map((item, i) => (
                      <div key={i} className="flex items-center gap-2.5 text-sm text-gray-300">
                        <div className="w-5 h-5 rounded-full bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                          <Check className="w-3 h-3 text-[#3B82F6]" />
                        </div>
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {service.faqs && (
                <div className="mb-8">
                  <h3 className="text-sm font-semibold text-white uppercase tracking-wider mb-4">FAQ</h3>
                  <div className="space-y-3">
                    {service.faqs.map((faq, i) => (
                      <div key={i} className="p-4 rounded-xl bg-white/[0.02] border border-white/5">
                        <p className="text-white font-medium text-sm mb-2">{faq.q}</p>
                        <p className="text-gray-400 text-sm leading-relaxed">{faq.a}</p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              <div className="flex flex-col sm:flex-row gap-4">
                <Link to={createPageUrl('GetStarted')} onClick={onClose} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B82F6] text-white font-semibold rounded-full hover:bg-[#2563EB] transition-colors">
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link to={createPageUrl('Contact')} onClick={onClose} className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all">
                  Contact Us
                </Link>
              </div>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

// ─── CTA Section (local) ───
function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-24 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0">
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/8 rounded-full blur-[128px]" />
        <NexiraDigitalGrid opacity={0.05} />
      </div>

      <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="relative rounded-3xl bg-white/[0.02] border border-white/10 p-12 md:p-16 text-center"
        >
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
            Ready to Build Something{' '}
            <span className="text-[#3B82F6]">Better?</span>
          </h2>

          <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
            Tell us about your project and our team will help you identify the right digital
            solution.
          </p>

          <Link
            to={createPageUrl('GetStarted')}
            className="group inline-flex items-center gap-2 px-8 py-4 text-white font-semibold rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300"
          >
            Start Your Project
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
}

// ─── Page ───
export default function Services() {
  const [selectedService, setSelectedService] = useState(null);
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <SEO
        title="Digital Services | Web, Apps, Shopify & Marketing"
        description="Nexira Digital services: web development, apps, UI/UX, branding, Shopify, Amazon, eBay, Etsy and digital marketing for UK businesses."
        path="/Services"
      />
      {/* Hero */}
      <section ref={heroRef} className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.08} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {} } transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">Our Services</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Comprehensive Digital <span className="text-[#3B82F6]">Solutions</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              From concept to launch, we deliver end-to-end digital services that transform your ideas
              into powerful, market-ready solutions designed around your business goals.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Categorised Services */}
      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8 space-y-16">
          {categories.map((cat) => {
            const catServices = services.filter((s) => s.category === cat.filter);
            return (
              <div key={cat.filter}>
                <motion.h3
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  className="text-sm font-semibold text-[#3B82F6] uppercase tracking-widest mb-6 flex items-center gap-3"
                >
                  {cat.label}
                  <div className="flex-1 h-px bg-gradient-to-r from-[#3B82F6]/30 to-transparent" />
                </motion.h3>
                <div className={`grid grid-cols-1 ${cat.cols} gap-6`}>
                  {catServices.map((service, i) => (
                    <motion.div
                      key={service.id}
                      initial={{ opacity: 0, y: 30 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.05 }}
                      onClick={() => setSelectedService(service)}
                      className="group relative p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3B82F6]/30 hover:-translate-y-2 transition-all duration-500 cursor-pointer overflow-hidden"
                    >
                      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                        <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 via-transparent to-transparent" />
                        <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/20 rounded-full blur-3xl" />
                      </div>
                      <div className="relative w-14 h-14 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                        <motion.div animate={{ scale: [1, 1.08, 1] }} transition={{ duration: 3, repeat: Infinity, ease: 'easeInOut', delay: i * 0.2 }}>
                          <service.icon className="w-7 h-7 text-[#3B82F6] transition-transform duration-300 group-hover:scale-110" />
                        </motion.div>
                        <div className="absolute inset-0 rounded-xl border border-[#3B82F6]/20 group-hover:border-[#3B82F6]/40 transition-colors duration-300" />
                      </div>
                      <h3 className="relative text-lg font-bold text-white mb-2 group-hover:text-[#60A5FA] transition-colors duration-300">{service.title}</h3>
                      <p className="relative text-gray-400 text-sm leading-relaxed mb-4 line-clamp-3">{service.shortDescription}</p>
                      <div className="relative mb-4 pb-4 border-b border-white/5">
                        <p className="text-xs text-[#3B82F6] font-medium">{service.keyBenefit}</p>
                      </div>
                      <div className="relative flex items-center gap-2 text-[#3B82F6] text-sm font-medium">
                        <span>Learn More</span>
                        <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                      </div>
                    </motion.div>
                  ))}
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Process */}
      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">How We Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Our <span className="text-[#3B82F6]">Process</span>
            </h2>
            <p className="text-gray-400 max-w-2xl mx-auto">
              A structured six-stage process that keeps your project on track from first conversation to ongoing growth.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-6">
            {process.map((item, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="relative text-center">
                <div className="text-5xl font-bold text-[#3B82F6]/20 mb-4">{item.step}</div>
                <h3 className="text-lg font-bold text-white mb-2">{item.title}</h3>
                <p className="text-gray-400 text-sm">{item.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <CTASection />
      <ServiceModal service={selectedService} onClose={() => setSelectedService(null)} />
    </>
  );
}
