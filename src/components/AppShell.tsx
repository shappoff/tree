import type { ReactNode } from 'react';

interface AppShellProps {
  children: ReactNode;
}

export default function AppShell({ children }: AppShellProps) {
  return (
    <div className="app-shell">
      <header className="app-header">
        <h1>Семейное дерево</h1>
        <p className="subtitle">Визуализация на @alexbrand09/famtreejs</p>
      </header>
      <main className="main">{children}</main>
    </div>
  );
}
