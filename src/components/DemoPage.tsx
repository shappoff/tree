import type { DemoInfo } from '@/data/demos';

interface DemoPageProps {
  demo: DemoInfo;
  children: React.ReactNode;
}

export default function DemoPage({ demo, children }: DemoPageProps) {
  return (
    <>
      <header className="page-header">
        <h2>{demo.name}</h2>
        <p>{demo.description}</p>
        <div className="meta-tags">
          <span className="tag">{demo.language}</span>
          <span className="tag">{demo.license}</span>
          {demo.npm && <span className="tag">npm: {demo.npm}</span>}
          {demo.stars && <span className="tag">★ {demo.stars}</span>}
        </div>
      </header>

      <div className="demo-canvas full">{children}</div>

      <div className="info-grid">
        <div className="info-card">
          <h3>Преимущества</h3>
          <ul>
            {demo.pros.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <div className="info-card">
          <h3>Ограничения</h3>
          <ul>
            {demo.cons.map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
      </div>

      <div className="links-row">
        {demo.links.map((link) => (
          <a key={link.url} href={link.url} target="_blank" rel="noreferrer">
            {link.label} →
          </a>
        ))}
      </div>
    </>
  );
}
