import React, { useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";

import Sidebar from "./components/Sidebar";
import FlowCanvas from "./components/FlowCanvas";

export default function App() {
  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [connectionType, setConnectionType] = useState(null);
  // ✅ CLICK-based node creation (RESTORED)
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
      label: `${device.label} ${sameTypeCount + 1}`,
      type: device.type,
      category: device.category,
      ports: device.ports || [],
    },

    style: {
      background: "#2d2d2d",
      color: "#fff",
      border: "1px solid #555",
      borderRadius: "6px",
      padding: "6px 10px",
      width: "120px",
      fontSize: "12px",
    },
  };

  setNodes((nds) => [...nds, newNode]);
};
  // ✅ Allow drop
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // ✅ Handle drop properly
  const onDrop = useCallback((event) => {
    event.preventDefault();

    const data = event.dataTransfer.getData("application/reactflow");
    if (!data) return;

    const device = JSON.parse(data);

    const bounds = event.target.getBoundingClientRect();

    const position = {
      x: event.clientX - bounds.left,
      y: event.clientY - bounds.top,
    };

    const sameTypeCount = nodes.filter(
      (n) => n.data.type === device.type
    ).length;

    const newNode = {
      id: `n-${Date.now()}`,
      position,

      data: {
        label: `${device.label} ${sameTypeCount + 1}`,
        type: device.type,
        category: device.category,
        ports: device.ports || [],
      },

      style: {
        background: "#2d2d2d",
        color: "#fff",
        border: "1px solid #555",
        borderRadius: "6px",
        padding: "6px 10px",
        width: "120px",
        fontSize: "12px",
      },
    };

    setNodes((nds) => [...nds, newNode]);
  }, [nodes]);

  // Node updates
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // Edge updates
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // Connect nodes
  const onConnect = useCallback(
    (params) => {
      setEdges((eds) =>
        addEdge(
          {
            ...params,
            label: connectionType || "no-cable",
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

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      
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
          onDrop={onDrop}            // ✅ FIX
          onDragOver={onDragOver}    // ✅ FIX
        />
      </div>

    </div>
  );
}