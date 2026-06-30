import Link from 'next/link';
import { demos } from '@/data/demos';

export default function HomePage() {
  return (
    <>
      <section className="home-hero">
        <h2>Генеалогические деревья: обзор решений</h2>
        <p>
          Интерактивная презентация популярных библиотек для визуализации семейных деревьев.
          Каждый пример — отдельный маршрут с одними и теми же демо-данными (семья Петровых).
          Проект разворачивается на GitHub Pages через GitHub Actions.
        </p>
      </section>

      <div className="cards-grid">
        {demos.map((demo) => (
          <Link key={demo.id} href={demo.path} className="demo-card">
            <h3>{demo.name}</h3>
            <p>{demo.description}</p>
          </Link>
        ))}
      </div>

      <table className="comparison-table">
        <thead>
          <tr>
            <th>Библиотека</th>
            <th>Язык</th>
            <th>Лицензия</th>
            <th>Модель данных</th>
            <th>Лучше для</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Family Chart</td>
            <td>JS / D3</td>
            <td>MIT</td>
            <td>rels: parents, spouses, children</td>
            <td>Интерактивные деревья с карточками</td>
          </tr>
          <tr>
            <td>dTree</td>
            <td>JS / D3</td>
            <td>MIT</td>
            <td>marriages → children</td>
            <td>Классические pedigree-деревья</td>
          </tr>
          <tr>
            <td>Topola</td>
            <td>TS / D3</td>
            <td>Apache-2.0</td>
            <td>GEDCOM / JSON</td>
            <td>Импорт из генеалогических программ</td>
          </tr>
          <tr>
            <td>famtreejs</td>
            <td>React</td>
            <td>MIT</td>
            <td>people + partnerships</td>
            <td>React-приложения, союзы как сущности</td>
          </tr>
          <tr>
            <td>react-d3-tree</td>
            <td>React / D3</td>
            <td>MIT</td>
            <td>Иерархия parent → child</td>
            <td>Простые линии предков/потомков</td>
          </tr>
          <tr>
            <td>react-family-tree</td>
            <td>React</td>
            <td>MIT</td>
            <td>rels: parents, spouses, siblings</td>
            <td>Семейные связи с выбором корня</td>
          </tr>
          <tr>
            <td>react-complex-tree</td>
            <td>React</td>
            <td>MIT</td>
            <td>Древовидный список</td>
            <td>Навигация, поиск, редактирование</td>
          </tr>
          <tr>
            <td>React Flow</td>
            <td>React</td>
            <td>MIT</td>
            <td>nodes + edges</td>
            <td>Кастомные UI и сложная логика</td>
          </tr>
          <tr>
            <td>vis-network</td>
            <td>JS</td>
            <td>Apache/MIT</td>
            <td>Graph nodes + edges</td>
            <td>Сетевые диаграммы связей</td>
          </tr>
          <tr>
            <td>Cytoscape.js</td>
            <td>JS</td>
            <td>MIT</td>
            <td>Graph elements</td>
            <td>Анализ и большие графы</td>
          </tr>
          <tr>
            <td>D3 (кастом)</td>
            <td>JS / D3</td>
            <td>ISC</td>
            <td>Любая</td>
            <td>Полный контроль, клинические pedigrees</td>
          </tr>
          <tr>
            <td>BALKAN FamilyTree</td>
            <td>JS</td>
            <td>Коммерческая</td>
            <td>id, pids, mid, fid</td>
            <td>Enterprise-ready UI из коробки</td>
          </tr>
        </tbody>
      </table>
    </>
  );
}
