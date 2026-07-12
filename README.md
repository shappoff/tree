# Генеалогическое дерево

Приложение на **Next.js** (React, TypeScript) с интерактивным генеалогическим деревом на базе [@alexbrand09/famtreejs](https://github.com/alexbrand/famtreejs).

В качестве демо-данных используется семья **Петровых**.

## Структура проекта

```
src/
├── app/
│   ├── layout.tsx
│   ├── page.tsx          # Главная страница с деревом
│   └── globals.css
├── components/
│   └── FamilyTreeView.tsx
└── data/
    └── familyTreeData.ts
```

## Локальный запуск

```bash
npm install
npm run dev
```

Откройте [http://localhost:3000/tree](http://localhost:3000/tree) в браузере.

> Приложение использует `basePath: '/tree'` для GitHub Pages.

## Деплой

GitHub Actions при пуше в ветку `master` автоматически собирает и деплоит статический сайт на GitHub Pages.
