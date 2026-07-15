import Link from 'next/link';

export default function HomePage() {
  return (
    <>
      <header className="page-header">
        <h2>Семья Петровых</h2>
        <p>
          Интерактивное генеалогическое дерево на React-библиотеке famtreejs
          (partnership-centric модель: дети принадлежат союзам).
        </p>
        <div className="meta-tags">
          <span className="tag">React / TypeScript</span>
          <span className="tag">MIT</span>
          <span className="tag">npm: @alexbrand09/famtreejs</span>
        </div>
      </header>

      <p className="page-cta">
        <Link href="/view" className="cta-button">
          Открыть дерево
        </Link>
      </p>

      <div className="links-row">
        <a
          href="https://github.com/alexbrand/famtreejs"
          target="_blank"
          rel="noreferrer"
        >
          GitHub →
        </a>
      </div>
    </>
  );
}
