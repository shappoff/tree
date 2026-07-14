import FamilyTreeView from '@/components/FamilyTreeView';
import { familyTreeData } from '@/data/familyTree';

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

      <div className="demo-canvas full">
        <FamilyTreeView data={familyTreeData} />
      </div>

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
