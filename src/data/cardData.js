const cards = [
  {
    image:
      "https://images.unsplash.com/photo-1555680202-c86f0e12f086?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1470&q=80",
    title: "Neural Network Override",
    description:
      "In the neon-lit streets of Neo-Tokyo 1970, where reality meets virtual dreams, a new age of cybernetic enhancement begins. Scratch to reveal your digital destiny.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1515630278258-407f66498911?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Quantum Data Heist",
    description:
      "Deep within the quantum mainframe, encrypted secrets await discovery. Your neural implants hold the key to unlocking the most valuable data cache in the cybernetic underground.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1518770660439-4636190af475?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Synthetic Dreams Protocol",
    description:
      "Experience the latest in synthetic consciousness technology. Upload your dreams directly to the neural cloud and explore the boundaries between human and machine consciousness.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1504384764586-bb4cdc1707b0?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Chrome City Uprising",
    description:
      "The megacorporations thought they had total control, until the streets fought back. Join the resistance and help reclaim the city from artificial oppression.",
  },
  {
    image:
      "https://images.unsplash.com/photo-1531297484001-80022131f5a1?ixlib=rb-4.0.3&auto=format&fit=crop&w=1470&q=80",
    title: "Digital Nexus Gateway",
    description:
      "Access granted to the most advanced virtual reality hub in the sector. Your consciousness awaits transfer to realms beyond human imagination.",
  },
];

// Get a random card on each import
export const cardData = cards[Math.floor(Math.random() * cards.length)];
