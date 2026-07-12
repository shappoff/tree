'use client';

import { FamilyTree, BasicPersonCard } from '@alexbrand09/famtreejs';
import '@alexbrand09/famtreejs/styles.css';
import { familyTreeData } from '@/data/familyTreeData';

export default function FamilyTreeView() {
  return (
    <div className="tree-canvas">
      <FamilyTree
        data={familyTreeData}
        nodeComponent={BasicPersonCard}
        orientation="top-down"
        theme="light"
      />
    </div>
  );
}
