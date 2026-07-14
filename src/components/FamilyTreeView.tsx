'use client';

import {
  FamilyTree,
  BasicPersonCard,
  type FamilyTreeData,
  type Orientation,
  type Theme,
} from '@alexbrand09/famtreejs';
import '@alexbrand09/famtreejs/styles.css';
import type { PersonCardData } from '@/data/familyTree';

interface FamilyTreeViewProps {
  data: FamilyTreeData<PersonCardData>;
  orientation?: Orientation;
  theme?: Theme;
}

export default function FamilyTreeView({
  data,
  orientation = 'top-down',
  theme = 'light',
}: FamilyTreeViewProps) {
  return (
    <div className="family-tree-view">
      <FamilyTree
        data={data}
        nodeComponent={BasicPersonCard}
        orientation={orientation}
        theme={theme}
      />
    </div>
  );
}
