import React, { useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";

import Sidebar from "./components/Sidebar";
import FlowCanvas from "./components/FlowCanvas";

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [connectionType, setConnectionType] = useState(null); // 🔌 cable type

  // Handle node changes
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Handle edge changes
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Handle connection between nodes
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            label: connectionType ? connectionType : "no-cable",
          },
          eds
        )
      );
    },
    [connectionType]
  );

  // Delete edges
  const onEdgesDelete = useCallback((deletedEdges) => {
    setEdges((eds) =>
      eds.filter((e) => !deletedEdges.includes(e))
    );
  }, []);

  // Add node (UPDATED CORE LOGIC)
const addnode = (device) => {
  const sameTypeCount = nodes.filter(
    (n) => n.data.type === device.type
  ).length;

  const newNode = {
    id: `n-${Date.now()}`,

    position: {
      x: Math.random() * 400,
      y: Math.random() * 400,
    },

    data: {
      label: `${device.label} ${sameTypeCount + 1}`, // ✅ FIXED
      type: device.type,
      category: device.category,
      ports: device.ports || [],
      icon: device.icon || null
    },

    style: {
      background: "#2d2d2d",
      color: "#fff",
      border: "1px solid #555",
      borderRadius: "6px",
      padding: "6px 10px",
      width: "120px",
      fontSize: "12px"
    }
  };

  setNodes((nds) => [...nds, newNode]);
};

  return (
    <div style={{ display: "flex", height: "100vh" , width: "100vw"}}>
      
      {/* Sidebar */}
      <Sidebar
        addnode={addnode}
        setConnectionType={setConnectionType}
      />

      {/* Canvas */}
      <div style={{ flex: 1, height: "100%", overflow: "hidden" }}>
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