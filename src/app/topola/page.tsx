'use client';

import { useEffect, useRef } from 'react';
import { createChart, DescendantChart, SimpleRenderer } from 'topola';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { topolaGedcomData } from '@/data/sampleData';

const demo = getDemoById('topola')!;

export default function TopolaPage() {
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = containerRef.current;
    if (!el) return;

    el.innerHTML = '<svg id="topola-svg" width="100%" height="520"></svg>';
    const styleId = 'topola-styles';
    if (!document.getElementById(styleId)) {
      const style = document.createElement('style');
      style.id = styleId;
      style.textContent = new SimpleRenderer({} as never).getCss();
      document.head.appendChild(style);
    }

    const chart = createChart({
      json: topolaGedcomData,
      chartType: DescendantChart,
      renderer: SimpleRenderer,
      svgSelector: '#topola-svg',
      horizontal: true,
      animate: true,
    });

    chart.render({ startIndi: 'I3' });

    return () => {
      el.innerHTML = '';
    };
  }, []);

  return (
    <DemoPage demo={demo}>
      <div ref={containerRef} style={{ width: '100%', height: '100%', overflow: 'auto' }} />
    </DemoPage>
  );
}
