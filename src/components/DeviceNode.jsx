export default function DeviceNode({ data }) {
  return (
    <div style={{ textAlign: "center" }}>
      
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