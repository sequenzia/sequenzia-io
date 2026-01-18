'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';

interface MenuItem {
  id: string;
  label: string;
  href: string;
  external?: boolean;
}

const menuItems: MenuItem[] = [
  { id: 'home', label: 'Home', href: '/' },
  { id: 'projects', label: 'Projects', href: '/projects' },
  { id: 'services', label: 'Services', href: '/services' },
  { id: 'store', label: 'Store', href: '/store' },
  { id: 'blog', label: 'Blog', href: '/blog' },
  { id: 'cv', label: 'CV', href: '/cv' },
  {
    id: 'contact',
    label: 'Contact',
    href: 'mailto:stephen@sequenzia.io',
    external: true,
  },
];

export default function SideBarMenu() {
  const pathname = usePathname();

  const isActive = (href: string) => {
    if (href === '/') {
      return pathname === '/';
    }
    return pathname.startsWith(href);
  };

  return (
    <ul className="menu grow shrink menu-md overflow-y-auto">
      {menuItems.map((item) => (
        <li key={item.id}>
          {item.external ? (
            <a
              className={`py-3 text-base ${isActive(item.href) ? 'bg-base-300' : ''}`}
              href={item.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {item.label}
            </a>
          ) : (
            <Link
              className={`py-3 text-base ${isActive(item.href) ? 'bg-base-300' : ''}`}
              href={item.href}
            >
              {item.label}
            </Link>
          )}
        </li>
      ))}
    </ul>
  );
}
