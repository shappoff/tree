'use client';

import Tree from 'react-d3-tree';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { reactD3TreeData } from '@/data/sampleData';

const demo = getDemoById('react-d3-tree')!;

export default function ReactD3TreePage() {
  return (
    <DemoPage demo={demo}>
      <div style={{ width: '100%', height: '100%' }}>
        <Tree
          data={reactD3TreeData}
          orientation="vertical"
          translate={{ x: 400, y: 80 }}
          pathFunc="step"
          separation={{ siblings: 1.2, nonSiblings: 1.5 }}
          nodeSize={{ x: 180, y: 100 }}
          renderCustomNodeElement={({ nodeDatum }) => (
            <g>
              <rect
                x={-80}
                y={-20}
                width={160}
                height={40}
                rx={6}
                fill="#d8f3dc"
                stroke="#2d6a4f"
              />
              <text fill="#1a1a1a" strokeWidth={0} x={0} y={5} textAnchor="middle" fontSize={12}>
                {nodeDatum.name}
              </text>
              {nodeDatum.attributes?.spouse && (
                <text fill="#5c5c5c" x={0} y={18} textAnchor="middle" fontSize={10}>
                  ♥ {nodeDatum.attributes.spouse}
                </text>
              )}
            </g>
          )}
        />
      </div>
    </DemoPage>
  );
}
