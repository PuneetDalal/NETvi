import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";

export default function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onEdgesDelete,
  onDrop,
  onDragOver
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        deleteKeyCode={["Delete"]}
        nodes={nodes}
        edges={edges}
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgesDelete={onEdgesDelete}
        onDrop={onDrop}
        onDragOver={onDragOver}
        fitView
        proOptions={{ hideAttribution: true }}   // removes watermark
      >
        <Controls />
        <Background gap={25} size={1} color="#ccc" />
      </ReactFlow>
    </div>
  );
}