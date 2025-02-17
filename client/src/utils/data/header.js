import { LuArrowUpRight } from "react-icons/lu";

export const Menus = [
  {
    name: "About",
    path: "/about",
  },
  {
    name: "Initiatives",
    subMenuHeading: ["Social", "Spiritual"],
    subMenu: [
      {
        name: "Education",
        desc: "Education",
        path: "/initiatives/education",
        icon: LuArrowUpRight,
      },
      {
        name: "Annadhaanam",
        desc: "Annadhaanam",
        path: "/initiatives/annadhaanam",
        icon: LuArrowUpRight,
      },
      {
        name: "Healthcare",
        desc: "Healthcare",
        path: "/initiatives/healthcare",
        icon: LuArrowUpRight,
      },
      {
        name: "Gowshala",
        desc: "Gowshala",
        path: "/initiatives/gowshala",
        icon: LuArrowUpRight,
      },
      {
        name: "Women's Empowerment",
        desc: "Women's Empowerment",
        path: "/initiatives/women-empowerment",
        icon: LuArrowUpRight,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Temple",
    subMenu: [
      {
        name: "Construction",
        desc: "Construction",
        path: "/temple/construction",
        icon: LuArrowUpRight,
      },
      {
        name: "Festivals",
        desc: "Festivals",
        path: "/temple/festivals",
        icon: LuArrowUpRight,
      },
    ],
    gridCols: 1,
  },
  {
    name: "Fundraisers",
    subMenuHeading: ["Renovation", "Help"],
    subMenu: [
      {
        name: "School Renovation",
        desc: "School Renovation",
        path: "/fundraisers/school-renovation",
        icon: LuArrowUpRight,
      },
      {
        name: "Old Age Home",
        desc: "Old Age Home",
        path: "/fundraisers/old-age-home",
        icon: LuArrowUpRight,
      },
      {
        name: "Home Renovation",
        desc: "Home Renovation",
        path: "/fundraisers/home-renovation",
        icon: LuArrowUpRight,
      },

      {
        name: "Orphanage",
        desc: "Orphanage",
        path: "/fundraisers/orphanage",
        icon: LuArrowUpRight,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Tourism",
    path: "/tourism",
  },
  {
    name: "Connect",
    path: "/connect",
  },
];
