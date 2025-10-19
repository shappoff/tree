'use client';

import { useState } from 'react';
import Link from 'next/link';
import ReactFamilyTree from 'react-family-tree';
import { Node, ExtNode, Gender, RelType } from 'relatives-tree/lib/types';

import './family-tree.css';

// Sample family tree data following react-family-tree format
const familyTreeData: Node[] = [
  {
    id: 'john',
    gender: 'male' as Gender,
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'mary',
        type: 'married' as RelType
      }
    ],
    children: [
      {
        id: 'robert',
        type: 'blood' as RelType
      },
      {
        id: 'sarah',
        type: 'blood' as RelType
      }
    ]
  },
  {
    id: 'mary',
    gender: 'female' as Gender,
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'john',
        type: 'married' as RelType
      }
    ],
    children: [
      {
        id: 'robert',
        type: 'blood' as RelType
      },
      {
        id: 'sarah',
        type: 'blood' as RelType
      }
    ]
  },
  {
    id: 'robert',
    gender: 'male' as Gender,
    parents: [
      {
        id: 'john',
        type: 'blood' as RelType
      },
      {
        id: 'mary',
        type: 'blood' as RelType
      }
    ],
    siblings: [
      {
        id: 'sarah',
        type: 'blood' as RelType
      }
    ],
    spouses: [
      {
        id: 'jennifer',
        type: 'married' as RelType
      }
    ],
    children: [
      {
        id: 'michael',
        type: 'blood' as RelType
      },
      {
        id: 'emily',
        type: 'blood' as RelType
      }
    ]
  },
  {
    id: 'jennifer',
    gender: 'female' as Gender,
    parents: [],
    siblings: [],
    spouses: [
      {
        id: 'robert',
        type: 'married' as RelType
      }
    ],
    children: [
      {
        id: 'michael',
        type: 'blood' as RelType
      },
      {
        id: 'emily',
        type: 'blood' as RelType
      }
    ]
  },
  {
    id: 'sarah',
    gender: 'female' as Gender,
    parents: [
      {
        id: 'john',
        type: 'blood' as RelType
      },
      {
        id: 'mary',
        type: 'blood' as RelType
      }
    ],
    siblings: [
      {
        id: 'robert',
        type: 'blood' as RelType
      }
    ],
    spouses: [],
    children: []
  },
  {
    id: 'michael',
    gender: 'male' as Gender,
    parents: [
      {
        id: 'robert',
        type: 'blood' as RelType
      },
      {
        id: 'jennifer',
        type: 'blood' as RelType
      }
    ],
    siblings: [
      {
        id: 'emily',
        type: 'blood' as RelType
      }
    ],
    spouses: [],
    children: []
  },
  {
    id: 'emily',
    gender: 'female' as Gender,
    parents: [
      {
        id: 'robert',
        type: 'blood' as RelType
      },
      {
        id: 'jennifer',
        type: 'blood' as RelType
      }
    ],
    siblings: [
      {
        id: 'michael',
        type: 'blood' as RelType
      }
    ],
    spouses: [],
    children: []
  }
];

// Helper function to get display name for a node
const getDisplayName = (nodeId: string): string => {
  const names: Record<string, string> = {
    'john': 'Иван Смирнов',
    'mary': 'Мария Смирнова',
    'robert': 'Роберт Смирнов',
    'jennifer': 'Дженнифер Смирнова',
    'sarah': 'Сара Смирнова',
    'michael': 'Михаил Смирнов',
    'emily': 'Эмили Смирнова'
  };
  return names[nodeId] || nodeId;
};

// FamilyNode component to render individual nodes
const FamilyNode = ({ node, style }: { node: ExtNode; style: React.CSSProperties }) => {
  const isMale = node.gender === 'male';
  const isPlaceholder = node.placeholder;

  return (
    <div
      style={style}
      className={`family-node ${isMale ? 'male' : 'female'} ${isPlaceholder ? 'placeholder' : ''}`}
    >
      <div className="node-content">
        <div className="node-avatar">
          <div className={`avatar-circle ${isMale ? 'male' : 'female'}`}>
            {isPlaceholder ? '?' : (isMale ? '♂' : '♀')}
          </div>
        </div>
        <div className="node-info">
          <div className="node-name">{getDisplayName(node.id)}</div>
          <div className="node-gender">{isPlaceholder ? '' : (isMale ? 'Мужчина' : 'Женщина')}</div>
        </div>
      </div>
    </div>
  );
};

const REACT_FAMILY_TREE_WIDTH = 200;
const REACT_FAMILY_TREE_HEIGHT = 100;

const ReactFamilyTreePage = () => {
  const [rootId, setRootId] = useState('john');

  return (
    <div className="family-tree-page">
      <div className="controls">
        <div className="header-section">
          <h1>Пример React Family Tree</h1>
          <Link 
            href="/" 
            className="back-link"
          >
            ← Назад на Главную
          </Link>
        </div>
        
        <div className="control-group">
          <label htmlFor="root-select">Корневой Человек:</label>
          <select
            id="root-select"
            value={rootId}
            onChange={(e) => setRootId(e.target.value)}
          >
            <option value="john">Иван Смирнов</option>
            <option value="mary">Мария Смирнова</option>
            <option value="robert">Роберт Смирнов</option>
            <option value="jennifer">Дженнифер Смирнова</option>
            <option value="sarah">Сара Смирнова</option>
            <option value="michael">Михаил Смирнов</option>
            <option value="emily">Эмили Смирнова</option>
          </select>
        </div>
      </div>

      <div className="tree-container">
        <div className="tree-wrapper">
          <ReactFamilyTree
            nodes={familyTreeData}
            rootId={rootId}
            width={REACT_FAMILY_TREE_WIDTH}
            height={REACT_FAMILY_TREE_HEIGHT}
            placeholders={true}
            className="family-tree"
            renderNode={(node) => (
              <FamilyNode
                key={node.id}
                node={node}
                style={{
                  position: 'absolute',
                  width: REACT_FAMILY_TREE_WIDTH,
                  height: REACT_FAMILY_TREE_HEIGHT,
                  transform: `translate(${node.left * (REACT_FAMILY_TREE_WIDTH / 2)}px, ${node.top * (REACT_FAMILY_TREE_HEIGHT / 2)}px)`,
                }}
              />
            )}
          />
        </div>
      </div>

      <div className="legend">
        <h3>Легенда</h3>
        <div className="legend-item">
          <div className="legend-circle male"></div>
          <span>Мужчина</span>
        </div>
        <div className="legend-item">
          <div className="legend-circle female"></div>
          <span>Женщина</span>
        </div>
        <div className="legend-item">
          <div className="legend-circle placeholder"></div>
          <span>Заполнитель</span>
        </div>
      </div>

      <div className="info-section">
        <h3>О данной реализации</h3>
        <p>
          Этот пример использует пакет <strong>react-family-tree</strong>, который предоставляет другой подход 
          к отображению генеалогических деревьев по сравнению с react-d3-tree. Он обрабатывает сложные семейные отношения 
          включая супругов, множественные браки и обеспечивает лучшую поддержку неиерархических семейных структур.
        </p>
        <ul>
          <li>Поддерживает сложные семейные отношения (супруги, братья, сестры и т.д.)</li>
          <li>Автоматическая компоновка и позиционирование</li>
          <li>Интерактивный выбор корневого элемента</li>
          <li>Узлы-заполнители для отсутствующих членов семьи</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactFamilyTreePage;
