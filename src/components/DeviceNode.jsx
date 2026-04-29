import { Handle, Position } from "reactflow";

export default function DeviceNode({ data }) {
  return (
    <div style={{ textAlign: "center" }}>
      
      {/* LEFT → INPUT */}
      {data.ports.map((port, index) => (
        <Handle
          key={`in-${port}`}
          type="target"
          position={Position.Left}
          id={`in-${port}`}
          style={{ top: 20 + index * 15 }}
        />
      ))}

      {/* DEVICE NAME */}
      <div style={{ fontWeight: "bold" }}>
        {data.label}
      </div>

      {/* PORT LABELS */}
      <div style={{ marginTop: "5px", fontSize: "10px" }}>
        {data.ports.map((port, index) => (
          <div key={index}>🔌 {port}</div>
        ))}
      </div>

      {/* RIGHT → OUTPUT */}
      {data.ports.map((port, index) => (
        <Handle
          key={`out-${port}`}
          type="source"
          position={Position.Right}
          id={`out-${port}`}
          style={{ top: 20 + index * 15 }}
        />
      ))}
    </div>
  );
}