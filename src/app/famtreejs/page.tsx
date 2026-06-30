'use client';

import { FamilyTree, BasicPersonCard } from '@alexbrand09/famtreejs';
import '@alexbrand09/famtreejs/styles.css';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { famtreejsData } from '@/data/sampleData';

const demo = getDemoById('famtreejs')!;

export default function FamtreejsPage() {
  return (
    <DemoPage demo={demo}>
      <div style={{ width: '100%', height: '100%' }}>
        <FamilyTree
          data={famtreejsData}
          nodeComponent={BasicPersonCard}
          orientation="top-down"
          theme="light"
        />
      </div>
    </DemoPage>
  );
}
