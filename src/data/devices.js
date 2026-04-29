const devices = {
  "end-devices": [
    {
      type: "pc",
      label: "PC",
      icon: "/icons/pc.png",
      ports: ["eth0"],
    },
    {
      type: "laptop",
      label: "Laptop",
      icon: "/icons/laptop.png",
      ports: ["eth0"],
    },
  ],

  "network-devices": [
    {
      type: "router",
      label: "Router",
      icon: "/icons/router.png",
      ports: ["fa0/0", "fa0/1", "fa0/2"],
    },
    {
      type: "switch",
      label: "Switch",
      icon: "/icons/switch.png",
      ports: ["fa0/1", "fa0/2", "fa0/3", "fa0/4"],
    },
    {
      type: "hub",
      label: "Hub",
      icon: "/icons/hub.png",
      ports: ["p1", "p2", "p3", "p4"],
    },
  ],

  "connections": [
    { type: "copper", label: "Copper Cable" },
    { type: "fiber", label: "Fiber Cable" },
  ],
};

export default devices;