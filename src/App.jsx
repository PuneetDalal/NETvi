import React, { useState, useCallback } from "react";
import { applyNodeChanges, applyEdgeChanges, addEdge } from "reactflow";

import Sidebar from "./components/Sidebar";
import FlowCanvas from "./components/FlowCanvas";

export default function App() {

  const [nodes, setNodes] = useState([]);
  const [edges, setEdges] = useState([]);
  const [connectionType, setConnectionType] = useState(null);

  // ✅ MOVE IT HERE (TOP LEVEL)
  const onDragOver = useCallback((event) => {
    event.preventDefault();
    event.dataTransfer.dropEffect = "move";
  }, []);

  // 🔥 SINGLE NODE CREATION FUNCTION
  const createNode = (device, position) => {
    const sameTypeCount = nodes.filter(
      (n) => n.data.type === device.type
    ).length;

    return {
      id: `n-${Date.now()}`,
      type: "device",
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
  };

  // CLICK
  const addnode = (device) => {
  const node = createNode(device, {
    x: Math.random() * 400,
    y: Math.random() * 400,
  });

  setNodes((nds) => [...nds, node]);
};
  // DRAG
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

  const node = createNode(device, position);

  setNodes((nds) => [...nds, node]);
}, [nodes]);

  // NODE CHANGE
  const onNodesChange = useCallback(
    (changes) => setNodes((nds) => applyNodeChanges(changes, nds)),
    []
  );

  // EDGE CHANGE
  const onEdgesChange = useCallback(
    (changes) => setEdges((eds) => applyEdgeChanges(changes, eds)),
    []
  );

  // CONNECT
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

      setConnectionType(null); // 🔥 FIXED
    },
    [connectionType]
  );

  // DELETE
  const onEdgesDelete = useCallback((deletedEdges) => {
    setEdges((eds) =>
      eds.filter((e) => !deletedEdges.includes(e))
    );
  }, []);

  return (
    <div style={{ display: "flex", height: "100vh", width: "100vw" }}>
      
      <Sidebar addnode={addnode} setConnectionType={setConnectionType} />

      <div style={{ flex: 1 }}>
        <FlowCanvas
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onConnect={onConnect}
          onEdgesDelete={onEdgesDelete}
          onDrop={onDrop}
          onDragOver={onDragOver}
        />
      </div>
    </div>
  );
}