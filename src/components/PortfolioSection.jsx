import React, { useState, useRef } from 'react';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import NexiraDigitalGrid from './NexiraDigitalGrid';

const categories = ['All', 'Websites', 'Apps', 'Branding', 'eCommerce'];

export const projects = [
  {
    id: 1,
    title: 'Organimo',
    category: 'Websites',
    industry: 'Organic Products',
    services: ['Web Development', 'UI/UX Design', 'Brand Design'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    description: 'A beautifully crafted organic products website with immersive scrolling experience.',
    liveUrl: 'https://organimo.com/',
    background: 'Organimo needed a digital presence that reflected their commitment to organic, sustainable products while creating an engaging user experience.',
    problem: 'The client struggled with low online engagement. Their previous website failed to communicate their brand values and product quality effectively.',
    approach: 'We focused on storytelling through design, using smooth parallax scrolling and vibrant imagery to showcase the journey from farm to table.',
    solution: 'We designed a visually engaging website with smooth scrolling, intuitive navigation and a content structure that guides visitors naturally through the brand story.',
    technologies: ['React', 'GSAP Animations', 'Headless CMS', 'Cloudflare CDN'],
    outcomes: ['Improved user experience', 'Stronger visual identity', 'More streamlined customer journey'],
  },
  {
    id: 2,
    title: 'Cowboy',
    category: 'Websites',
    industry: 'Electric Mobility',
    services: ['Web Development', 'UI/UX Design', '3D Visualisation'],
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop&q=80',
    description: 'Premium electric bike brand with a sleek, futuristic digital experience.',
    liveUrl: 'https://cowboy.com/',
    background: 'Cowboy, a leading e-bike manufacturer, wanted a website that matched the innovation and design excellence of their products.',
    problem: "The existing platform didn't showcase the technical sophistication and lifestyle appeal of their electric bikes.",
    approach: 'We created a cinematic web experience with 3D product configurators and immersive visuals that bring the bikes to life digitally.',
    solution: "We built a cinematic website with 3D product configurators, immersive video backgrounds and micro-interactions that reflect the product's innovation.",
    technologies: ['Next.js', 'Three.js', 'WebGL', 'Shopify Integration'],
    outcomes: ['Better mobile experience', 'Improved user experience', 'Stronger visual identity'],
  },
  {
    id: 3,
    title: 'Sillagea',
    category: 'Branding',
    industry: 'Luxury Skincare',
    services: ['Brand Design', 'UI/UX Design', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
    description: 'Luxury skincare brand with elegant visual identity and premium aesthetics.',
    liveUrl: 'https://sillagea.com/',
    background: 'Sillagea is a premium skincare brand that needed a complete digital rebrand to position themselves in the luxury market.',
    problem: 'The brand lacked a cohesive visual identity that could compete with established luxury skincare competitors in the digital space.',
    approach: 'We developed a sophisticated brand identity with elegant typography, a refined colour palette and premium photography direction.',
    solution: 'We created a sophisticated brand identity with elegant typography, a refined colour palette and a minimalist luxury aesthetic across the website.',
    technologies: ['Brand Strategy', 'Visual Identity', 'Webflow', 'Custom Animations'],
    outcomes: ['Stronger visual identity', 'More streamlined customer journey', 'Improved user experience'],
  },
  {
    id: 4,
    title: 'Alo Yoga',
    category: 'eCommerce',
    industry: 'Apparel & Fitness',
    services: ['Shopify Development', 'UI/UX Design', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    description: 'High-performance yoga apparel e-commerce with seamless shopping experience.',
    liveUrl: 'https://www.aloyoga.com/',
    background: 'Alo Yoga needed an e-commerce platform that could handle high traffic while delivering a premium shopping experience aligned with their brand.',
    problem: "The previous platform couldn't handle peak traffic during launches and the mobile experience needed improvement.",
    approach: 'We built a fast Shopify Plus store with advanced filtering, quick-view functionality and a mobile-first approach.',
    solution: 'We built a fast Shopify Plus store with advanced filtering, quick-view functionality and a mobile-first approach, integrated with inventory and marketing tools.',
    technologies: ['Shopify Plus', 'Custom Theme', 'Klaviyo', 'Gorgias'],
    outcomes: ['Better mobile experience', 'More streamlined customer journey', 'Improved user experience'],
  },
  {
    id: 5,
    title: 'Fenty Beauty',
    category: 'eCommerce',
    industry: 'Beauty & Cosmetics',
    services: ['eCommerce Development', 'UI/UX Design', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    description: 'Inclusive beauty brand e-commerce with shade-matching technology.',
    liveUrl: 'https://fentybeauty.com/',
    background: "Fenty Beauty's inclusive approach to beauty needed a digital platform that could showcase their extensive shade range and diverse community.",
    problem: 'Customers struggled to find their perfect shade online, leading to high return rates and customer dissatisfaction.',
    approach: 'We developed an AI-powered shade finder and virtual try-on feature, with an inclusive design system that celebrates diversity.',
    solution: 'We developed a shade finder tool, virtual try-on feature and an inclusive design system that prioritises discovery and education.',
    technologies: ['Custom Platform', 'AR Try-On', 'AI Shade Matching', 'Personalisation Engine'],
    outcomes: ['More streamlined customer journey', 'Improved user experience', 'Better mobile experience'],
  },
  {
    id: 6,
    title: 'Gymshark',
    category: 'eCommerce',
    industry: 'Fitness Apparel',
    services: ['eCommerce Development', 'Web Development', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80',
    description: 'Global fitness apparel brand with community-driven e-commerce experience.',
    liveUrl: 'https://www.gymshark.com/',
    background: 'Gymshark needed to scale their platform globally while maintaining the community-first approach that built their brand.',
    problem: 'Rapid growth created technical debt, slow page loads and inconsistent experiences across different regions.',
    approach: 'We rebuilt their platform with a headless architecture, enabling fast performance and seamless multi-currency, multi-language support.',
    solution: 'We rebuilt the platform with a headless architecture for fast performance, multi-currency support and integrated community features.',
    technologies: ['Headless Commerce', 'React', 'GraphQL', 'Global CDN'],
    outcomes: ['Better mobile experience', 'Improved user experience', 'More streamlined customer journey'],
  },
];

export default function PortfolioSection({ showAll = false, hideHeader = false }) {
  const [activeFilter, setActiveFilter] = useState('All');
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);

  const displayProjects = showAll ? filteredProjects : filteredProjects.slice(0, 6);

  return (
    <section ref={ref} className="relative py-32 bg-[#0B1120] overflow-hidden">
      <NexiraDigitalGrid opacity={0.05} />
      <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        {!hideHeader && (
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={isInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
              A Selection of Our <span className="text-[#3B82F6]">Digital Work</span>
            </h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of digital experiences, products and brand solutions created by Nexira Digital.
            </p>
          </motion.div>
        )}

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-3 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setActiveFilter(category)}
              className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${
                activeFilter === category
                  ? 'bg-[#3B82F6] text-white shadow-lg shadow-[#3B82F6]/25'
                  : 'bg-white/5 text-gray-400 hover:bg-white/10 hover:text-white border border-white/10'
              }`}
            >
              {category}
            </button>
          ))}
        </motion.div>

        <motion.div layout className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          <AnimatePresence mode="popLayout">
            {displayProjects.map((project, index) => (
              <motion.div
                key={project.id}
                layout
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.9 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
              >
                <Link to={createPageUrl(`CaseStudy?id=${project.id}`)} className="group block">
                  <div className="relative rounded-2xl overflow-hidden bg-gradient-to-br from-white/[0.08] to-white/[0.02] border border-white/10 hover:border-[#3B82F6]/40 transition-all duration-500">
                    <div className="aspect-[4/3] overflow-hidden relative">
                      <img
                        src={project.image}
                        alt={project.title}
                        className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110"
                        loading="lazy"
                      />
                      <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/0 to-[#3B82F6]/0 group-hover:from-[#3B82F6]/30 group-hover:to-transparent transition-all duration-500" />

                      <div className="absolute top-4 left-4 flex gap-2">
                        <span className="px-3 py-1 rounded-full bg-black/50 backdrop-blur-md text-white text-xs font-medium border border-white/20">
                          {project.category}
                        </span>
                        <span className="px-3 py-1 rounded-full bg-[#3B82F6]/50 backdrop-blur-md text-white text-xs font-medium border border-[#3B82F6]/30">
                          Concept
                        </span>
                      </div>

                      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-all duration-300">
                        <div className="px-6 py-3 bg-white rounded-full text-[#0F172A] font-semibold flex items-center gap-2 transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
                          View Case Study
                          <ArrowRight className="w-4 h-4" />
                        </div>
                      </div>
                    </div>

                    <div className="p-6">
                      <div className="flex items-start justify-between mb-2">
                        <h3 className="text-xl font-bold text-white group-hover:text-[#3B82F6] transition-colors duration-300">
                          {project.title}
                        </h3>
                        <span className="text-xs text-gray-500">{project.industry}</span>
                      </div>
                      <p className="text-gray-400 text-sm leading-relaxed line-clamp-2 mb-4">
                        {project.description}
                      </p>

                      <div className="pt-4 border-t border-white/10 flex flex-wrap gap-2">
                        {project.services.map((service) => (
                          <span key={service} className="text-xs text-gray-500 px-2.5 py-1 rounded-full bg-white/5 border border-white/5">
                            {service}
                          </span>
                        ))}
                      </div>
                    </div>
                  </div>
                </Link>
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </section>
  );
}
