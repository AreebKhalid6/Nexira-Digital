import React, { useRef } from 'react';
import { motion, useInView } from 'framer-motion';
import { Compass, PenTool, Cpu, Layers } from 'lucide-react';
import CTASection from '@/components/CTASection';
import WhyNexira from '@/components/WhyNexira';
import HowWeWork from '@/components/HowWeWork';
import NexiraDigitalGrid from '@/components/NexiraDigitalGrid';
import SEO from '@/components/SEO';

const values = [
  { icon: Compass, title: 'Strategy First', description: 'We begin by understanding your business, audience and objectives before defining the right digital solution.' },
  { icon: PenTool, title: 'Designed to Convert', description: 'We combine strong visual design with intuitive user experiences and conversion-focused thinking.' },
  { icon: Cpu, title: 'Modern Technology', description: 'We use modern development practices and scalable technologies to create reliable digital products.' },
  { icon: Layers, title: 'One Digital Partner', description: 'From branding and UI/UX to development, eCommerce and digital growth, we provide solutions under one roof.' },
];

export default function About() {
  const heroRef = useRef(null);
  const isHeroInView = useInView(heroRef, { once: true });

  return (
    <>
      <SEO
        title="About Nexira Digital | London Digital Agency"
        description="Learn about Nexira Digital — a London-based agency delivering strategy-led web, app, eCommerce and growth solutions from 86-90 Paul Street, EC2A 4NE."
        path="/About"
      />
      <section ref={heroRef} className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.08} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6 }} className="text-center max-w-3xl mx-auto mb-16">
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">About Us</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Digital Solutions Built Around Your <span className="text-[#3B82F6]">Business</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Nexira Digital is a UK-based digital agency delivering modern development, design and
              eCommerce solutions for businesses looking to establish or strengthen their digital presence.
            </p>
          </motion.div>

          <motion.div initial={{ opacity: 0, y: 40 }} animate={isHeroInView ? { opacity: 1, y: 0 } : {}} transition={{ duration: 0.6, delay: 0.2 }} className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 max-w-4xl mx-auto">
            {['UK-Based Agency', 'Strategy-Led', 'Conversion-Focused', 'End-to-End Solutions', 'Modern Technology'].map((item) => (
              <div key={item} className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full bg-[#3B82F6]" />
                <span className="text-gray-300 text-sm font-medium">{item}</span>
              </div>
            ))}
          </motion.div>
        </div>
      </section>

      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <motion.div initial={{ opacity: 0, x: -50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }}>
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">Our Story</h2>
              <div className="space-y-4 text-gray-400 leading-relaxed">
                <p>
                  Nexira Digital is a UK-based digital agency built on the belief that digital
                  experiences should be designed around business goals — not the other way around.
                </p>
                <p>
                  Our name combines &quot;Next&quot; and &quot;Era,&quot; reflecting our commitment to helping businesses
                  enter the next era of digital excellence. We don&apos;t just build websites and apps —
                  we create digital experiences designed to help businesses grow.
                </p>
                <p>
                  We combine strategy, creativity and technology to create digital experiences that
                  are visually refined, easy to use and built with business objectives in mind.
                  From branding and UI/UX to development, eCommerce and digital growth, we provide
                  solutions under one roof.
                </p>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 50 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }} transition={{ duration: 0.8 }} className="relative">
              <img src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?w=800&auto=format&fit=crop&q=80" alt="Team collaboration" className="rounded-2xl w-full h-[400px] object-cover" loading="lazy" />
              <div className="absolute inset-0 rounded-2xl bg-gradient-to-t from-[#0F172A]/50 to-transparent" />
            </motion.div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0B1120]">
        <div className="max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">Our Core <span className="text-[#3B82F6]">Principles</span></h2>
            <p className="text-gray-400 max-w-2xl mx-auto">The principles that guide everything we do at Nexira Digital.</p>
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, i) => (
              <motion.div key={i} initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="p-6 rounded-2xl bg-white/[0.02] border border-white/5 hover:border-[#3B82F6]/30 transition-all duration-300">
                <div className="w-12 h-12 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center mb-4">
                  <value.icon className="w-6 h-6 text-[#3B82F6]" />
                </div>
                <h3 className="text-lg font-bold text-white mb-2">{value.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{value.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      <WhyNexira />
      <HowWeWork />
      <CTASection />
    </>
  );
}
