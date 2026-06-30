'use client';

import { useMemo, useCallback } from 'react';
import {
  ReactFlow,
  Background,
  Controls,
  MiniMap,
  type Node,
  type Edge,
  Position,
  MarkerType,
} from '@xyflow/react';
import '@xyflow/react/dist/style.css';
import dagre from '@dagrejs/dagre';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { graphNodes, graphEdges } from '@/data/sampleData';

const demo = getDemoById('react-flow')!;

const nodeWidth = 140;
const nodeHeight = 56;

function layoutNodes(nodes: Node[], edges: Edge[]): Node[] {
  const g = new dagre.graphlib.Graph();
  g.setDefaultEdgeLabel(() => ({}));
  g.setGraph({ rankdir: 'TB', nodesep: 40, ranksep: 70 });

  nodes.forEach((node) => {
    g.setNode(node.id, { width: nodeWidth, height: nodeHeight });
  });
  edges
    .filter((e) => !e.id.startsWith('spouse'))
    .forEach((edge) => {
      g.setEdge(edge.source, edge.target);
    });

  dagre.layout(g);

  return nodes.map((node) => {
    const pos = g.node(node.id);
    return {
      ...node,
      position: { x: pos.x - nodeWidth / 2, y: pos.y - nodeHeight / 2 },
      sourcePosition: Position.Bottom,
      targetPosition: Position.Top,
    };
  });
}

function PersonNode({ data }: { data: { label: string; group: string } }) {
  const isMale = data.group === 'male';
  return (
    <div
      style={{
        width: nodeWidth,
        padding: '8px 10px',
        borderRadius: 8,
        border: `2px solid ${isMale ? '#40916c' : '#e76f51'}`,
        background: isMale ? '#d8f3dc' : '#ffe8e0',
        fontSize: 12,
        textAlign: 'center',
        whiteSpace: 'pre-line',
        lineHeight: 1.3,
      }}
    >
      {data.label}
    </div>
  );
}

const nodeTypes = { person: PersonNode };

export default function ReactFlowPage() {
  const initialNodes: Node[] = useMemo(
    () =>
      graphNodes.map((n) => ({
        id: n.id,
        type: 'person',
        position: { x: 0, y: 0 },
        data: { label: n.label, group: n.group },
      })),
    [],
  );

  const initialEdges: Edge[] = useMemo(
    () =>
      graphEdges.map((e, i) => ({
        id: `${e.type}-${i}`,
        source: e.from,
        target: e.to,
        type: e.type === 'spouse' ? 'straight' : 'smoothstep',
        style: {
          stroke: e.type === 'spouse' ? '#9b59b6' : '#40916c',
          strokeWidth: e.type === 'spouse' ? 1.5 : 2,
          strokeDasharray: e.dashes ? '6 4' : undefined,
        },
        markerEnd:
          e.type === 'parent'
            ? { type: MarkerType.ArrowClosed, color: '#40916c', width: 16, height: 16 }
            : undefined,
        animated: e.type === 'spouse',
      })),
    [],
  );

  const nodes = useMemo(() => layoutNodes(initialNodes, initialEdges), [initialNodes, initialEdges]);

  const onInit = useCallback((instance: { fitView: (options?: { padding?: number }) => void }) => {
    setTimeout(() => instance.fitView({ padding: 0.2 }), 50);
  }, []);

  return (
    <DemoPage demo={demo}>
      <div style={{ width: '100%', height: '100%' }}>
        <ReactFlow
          nodes={nodes}
          edges={initialEdges}
          nodeTypes={nodeTypes}
          onInit={onInit}
          fitView
          minZoom={0.3}
          maxZoom={2}
          nodesDraggable
          nodesConnectable={false}
        >
          <Background gap={16} color="#e2ddd6" />
          <Controls />
          <MiniMap nodeColor={(n) => (n.data?.group === 'male' ? '#40916c' : '#e76f51')} />
        </ReactFlow>
      </div>
    </DemoPage>
  );
}
