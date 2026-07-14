'use client';

import { useEffect, useRef } from 'react';
import { Network } from 'vis-network';
import { DataSet } from 'vis-data';
import 'vis-network/styles/vis-network.min.css';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { graphNodes, graphEdges } from '@/data/sampleData';

const demo = getDemoById('vis-network')!;

export default function VisNetworkPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const nodes = new DataSet(
      graphNodes.map((n) => ({
        id: n.id,
        label: n.label.replace('\n', '\n'),
        color: {
          background: n.group === 'male' ? '#d8f3dc' : '#ffe8e0',
          border: n.group === 'male' ? '#2d6a4f' : '#e76f51',
          highlight: { background: '#b7e4c7', border: '#1b4332' },
        },
        font: { size: 13, face: 'Segoe UI' },
        shape: 'box' as const,
        margin: { top: 10, right: 10, bottom: 10, left: 10 },
      })),
    );

    const edges = new DataSet(
      graphEdges.map((e, i) => ({
        id: i,
        from: e.from,
        to: e.to,
        dashes: e.dashes ?? false,
        color: { color: e.type === 'spouse' ? '#9b59b6' : '#40916c' },
        width: e.type === 'spouse' ? 1.5 : 2,
        arrows: e.type === 'parent' ? { to: { enabled: true, scaleFactor: 0.5 } } : undefined,
        smooth: { enabled: true, type: 'cubicBezier', forceDirection: 'vertical', roundness: 0.5 },
      })),
    );

    const network = new Network(
      el,
      { nodes: nodes as never, edges: edges as never },
      {
        layout: {
          hierarchical: {
            enabled: true,
            direction: 'UD',
            sortMethod: 'directed',
            levelSeparation: 120,
            nodeSpacing: 160,
          },
        },
        physics: { enabled: false },
        interaction: { hover: true, zoomView: true, dragView: true },
      },
    );

    return () => {
      network.destroy();
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </DemoPage>
  );
}
