'use client';

import { useEffect, useRef } from 'react';
import FamilyTree from '@balkangraph/familytree.js';

interface FamilyTreeComponentProps {
  width?: string;
  height?: string;
}

const FamilyTreeComponent = ({ width = '100%', height = '100vh' }: FamilyTreeComponentProps) => {
  const treeContainerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (!treeContainerRef.current) return;

    const familyTree = new FamilyTree(treeContainerRef.current, {

      nodeBinding: {
        field_0: 'name',
        field_1: 'born',
        img_0: 'img',
      },
      nodes: [
        {
          id: 1,
          pids: [2],
          name: 'Иван Смирнов',
          born: '1940-05-15',
          img: 'https://cdn.balkan.app/shared/m30/1.jpg'
        },
        {
          id: 2,
          pids: [1],
          name: 'Мария Смирнова',
          born: '1942-08-20',
          img: 'https://cdn.balkan.app/shared/w30/1.jpg'
        },
        {
          id: 3,
          mid: 2,
          fid: 1,
          pids: [4],
          name: 'Роберт Смирнов',
          born: '1965-03-10',
          img: 'https://cdn.balkan.app/shared/m10/1.jpg'
        },
        {
          id: 4,
          pids: [3],
          name: 'Дженнифер Смирнова',
          born: '1967-11-25',
          img: 'https://cdn.balkan.app/shared/w10/1.jpg'
        },
        {
          id: 5,
          mid: 2,
          fid: 1,
          name: 'Сара Джонсон',
          born: '1968-07-14',
          img: 'https://cdn.balkan.app/shared/w10/2.jpg'
        },
        {
          id: 6,
          mid: 4,
          fid: 3,
          name: 'Эмили Смирнова',
          born: '1990-01-05',
          img: 'https://cdn.balkan.app/shared/w10/3.jpg'
        },
        {
          id: 7,
          mid: 4,
          fid: 3,
          name: 'Михаил Смирнов',
          born: '1992-06-18',
          img: 'https://cdn.balkan.app/shared/m10/2.jpg'
        },
        {
          id: 8,
          mid: 4,
          fid: 3,
          name: 'Давид Смирнов',
          born: '1995-12-22',
          img: 'https://cdn.balkan.app/shared/m10/3.jpg'
        },
      ],
      enableSearch: false,
      mouseScrool: FamilyTree.action.zoom,
      mode: 'light',
      // template: 'john',
    });

/*
    familyTree.load([
      { id: 2, pids: [3], gender: 'female', relation: "grandmother" },
      { id: 3, pids: [2], gender: 'male', relation: "grandfather" },
      { id: 4, pids: [5], gender: 'male', fid: 3, mid: 2, relation: "father" },
      { id: 5, pids: [4], gender: 'female', fid: 21, mid: 22, relation: "mother" },
      { id: 6, pids: [10, 11, 12, 13], gender: 'male', fid: 4, mid: 5, relation: "son" },
      { id: 7, gender: 'female', fid: 4, mid: 5, relation: "daughter" },
      { id: 8, gender: 'male', fid: 4, mid: 5, relation: "son" },
      { id: 9, gender: 'male', fid: 4, mid: 5, relation: "son"},
      { id: 10, pids: [6], gender: 'female', relation: "wife" },
      { id: 11, pids: [6], gender: 'female', relation: "wife" },
      { id: 12, pids: [6], gender: 'female', relation: "wife" },
      { id: 13, pids: [6], gender: 'female', relation: "wife" },
      { id: 14, gender: 'female', fid: 6, mid: 13, relation: "child" },
      { id: 15, gender: 'male', fid: 6, mid: 13, relation: "child" },
      { id: 16, gender: 'female', fid: 6, mid: 13, relation: "child" },
      { id: 17, gender: 'male', fid: 6, mid: 13, relation: "child" },
      { id: 18, gender: 'female', fid: 6, mid: 12, relation: "child" },
      { id: 19, pids: [20], gender: 'male', relation: "grand grandfather" },
      { id: 20, pids: [19], gender: 'female', relation: "grand grandmother" },
      { id: 21, pids: [22], gender: 'male', fid: 19, mid: 20, relation: "grandfather" },
      { id: 22, pids: [21], gender: 'female', relation: "grandmother" }
    ]);
*/
    // Cleanup function
    return () => {
      // The library doesn't have a built-in destroy method,
      // but we clear the container on unmount
      if (treeContainerRef.current) {
        treeContainerRef.current.innerHTML = '';
      }
    };
  }, []);

  return (
    <div
      ref={treeContainerRef}
      style={{
        width,
        height,
        overflow: 'hidden',
      }}
    />
  );
};

export default FamilyTreeComponent;

