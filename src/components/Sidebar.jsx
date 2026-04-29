import devices from "../data/devices";

export default function Sidebar({ addnode, setConnectionType }) {
  return (
    <div
      style={{
        width: "200px",
        minWidth: "200px",
        height: "100%",
        backgroundColor: "#f0f0f0",
        borderRight: "1px solid #ccc",
        padding: "10px",
        boxSizing: "border-box"
      }}
    >
      <h3>Components</h3>

      {Object.entries(devices).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          
          <h4>{category.replace("-", " ")}</h4>

          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {items.map((device) => {
              const deviceWithCategory = { ...device, category };

              return (
                <div
                  key={device.type}

                  // ✅ DRAG
                  draggable
                  onDragStart={(event) => {
                    event.dataTransfer.setData(
                      "application/reactflow",
                      JSON.stringify(deviceWithCategory)
                    );
                  }}

                  // ✅ CLICK (RESTORED)
                  onClick={() => {
                    if (category === "connections") {
                      setConnectionType(device.type);
                    } else {
                      addnode(deviceWithCategory); // 🔥 this was missing
                    }
                  }}

                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    cursor: "grab",
                    background: "white"
                  }}
                >
                  {device.icon && (
                    <img
                      src={device.icon}
                      alt={device.label}
                      style={{ width: "30px", height: "30px" }}
                    />
                  )}

                  <span>{device.label}</span>
                </div>
              );
            })}
          </div>

        </div>
      ))}
    </div>
  );
}