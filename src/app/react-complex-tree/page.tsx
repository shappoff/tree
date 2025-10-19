'use client';

import { useState, useCallback } from 'react';
import Link from 'next/link';
import {
  ControlledTreeEnvironment,
  Tree,
  TreeItem,
  TreeItemIndex,
} from 'react-complex-tree';
import 'react-complex-tree/lib/style.css';
import './family-tree.css';

interface FamilyMemberData {
  name: string;
  birthYear?: string;
  gender: 'male' | 'female' | 'unknown';
  relationship?: string;
  marriedName?: string;
}

// Family tree data structured for react-complex-tree
const familyTreeItems: Record<TreeItemIndex, TreeItem<FamilyMemberData>> = {
  root: {
    index: 'root',
    canMove: false,
    canRename: false,
    data: {
      name: 'Генеалогическое Дерево',
      gender: 'unknown',
    },
    children: ['john'],
  },
  john: {
    index: 'john',
    data: {
      name: 'Иван Смирнов',
      birthYear: '1920',
      gender: 'male',
      relationship: 'Патриарх',
    },
    children: ['robert', 'mary'],
  },
  robert: {
    index: 'robert',
    data: {
      name: 'Роберт Смирнов',
      birthYear: '1945',
      gender: 'male',
      relationship: 'Сын',
    },
    children: ['michael', 'lisa'],
  },
  michael: {
    index: 'michael',
    data: {
      name: 'Михаил Смирнов',
      birthYear: '1970',
      gender: 'male',
      relationship: 'Внук',
    },
    children: ['james', 'sarah-child'],
  },
  james: {
    index: 'james',
    data: {
      name: 'Яков Смирнов',
      birthYear: '1995',
      gender: 'male',
      relationship: 'Правнук',
    },
  },
  'sarah-child': {
    index: 'sarah-child',
    data: {
      name: 'Сара Смирнова',
      birthYear: '1997',
      gender: 'female',
      relationship: 'Правнучка',
    },
  },
  lisa: {
    index: 'lisa',
    data: {
      name: 'Лиза Джонсон',
      birthYear: '1972',
      gender: 'female',
      relationship: 'Внучка',
      marriedName: 'Johnson',
    },
    children: ['emma'],
  },
  emma: {
    index: 'emma',
    data: {
      name: 'Эмма Джонсон',
      birthYear: '2000',
      gender: 'female',
      relationship: 'Правнучка',
    },
  },
  mary: {
    index: 'mary',
    data: {
      name: 'Мария Смирнова',
      birthYear: '1947',
      gender: 'female',
      relationship: 'Дочь',
    },
    children: ['david', 'jennifer'],
  },
  david: {
    index: 'david',
    data: {
      name: 'Давид Уилсон',
      birthYear: '1975',
      gender: 'male',
      relationship: 'Внук',
      marriedName: 'Wilson',
    },
  },
  jennifer: {
    index: 'jennifer',
    data: {
      name: 'Дженнифер Браун',
      birthYear: '1978',
      gender: 'female',
      relationship: 'Внучка',
      marriedName: 'Brown',
    },
    children: ['alex', 'sophia'],
  },
  alex: {
    index: 'alex',
    data: {
      name: 'Алекс Браун',
      birthYear: '2005',
      gender: 'male',
      relationship: 'Правнук',
    },
  },
  sophia: {
    index: 'sophia',
    data: {
      name: 'София Браун',
      birthYear: '2008',
      gender: 'female',
      relationship: 'Правнучка',
    },
  },
};

const ReactComplexTreePage = () => {
  const [items, setItems] = useState(familyTreeItems);
  const [focusedItem, setFocusedItem] = useState<TreeItemIndex>();
  const [expandedItems, setExpandedItems] = useState<TreeItemIndex[]>(['root', 'john', 'robert', 'mary']);
  const [selectedItems, setSelectedItems] = useState<TreeItemIndex[]>([]);

  const getItemTitle = useCallback((item: TreeItem<FamilyMemberData>) => {
    return item.data.name;
  }, []);

  const handleItemSelect = useCallback((items: TreeItemIndex[], treeId: string) => {
    setSelectedItems(items);
  }, []);

  const handleExpandItem = useCallback((item: TreeItem<FamilyMemberData>, treeId: string) => {
    setExpandedItems(prev => [...prev, item.index]);
  }, []);

  const handleCollapseItem = useCallback((item: TreeItem<FamilyMemberData>, treeId: string) => {
    setExpandedItems(prev => prev.filter(id => id !== item.index));
  }, []);

  const handleFocusItem = useCallback((item: TreeItem<FamilyMemberData>, treeId: string) => {
    setFocusedItem(item.index);
  }, []);

  const handleRenameItem = useCallback((item: TreeItem<FamilyMemberData>, name: string, treeId: string) => {
    setItems(prev => ({
      ...prev,
      [item.index]: {
        ...prev[item.index],
        data: {
          ...prev[item.index].data,
          name,
        },
      },
    }));
  }, []);

  const renderItemTitle = useCallback(({ title, item }: { title: string; item: TreeItem<FamilyMemberData> }) => {
    const { gender, birthYear, relationship } = item.data;
    const displayName = title;
    const subtitle = [birthYear && `Родился: ${birthYear}`, relationship].filter(Boolean).join(' • ');
    
    return (
      <div className="family-tree-item">
        <div className="family-tree-item-header">
          <div className={`family-tree-icon ${gender}`}></div>
          <span className="family-tree-name">{displayName}</span>
        </div>
        {subtitle && <div className="family-tree-subtitle">{subtitle}</div>}
      </div>
    );
  }, []);

  return (
    <div className="family-tree-page">
      <div className="controls">
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', width: '100%' }}>
          <h1 style={{ margin: 0 }}>Генеалогическое Дерево - Пример React Complex Tree</h1>
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
      </div>

      <div className="tree-container">
        <div style={{ width: '100%', height: '80vh', border: '1px solid #e0e0e0' }}>
          <ControlledTreeEnvironment<FamilyMemberData>
            items={items}
            viewState={{
              'family-tree': {
                focusedItem,
                expandedItems,
                selectedItems,
              },
            }}
            onFocusItem={handleFocusItem}
            onSelectItems={handleItemSelect}
            onExpandItem={handleExpandItem}
            onCollapseItem={handleCollapseItem}
            onRenameItem={handleRenameItem}
            getItemTitle={getItemTitle}
            canSearch={true}
            canRename={true}
            canDragAndDrop={false}
            renderItemTitle={renderItemTitle}
          >
            <Tree
              treeId="family-tree"
              rootItem="root"
              treeLabel="Генеалогическое Дерево"
            />
          </ControlledTreeEnvironment>
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

      <div className="info-section">
        <h3>О React Complex Tree</h3>
        <p>
          Этот пример использует пакет <strong>react-complex-tree</strong>, который предоставляет богатый функциями
          компонент дерева с расширенными возможностями включая поиск, переименование, выделение и навигацию с клавиатуры.
        </p>
        <ul>
          <li>Полная поддержка навигации с клавиатуры</li>
          <li>Функциональность поиска</li>
          <li>Переименование на месте</li>
          <li>Поддержка множественного выделения</li>
          <li>Настраиваемый рендеринг элементов</li>
          <li>Функции доступности</li>
        </ul>
      </div>
    </div>
  );
};

export default ReactComplexTreePage;
