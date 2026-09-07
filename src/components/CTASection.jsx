import React, { useRef } from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { motion, useInView } from 'framer-motion';
import { ArrowRight } from 'lucide-react';
import NexiraDigitalGrid from './NexiraDigitalGrid';

export default function CTASection() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true });

  return (
    <section ref={ref} className="relative py-32 bg-[#0F172A] overflow-hidden">
      <div className="absolute inset-0">
        <motion.div
          animate={{ scale: [1, 1.1, 1], opacity: [0.15, 0.25, 0.15] }}
          transition={{ duration: 6, repeat: Infinity, ease: 'easeInOut' }}
          className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[700px] bg-[#3B82F6] rounded-full blur-[128px]"
        />
        <NexiraDigitalGrid opacity={0.08} />
      </div>

      <div className="relative max-w-5xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="relative rounded-3xl overflow-hidden"
        >
          <div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/20 via-[#1E293B] to-[#1E293B]" />
          <div className="absolute inset-0 border border-white/10 rounded-3xl" />

          <div className="relative p-12 md:p-16 text-center">
            <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6 leading-tight">
              Ready to Build <span className="text-[#3B82F6]">What&apos;s Next?</span>
            </h2>

            <p className="text-gray-400 text-lg max-w-2xl mx-auto mb-10">
              Let&apos;s turn your ideas into digital experiences designed to move your business forward.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link
                to={createPageUrl('GetStarted')}
                className="group relative px-8 py-4 text-white font-semibold rounded-full overflow-hidden transition-all duration-300 hover:shadow-lg hover:shadow-[#3B82F6]/30"
              >
                <div className="absolute inset-0 bg-[#3B82F6]" />
                <div className="absolute inset-0 bg-gradient-to-r from-[#3B82F6] to-[#1D4ED8] opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
                <div className="absolute inset-0 opacity-0 group-hover:opacity-50 blur-xl bg-[#3B82F6] transition-all duration-300" />
                <span className="relative flex items-center gap-2">
                  Start Your Project
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </span>
              </Link>

              <Link
                to={createPageUrl('Portfolio')}
                className="px-8 py-4 text-white font-semibold rounded-full border border-white/20 hover:border-[#3B82F6]/50 hover:bg-white/5 transition-all duration-300"
              >
                View Our Work
              </Link>
            </div>
          </div>

          <div className="absolute top-8 left-8 w-20 h-20 border border-[#3B82F6]/20 rounded-full" />
          <div className="absolute bottom-8 right-8 w-32 h-32 border border-[#3B82F6]/10 rounded-full" />
        </motion.div>
      </div>
    </section>
  );
}
