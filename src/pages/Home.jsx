import React, { useState, useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView, AnimatePresence } from 'framer-motion';
import {
  ArrowRight,
  Globe,
  ShoppingBag,
  Code2,
  TrendingUp,
  Target,
  Palette,
  MessageSquare,
  Layers,
  LifeBuoy,
  Search,
  Map,
  Rocket,
  Compass,
  PenTool,
  Cpu,
} from 'lucide-react';
import SEO from '@/components/SEO';

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

// ─── Data ───
const trustCapabilities = [
  { icon: Globe, label: 'Web Design' },
  { icon: ShoppingBag, label: 'eCommerce' },
  { icon: Code2, label: 'Custom Development' },
  { icon: TrendingUp, label: 'Digital Marketing' },
];

const services = [
  { icon: Globe, title: 'Web Design & Development', description: 'Professional, responsive websites designed to build trust and generate enquiries.' },
  { icon: ShoppingBag, title: 'Shopify & eCommerce', description: 'Conversion-focused online stores built to help businesses sell and grow online.' },
  { icon: Code2, title: 'Custom Development', description: 'Tailored digital solutions built around specific business requirements.' },
  { icon: TrendingUp, title: 'SEO & Digital Marketing', description: 'Strategies designed to improve visibility, attract relevant traffic and generate qualified leads.' },
];

const reasons = [
  { icon: Target, title: 'Business-Focused Solutions', description: 'We start with your objectives and build digital solutions designed to achieve them.' },
  { icon: Palette, title: 'Modern, Conversion-Driven Design', description: 'Clean, purposeful design that guides visitors toward taking action.' },
  { icon: MessageSquare, title: 'Transparent Communication', description: 'Clear milestones, honest timelines and straightforward project updates.' },
  { icon: Layers, title: 'Scalable Technology', description: 'Solutions built on reliable, modern technology that grows with your business.' },
  { icon: LifeBuoy, title: 'Reliable Ongoing Support', description: 'Continued support after launch to keep things running and improving.' },
];

const portfolioCategories = ['All', 'Websites', 'Apps', 'Branding', 'eCommerce'];

const projects = [
  {
    id: 1,
    title: 'Organimo',
    category: 'Websites',
    industry: 'Organic Products',
    services: ['Web Development', 'UI/UX Design', 'Brand Design'],
    image: 'https://images.unsplash.com/photo-1542601906990-b4d3fb778b09?w=800&auto=format&fit=crop&q=80',
    description: 'A beautifully crafted organic products website with immersive scrolling experience.',
  },
  {
    id: 2,
    title: 'Cowboy',
    category: 'Websites',
    industry: 'Electric Mobility',
    services: ['Web Development', 'UI/UX Design', '3D Visualisation'],
    image: 'https://images.unsplash.com/photo-1571068316344-75bc76f77890?w=800&auto=format&fit=crop&q=80',
    description: 'Premium electric bike brand with a sleek, futuristic digital experience.',
  },
  {
    id: 3,
    title: 'Sillagea',
    category: 'Branding',
    industry: 'Luxury Skincare',
    services: ['Brand Design', 'UI/UX Design', 'Web Development'],
    image: 'https://images.unsplash.com/photo-1620916566398-39f1143ab7be?w=800&auto=format&fit=crop&q=80',
    description: 'Luxury skincare brand with elegant visual identity and premium aesthetics.',
  },
  {
    id: 4,
    title: 'Alo Yoga',
    category: 'eCommerce',
    industry: 'Apparel & Fitness',
    services: ['Shopify Development', 'UI/UX Design', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1518611012118-696072aa579a?w=800&auto=format&fit=crop&q=80',
    description: 'High-performance yoga apparel e-commerce with seamless shopping experience.',
  },
  {
    id: 5,
    title: 'Fenty Beauty',
    category: 'eCommerce',
    industry: 'Beauty & Cosmetics',
    services: ['eCommerce Development', 'UI/UX Design', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1522335789203-aabd1fc54bc9?w=800&auto=format&fit=crop&q=80',
    description: 'Inclusive beauty brand e-commerce with shade-matching technology.',
  },
  {
    id: 6,
    title: 'Gymshark',
    category: 'eCommerce',
    industry: 'Fitness Apparel',
    services: ['eCommerce Development', 'Web Development', 'Digital Growth'],
    image: 'https://images.unsplash.com/photo-1517836357463-d25dfeac3438?w=800&auto=format&fit=crop&q=80',
    description: 'Global fitness apparel brand with community-driven e-commerce experience.',
  },
];

const processStages = [
  { step: '01', title: 'Discovery', description: 'We understand your business, goals and requirements.', icon: Search },
  { step: '02', title: 'Strategy', description: 'We plan the right digital solution around your objectives.', icon: Map },
  { step: '03', title: 'Design & Build', description: 'We design and develop the solution with performance and user experience in mind.', icon: Code2 },
  { step: '04', title: 'Launch & Support', description: 'We launch, optimise and provide ongoing support where required.', icon: Rocket },
];

const aboutFeatures = [
  { icon: Compass, text: 'Strategy-led approach' },
  { icon: PenTool, text: 'Design that converts' },
  { icon: Cpu, text: 'Modern technology' },
  { icon: Layers, text: 'End-to-end solutions' },
];

// ─── Page ───
export default function Home() {
  const [activeFilter, setActiveFilter] = useState('All');

  // Refs for in-view animations
  const trustRef = useRef(null);
  const trustInView = useInView(trustRef, { once: true });

  const servicesHeaderRef = useRef(null);
  const servicesHeaderInView = useInView(servicesHeaderRef, { once: true });

  const whyRef = useRef(null);
  const whyInView = useInView(whyRef, { once: true, margin: '-50px' });

  const portfolioRef = useRef(null);
  const portfolioInView = useInView(portfolioRef, { once: true });

  const processRef = useRef(null);
  const processInView = useInView(processRef, { once: true, margin: '-50px' });

  const aboutRef = useRef(null);
  const aboutInView = useInView(aboutRef, { once: true, margin: '-100px' });

  const ctaRef = useRef(null);
  const ctaInView = useInView(ctaRef, { once: true });

  const filteredProjects = activeFilter === 'All'
    ? projects
    : projects.filter((p) => p.category === activeFilter);
  const displayProjects = filteredProjects.slice(0, 6);

  return (
    <>
      <SEO
        title="Nexira Digital | UK Digital Agency — Web, Apps, eCommerce & Growth"
        description="London-based digital agency delivering websites, apps, branding, Shopify stores, marketplace solutions and digital growth strategies. Contact miran@nexiradigital.com."
        path="/"
      />
      {/* ─── Hero ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden bg-[#0F172A]">
        <div className="absolute inset-0">
          <div className="absolute top-1/4 -left-32 w-[500px] h-[500px] bg-[#3B82F6]/8 rounded-full blur-[128px]" />
          <div className="absolute bottom-1/4 -right-32 w-[600px] h-[600px] bg-[#1D4ED8]/6 rounded-full blur-[128px]" />
          <NexiraDigitalGrid opacity={0.05} />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-8 pt-32 pb-20 w-full">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div className="max-w-3xl">
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
                className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/5 border border-white/10 mb-8"
              >
                <span className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-sm text-gray-300">London Digital Agency</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.1 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold text-white leading-[1.45] md:leading-[1.5] mb-6"
              >
                Digital Solutions Built to{' '}
                <span className="text-[#3B82F6]">Grow Your Business</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
                className="text-lg text-gray-400 mb-10 leading-relaxed max-w-2xl"
              >
                We design and build high-performing websites, eCommerce stores and digital
                solutions that help ambitious businesses build their online presence and grow.
              </motion.p>

              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.3 }}
                className="flex flex-col sm:flex-row items-start gap-4"
              >
                <Link
                  to={createPageUrl('Contact')}
                  className="group px-8 py-4 text-white font-semibold rounded-full bg-[#3B82F6] hover:bg-[#2563EB] transition-all duration-300 flex items-center gap-2"
                >
                  Get a Free Consultation
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>

                <Link
                  to={createPageUrl('Portfolio')}
                  className="px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:border-[#3B82F6]/50 hover:bg-white/5 transition-all duration-300"
                >
                  View Our Work
                </Link>
              </motion.div>
            </div>

            <motion.div
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative flex justify-center lg:justify-end"
            >
              <motion.picture
                className="block w-full max-w-xl lg:max-w-2xl xl:max-w-3xl"
                animate={{
                  y: [0, -18, 0],
                  rotate: [0, 1.5, 0, -1.5, 0],
                }}
                transition={{
                  duration: 6,
                  repeat: Infinity,
                  ease: 'easeInOut',
                }}
              >
                <source srcSet="/heropng.webp" type="image/webp" />
                <img
                  src="/heropng.png"
                  alt="Nexira Digital — London digital agency creative visual"
                  width="1400"
                  height="1400"
                  fetchPriority="high"
                  decoding="async"
                  className="w-full h-auto object-contain drop-shadow-[0_20px_60px_rgba(59,130,246,0.25)]"
                />
              </motion.picture>
              <motion.div
                className="absolute -inset-8 rounded-full bg-[#3B82F6]/10 blur-3xl -z-10"
                animate={{ opacity: [0.35, 0.6, 0.35], scale: [0.95, 1.05, 0.95] }}
                transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
              />
            </motion.div>
          </div>
        </div>

        <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0F172A] to-transparent" />
      </section>

      {/* ─── Trust Bar ─── */}
      <section ref={trustRef} className="relative py-12 bg-[#0B1120] border-y border-white/5 overflow-hidden">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6">
            {trustCapabilities.map((cap, i) => (
              <motion.div
                key={cap.label}
                initial={{ opacity: 0, y: 15 }}
                animate={trustInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.4, delay: i * 0.08 }}
                className="flex items-center gap-2.5 group"
              >
                <cap.icon className="w-5 h-5 text-[#3B82F6] transition-transform duration-300 group-hover:scale-110" />
                <span className="text-gray-300 text-sm font-medium group-hover:text-white transition-colors">
                  {cap.label}
                </span>
                {i < trustCapabilities.length - 1 && (
                  <span className="hidden md:inline-block ml-10 w-1 h-1 rounded-full bg-[#3B82F6]/40" />
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Services ─── */}
      <section className="relative py-24 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.04} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            ref={servicesHeaderRef}
            initial={{ opacity: 0, y: 30 }}
            animate={servicesHeaderInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">What We Do</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              Practical digital services designed around your business goals — from first
              concept to launch and beyond.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 gap-6">
            {services.map((service, index) => (
              <ServiceCard key={service.title} service={service} index={index} />
            ))}
          </div>

          <div className="text-center mt-12">
            <Link
              to={createPageUrl('Services')}
              className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium"
            >
              View All Services
              <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* ─── Why Nexira ─── */}
      <section ref={whyRef} className="relative py-24 bg-[#0B1120] overflow-hidden">
        <NexiraDigitalGrid opacity={0.05} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={whyInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Why Nexira Digital</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A straightforward approach focused on delivering practical results for your business.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {reasons.map((reason, i) => (
              <motion.div
                key={reason.title}
                initial={{ opacity: 0, y: 30 }}
                animate={whyInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3B82F6]/30 transition-all duration-500"
              >
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5">
                  <reason.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3">{reason.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── Portfolio ─── */}
      <section ref={portfolioRef} className="relative py-32 bg-[#0B1120] overflow-hidden">
        <NexiraDigitalGrid opacity={0.05} />
        <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-[#3B82F6]/5 rounded-full blur-[100px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-12"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">Selected Work</span>
            </div>
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-4">Selected Work</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A selection of digital experiences, products and brand solutions created by Nexira Digital.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={portfolioInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex flex-wrap justify-center gap-3 mb-12"
          >
            {portfolioCategories.map((category) => (
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
                            View Project
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

      {/* ─── How We Work ─── */}
      <section ref={processRef} className="relative py-24 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.04} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={processInView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Process</h2>
            <p className="text-gray-400 text-lg max-w-2xl mx-auto">
              A clear, structured approach that keeps your project on track from start to launch.
            </p>
          </motion.div>

          <div className="relative">
            <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {processStages.map((stage, i) => (
                <motion.div
                  key={stage.step}
                  initial={{ opacity: 0, y: 30 }}
                  animate={processInView ? { opacity: 1, y: 0 } : {}}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className="relative text-center group"
                >
                  <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0F172A] border border-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 transition-all duration-500 mb-5">
                    <div className="absolute inset-0 rounded-full bg-[#3B82F6]/5 group-hover:bg-[#3B82F6]/10 transition-colors duration-500" />
                    <stage.icon className="relative w-8 h-8 text-[#3B82F6]" />
                    <span className="absolute -top-1 -right-1 w-7 h-7 rounded-full bg-[#3B82F6] text-white text-xs font-bold flex items-center justify-center">
                      {stage.step}
                    </span>
                  </div>
                  <h3 className="text-lg font-bold text-white mb-2">{stage.title}</h3>
                  <p className="text-gray-400 text-sm leading-relaxed px-2">{stage.description}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── About ─── */}
      <section ref={aboutRef} className="relative py-24 bg-[#0B1120] overflow-hidden">
        <NexiraDigitalGrid opacity={0.04} />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
              className="relative"
            >
              <div className="relative rounded-2xl overflow-hidden">
                <img
                  src="https://images.unsplash.com/photo-1559136555-9303baea8ebd?w=800&auto=format&fit=crop&q=80"
                  alt="Nexira Digital design workspace"
                  className="w-full h-[460px] object-cover"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0B1120] via-transparent to-transparent" />
              </div>
              <div className="absolute -inset-4 border border-[#3B82F6]/15 rounded-3xl -z-10" />
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={aboutInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.8 }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6 leading-tight">
                About Nexira Digital
              </h2>

              <p className="text-gray-400 text-lg leading-relaxed mb-8">
                Nexira Digital is a modern digital agency helping businesses build, launch and
                grow online through thoughtful design, reliable technology and practical digital
                solutions.
              </p>

              <div className="grid grid-cols-2 gap-4 mb-10">
                {aboutFeatures.map((feature, i) => (
                  <motion.div
                    key={i}
                    initial={{ opacity: 0, x: 20 }}
                    animate={aboutInView ? { opacity: 1, x: 0 } : {}}
                    transition={{ duration: 0.5, delay: 0.2 + i * 0.1 }}
                    className="flex items-center gap-3"
                  >
                    <div className="w-10 h-10 rounded-lg bg-[#3B82F6]/10 flex items-center justify-center flex-shrink-0">
                      <feature.icon className="w-5 h-5 text-[#3B82F6]" />
                    </div>
                    <span className="text-gray-300 font-medium text-sm">{feature.text}</span>
                  </motion.div>
                ))}
              </div>

              <Link
                to={createPageUrl('About')}
                className="inline-flex items-center gap-2 text-[#3B82F6] hover:text-[#60A5FA] transition-colors font-medium"
              >
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </motion.div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section ref={ctaRef} className="relative py-24 bg-[#0F172A] overflow-hidden">
        <div className="absolute inset-0">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#3B82F6]/8 rounded-full blur-[128px]" />
          <NexiraDigitalGrid opacity={0.05} />
        </div>

        <div className="relative max-w-4xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={ctaInView ? { opacity: 1, y: 0 } : {}}
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
    </>
  );
}

// ─── ServiceCard (local helper) ───
function ServiceCard({ service, index }) {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <motion.div
      ref={ref}
      initial={{ opacity: 0, y: 30 }}
      animate={isInView ? { opacity: 1, y: 0 } : {}}
      transition={{ duration: 0.5, delay: index * 0.1 }}
      className="group p-8 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3B82F6]/30 transition-all duration-500"
    >
      <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-6 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
        <service.icon className="w-6 h-6 text-[#3B82F6]" />
      </div>
      <h3 className="text-xl font-bold text-white mb-3">{service.title}</h3>
      <p className="text-gray-400 leading-relaxed">{service.description}</p>
    </motion.div>
  );
}
