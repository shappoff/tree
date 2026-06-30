'use client';

import { useEffect, useRef } from 'react';
import FamilyTree from '@balkangraph/familytree.js';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { balkanNodes } from '@/data/sampleData';

const demo = getDemoById('balkan')!;

export default function BalkangraphPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const tree = new FamilyTree(el, {
      nodes: balkanNodes,
      nodeBinding: {
        field_0: 'name',
        field_1: 'bdate',
      },
      orientation: FamilyTree.orientation.top,
      template: 'hugo',
      scaleMin: 0.3,
      scaleMax: 2,
      mouseScrool: FamilyTree.action.zoom,
    });

    return () => {
      el.innerHTML = '';
      void tree;
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </DemoPage>
  );
}
