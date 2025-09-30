"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";

const nodes = [
  { id: 'start', x: 5, y: 50, label: 'Lead' },
  { id: 'qualify', x: 25, y: 50, label: 'Qualify' },
  { id: 'email', x: 50, y: 25, label: 'Send Email' },
  { id: 'wait', x: 50, y: 75, label: 'Wait 24h' },
  { id: 'followup', x: 75, y: 50, label: 'Follow Up' },
  { id: 'end', x: 95, y: 50, label: 'Booked' },
];

const links = [
  { source: 'start', target: 'qualify' },
  { source: 'qualify', target: 'email' },
  { source: 'qualify', target: 'wait' },
  { source: 'email', target: 'followup' },
  { source: 'wait', target: 'followup' },
  { source: 'followup', target: 'end' },
];

export const WorkflowAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<{ nodes: string[], links: number[] }>({ nodes: [], links: [] });

  useEffect(() => {
    const sequence = [
      { nodes: ['start'] },
      { links: [0] },
      { nodes: ['qualify'] },
      { links: [1, 2] },
      { nodes: ['email', 'wait'] },
      { links: [3, 4] },
      { nodes: ['followup'] },
      { links: [5] },
      { nodes: ['end'] },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < sequence.length) {
        const currentStep = sequence[step];
        setVisibleElements(prev => ({
          nodes: [...prev.nodes, ...(currentStep.nodes || [])],
          links: [...prev.links, ...(currentStep.links || [])],
        }));
        step++;
      } else {
        // Reset animation
        step = 0;
        setVisibleElements({ nodes: [], links: [] });
      }
    }, 1000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-lg mx-auto aspect-[2/1] relative my-8">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
        {/* Links */}
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="5" refY="1.75" orient="auto">
            <polygon points="0 0, 5 1.75, 0 3.5" fill="hsl(var(--primary))" />
          </marker>
        </defs>
        {links.map((link, index) => {
          const sourceNode = nodes.find(n => n.id === link.source)!;
          const targetNode = nodes.find(n => n.id === link.target)!;
          const isVisible = visibleElements.links.includes(index);
          return (
            <path
              key={index}
              d={`M ${sourceNode.x + 5} ${sourceNode.y} C ${sourceNode.x + 15} ${sourceNode.y}, ${targetNode.x - 15} ${targetNode.y}, ${targetNode.x - 5} ${targetNode.y}`}
              stroke="hsl(var(--primary))"
              strokeWidth="0.5"
              fill="none"
              markerEnd="url(#arrowhead)"
              className={cn("transition-opacity duration-500", isVisible ? "opacity-50" : "opacity-0")}
            />
          );
        })}
      </svg>

      {/* Nodes */}
      {nodes.map(node => {
        const isVisible = visibleElements.nodes.includes(node.id);
        return (
          <div
            key={node.id}
            className={cn(
              "absolute -translate-x-1/2 -translate-y-1/2 glass-card rounded-lg px-2 py-1 text-xs shadow-lg transition-all duration-500",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%` }}
          >
            {node.label}
          </div>
        );
      })}
    </div>
  );
};
