import { useEffect } from 'react';
import { CONTACT } from '@/data/contact';

const DEFAULTS = {
  title: 'Nexira Digital | UK Digital Agency — Web, Apps, eCommerce & Growth',
  description:
    'Nexira Digital is a London-based digital agency delivering websites, apps, branding, Shopify stores, marketplace solutions and digital growth strategies designed to convert and scale.',
  path: '/',
  image: `${CONTACT.siteUrl}/heropng.png`,
};

export default function SEO({
  title = DEFAULTS.title,
  description = DEFAULTS.description,
  path = DEFAULTS.path,
  image = DEFAULTS.image,
  type = 'website',
}) {
  useEffect(() => {
    const url = `${CONTACT.siteUrl}${path === '/' ? '/' : path}`;
    const fullTitle = title.includes('Nexira') ? title : `${title} | Nexira Digital`;

    document.title = fullTitle;

    const setMeta = (attr, key, content) => {
      if (!content) return;
      let el = document.querySelector(`meta[${attr}="${key}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute(attr, key);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };

    setMeta('name', 'title', fullTitle);
    setMeta('name', 'description', description);
    setMeta('property', 'og:title', fullTitle);
    setMeta('property', 'og:description', description);
    setMeta('property', 'og:url', url);
    setMeta('property', 'og:image', image);
    setMeta('property', 'og:type', type);
    setMeta('name', 'twitter:title', fullTitle);
    setMeta('name', 'twitter:description', description);
    setMeta('name', 'twitter:url', url);
    setMeta('name', 'twitter:image', image);

    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', url);
  }, [title, description, path, image, type]);

  return null;
}
