import React from "react";
import ReactFlow,{useNodesState,Controls,ControlButton} from "reactflow";
import "reactflow/dist/style.css";

const nodes = [
  {
    id: "1",
    position: { x: 100, y: 100 },
    data: { label: "Router" },
  },
  {
    id: "2",
    position: { x: 400, y: 200 },
    data: { label: "PC" },
  },
  {
    id : "3",
    position: { x: 400, y: 400 },
    data: { label: "Switch" },
  }
];

const edges = [
  {
    id: "e1-2",
    source: "1",
    target: "2",
  },
];
//add free to move nodes
const onNodeDragStop = (event, node) => {  console.log("Node dragged:", node);};

export default function App() {
  return (
    <div style={{ width: "100vw", height: "100vh" }}>
      <ReactFlow nodes={nodes} edges={edges} onNodeDragStop={onNodeDragStop}  />
    </div>
  );
}