import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Button } from '@/components/ui/button';
import { ArrowRight, ArrowLeft, Check } from 'lucide-react';

const TOTAL_STEPS = 7;

const platforms = [
  { id: 'shopify', value: 'Shopify Store', label: 'Shopify Store' },
  { id: 'wordpress', value: 'WordPress Website', label: 'WordPress Website' },
  { id: 'custom', value: 'Custom Website', label: 'Custom Website' },
  { id: 'unsure', value: 'Not sure', label: 'Not sure' },
];

const featureOptions = [
  { id: 'payments', value: 'Payments', label: 'Online Payments' },
  { id: 'wa', value: 'WhatsApp', label: 'WhatsApp Integration' },
  { id: 'booking', value: 'Booking', label: 'Booking System' },
  { id: 'crm', value: 'CRM', label: 'CRM / Lead Management' },
  { id: 'analytics', value: 'Analytics', label: 'Analytics' },
  { id: 'seo', value: 'SEO', label: 'SEO Setup' },
];

const logoOptions = ['Yes', 'No', 'Need a new logo'];

const fieldClass =
  'bg-[#0d1729] border-[#34425c] text-white placeholder:text-[#71809a] focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 h-12 rounded-xl';
const textareaClass =
  'bg-[#0d1729] border-[#34425c] text-white placeholder:text-[#71809a] focus:border-[#3B82F6] focus:ring-[#3B82F6]/20 rounded-xl min-h-[115px]';

export default function RequirementForm() {
  const [current, setCurrent] = useState(0);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [errors, setErrors] = useState({});
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    whatsapp: '',
    company: '',
    platform: '',
    business: '',
    audience: '',
    products: '',
    goals: '',
    logo: 'Yes',
    colours: '',
    references: '',
    style: '',
    features: [],
    launch: '',
    additional: '',
    notes: '',
  });

  const setField = (field, value) => {
    setFormData((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: undefined }));
  };

  const toggleFeature = (value) => {
    setFormData((prev) => ({
      ...prev,
      features: prev.features.includes(value)
        ? prev.features.filter((f) => f !== value)
        : [...prev.features, value],
    }));
  };

  const validateStep = (step) => {
    const errs = {};
    if (step === 0) {
      if (!formData.name.trim()) errs.name = 'Please enter your full name';
      if (!formData.email.trim()) errs.email = 'Please enter your email address';
      else if (!/\S+@\S+\.\S+/.test(formData.email)) errs.email = 'Please enter a valid email address';
    }
    if (step === 1) {
      if (!formData.platform) errs.platform = 'Please select an option';
    }
    if (step === 2) {
      if (!formData.business.trim()) errs.business = 'Please enter your business type';
    }
    setErrors(errs);
    return Object.keys(errs).length === 0;
  };

  const move = (dir) => {
    if (dir === 1 && !validateStep(current)) return;

    if (current === TOTAL_STEPS - 1 && dir === 1) {
      setIsSubmitted(true);
      return;
    }

    setCurrent((c) => Math.max(0, Math.min(TOTAL_STEPS - 1, c + dir)));
  };

  const progress = ((current + 1) / TOTAL_STEPS) * 100;

  if (isSubmitted) {
    return (
      <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(59,130,246,.18),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,.10),transparent_30%)]" />
        <div className="relative max-w-[900px] mx-auto px-5 text-center py-16">
          <motion.div initial={{ opacity: 0, scale: 0.95 }} animate={{ opacity: 1, scale: 1 }}>
            <div className="text-5xl mb-4 text-[#3B82F6]">
              <Check className="w-14 h-14 mx-auto" strokeWidth={3} />
            </div>
            <h2 className="text-3xl font-bold text-white mb-3">Thank you!</h2>
            <p className="text-[#94A3B8] text-base max-w-lg mx-auto leading-relaxed">
              Your requirements have been received. Our team can now review your project details and get back to you.
            </p>
          </motion.div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen pt-28 pb-20 overflow-hidden">
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_85%_10%,rgba(59,130,246,.18),transparent_30%),radial-gradient(circle_at_10%_90%,rgba(59,130,246,.10),transparent_30%)]" />

      <div className="relative max-w-[900px] mx-auto px-5 pb-10">
        <div className="mb-10">
          <h1 className="text-4xl md:text-[42px] font-bold text-white leading-tight mb-3">
            Website Project Questionnaire
          </h1>
          <p className="text-[#b8c3d4] text-base md:text-lg max-w-[650px] leading-relaxed">
            Tell us about your project so our team can understand your requirements and prepare the right solution for you.
          </p>
        </div>

        <div className="h-[7px] bg-[#1d2940] rounded-full overflow-hidden mb-9">
          <div
            className="h-full bg-gradient-to-r from-[#3B82F6] to-[#60A5FA] transition-all duration-300"
            style={{ width: `${progress}%` }}
          />
        </div>

        <form
          className="bg-[rgba(17,28,49,.88)] border border-[#26344d] rounded-[22px] p-6 md:p-[30px] shadow-[0_20px_60px_rgba(0,0,0,.22)]"
          onSubmit={(e) => e.preventDefault()}
        >
          <AnimatePresence mode="wait">
            {current === 0 && (
              <Step key="about" title="About You" sub="Let's start with your basic contact details.">
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <Field label="Full name *" error={errors.name}>
                    <Input
                      required
                      name="name"
                      value={formData.name}
                      onChange={(e) => setField('name', e.target.value)}
                      placeholder="Your full name"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Email address *" error={errors.email}>
                    <Input
                      required
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={(e) => setField('email', e.target.value)}
                      placeholder="you@company.com"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="WhatsApp number">
                    <Input
                      name="whatsapp"
                      value={formData.whatsapp}
                      onChange={(e) => setField('whatsapp', e.target.value)}
                      placeholder="+44 ..."
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Company / Brand">
                    <Input
                      name="company"
                      value={formData.company}
                      onChange={(e) => setField('company', e.target.value)}
                      placeholder="Company name"
                      className={fieldClass}
                    />
                  </Field>
                </div>
              </Step>
            )}

            {current === 1 && (
              <Step key="need" title="What do you need?" sub="Choose the option closest to your project.">
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  {platforms.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={formData.platform === opt.value}
                      onClick={() => setField('platform', opt.value)}
                      label={opt.label}
                    />
                  ))}
                </div>
                {errors.platform && <p className="text-red-400 text-xs mt-3">{errors.platform}</p>}
              </Step>
            )}

            {current === 2 && (
              <Step key="details" title="Project Details" sub="Help us understand your business and objectives.">
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <Field label="Business type *" error={errors.business}>
                    <Input
                      required
                      name="business"
                      value={formData.business}
                      onChange={(e) => setField('business', e.target.value)}
                      placeholder="e.g. Clothing, Agency, Restaurant"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Target audience">
                    <Input
                      name="audience"
                      value={formData.audience}
                      onChange={(e) => setField('audience', e.target.value)}
                      placeholder="Who are your customers?"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Products / services" className="sm:col-span-2">
                    <Textarea
                      name="products"
                      value={formData.products}
                      onChange={(e) => setField('products', e.target.value)}
                      placeholder="Briefly describe what you sell or offer..."
                      className={textareaClass}
                    />
                  </Field>
                  <Field label="Main goal for the website" className="sm:col-span-2">
                    <Textarea
                      name="goals"
                      value={formData.goals}
                      onChange={(e) => setField('goals', e.target.value)}
                      placeholder="e.g. Generate leads, sell products, build credibility..."
                      className={textareaClass}
                    />
                  </Field>
                </div>
              </Step>
            )}

            {current === 3 && (
              <Step key="design" title="Design & Branding" sub="Tell us how you want your website to look and feel.">
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <Field label="Do you have a logo?">
                    <select
                      name="logo"
                      value={formData.logo}
                      onChange={(e) => setField('logo', e.target.value)}
                      className="w-full px-[15px] py-[14px] rounded-xl border border-[#34425c] bg-[#0d1729] text-white outline-none text-[15px] focus:border-[#3B82F6] focus:shadow-[0_0_0_3px_rgba(59,130,246,.13)]"
                    >
                      {logoOptions.map((opt) => (
                        <option key={opt} value={opt}>
                          {opt}
                        </option>
                      ))}
                    </select>
                  </Field>
                  <Field label="Brand colours">
                    <Input
                      name="colours"
                      value={formData.colours}
                      onChange={(e) => setField('colours', e.target.value)}
                      placeholder="e.g. Navy & Electric Blue"
                      className={fieldClass}
                    />
                  </Field>
                  <Field label="Reference websites" className="sm:col-span-2">
                    <Textarea
                      name="references"
                      value={formData.references}
                      onChange={(e) => setField('references', e.target.value)}
                      placeholder="Paste website links or describe websites you like..."
                      className={textareaClass}
                    />
                  </Field>
                  <Field label="Preferred style" className="sm:col-span-2">
                    <Input
                      name="style"
                      value={formData.style}
                      onChange={(e) => setField('style', e.target.value)}
                      placeholder="e.g. Premium, minimal, modern, bold, corporate"
                      className={fieldClass}
                    />
                  </Field>
                </div>
              </Step>
            )}

            {current === 4 && (
              <Step
                key="features"
                title="Features"
                sub="Select the features you may need. You can discuss everything with our team later."
              >
                <div className="grid sm:grid-cols-2 gap-3 mt-2">
                  {featureOptions.map((opt) => (
                    <OptionCard
                      key={opt.id}
                      selected={formData.features.includes(opt.value)}
                      onClick={() => toggleFeature(opt.value)}
                      label={opt.label}
                    />
                  ))}
                </div>
              </Step>
            )}

            {current === 5 && (
              <Step key="timeline" title="Timeline" sub="When would you ideally like the project launched?">
                <div className="grid sm:grid-cols-2 gap-[18px]">
                  <Field label="Preferred launch date">
                    <Input
                      type="date"
                      name="launch"
                      value={formData.launch}
                      onChange={(e) => setField('launch', e.target.value)}
                      className={`${fieldClass} [color-scheme:dark]`}
                    />
                  </Field>
                  <Field label="Additional requirements" className="sm:col-span-2">
                    <Textarea
                      name="additional"
                      value={formData.additional}
                      onChange={(e) => setField('additional', e.target.value)}
                      placeholder="Anything else we should know?"
                      className={textareaClass}
                    />
                  </Field>
                </div>
              </Step>
            )}

            {current === 6 && (
              <Step key="uploads" title="Uploads" sub="You can add your assets here. This demo stores nothing online.">
                <Field label="Logo / images / documents">
                  <Input
                    type="file"
                    multiple
                    accept="image/*,.pdf,.doc,.docx"
                    className={`${fieldClass} file:mr-4 file:py-1 file:px-3 file:rounded-lg file:border-0 file:bg-[#3B82F6]/20 file:text-[#93C5FD] file:text-sm h-auto py-3`}
                  />
                </Field>
                <Field label="Anything else?">
                  <Textarea
                    name="notes"
                    value={formData.notes}
                    onChange={(e) => setField('notes', e.target.value)}
                    placeholder="Final notes for the Nexira Digital team..."
                    className={textareaClass}
                  />
                </Field>
                <p className="text-xs text-[#71809a] mt-3">
                  Demo only: form submissions are not sent to a server.
                </p>
              </Step>
            )}
          </AnimatePresence>

          <div className="flex justify-between gap-3 mt-7">
            <Button
              type="button"
              onClick={() => move(-1)}
              disabled={current === 0}
              className="bg-[#1b2940] text-[#dbe5f3] hover:bg-[#243552] rounded-xl px-5 py-[13px] font-bold disabled:opacity-40"
            >
              <span className="flex items-center gap-2">
                <ArrowLeft className="w-4 h-4" /> Back
              </span>
            </Button>
            <Button
              type="button"
              onClick={() => move(1)}
              className="bg-[#3B82F6] hover:bg-[#2563EB] text-white rounded-xl px-5 py-[13px] font-bold shadow-[0_8px_25px_rgba(59,130,246,.22)]"
            >
              <span className="flex items-center gap-2">
                {current === TOTAL_STEPS - 1 ? 'Submit' : 'Continue'}
                <ArrowRight className="w-4 h-4" />
              </span>
            </Button>
          </div>
        </form>
      </div>
    </section>
  );
}

function Step({ title, sub, children }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -8 }}
      transition={{ duration: 0.25 }}
    >
      <h2 className="text-[26px] font-bold text-white m-0 mb-2">{title}</h2>
      <p className="text-[#94A3B8] m-0 mb-[26px]">{sub}</p>
      {children}
    </motion.div>
  );
}

function Field({ label, error, className = '', children }) {
  return (
    <div className={`mb-[19px] ${className}`}>
      <label className="block font-semibold mb-2 text-sm text-white">{label}</label>
      {children}
      {error && <p className="text-red-400 text-xs mt-1.5">{error}</p>}
    </div>
  );
}

function OptionCard({ selected, onClick, label }) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={`text-left p-[17px] rounded-[14px] border font-semibold transition-all duration-200 ${
        selected
          ? 'border-[#3B82F6] bg-[rgba(59,130,246,.12)] shadow-[0_0_0_2px_rgba(59,130,246,.12)] text-white'
          : 'border-[#34425c] bg-[#0d1729] text-white hover:border-[#3B82F6]/50'
      }`}
    >
      {label}
    </button>
  );
}
