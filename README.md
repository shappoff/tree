# Примеры Генеалогических Деревьев

Демонстрационное приложение на **Next.js** (React, TypeScript), которое показывает **разные способы визуализации генеалогических деревьев** с помощью 12 библиотек. Проект помогает сравнить подходы и выбрать подходящее решение для своей задачи.

Интерфейс на **русском языке**. В качестве тестовых данных используется семья **Петровых** (Пётр, Анна, Иван, Мария и др.).

## Структура проекта

```
/workspace
├── src/
│   ├── app/                    # Страницы Next.js App Router
│   ├── components/             # AppShell, DemoPage
│   └── data/                   # demos.ts, sampleData.ts
├── next.config.ts              # basePath: '/tree' (для GitHub Pages)
└── .github/workflows/nextjs.yml
```

## 12 реализаций

| Маршрут | Библиотека | Описание |
|---------|-----------|----------|
| `/family-chart` | family-chart | D3-деревья с HTML/SVG-карточками |
| `/dtree` | d3-dtree | Классическое pedigree-дерево (браки + дети) |
| `/topola` | topola | GEDCOM-данные, несколько типов диаграмм |
| `/famtreejs` | @alexbrand09/famtreejs | React, partnership-centric модель |
| `/react-d3-tree` | react-d3-tree | Иерархическое дерево parent → child |
| `/react-family-tree` | react-family-tree | Сложные семейные связи, выбор корня |
| `/react-complex-tree` | react-complex-tree | Древовидный список с поиском |
| `/react-flow` | @xyflow/react + dagre | Кастомный графовый редактор |
| `/vis-network` | vis-network | Сетевой граф с иерархическим layout |
| `/cytoscape` | cytoscape + cytoscape-dagre | Анализ и визуализация графов |
| `/d3-pedigree` | d3 (кастом) | Ручная pedigree-диаграмма |
| `/balkangraph` | @balkangraph/familytree.js | Коммерческое enterprise-решение |

Каждая страница содержит интерактивный пример, описание библиотеки, плюсы/минусы и ссылки на документацию.

## Локальный запуск

```bash
npm install --legacy-peer-deps
npm run dev
```

Откройте [http://localhost:3000/tree](http://localhost:3000/tree) в браузере.

> Приложение использует `basePath: '/tree'`, поэтому локально страницы доступны по пути `/tree`, а не в корне.

## Деплой

В `next.config.ts` задан `basePath: '/tree'` — приложение рассчитано на публикацию на **GitHub Pages**.

GitHub Actions при пуше в ветку `master` автоматически собирает и деплоит статический сайт.

## Назначение проекта

Проект — **сравнительная площадка (playground)** для выбора библиотеки генеалогических деревьев. Перенесено из репозитория [gTree](https://github.com/shappoff/gTree) с адаптацией под Next.js App Router.
