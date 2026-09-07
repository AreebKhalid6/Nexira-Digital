import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, MousePointerClick, Cpu, Layers, MessageSquare, Infinity as InfinityIcon } from 'lucide-react';
import NexiraDigitalGrid from './NexiraDigitalGrid';

const reasons = [
  {
    icon: Compass,
    title: 'Strategy First',
    description: 'We begin by understanding your business, audience and objectives before defining the right digital solution.',
  },
  {
    icon: MousePointerClick,
    title: 'Designed to Convert',
    description: 'We combine strong visual design with intuitive user experiences and conversion-focused thinking.',
  },
  {
    icon: Cpu,
    title: 'Modern Technology',
    description: 'We use modern development practices and scalable technologies to create reliable digital products.',
  },
  {
    icon: Layers,
    title: 'One Digital Partner',
    description: 'From branding and UI/UX to development, eCommerce and digital growth, we provide solutions under one roof.',
  },
  {
    icon: MessageSquare,
    title: 'Clear Communication',
    description: 'We maintain a transparent workflow with clear milestones, communication and project expectations.',
  },
  {
    icon: InfinityIcon,
    title: 'Long-Term Thinking',
    description: 'We build solutions that can evolve alongside your business rather than becoming outdated after launch.',
  },
];

export default function WhyNexira() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#0F172A] overflow-hidden">
      <NexiraDigitalGrid opacity={0.08} />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B82F6]/5 rounded-full blur-[120px]" />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
            <span className="text-sm font-medium text-[#3B82F6]">Why Nexira Digital</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            Why Businesses Choose <span className="text-[#3B82F6]">Nexira Digital</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            We focus on building trust through clear communication, strategic thinking and reliable delivery.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {reasons.map((reason, i) => (
            <motion.div
              key={reason.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.5, delay: i * 0.08 }}
              className="group relative p-7 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3B82F6]/30 hover:-translate-y-1.5 transition-all duration-500 overflow-hidden"
            >
              <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <div className="absolute -top-20 -right-20 w-40 h-40 bg-[#3B82F6]/15 rounded-full blur-3xl" />
              </div>
              <div className="relative">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-5 group-hover:bg-[#3B82F6]/20 transition-colors duration-300">
                  <reason.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-3 group-hover:text-[#60A5FA] transition-colors">
                  {reason.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{reason.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
