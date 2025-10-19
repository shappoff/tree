'use client';

import { useState } from 'react';
import Link from 'next/link';
import Tree, { RawNodeDatum } from 'react-d3-tree';
import './family-tree.css';

interface FamilyMember extends RawNodeDatum {
  name: string;
  attributes?: {
    birthYear?: string;
    gender?: 'male' | 'female';
    relationship?: string;
    marriedName?: string;
  };
  children?: FamilyMember[];
}

const familyTreeData: FamilyMember = {
  name: 'Иван Смирнов',
  attributes: {
    birthYear: '1920',
    gender: 'male',
    relationship: 'Патриарх'
  },
  children: [
    {
      name: 'Роберт Смирнов',
      attributes: {
        birthYear: '1945',
        gender: 'male',
        relationship: 'Сын'
      },
      children: [
        {
          name: 'Михаил Смирнов',
          attributes: {
            birthYear: '1970',
            gender: 'male',
            relationship: 'Внук'
          },
          children: [
            {
              name: 'Яков Смирнов',
              attributes: {
                birthYear: '1995',
                gender: 'male',
                relationship: 'Правнук'
              }
            },
            {
              name: 'Сара Смирнова',
              attributes: {
                birthYear: '1997',
                gender: 'female',
                relationship: 'Правнучка'
              }
            }
          ]
        },
        {
          name: 'Лиза Джонсон',
          attributes: {
            birthYear: '1972',
            gender: 'female',
            relationship: 'Внучка',
            marriedName: 'Johnson'
          },
          children: [
            {
              name: 'Эмма Джонсон',
              attributes: {
                birthYear: '2000',
                gender: 'female',
                relationship: 'Правнучка'
              }
            }
          ]
        }
      ]
    },
    {
      name: 'Мария Смирнова',
      attributes: {
        birthYear: '1947',
        gender: 'female',
        relationship: 'Дочь'
      },
      children: [
        {
          name: 'Давид Уилсон',
          attributes: {
            birthYear: '1975',
            gender: 'male',
            relationship: 'Внук',
            marriedName: 'Wilson'
          }
        },
        {
          name: 'Дженнифер Браун',
          attributes: {
            birthYear: '1978',
            gender: 'female',
            relationship: 'Внучка',
            marriedName: 'Brown'
          },
          children: [
            {
              name: 'Алекс Браун',
              attributes: {
                birthYear: '2005',
                gender: 'male',
                relationship: 'Правнук'
              }
            },
            {
              name: 'София Браун',
              attributes: {
                birthYear: '2008',
                gender: 'female',
                relationship: 'Правнучка'
              }
            }
          ]
        }
      ]
    }
  ]
};

const FamilyTreePage = () => {
  const [orientation, setOrientation] = useState<'horizontal' | 'vertical'>('horizontal');
  const [pathFunc, setPathFunc] = useState<'diagonal' | 'elbow' | 'straight' | 'step'>('diagonal');
  const [zoom, setZoom] = useState(1);
  const [translate, setTranslate] = useState({ x: 0, y: 0 });

  const handleNodeClick = (nodeData: any, event: React.SyntheticEvent) => {
    console.log('Node clicked:', nodeData.data.name, nodeData.data.attributes);
  };

  const handleNodeMouseOver = (nodeData: any, event: React.SyntheticEvent) => {
    console.log('Node hovered:', nodeData.data.name);
  };

  const renderCustomNodeElement = ({ nodeDatum, toggleNode }: any) => {
    const isMale = nodeDatum.attributes?.gender === 'male';
    const isFemale = nodeDatum.attributes?.gender === 'female';
    
    return (
      <g>
        {/* Node circle with conditional styling */}
        <circle
          r={15}
          fill={isMale ? '#4A90E2' : isFemale ? '#E24A90' : '#808080'}
          stroke="#333"
          strokeWidth={2}
          onClick={toggleNode}
          style={{ cursor: 'pointer' }}
        />
        
        {/* Node label */}
        <text
          fill="#333"
          stroke="#333"
          strokeWidth="0.5px"
          x={20}
          y={5}
          fontSize="12"
          fontFamily="Arial, sans-serif"
        >
          {nodeDatum.name}
        </text>
        
        {/* Attributes */}
        {nodeDatum.attributes && (
          <text
            fill="#666"
            x={20}
            y={20}
            fontSize="10"
            fontFamily="Arial, sans-serif"
          >
            {nodeDatum.attributes.birthYear && `Родился: ${nodeDatum.attributes.birthYear}`}
          </text>
        )}
      </g>
    );
  };

  return (
    <div className="family-tree-page">
      <div className="controls">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 style={{ margin: 0 }}>Генеалогическое Дерево - Пример React D3 Tree</h1>
          <Link 
            href="/" 
            style={{ 
              color: '#0070f3', 
              textDecoration: 'none',
              fontWeight: '600',
              padding: '8px 16px',
              border: '1px solid #0070f3',
              borderRadius: '4px',
              background: 'white'
            }}
          >
            ← Назад на Главную
          </Link>
        </div>
        
        <div className="control-group">
          <label htmlFor="orientation">Ориентация:</label>
          <select
            id="orientation"
            value={orientation}
            onChange={(e) => setOrientation(e.target.value as 'horizontal' | 'vertical')}
          >
            <option value="horizontal">Горизонтальная</option>
            <option value="vertical">Вертикальная</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="pathFunc">Стиль Пути:</label>
          <select
            id="pathFunc"
            value={pathFunc}
            onChange={(e) => setPathFunc(e.target.value as any)}
          >
            <option value="diagonal">Диагональный</option>
            <option value="elbow">Угловой</option>
            <option value="straight">Прямой</option>
            <option value="step">Ступенчатый</option>
          </select>
        </div>

        <div className="control-group">
          <label htmlFor="zoom">Уровень Масштаба:</label>
          <input
            id="zoom"
            type="range"
            min="0.1"
            max="2"
            step="0.1"
            value={zoom}
            onChange={(e) => setZoom(parseFloat(e.target.value))}
          />
          <span>{zoom.toFixed(1)}x</span>
        </div>
      </div>

      <div className="tree-container">
        <div id="treeWrapper" style={{ width: '100%', height: '80vh' }}>
          <Tree
            data={familyTreeData}
            orientation={orientation}
            pathFunc={pathFunc}
            zoom={zoom}
            translate={translate}
            nodeSize={{ x: 200, y: 200 }}
            separation={{ siblings: 1, nonSiblings: 2 }}
            renderCustomNodeElement={renderCustomNodeElement}
            onNodeClick={handleNodeClick}
            onNodeMouseOver={handleNodeMouseOver}
            collapsible={true}
            zoomable={true}
            draggable={true}
            scaleExtent={{ min: 0.1, max: 2 }}
            rootNodeClassName="node__root"
            branchNodeClassName="node__branch"
            leafNodeClassName="node__leaf"
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
          <div className="legend-circle unknown"></div>
          <span>Неизвестно</span>
        </div>
      </div>
    </div>
  );
};

export default FamilyTreePage;
