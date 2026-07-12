'use client';

import { FamilyTree, BasicPersonCard } from '@alexbrand09/famtreejs';
import type { FamilyTreeData, Orientation, Theme } from '@alexbrand09/famtreejs';
import '@alexbrand09/famtreejs/styles.css';
import type { PersonData } from '@/types/person';

interface FamilyTreeViewProps {
  data: FamilyTreeData<PersonData>;
  orientation?: Orientation;
  theme?: Theme;
}

export default function FamilyTreeView({
  data,
  orientation = 'top-down',
  theme = 'light',
}: FamilyTreeViewProps) {
  return (
    <div className="tree-canvas">
      <FamilyTree
        data={data}
        nodeComponent={BasicPersonCard}
        orientation={orientation}
        theme={theme}
      />
    </div>
  );
}
