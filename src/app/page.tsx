import FamilyTreeView from '@/components/FamilyTreeView';
import { siteConfig } from '@/config/site';
import { familyTreeData } from '@/data/familyTreeData';

export default function HomePage() {
  return (
    <main className="page">
      <header className="page-header">
        <h1>{siteConfig.title}</h1>
        <p>{siteConfig.subtitle}</p>
      </header>
      <FamilyTreeView data={familyTreeData} />
    </main>
  );
}
