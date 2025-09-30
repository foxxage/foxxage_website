
"use client";

import React, { useEffect, useState } from 'react';
import { cn } from "@/lib/utils";
import { Bot, Mail, DatabaseZap, BarChart3, MessageSquare } from 'lucide-react';

const centerNode = { id: 'agent', label: 'AI Agent', icon: Bot, x: 50, y: 50 };

const tasks = [
  { id: 'mail', label: 'Answering Mails', icon: Mail, x: 50, y: 10 },
  { id: 'crm', label: 'Updating CRM', icon: DatabaseZap, x: 90, y: 50 },
  { id: 'reports', label: 'Generating Reports', icon: BarChart3, x: 50, y: 90 },
  { id: 'chat', label: 'Chatting', icon: MessageSquare, x: 10, y: 50 },
];

export const MultiTaskingAnimation = () => {
  const [activeTask, setActiveTask] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveTask(prev => (prev + 1) % tasks.length);
    }, 1500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="w-full max-w-sm mx-auto aspect-square relative my-8">
      <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none" className="absolute inset-0">
        <defs>
            <marker id="marker-arrow" markerWidth="5" markerHeight="3.5" refX="2.5" refY="1.75" orient="auto">
                <polygon points="0 0, 5 1.75, 0 3.5" className="fill-primary" />
            </marker>
        </defs>
        {tasks.map((task, index) => {
          const isActive = activeTask === index;
          const pathD = `M ${centerNode.x} ${centerNode.y} L ${task.x} ${task.y}`;
          return (
             <g key={task.id} className={cn("transition-opacity duration-500", isActive ? "opacity-100" : "opacity-30")}>
                <path
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
                    markerEnd="url(#marker-arrow)"
                    style={{
                        strokeDasharray: 5,
                        strokeDashoffset: isActive ? 0 : -100,
                        animation: isActive ? 'dash 1.5s linear infinite' : 'none',
                    }}
                />
            </g>
          );
        })}
      </svg>

      {/* Center Node */}
      <div
        className="absolute flex flex-col items-center gap-2 glass-card rounded-full p-4 text-xs shadow-lg border-2 border-primary/50"
        style={{ left: `${centerNode.x}%`, top: `${centerNode.y}%`, transform: 'translateX(-50%) translateY(-50%)' }}
      >
        <div className="bg-primary/10 p-3 rounded-full">
            <Bot className="h-8 w-8 text-primary" />
        </div>
        <span className="font-semibold text-sm">{centerNode.label}</span>
      </div>

      {/* Task Nodes */}
      {tasks.map((task, index) => {
        const Icon = task.icon;
        const isActive = activeTask === index;
        return (
          <div
            key={task.id}
            className={cn(
              "absolute flex flex-col items-center gap-1 glass-card rounded-lg p-2 text-xs shadow-md transition-all duration-300",
              isActive ? "scale-110 shadow-primary/20" : "scale-100 opacity-70"
            )}
            style={{ left: `${task.x}%`, top: `${task.y}%`, transform: 'translateX(-50%) translateY(-50%)' }}
          >
             <div className="bg-primary/10 p-2 rounded-md">
                <Icon className={cn("h-5 w-5 text-primary/80 transition-colors", isActive && "text-primary")} />
             </div>
             <span className="font-medium text-center">{task.label}</span>
          </div>
        );
      })}

      <style jsx>{`
        @keyframes dash {
          to {
            stroke-dashoffset: 0;
          }
        }
      `}</style>
    </div>
  );
};
