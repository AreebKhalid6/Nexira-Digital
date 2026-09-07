import React from 'react';
import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import { Mail, MapPin, Phone } from 'lucide-react';
import { CONTACT } from '@/data/contact';

export default function Footer() {
  const company = [
    { name: 'About', path: 'About' },
    { name: 'Services', path: 'Services' },
    { name: 'Portfolio', path: 'Portfolio' },
    { name: 'Contact', path: 'Contact' },
  ];

  const services = [
    { name: 'Web Design & Development', path: 'Services' },
    { name: 'Shopify & eCommerce', path: 'Services' },
    { name: 'Custom Development', path: 'Services' },
    { name: 'SEO & Digital Marketing', path: 'Services' },
  ];

  const legal = [
    { name: 'Privacy Policy', path: 'Privacy' },
    { name: 'Cookie Policy', path: 'CookiePolicy' },
    { name: 'Terms & Conditions', path: 'Terms' },
  ];

  return (
    <footer className="relative bg-[#0B1120] border-t border-white/10">
      <div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-transparent via-[#3B82F6] to-transparent" />

      <div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-5 gap-12">
          {/* Brand */}
          <div className="lg:col-span-1">
            <img src="/logonew.png" alt="Nexira Digital" className="h-12 w-auto mb-6" width="180" height="48" />
            <p className="text-gray-400 leading-relaxed text-sm">
              A modern digital agency helping businesses build, launch and grow online through
              thoughtful design, reliable technology and practical digital solutions.
            </p>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Company</h4>
            <ul className="space-y-3">
              {company.map((link) => (
                <li key={link.name}>
                  <Link to={createPageUrl(link.path)} className="text-gray-400 hover:text-[#3B82F6] transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Services</h4>
            <ul className="space-y-3">
              {services.map((service) => (
                <li key={service.name}>
                  <Link to={createPageUrl(service.path)} className="text-gray-400 hover:text-[#3B82F6] transition-colors duration-300 text-sm">
                    {service.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Legal</h4>
            <ul className="space-y-3">
              {legal.map((link) => (
                <li key={link.name}>
                  <Link to={createPageUrl(link.path)} className="text-gray-400 hover:text-[#3B82F6] transition-colors duration-300 text-sm">
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="text-white font-semibold mb-6 text-sm uppercase tracking-wider">Contact</h4>
            <ul className="space-y-4">
              <li className="flex items-start gap-2 text-sm text-gray-400">
                <MapPin className="w-4 h-4 text-[#3B82F6] mt-0.5 shrink-0" />
                <address className="not-italic leading-snug">
                  86-90 Paul Street, London, England, EC2A 4NE
                </address>
              </li>
              <li>
                <a href={CONTACT.phoneHref} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
                  <Phone className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  +44 7473 956951
                </a>
              </li>
              <li>
                <a href={`mailto:${CONTACT.email}`} className="flex items-center gap-2 text-sm text-gray-400 hover:text-[#3B82F6] transition-colors">
                  <Mail className="w-4 h-4 text-[#3B82F6] shrink-0" />
                  miran@nexiradigital.com
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-16 pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2026 Nexira Digital. All rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Web • eCommerce • Development • Growth
          </p>
        </div>
      </div>
    </footer>
  );
}
