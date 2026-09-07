import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Search, Map, PenTool, Code2, Rocket, TrendingUp } from 'lucide-react';
import NexiraDigitalGrid from './NexiraDigitalGrid';

const stages = [
  { step: '01', title: 'Discover', description: 'Understand your business, audience and objectives.', icon: Search },
  { step: '02', title: 'Strategise', description: 'Create a clear digital roadmap.', icon: Map },
  { step: '03', title: 'Design', description: 'Develop the visual direction and user experience.', icon: PenTool },
  { step: '04', title: 'Build', description: 'Develop and integrate the solution.', icon: Code2 },
  { step: '05', title: 'Launch', description: 'Test, optimise and launch.', icon: Rocket },
  { step: '06', title: 'Grow', description: 'Continue improving your digital presence.', icon: TrendingUp },
];

export default function HowWeWork() {
  const ref = useRef(null);
  const isInView = useInView(ref, { once: true, margin: '-50px' });

  return (
    <section ref={ref} className="relative py-32 bg-[#0B1120] overflow-hidden">
      <NexiraDigitalGrid opacity={0.06} />

      <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
            <span className="text-sm font-medium text-[#3B82F6]">Our Process</span>
          </div>
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-white mb-6">
            How We <span className="text-[#3B82F6]">Work</span>
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            A structured six-stage process that keeps your project on track from first conversation to ongoing growth.
          </p>
        </motion.div>

        <div className="relative">
          <div className="hidden lg:block absolute top-12 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6]/30 to-transparent" />

          <div className="grid md:grid-cols-2 lg:grid-cols-6 gap-8 lg:gap-4">
            {stages.map((stage, i) => (
              <motion.div
                key={stage.step}
                initial={{ opacity: 0, y: 30 }}
                animate={isInView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="relative text-center group"
              >
                <div className="relative inline-flex items-center justify-center w-24 h-24 rounded-full bg-[#0F172A] border border-[#3B82F6]/20 group-hover:border-[#3B82F6]/50 transition-all duration-500 mb-5">
                  <div className="absolute inset-0 rounded-full bg-[#3B82F6]/5 group-hover:bg-[#3B82F6]/10 transition-colors duration-500" />
                  <stage.icon className="relative w-8 h-8 text-[#3B82F6] transition-transform duration-300 group-hover:scale-110" />
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
  );
}
