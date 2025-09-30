
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { ArrowRight, Bot, Wrench, BrainCircuit, CheckCircle, Zap } from 'lucide-react';

const desktopNodes = [
  { id: 'start', x: 5, y: 50, label: 'Input', icon: ArrowRight },
  { id: 'qualify', x: 25, y: 50, label: 'AI Agent', icon: Bot },
  { id: 'email', x: 50, y: 25, label: 'Tools', icon: Wrench },
  { id: 'wait', x: 50, y: 75, label: 'Think', icon: BrainCircuit },
  { id: 'execute', x: 75, y: 50, label: 'Execute', icon: Zap },
  { id: 'end', x: 95, y: 50, label: 'Output', icon: CheckCircle },
];

const mobileNodes = [
  { id: 'start', x: 50, y: 10, label: 'Input', icon: ArrowRight },
  { id: 'qualify', x: 50, y: 30, label: 'AI Agent', icon: Bot },
  { id: 'email', x: 25, y: 50, label: 'Tools', icon: Wrench },
  { id: 'wait', x: 75, y: 50, label: 'Think', icon: BrainCircuit },
  { id: 'execute', x: 50, y: 70, label: 'Execute', icon: Zap },
  { id: 'end', x: 50, y: 90, label: 'Output', icon: CheckCircle },
]

const desktopLinks = [
  { source: 'start', target: 'qualify' },
  { source: 'qualify', target: 'email' },
  { source: 'qualify', target: 'wait' },
  { source: 'email', target: 'execute' },
  { source: 'wait', target: 'execute' },
  { source: 'execute', target: 'end' },
];

const mobileLinks = [
  { source: 'start', target: 'qualify' },
  { source: 'qualify', target: 'email' },
  { source: 'qualify', target: 'wait' },
  { source: 'email', target: 'execute' },
  { source: 'wait', target: 'execute' },
  { source: 'execute', target: 'end' },
]

export const WorkflowAnimation = () => {
  const [visibleElements, setVisibleElements] = useState<{ nodes: string[], links: number[] }>({ nodes: [], links: [] });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  useEffect(() => {
    const sequence = [
      { nodes: ['start'] },
      { links: [0] },
      { nodes: ['qualify'] },
      { links: [1, 2] },
      { nodes: ['email', 'wait'] },
      { links: [3, 4] },
      { nodes: ['execute'] },
      { links: [5] },
      { nodes: ['end'] },
    ];

    let step = 0;
    const interval = setInterval(() => {
      if (step < sequence.length) {
        const currentStep = sequence[step];
        setVisibleElements(prev => ({
          nodes: [...new Set([...prev.nodes, ...(currentStep.nodes || [])])],
          links: [...new Set([...prev.links, ...(currentStep.links || [])])],
        }));
        step++;
      } else {
        clearInterval(interval);
      }
    }, 1000);

    return () => {
        clearInterval(interval)
    };
  }, []);

  const nodes = isMobile ? mobileNodes : desktopNodes;
  const links = isMobile ? mobileLinks : desktopLinks;

  return (
    <div className="w-full max-w-2xl mx-auto aspect-[4/3] md:aspect-[2/1] relative my-8">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
          <marker id="arrowhead" markerWidth="5" markerHeight="3.5" refX="5" refY="1.75" orient="auto">
            <polygon points="0 0, 5 1.75, 0 3.5" className="fill-primary" />
          </marker>
        </defs>
        {links.map((link, index) => {
          const sourceNode = nodes.find(n => n.id === link.source)!;
          const targetNode = nodes.find(n => n.id === link.target)!;
          const isVisible = visibleElements.links.includes(index);
          const pathId = `link-path-${index}`;
          
          const pathD = isMobile
            ? `M ${sourceNode.x} ${sourceNode.y} L ${targetNode.x} ${targetNode.y}`
            : `M ${sourceNode.x} ${sourceNode.y} C ${sourceNode.x + 10} ${sourceNode.y}, ${targetNode.x - 10} ${targetNode.y}, ${targetNode.x} ${targetNode.y}`

          return (
             <g key={index} className={cn("transition-opacity duration-500", isVisible ? "opacity-100" : "opacity-0")}>
              <path
                id={pathId}
                d={pathD}
                stroke="hsl(var(--border))"
                strokeWidth="0.5"
                fill="none"
              />
              <path
                d={pathD}
                className="stroke-primary"
                strokeWidth="0.5"
                fill="none"
                markerEnd="url(#arrowhead)"
                style={{
                  strokeDasharray: 500,
                  strokeDashoffset: isVisible ? 0 : 500,
                  transition: 'stroke-dashoffset 0.5s ease-in-out',
                }}
              />
            </g>
          );
        })}
      </svg>

      {nodes.map(node => {
        const isVisible = visibleElements.nodes.includes(node.id);
        const Icon = node.icon;
        return (
          <div
            key={node.id}
            className={cn(
              "absolute flex items-center gap-2 glass-card rounded-lg p-2 text-xs shadow-lg transition-all duration-300",
              isVisible ? "opacity-100 scale-100" : "opacity-0 scale-90"
            )}
            style={{ left: `${node.x}%`, top: `${node.y}%`, transform: `translateX(-50%) translateY(-50%)` }}
          >
             <div className="bg-primary/10 p-1.5 rounded-md">
                <Icon className="h-4 w-4 text-primary" />
             </div>
             <span className="font-medium pr-2">{node.label}</span>
          </div>
        );
      })}
    </div>
  );
};
