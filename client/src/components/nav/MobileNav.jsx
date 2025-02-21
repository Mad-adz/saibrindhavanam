import { useState } from "react";
import { motion } from "framer-motion";
import { LuChevronDown, LuX, LuMenu } from "react-icons/lu";
import { NavLink } from "react-router-dom";
import { Menus } from "../../utils/data/header";

const MobileNav = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [clicked, setClicked] = useState(null);
  const toggleDrawer = () => {
    setIsOpen(!isOpen);
    setClicked(null);
  };

  const subMenuDrawer = {
    enter: {
      height: "auto",
      overflow: "hidden",
    },
    exit: {
      height: 0,
      overflow: "hidden",
    },
  };
  return (
    <div>
      <button className="lg:hidden z-[999] relative" onClick={toggleDrawer}>
        {isOpen ? <LuX /> : <LuMenu />}
      </button>

      <motion.div
        className="fixed left-0 right-0 top-20 overflow-y-auto h-full font-semibold bg-amber-100/70 backdrop-blur p-6 pb-20"
        initial={{ x: "-100%" }}
        animate={{ x: isOpen ? "0%" : "-100%" }}
      >
        <ul>
          {Menus.map(({ name, subMenu, path }, i) => {
            const isClicked = clicked === i;
            const hasSubMenu = subMenu?.length;
            return (
              <li key={name} className="">
                <NavLink
                  to={path}
                  className="flex justify-between items-center p-4 hover:bg-white/5 rounded-md cursor-pointer relative"
                  onClick={() => {
                    if (!hasSubMenu) {
                      setIsOpen(false);
                    }
                    setClicked(isClicked ? null : i);
                  }}
                >
                  {name}
                  {hasSubMenu && (
                    <LuChevronDown
                      className={`ml-auto ${isClicked && "rotate-180"} `}
                    />
                  )}
                </NavLink>
                {hasSubMenu && (
                  <motion.ul
                    initial="exit"
                    animate={isClicked ? "enter" : "exit"}
                    variants={subMenuDrawer}
                    className="ml-5"
                  >
                    {subMenu.map(({ name, icon: Icon, path }) => (
                      <li key={name}>
                        <NavLink
                          to={path}
                          className="p-2 flex items-center hover:bg-white/5 rounded-md gap-x-2 cursor-pointer"
                          onClick={() => {
                            setIsOpen(false);
                          }}
                        >
                          <Icon size={17} />
                          {name}
                        </NavLink>
                      </li>
                    ))}
                  </motion.ul>
                )}
              </li>
            );
          })}
        </ul>
      </motion.div>
    </div>
  );
};

export default MobileNav;
