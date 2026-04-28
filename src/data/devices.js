const devices = {
  "end-devices": [
    {
      type: "pc",
      label: "PC",
      icon: "pc.png",
      ports: ["eth0"]
    },
    {
      type: "laptop",
      label: "Laptop",
      icon: "laptop.png",
      ports: ["eth0"]
    }
  ],

  "network-devices": [
    {
      type: "router",
      label: "Router",
      icon: "router.png",
      ports: ["fa0/0", "fa0/1", "fa0/2"]
    },
    {
      type: "switch",
      label: "Switch",
      icon: "switch.png",
      ports: ["fa0/1", "fa0/2", "fa0/3", "fa0/4"]
    },
    {
      type: "hub",
      label: "Hub",
      icon: "hub.png",
      ports: ["p1", "p2", "p3", "p4"]
    }
  ]
};

export default devices;