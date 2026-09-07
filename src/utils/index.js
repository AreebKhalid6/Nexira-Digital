/**
 * Base44-compatible page URL helper.
 * Supports "PageName" and "PageName?query=1".
 */
export function createPageUrl(page) {
  if (!page) return '/';
  const [name, query] = String(page).split('?');
  const path = name === 'Home' ? '/' : `/${name}`;
  return query ? `${path}?${query}` : path;
}
