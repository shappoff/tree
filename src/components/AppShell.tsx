'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { demos } from '@/data/demos';

interface AppShellProps {
  children: React.ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  const pathname = usePathname();
  const basePath = '/tree';

  const isActive = (path: string) => {
    const fullPath = `${basePath}${path === '/' ? '' : path}`;
    if (path === '/') {
      return pathname === basePath || pathname === `${basePath}/`;
    }
    return pathname === fullPath || pathname.startsWith(`${fullPath}/`);
  };

  return (
    <div className="app-shell">
      <aside className="sidebar">
        <h1>🌳 Genealogy Showcase</h1>
        <p className="subtitle">Сравнение библиотек визуализации генеалогических деревьев</p>
        <nav>
          <ul className="nav-list">
            <li>
              <Link href="/" className={isActive('/') ? 'active' : undefined}>
                Обзор
              </Link>
            </li>
            {demos.map((demo) => (
              <li key={demo.id}>
                <Link href={demo.path} className={isActive(demo.path) ? 'active' : undefined}>
                  {demo.name}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="main">{children}</main>
    </div>
  );
}
