import { Handle, Position } from "reactflow";
export default function DeviceNode({ data }) {
  return (
    <div style={{ textAlign: "center" }}>
      {data.ports.map((port, index) => (
        <Handle 
        key = {port}
        type="source"
        position={Position.Right}
        id={port}/>
      ))}
      {/* Device Name */}
      <div style={{ fontWeight: "bold" }}>
        {data.label}
      </div>

      {/* Ports */}
      <div style={{ marginTop: "5px", fontSize: "10px" }}>
        {data.ports.map((port, index) => (
          <div key={index}>
            🔌 {port}
          </div>
        ))}
      </div>

    </div>
  );
}