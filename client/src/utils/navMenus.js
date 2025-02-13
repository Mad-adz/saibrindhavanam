
import { LuArrowUpRight } from "react-icons/lu";

export const Menus = [
  {
    name: "About Us",
  },
  {
    name: "Initiatives",
    subMenuHeading: ["Spiritual", "Social"],
    subMenu: [
      {
        name: "Annadhaanam",
        desc: "Annadhaanam",
        icon: LuArrowUpRight,
      },
      {
        name: "Gowshala",
        desc: "Gowshala",
        icon: LuArrowUpRight,
      },
      {
        name: "Education",
        desc: "Education",
        icon: LuArrowUpRight,
      },
      {
        name: "Healthcare",
        desc: "Healthcare",
        icon: LuArrowUpRight,
      },
      {
        name: "Women's Empowerment",
        desc: "Women's Empowerment",
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
        icon: LuArrowUpRight,
      },
      {
        name: "Festivals",
        desc: "Festivals",
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
        icon: LuArrowUpRight,
      },
      {
        name: "Home Renovation",
        desc: "Home Renovation",
        icon: LuArrowUpRight,
      },
      {
        name: "Old Age Home",
        desc: "Old Age Home",
        icon: LuArrowUpRight,
      },
      {
        name: "Orphan Age",
        desc: "Orphan Age",
        icon: LuArrowUpRight,
      },
    ],
    gridCols: 2,
  },
  {
    name: "Tourism",
  },
  {
    name: "Connect",
  },
];
