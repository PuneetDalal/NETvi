import React, { useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";

import Sidebar from "./components/Sidebar";
import FlowCanvas from "./components/FlowCanvas";

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [connectionType, setConnectionType] = useState(null); // 🔌 cable type

  // Node changes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Edge changes
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Connect nodes
  const onConnect = useCallback(
    (params) =>
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            label: connectionType || "default", // show cable type
          },
          eds
        )
      ),
    [connectionType]
  );

  // Delete edges
  const onEdgesDelete = useCallback((deletedEdges) => {
    setEdges((eds) =>
      eds.filter((e) => !deletedEdges.includes(e))
    );
  }, []);

  // Add node
  const addnode = (device) => {
    const newNode = {
      id: `n${nodes.length + 1}`,
      position: {
        x: Math.random() * 400,
        y: Math.random() * 400,
      },
      data: {
        label: device.label,
        type: device.type,
        category: device.category,
      },
    };

    setNodes((nds) => [...nds, newNode]);
  };

  return (
    <div style={{ display: "flex", height: "100vh" }}>
      
      {/* Sidebar */}
      <Sidebar
        addnode={addnode}
        setConnectionType={setConnectionType}
      />

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