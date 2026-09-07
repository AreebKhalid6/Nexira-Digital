import { Link } from 'react-router-dom';
import { createPageUrl } from '@/utils';
import SEO from '@/components/SEO';

export default function PlaceholderPage({ title }) {
  const pathMap = {
    'Privacy Policy': '/Privacy',
    'Cookie Policy': '/CookiePolicy',
    'Terms & Conditions': '/Terms',
    'Case Study': '/CaseStudy',
  };
  const path = pathMap[title] || '/';

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-6 pt-28 pb-16 bg-[#0F172A]">
      <SEO title={`${title} | Nexira Digital`} description={`${title} — Nexira Digital, London digital agency.`} path={path} />
      <div className="text-center max-w-lg">
        <p className="text-sm text-[#3B82F6] font-medium mb-3">Coming next</p>
        <h1 className="text-3xl md:text-4xl font-bold text-white mb-4">{title}</h1>
        <p className="text-gray-400 mb-8">
          Home page is live. Paste this page&apos;s Base44 code when you&apos;re ready and it will be wired in the same way.
        </p>
        <Link
          to={createPageUrl('Home')}
          className="inline-flex px-6 py-3 rounded-full bg-[#3B82F6] text-white font-semibold hover:bg-[#2563EB] transition-colors"
        >
          Back to Home
        </Link>
      </div>
    </div>
  );
}
