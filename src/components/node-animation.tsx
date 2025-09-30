"use client";

import React, { useEffect, useState } from 'react';

const Node = ({ id, style }: { id: number; style: React.CSSProperties }) => {
  return (
    <div
      className="absolute rounded-full bg-primary/20 animate-node-float"
      style={style}
    />
  );
};

export const NodeAnimation = () => {
  const [nodes, setNodes] = useState<any[]>([]);

  useEffect(() => {
    const numNodes = 20;
    const newNodes = Array.from({ length: numNodes }).map((_, i) => {
      const size = Math.random() * 20 + 5;
      const duration = Math.random() * 20 + 15;
      const delay = Math.random() * -20;
      return {
        id: i,
        style: {
          width: `${size}px`,
          height: `${size}px`,
          left: `${Math.random() * 100}%`,
          top: `${Math.random() * 100}%`,
          animationDuration: `${duration}s`,
          animationDelay: `${delay}s`,
        },
      };
    });
    setNodes(newNodes);
  }, []);

  return (
    <div className="w-full h-full absolute inset-0 z-0">
      {nodes.map(node => (
        <Node key={node.id} {...node} />
      ))}
    </div>
  );
};
