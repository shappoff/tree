import FamilyTreeView from '@/components/FamilyTreeView';
import HomeButton from '@/components/HomeButton';
import { familyTreeData } from '@/data/familyTree';

export default function TreePage() {
  return (
    <div className="tree-fullscreen">
      <HomeButton />
      <FamilyTreeView data={familyTreeData} />
    </div>
  );
}
