import FamilyTreeView from '@/components/FamilyTreeView';

export default function HomePage() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>Генеалогическое дерево</h1>
        <p>Семья Петровых — демонстрация библиотеки famtreejs</p>
      </header>
      <FamilyTreeView />
    </main>
  );
}
