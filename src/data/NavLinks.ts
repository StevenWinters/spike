export const navLinks = [
  {
    id: 1,
    path: "/documentation",
    name: "Documentation",
  },
  {
    id: 2,
    path: "/rules",
    name: "How To Play",
    children: [
      {
        id: 1,
        path: "/rules",
        name: "Rules",
      },
      {
        id: 2,
        path: "/moves",
        name: "Moves",
      },
      {
        id: 3,
        path: "/court",
        name: "Court",
      },
    ],
  },
  {
    id: 3,
    path: "/history",
    name: "History",
  },
  {
    id: 4,
    path: "/contact",
    name: "Contact",
  },
];
