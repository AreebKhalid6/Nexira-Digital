import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Rocket, CheckCircle2, ArrowRight, ArrowLeft, User, Briefcase, FileText } from 'lucide-react';
import SEO from '@/components/SEO';

const serviceOptions = [
  'Web Development',
  'App Development',
  'UI/UX Design',
  'Logo & Brand Design',
  'Shopify',
  'TikTok Shop',
  'Amazon',
  'eBay',
  'Etsy',
  'Digital Marketing',
  'Other',
];

const budgets = ['Under £500', '£500–£1,000', '£1,000–£2,500', '£2,500–£5,000', '£5,000+', 'Not sure yet'];
const timelines = ['As soon as possible', 'Within 1 month', '1–3 months', '3+ months', 'Just exploring'];

export default function GetStarted() {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    name: '', business: '', email: '', phone: '',
    service: '', message: '', budget: '', timeline: '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});

  const validateStep = (s) => {
    const errs = {};
    if (s === 1) {
      if (!formData.name.trim()) errs.name = 'Please enter your full name';
      if (!formData.email.trim()) errs.email = 'Please enter your email address';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please enter a valid email address';
    }
    if (s === 2) {
      if (!formData.service) errs.service = 'Please select a service';
    }
    if (s === 3) {
      if (!formData.message.trim()) errs.message = 'Please tell us about your project';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const handleNext = () => {
    if (validateStep(step)) setStep((s) => Math.min(s + 1, 3));
  };

  const handleBack = () => setStep((s) => Math.max(s - 1, 1));

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateStep(3)) return;
    setIsSubmitting(true);
    await new Promise((resolve) => setTimeout(resolve, 1500));
    setIsSubmitting(false);
    setIsSubmitted(true);
  };

  const setField = (field, value) => {
    setFormData({ ...formData, [field]: value });
    if (errors[field]) setErrors({ ...errors, [field]: undefined });
  };

  if (isSubmitted) {
    return (
      <>
      <SEO title="Get Started | Nexira Digital" description="Start your project with Nexira Digital. Tell us about your goals and we’ll get back within 24 hours." path="/GetStarted" />
      <section className="relative min-h-screen pt-32 pb-20 bg-[#0F172A] flex items-center justify-center overflow-hidden">
        <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />
        <div className="relative max-w-2xl mx-auto px-6 text-center">
          <motion.div initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1, scale: 1 }} className="w-20 h-20 rounded-full bg-green-500/10 flex items-center justify-center mx-auto mb-6">
            <Rocket className="w-10 h-10 text-green-500" />
          </motion.div>
          <h1 className="text-3xl font-bold text-white mb-4">Thank you for choosing Nexira Digital</h1>
          <p className="text-gray-400 mb-2">Our team will contact you shortly to discuss your project.</p>
          <p className="text-gray-500 text-sm">Expected response time: Within 24 hours</p>
        </div>
      </section>
      </>
    );
  }

  return (
    <>
    <SEO
      title="Get Started | Nexira Digital"
      description="Start your project with Nexira Digital. Tell us about your goals and we will get back within 24 hours."
      path="/GetStarted"
    />
    <section className="relative min-h-screen pt-32 pb-20 bg-[#0F172A] overflow-hidden">
      <div className="absolute top-1/4 -left-32 w-96 h-96 bg-[#3B82F6]/10 rounded-full blur-[128px]" />
      <div className="absolute bottom-1/4 -right-32 w-[500px] h-[500px] bg-[#1D4ED8]/10 rounded-full blur-[128px]" />

      <div className="relative max-w-3xl mx-auto px-6 lg:px-8">
        <motion.div initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }} className="text-center mb-10">
          <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">Start Your Project</h1>
          <p className="text-gray-400">Share your project details and let&apos;s discuss how we can bring your vision to life.</p>
        </motion.div>

        <div className="flex items-center justify-center gap-4 mb-10">
          {[1, 2, 3].map((s) => (
            <div key={s} className="flex items-center gap-3">
              <div className={`w-10 h-10 rounded-full flex items-center justify-center text-sm font-semibold transition-all duration-300 ${
                step >= s ? 'bg-[#3B82F6] text-white' : 'bg-white/5 text-gray-500 border border-white/10'
              }`}>
                {step > s ? <CheckCircle2 className="w-5 h-5" /> : s}
              </div>
              {s < 3 && <div className={`w-12 h-px transition-all duration-300 ${step > s ? 'bg-[#3B82F6]' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        <div className="p-8 md:p-10 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-sm">
          <AnimatePresence mode="wait">
            {step === 1 && (
              <motion.div key="step1" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-6">
                  <User className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-xl font-bold text-white">About You</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Full Name *</label>
                    <Input value={formData.name} onChange={(e) => setField('name', e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12" placeholder="John Smith" />
                    {errors.name && <p className="text-red-400 text-xs mt-1.5">{errors.name}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Business Name</label>
                    <Input value={formData.business} onChange={(e) => setField('business', e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12" placeholder="Your Company Ltd" />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Email Address *</label>
                    <Input type="email" value={formData.email} onChange={(e) => setField('email', e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12" placeholder="john@example.com" />
                    {errors.email && <p className="text-red-400 text-xs mt-1.5">{errors.email}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Phone Number</label>
                    <Input value={formData.phone} onChange={(e) => setField('phone', e.target.value)} className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12" placeholder="+44 123 456 7890" />
                  </div>
                </div>
                <Button onClick={handleNext} className="w-full mt-8 py-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl group">
                  <span className="flex items-center justify-center gap-2">Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                </Button>
              </motion.div>
            )}

            {step === 2 && (
              <motion.div key="step2" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-6">
                  <Briefcase className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-xl font-bold text-white">Your Project</h2>
                </div>
                <label className="block text-sm font-medium text-gray-300 mb-3">What do you need? *</label>
                <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                  {serviceOptions.map((opt) => (
                    <button
                      key={opt}
                      type="button"
                      onClick={() => setField('service', opt)}
                      className={`px-4 py-3 rounded-xl text-sm font-medium transition-all duration-300 ${
                        formData.service === opt
                          ? 'bg-[#3B82F6] text-white border-[#3B82F6]'
                          : 'bg-white/5 text-gray-400 border border-white/10 hover:border-[#3B82F6]/30 hover:text-white'
                      }`}
                    >
                      {opt}
                    </button>
                  ))}
                </div>
                {errors.service && <p className="text-red-400 text-xs mt-3">{errors.service}</p>}
                <div className="flex gap-3 mt-8">
                  <Button onClick={handleBack} variant="outline" className="flex-1 py-6 border-white/20 text-white hover:bg-white/5 rounded-xl">
                    <span className="flex items-center justify-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</span>
                  </Button>
                  <Button onClick={handleNext} className="flex-1 py-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl group">
                    <span className="flex items-center justify-center gap-2">Continue <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" /></span>
                  </Button>
                </div>
              </motion.div>
            )}

            {step === 3 && (
              <motion.div key="step3" initial={{ opacity: 0, x: 20 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -20 }}>
                <div className="flex items-center gap-2 mb-6">
                  <FileText className="w-5 h-5 text-[#3B82F6]" />
                  <h2 className="text-xl font-bold text-white">Project Details</h2>
                </div>
                <div className="space-y-5">
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Tell us about your project *</label>
                    <Textarea
                      rows={4}
                      value={formData.message}
                      onChange={(e) => setField('message', e.target.value)}
                      className="bg-white/5 border-white/10 text-white placeholder:text-gray-500 focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 resize-none"
                      placeholder="Tell us about your project, goals and timeline..."
                    />
                    {errors.message && <p className="text-red-400 text-xs mt-1.5">{errors.message}</p>}
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Approximate budget</label>
                    <Select value={formData.budget} onValueChange={(v) => setField('budget', v)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#3B82F6]">
                        <SelectValue placeholder="Select budget range" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1E293B] border-white/10">
                        {budgets.map((b) => (
                          <SelectItem key={b} value={b} className="text-gray-300 focus:bg-[#3B82F6]/20 focus:text-white">
                            {b}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-gray-300 mb-2">Expected start</label>
                    <Select value={formData.timeline} onValueChange={(v) => setField('timeline', v)}>
                      <SelectTrigger className="bg-white/5 border-white/10 text-white h-12 focus:border-[#3B82F6]">
                        <SelectValue placeholder="Select timeline" />
                      </SelectTrigger>
                      <SelectContent className="bg-[#1E293B] border-white/10">
                        {timelines.map((t) => (
                          <SelectItem key={t} value={t} className="text-gray-300 focus:bg-[#3B82F6]/20 focus:text-white">
                            {t}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>
                </div>
                <div className="flex gap-3 mt-8">
                  <Button onClick={handleBack} variant="outline" className="flex-1 py-6 border-white/20 text-white hover:bg-white/5 rounded-xl">
                    <span className="flex items-center justify-center gap-2"><ArrowLeft className="w-4 h-4" /> Back</span>
                  </Button>
                  <Button onClick={handleSubmit} disabled={isSubmitting} className="flex-1 py-6 bg-[#3B82F6] hover:bg-[#2563EB] text-white font-semibold rounded-xl">
                    {isSubmitting ? (
                      <span className="flex items-center justify-center gap-2">
                        <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin" /> Sending...
                      </span>
                    ) : (
                      <span className="flex items-center justify-center gap-2">
                        Send Project Enquiry <ArrowRight className="w-4 h-4" />
                      </span>
                    )}
                  </Button>
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </section>
    </>
  );
}
