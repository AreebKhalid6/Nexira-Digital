import React, { useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { X, Check, ArrowRight } from 'lucide-react';

export default function ServiceModal({ service, onClose }) {
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

            <button
              onClick={onClose}
              className="absolute top-4 right-4 z-10 w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gray-400 hover:text-white hover:bg-white/10 transition-all"
            >
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
                <Link
                  to={createPageUrl('GetStarted')}
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 bg-[#3B82F6] text-white font-semibold rounded-full hover:bg-[#2563EB] transition-colors"
                >
                  Discuss Your Project
                  <ArrowRight className="w-4 h-4" />
                </Link>
                <Link
                  to={createPageUrl('Contact')}
                  onClick={onClose}
                  className="flex-1 inline-flex items-center justify-center gap-2 px-6 py-3.5 border border-white/20 text-white font-semibold rounded-full hover:bg-white/5 transition-all"
                >
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
