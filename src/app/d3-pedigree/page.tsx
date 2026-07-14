'use client';

import { useEffect, useRef } from 'react';
import * as d3 from 'd3';
import DemoPage from '@/components/DemoPage';
import { getDemoById } from '@/data/demos';
import { pedigreeMembers } from '@/data/sampleData';

const demo = getDemoById('d3-pedigree')!;

const SYMBOL_SIZE = 28;
const GEN_GAP = 100;
const SIB_GAP = 80;

interface LayoutNode {
  id: string;
  name: string;
  sex: 'M' | 'F';
  x: number;
  y: number;
  generation: number;
}

function buildLayout(): LayoutNode[] {
  const byId = Object.fromEntries(pedigreeMembers.map((m) => [m.id, m]));
  const generations: Record<string, number> = {};

  function assignGen(id: string, gen: number) {
    if (generations[id] !== undefined && generations[id] <= gen) return;
    generations[id] = gen;
    const member = byId[id];
    member?.children?.forEach((childId) => assignGen(childId, gen + 1));
  }

  assignGen('gf', 0);
  assignGen('gm', 0);

  const genGroups: Record<number, string[]> = {};
  Object.entries(generations).forEach(([id, gen]) => {
    if (!genGroups[gen]) genGroups[gen] = [];
    genGroups[gen].push(id);
  });

  const nodes: LayoutNode[] = [];
  Object.entries(genGroups).forEach(([genStr, ids]) => {
    const gen = Number(genStr);
    const ordered = ['gf', 'gm', 'f', 'm', 'c1', 'c1w', 'c2', 'gc1'].filter((id) => ids.includes(id));
    const width = (ordered.length - 1) * SIB_GAP;
    ordered.forEach((id, i) => {
      const m = byId[id];
      nodes.push({
        id,
        name: m.name,
        sex: m.sex,
        generation: gen,
        x: i * SIB_GAP - width / 2 + 400,
        y: gen * GEN_GAP + 60,
      });
    });
  });

  return nodes;
}

export default function D3PedigreePage() {
  const svgRef = useRef<SVGSVGElement>(null);

  useEffect(() => {
    const svgEl = svgRef.current;
    if (!svgEl) return;

    const svg = d3.select(svgEl);
    svg.selectAll('*').remove();

    const nodes = buildLayout();
    const byId = Object.fromEntries(nodes.map((n) => [n.id, n]));

    const g = svg.append('g');

    const links: { x1: number; y1: number; x2: number; y2: number; type: string }[] = [];

    pedigreeMembers.forEach((m) => {
      if (m.parents) {
        const child = byId[m.id];
        m.parents.forEach((pid) => {
          if (pid && byId[pid] && child) {
            links.push({
              x1: byId[pid].x,
              y1: byId[pid].y + SYMBOL_SIZE / 2,
              x2: child.x,
              y2: child.y - SYMBOL_SIZE / 2,
              type: 'parent',
            });
          }
        });
      }
    });

    [['gf', 'gm'], ['f', 'm'], ['c1', 'c1w']].forEach(([a, b]) => {
      const na = byId[a];
      const nb = byId[b];
      if (na && nb) {
        links.push({ x1: na.x, y1: na.y, x2: nb.x, y2: nb.y, type: 'spouse' });
      }
    });

    g.selectAll('.link')
      .data(links)
      .enter()
      .append('line')
      .attr('class', 'link')
      .attr('x1', (d) => d.x1)
      .attr('y1', (d) => d.y1)
      .attr('x2', (d) => d.x2)
      .attr('y2', (d) => d.y2)
      .attr('stroke', (d) => (d.type === 'spouse' ? '#9b59b6' : '#40916c'))
      .attr('stroke-width', (d) => (d.type === 'spouse' ? 1.5 : 2))
      .attr('stroke-dasharray', (d) => (d.type === 'spouse' ? '4 3' : null));

    const nodeG = g
      .selectAll('.person')
      .data(nodes)
      .enter()
      .append('g')
      .attr('class', 'person')
      .attr('transform', (d) => `translate(${d.x},${d.y})`);

    nodeG.each(function (d) {
      const el = d3.select(this);
      if (d.sex === 'M') {
        el
          .append('rect')
          .attr('x', -SYMBOL_SIZE / 2)
          .attr('y', -SYMBOL_SIZE / 2)
          .attr('width', SYMBOL_SIZE)
          .attr('height', SYMBOL_SIZE)
          .attr('fill', '#d8f3dc')
          .attr('stroke', '#2d6a4f')
          .attr('stroke-width', 2);
      } else {
        el
          .append('circle')
          .attr('r', SYMBOL_SIZE / 2)
          .attr('fill', '#ffe8e0')
          .attr('stroke', '#e76f51')
          .attr('stroke-width', 2);
      }
      el
        .append('text')
        .attr('y', SYMBOL_SIZE / 2 + 14)
        .attr('text-anchor', 'middle')
        .attr('font-size', 11)
        .attr('fill', '#1a1a1a')
        .text(d.name);
    });

    const zoom = d3.zoom<SVGSVGElement, unknown>().scaleExtent([0.4, 3]).on('zoom', (event) => {
      g.attr('transform', event.transform.toString());
    });
    svg.call(zoom as never);
  }, []);

  return (
    <DemoPage demo={demo}>
      <svg ref={svgRef} width="100%" height="100%" viewBox="0 0 800 520" style={{ background: '#fafafa' }} />
    </DemoPage>
  );
}
