import React from 'react';
import { motion } from 'framer-motion';
import PortfolioSection from '@/components/PortfolioSection';
import CTASection from '@/components/CTASection';
import NexiraDigitalGrid from '@/components/NexiraDigitalGrid';
import SEO from '@/components/SEO';

export default function Portfolio() {
  return (
    <>
      <SEO
        title="Portfolio | Nexira Digital Work"
        description="Explore selected digital experiences, products and brand solutions created by Nexira Digital — web, eCommerce and growth projects."
        path="/Portfolio"
      />
      <section className="relative pt-32 pb-10 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.08} />
        <div className="absolute top-1/4 -right-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">Selected Work</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              A Selection of Our <span className="text-[#3B82F6]">Digital Work</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              A selection of digital experiences, products and brand solutions created by Nexira Designs.
            </p>
          </motion.div>
        </div>
      </section>

      <PortfolioSection showAll hideHeader />
      <CTASection />
    </>
  );
}
