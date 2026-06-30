'use client';

import { useEffect, useRef } from 'react';
import _ from 'lodash';
import * as d3v4 from 'd3-dtree/node_modules/d3';
import dTree from 'd3-dtree';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { dTreeData } from '@/data/sampleData';

const demo = getDemoById('dtree')!;

export default function DTreePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    (window as unknown as { d3: typeof d3v4; _: typeof _ }).d3 = d3v4;
    (window as unknown as { d3: typeof d3v4; _: typeof _ })._ = _;

    el.innerHTML = '<div id="dtree-graph" class="dtree-container"></div>';
    const graphEl = el.querySelector('#dtree-graph') as HTMLElement;

    dTree.init(dTreeData, {
      target: graphEl,
      width: graphEl.clientWidth || 900,
      height: 520,
      hideMarriageNodes: true,
      callbacks: {
        nodeClick: (name: string) => console.log('Clicked:', name),
      },
    });

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} className="dtree-container" style={{ width: '100%', height: '100%', overflow: 'auto' }} />
    </DemoPage>
  );
}
