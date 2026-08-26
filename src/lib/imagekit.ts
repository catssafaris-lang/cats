const IMAGEKIT_BASE = 'https://ik.imagekit.io/axd1riwnv';

export function getIKUrl(path: string): string {
  if (path.startsWith('http')) return path;
  const cleanPath = path.startsWith('/') ? path : `/${path}`;
  return `${IMAGEKIT_BASE}${cleanPath}`;
}
