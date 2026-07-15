# Семейное дерево (famtreejs)

Демонстрационное приложение на **Next.js** (React, TypeScript) с интерактивным генеалогическим деревом на [@alexbrand09/famtreejs](https://github.com/alexbrand/famtreejs).

Интерфейс на русском языке. Тестовые данные — семья **Петровых**.

## Структура

```
src/
├── app/                 # Next.js App Router
│   ├── (site)/          # Главная страница
│   └── view/            # Полноэкранное дерево
├── components/          # AppShell, FamilyTreeView, HomeButton
└── data/                # familyTree.ts
```

## Локальный запуск

```bash
npm install
npm run dev
```

- Главная: [http://localhost:3000/tree](http://localhost:3000/tree)
- Дерево: [http://localhost:3000/tree/view](http://localhost:3000/tree/view)

> `basePath: '/tree'` — пути локально и на GitHub Pages начинаются с `/tree`.

## Деплой

При пуше в `master` GitHub Actions собирает и публикует сайт на GitHub Pages.
