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
          name: 'John Smith',
          born: '1940-05-15',
          img: 'https://cdn.balkan.app/shared/m30/1.jpg'
        },
        {
          id: 2,
          pids: [1],
          name: 'Mary Smith',
          born: '1942-08-20',
          img: 'https://cdn.balkan.app/shared/w30/1.jpg'
        },
        {
          id: 3,
          mid: 2,
          fid: 1,
          pids: [4],
          name: 'Robert Smith',
          born: '1965-03-10',
          img: 'https://cdn.balkan.app/shared/m10/1.jpg'
        },
        {
          id: 4,
          pids: [3],
          name: 'Jennifer Smith',
          born: '1967-11-25',
          img: 'https://cdn.balkan.app/shared/w10/1.jpg'
        },
        {
          id: 5,
          mid: 2,
          fid: 1,
          name: 'Sarah Johnson',
          born: '1968-07-14',
          img: 'https://cdn.balkan.app/shared/w10/2.jpg'
        },
        {
          id: 6,
          mid: 4,
          fid: 3,
          name: 'Emily Smith',
          born: '1990-01-05',
          img: 'https://cdn.balkan.app/shared/w10/3.jpg'
        },
        {
          id: 7,
          mid: 4,
          fid: 3,
          name: 'Michael Smith',
          born: '1992-06-18',
          img: 'https://cdn.balkan.app/shared/m10/2.jpg'
        },
        {
          id: 8,
          mid: 4,
          fid: 3,
          name: 'David Smith',
          born: '1995-12-22',
          img: 'https://cdn.balkan.app/shared/m10/3.jpg'
        },
      ],
      enableSearch: true,
      mouseScrool: FamilyTree.action.zoom,
      mode: 'light',
      template: 'john',
    });

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

