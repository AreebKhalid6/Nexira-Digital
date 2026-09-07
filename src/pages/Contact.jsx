import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Mail, MapPin, Phone, Send, CheckCircle2, Shield } from 'lucide-react';
import NexiraDigitalGrid from '@/components/NexiraDigitalGrid';
import SEO from '@/components/SEO';
import { CONTACT } from '@/data/contact';

const serviceOptions = [
  'Web Development', 'App Development', 'UI/UX Design', 'Logo & Brand Design',
  'Shopify', 'TikTok Shop', 'Amazon', 'eBay', 'Etsy', 'Digital Marketing', 'Other',
];

const budgetRanges = [
  'Under £2,000', '£2,000 – £5,000', '£5,000 – £10,000', '£10,000 – £25,000', '£25,000+', 'Not sure yet',
];

export default function Contact() {
  const [formData, setFormData] = useState({ name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!formData.service) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: '', email: '', phone: '', company: '', service: '', budget: '', details: '' });
  };

  return (
    <>
      <SEO
        title="Contact Nexira Digital | London Digital Agency"
        description="Get in touch with Nexira Digital in London. Email miran@nexiradigital.com or call +44 7473 956951. Based at 86-90 Paul Street, EC2A 4NE."
        path="/Contact"
      />
      <section className="relative pt-32 pb-20 bg-[#0F172A] overflow-hidden">
        <NexiraDigitalGrid opacity={0.08} />
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />

        <div className="relative max-w-7xl mx-auto px-6 lg:px-8">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
            className="text-center max-w-3xl mx-auto mb-16"
          >
            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-[#3B82F6]/10 border border-[#3B82F6]/20 mb-6">
              <span className="text-sm font-medium text-[#3B82F6]">Contact</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6">
              Let&apos;s Build <span className="text-[#3B82F6]">What&apos;s Next</span>
            </h1>
            <p className="text-gray-400 text-lg leading-relaxed">
              Tell us what you&apos;re looking to build, improve or grow. Our team will review your enquiry
              and get back to you with the next steps.
            </p>
          </motion.div>

          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 max-w-3xl mx-auto">
            <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <Mail className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <span className="text-gray-300 group-hover:text-[#3B82F6] transition-colors">{CONTACT.email}</span>
            </a>
            <a href={CONTACT.phoneHref} className="flex items-center gap-3 group">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center">
                <Phone className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <span className="text-gray-300 group-hover:text-[#3B82F6] transition-colors">{CONTACT.phone}</span>
            </a>
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 rounded-xl bg-[#3B82F6]/10 flex items-center justify-center shrink-0">
                <MapPin className="w-5 h-5 text-[#3B82F6]" />
              </div>
              <address className="text-gray-300 not-italic text-left leading-snug">
                {CONTACT.address}
              </address>
            </div>
          </div>
        </div>
      </section>

      <section className="py-20 bg-[#0F172A]">
        <div className="max-w-3xl mx-auto px-6 lg:px-8">
          <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5">
            {isSubmitted ? (
              <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }} className="text-center py-12">
                <div className="w-16 h-16 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
                  <CheckCircle2 className="w-8 h-8 text-green-500" />
                </div>
                <h3 className="text-2xl font-bold text-white mb-4">Thank You</h3>
                <p className="text-gray-400 mb-8 max-w-md mx-auto">
                  Thank you for choosing Nexira Digital. Your enquiry has been received and our team
                  will contact you shortly.
                </p>
                <Button onClick={() => setIsSubmitted(false)} variant="outline" className="border-white/20 text-white hover:bg-white/5">
                  Send Another Enquiry
                </Button>
              </motion.div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Business Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12"
                      placeholder="Optional"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Company / Business Name</label>
                    <Input
                      value={formData.company}
                      onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12"
                      placeholder="Optional"
                    />
                  </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Select Service *</label>
                    <Select value={formData.service} onValueChange={(v) => setFormData({ ...formData, service: v })}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#3B82F6]">
                        <SelectValue placeholder="Choose a service" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1E293B] border-white/10">
                        {serviceOptions.map((s) => (
                          <SelectItem key={s} value={s} className="text-white focus:bg-[#3B82F6]/20">
                            {s}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Estimated Budget</label>
                    <Select value={formData.budget} onValueChange={(v) => setFormData({ ...formData, budget: v })}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#3B82F6]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1E293B] border-white/10">
                        {budgetRanges.map((b) => (
                          <SelectItem key={b} value={b} className="text-white focus:bg-[#3B82F6]/20">
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div>
                  <label className="block text-sm font-medium text-gray-300 mb-2">Project Details *</label>
                  <Textarea
                    required
                    rows={5}
                    value={formData.details}
                    onChange={(e) => setFormData({ ...formData, details: e.target.value })}
                    className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 resize-none"
                    placeholder="Tell us about your project, goals and timeline..."
                  />
                </div>
                <Button
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full py-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl transition-all duration-300 group"
                >
                  {isSubmitting ? (
                    <span className="flex items-center justify-center gap-2">
                      <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                    </span>
                  ) : (
                    <span className="flex items-center justify-center gap-2">
                      Start My Project <Send className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
                    </span>
                  )}
                </Button>
                <div className="flex items-center justify-center gap-2 text-sm text-gray-500">
                  <Shield className="w-4 h-4 text-[#3B82F6]/60" />
                  <span>
                    Your information is used only to respond to your enquiry. See our{' '}
                    <Link to={createPageUrl('Privacy')} className="text-[#3B82F6] hover:underline">
                      Privacy Policy
                    </Link>
                    .
                  </span>
                </div>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}
