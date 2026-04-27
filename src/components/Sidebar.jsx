import devices from "../data/devices";

export default function Sidebar({ addnode, setConnectionType }) {
  return (
    <div
      style={{
        width: "220px",
        height: "100%",
        backgroundColor: "#f4f4f4",
        borderRight: "1px solid #ccc",
        padding: "10px",
        overflowY: "auto"
      }}
    >
      <h3>Components</h3>

      {Object.entries(devices).map(([category, items]) => (
        <div key={category} style={{ marginBottom: "20px" }}>
          
          {/* Category Title */}
          <h4 style={{ textTransform: "capitalize" }}>
            {category.replace("-", " ")}
          </h4>

          {/* Items */}
          <div style={{ display: "flex", flexDirection: "column", gap: "10px" }}>
            {items.map((device) => {
              const deviceWithCategory = { ...device, category };

              return (
                <div
                  key={device.type}
                  onClick={() => {
                    if (category === "connections") {
                      setConnectionType(device.type); // 🔌 set cable type
                    } else {
                      addnode(deviceWithCategory); // 🖥 create node
                    }
                  }}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "8px",
                    border: "1px solid #ccc",
                    borderRadius: "8px",
                    cursor: "pointer",
                    background: "white"
                  }}
                >
                  {/* Icon (only for devices) */}
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