import ReactFlow from "reactflow";
import "reactflow/dist/style.css";
export default function FlowCanvas(props) {
  return (<div style={{ width: "100%", height: "100%" }}><ReactFlow
        nodes={props.nodes}
        edges={props.edges}
        onNodesChange={props.onNodesChange}
        onEdgesChange={props.onEdgesChange}
        onConnect={props.onConnect}
        fitView
      /></div>  );
}