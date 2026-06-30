'use client';

import { useEffect, useRef } from 'react';
import cytoscape from 'cytoscape';
import dagre from 'cytoscape-dagre';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { graphNodes, graphEdges } from '@/data/sampleData';

const demo = getDemoById('cytoscape')!;

cytoscape.use(dagre);

export default function CytoscapePage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    const elements = [
      ...graphNodes.map((n) => ({
        data: {
          id: n.id,
          label: n.label.replace('\n', '\n'),
          group: n.group,
        },
      })),
      ...graphEdges.map((e, i) => ({
        data: {
          id: `e${i}`,
          source: e.from,
          target: e.to,
          edgeType: e.type,
        },
      })),
    ];

    const cy = cytoscape({
      container: el,
      elements,
      style: [
        {
          selector: 'node',
          style: {
            label: 'data(label)',
            'text-valign': 'center',
            'text-halign': 'center',
            'font-size': '11px',
            'text-wrap': 'wrap',
            'text-max-width': '120px',
            width: 130,
            height: 50,
            shape: 'round-rectangle',
            'background-color': '#d8f3dc',
            'border-width': 2,
            'border-color': '#2d6a4f',
          },
        },
        {
          selector: 'node[group = "female"]',
          style: {
            'background-color': '#ffe8e0',
            'border-color': '#e76f51',
          },
        },
        {
          selector: 'edge[edgeType = "parent"]',
          style: {
            width: 2,
            'line-color': '#40916c',
            'target-arrow-color': '#40916c',
            'target-arrow-shape': 'triangle',
            'curve-style': 'bezier',
          },
        },
        {
          selector: 'edge[edgeType = "spouse"]',
          style: {
            width: 1.5,
            'line-color': '#9b59b6',
            'line-style': 'dashed',
            'curve-style': 'straight',
          },
        },
      ],
      layout: {
        name: 'dagre',
        rankDir: 'TB',
        nodeSep: 40,
        rankSep: 80,
        spacingFactor: 1.2,
      } as cytoscape.LayoutOptions,
      minZoom: 0.3,
      maxZoom: 2,
    });

    cy.fit(undefined, 40);

    return () => {
      cy.destroy();
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} style={{ width: '100%', height: '100%' }} />
    </DemoPage>
  );
}
