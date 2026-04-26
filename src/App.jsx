import React, { useState } from "react";
import ReactFlow,{useNodesState,Controls,ControlButton} from "reactflow";
import "reactflow/dist/style.css";
import { useCallback } from 'react';
import {applyNodeChanges, applyEdgeChanges, addEdge } from 'reactflow';
import 'reactflow/dist/style.css';
import Sidebar from "./components/Sidebar";
import FlowCanvas from "./components/FlowCanvas";
 
export default function App() {
  const onEdgesDelete = useCallback(
  (deletedEdges) => {
    setEdges((eds) =>
      eds.filter((edge) => !deletedEdges.includes(edge))
    );
  },
  []
);
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
 
  const onNodesChange = useCallback(
    (changes) => setNodes((nodesSnapshot) => applyNodeChanges(changes, nodesSnapshot)),
    [],
  );
  const onEdgesChange = useCallback(
    (changes) => setEdges((edgesSnapshot) => applyEdgeChanges(changes, edgesSnapshot)),
    [],
  );
  const onConnect = useCallback(
    (params) => setEdges((edgesSnapshot) => addEdge(params, edgesSnapshot)),
    [],
  );
 
  return (
  <div style={{ display: "flex", height: "100vh" }}>
    
    {/* Sidebar */}
    <Sidebar addnode={(type) => {
      const newNode = {
        id: `n${nodes.length + 1}`,
        position: { x: Math.random() * 400, y: Math.random() * 400 },
        data: { label: `${type} ${nodes.length + 1}` },
      };
      setNodes((nds) => nds.concat(newNode));
    }} />

    {/* Canvas */}
    <div style={{ flex: 1 }}>
      <FlowCanvas
  nodes={nodes}
  edges={edges}
  onNodesChange={onNodesChange}
  onEdgesChange={onEdgesChange}
  onConnect={onConnect}
  onEdgesDelete={onEdgesDelete}
/>
    </div>

  </div>
);
}