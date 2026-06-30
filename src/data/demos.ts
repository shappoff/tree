export interface DemoInfo {
  id: string;
  path: string;
  name: string;
  npm?: string;
  stars?: string;
  license: string;
  language: string;
  description: string;
  pros: string[];
  cons: string[];
  links: { label: string; url: string }[];
}

export const demos: DemoInfo[] = [
  {
    id: 'family-chart',
    path: '/family-chart',
    name: 'Family Chart',
    npm: 'family-chart',
    stars: '400+',
    license: 'MIT',
    language: 'JavaScript / D3',
    description:
      'Современная D3-библиотека для интерактивных генеалогических деревьев с HTML/SVG-карточками, зумом и редактированием.',
    pros: ['Активная разработка', 'TypeScript', 'React/Vue/Angular', 'Красивые карточки'],
    cons: ['Относительно новая', 'Premium-функции платные'],
    links: [
      { label: 'GitHub', url: 'https://github.com/donatso/family-chart' },
      { label: 'Документация', url: 'https://donatso.github.io/family-chart-doc/' },
    ],
  },
  {
    id: 'dtree',
    path: '/dtree',
    name: 'dTree (d3-dtree)',
    npm: 'd3-dtree',
    stars: '550+',
    license: 'MIT',
    language: 'JavaScript / D3 v4',
    description:
      'Классическая библиотека для деревьев с несколькими родителями (браки + дети). Основа онлайн-вьюера Treehouse.',
    pros: ['Проверена временем', 'Простой JSON-формат', 'Кастомные рендереры'],
    cons: ['Зависит от D3 v4', 'Горизонтальный layout на больших деревьях'],
    links: [
      { label: 'GitHub', url: 'https://github.com/ErikGartner/dTree' },
      { label: 'Treehouse', url: 'https://treehouse.gartner.io' },
    ],
  },
  {
    id: 'topola',
    path: '/topola',
    name: 'Topola',
    npm: 'topola',
    stars: '200+',
    license: 'Apache-2.0',
    language: 'TypeScript / D3',
    description:
      'Библиотека для GEDCOM-данных: предки, потомки, hourglass и relatives chart. Используется в Topola Viewer.',
    pros: ['GEDCOM из коробки', 'Несколько типов диаграмм', 'TypeScript'],
    cons: ['Сложнее API', 'Ориентирована на GEDCOM'],
    links: [
      { label: 'GitHub', url: 'https://github.com/PeWu/topola' },
      { label: 'Viewer', url: 'https://pewu.github.io/topola-viewer/' },
    ],
  },
  {
    id: 'famtreejs',
    path: '/famtreejs',
    name: 'famtreejs',
    npm: '@alexbrand09/famtreejs',
    license: 'MIT',
    language: 'React / TypeScript',
    description:
      'React-библиотека с partnership-centric моделью: дети принадлежат союзам, а не отдельным родителям.',
    pros: ['Нативный React', 'Доступность (a11y)', 'Анимации Framer Motion'],
    cons: ['Только React', 'Молодой проект'],
    links: [{ label: 'GitHub', url: 'https://github.com/alexbrand/famtreejs' }],
  },
  {
    id: 'react-d3-tree',
    path: '/react-d3-tree',
    name: 'react-d3-tree',
    npm: 'react-d3-tree',
    stars: '1000+',
    license: 'MIT',
    language: 'React / D3',
    description:
      'Популярный React-компонент для иерархических деревьев. Подходит для предков/потомков, но не для супружеских пар.',
    pros: ['Простая интеграция', 'Collapsible nodes', 'Много примеров'],
    cons: ['Один родитель на узел', 'Не полноценная генеалогия'],
    links: [{ label: 'GitHub', url: 'https://github.com/bkrem/react-d3-tree' }],
  },
  {
    id: 'react-family-tree',
    path: '/react-family-tree',
    name: 'react-family-tree',
    npm: 'react-family-tree',
    license: 'MIT',
    language: 'React',
    description:
      'Компонент для визуализации семейных связей: родители, супруги, братья/сёстры, дети.',
    pros: ['Заточен под генеалогию', 'Выбор корневого человека', 'Placeholder-узлы'],
    cons: ['Меньше визуальных возможностей', 'Ограниченная кастомизация'],
    links: [{ label: 'GitHub', url: 'https://github.com/SanichKotikov/react-family-tree' }],
  },
  {
    id: 'react-complex-tree',
    path: '/react-complex-tree',
    name: 'react-complex-tree',
    npm: 'react-complex-tree',
    license: 'MIT',
    language: 'React / TypeScript',
    description:
      'Продвинутый компонент дерева с поиском, переименованием и навигацией с клавиатуры.',
    pros: ['Поиск и редактирование', 'Drag & drop', 'Доступность'],
    cons: ['Не классическая генеалогическая схема', 'Скорее древовидный список'],
    links: [{ label: 'GitHub', url: 'https://github.com/lukasbach/react-complex-tree' }],
  },
  {
    id: 'react-flow',
    path: '/react-flow',
    name: 'React Flow + Dagre',
    npm: '@xyflow/react',
    stars: '25000+',
    license: 'MIT',
    language: 'React / TypeScript',
    description:
      'Универсальный графовый редактор. С Dagre layout можно построить кастомное генеалогическое дерево любой сложности.',
    pros: ['Максимальная гибкость', 'Кастомные узлы', 'Огромное сообщество'],
    cons: ['Нужно писать layout самому', 'Не специализирован для генеалогии'],
    links: [
      { label: 'React Flow', url: 'https://reactflow.dev' },
      { label: 'Dagre', url: 'https://github.com/dagrejs/dagre' },
    ],
  },
  {
    id: 'vis-network',
    path: '/vis-network',
    name: 'vis-network',
    npm: 'vis-network',
    stars: '3000+',
    license: 'Apache-2.0 / MIT',
    language: 'JavaScript',
    description:
      'Сетевой граф с физическим layout. Семейные связи моделируются как узлы и рёбра разных типов.',
    pros: ['Интерактивность', 'Drag & physics', 'Простой API'],
    cons: ['Layout не генеалогический', 'Физика может «прыгать»'],
    links: [{ label: 'GitHub', url: 'https://github.com/visjs/vis-network' }],
  },
  {
    id: 'cytoscape',
    path: '/cytoscape',
    name: 'Cytoscape.js',
    npm: 'cytoscape',
    stars: '10000+',
    license: 'MIT',
    language: 'JavaScript',
    description:
      'Мощная библиотека для анализа и визуализации графов. С dagre-extension — иерархический layout.',
    pros: ['Анализ графов', 'Много расширений', 'Производительность'],
    cons: ['Сложный API', 'Нужна настройка для генеалогии'],
    links: [
      { label: 'Cytoscape.js', url: 'https://js.cytoscape.org' },
      { label: 'cytoscape-dagre', url: 'https://github.com/cytoscape/cytoscape.js-dagre' },
    ],
  },
  {
    id: 'd3-pedigree',
    path: '/d3-pedigree',
    name: 'D3.js (кастом)',
    npm: 'd3',
    stars: '108000+',
    license: 'ISC',
    language: 'JavaScript / D3',
    description:
      'Ручная реализация pedigree-диаграммы на D3: стандартные символы (квадрат/круг), линии родства.',
    pros: ['Полный контроль', 'Нет зависимостей от UI-библиотек', 'Стандартная нотация'],
    cons: ['Много кода', 'Нужно реализовывать layout'],
    links: [
      { label: 'D3.js', url: 'https://d3js.org' },
      { label: 'Pedigree bl.ock', url: 'https://observablehq.com/@d3/pedigree' },
    ],
  },
  {
    id: 'balkan',
    path: '/balkangraph',
    name: 'BALKAN FamilyTree JS',
    npm: '@balkangraph/familytree.js',
    stars: '90+',
    license: 'Коммерческая (free tier)',
    language: 'JavaScript',
    description:
      'Популярное коммерческое решение с rich UI: поиск, экспорт, 8 ориентаций, lazy loading.',
    pros: ['Богатый функционал', 'Готовый UI', 'Документация'],
    cons: ['Лицензия для production', 'Закрытый код'],
    links: [
      { label: 'Сайт', url: 'https://balkan.app/FamilyTreeJS' },
      { label: 'GitHub', url: 'https://github.com/BALKANGraph/FamilyTreeJS' },
    ],
  },
];

export function getDemoById(id: string): DemoInfo | undefined {
  return demos.find((d) => d.id === id);
}
