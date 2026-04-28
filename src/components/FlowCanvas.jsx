import ReactFlow, { Controls, Background } from "reactflow";
import "reactflow/dist/style.css";
import DeviceNode from "./DeviceNode";

const nodeTypes = {
  device: DeviceNode,
};

export default function FlowCanvas({
  nodes,
  edges,
  onNodesChange,
  onEdgesChange,
  onConnect,
  onEdgesDelete
}) {
  return (
    <div style={{ width: "100%", height: "100%" }}>
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}   // ✅ IMPORTANT
        onNodesChange={onNodesChange}
        onEdgesChange={onEdgesChange}
        onConnect={onConnect}
        onEdgesDelete={onEdgesDelete}
        fitView
      >
        <Controls />
        <Background gap={25} size={1} color="#5ecefac0" />
      </ReactFlow>
    </div>
  );
}