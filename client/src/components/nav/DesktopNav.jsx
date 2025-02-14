import React, { useState } from "react";
import PropTypes from "prop-types";
import { LuChevronDown } from "react-icons/lu";
import { motion } from "framer-motion";
import { NavLink } from "react-router-dom";
const DesktopNav = ({ menu }) => {
  console.log(menu);
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  const subMenuAnimate = {
    enter: {
      opacity: 1,
      rotateX: 0,
      display: "block",
      transition: {
        duration: 0.3,
      },
    },
    exit: {
      opacity: 0,
      rotateX: -10,
      transition: {
        duration: 0.3,
      },
      transitionEnd: {
        display: "none",
      },
    },
  };

  const hasSubMenu = menu?.subMenu?.length;

  return (
    <motion.span
      className="group/link"
      onMouseEnter={() => toggleHoverMenu()}
      onMouseLeave={() => toggleHoverMenu()}
    >
      <NavLink
        to={menu.path}
        className="flex items-center gap-2 font-semibold text-md hover:text-orange-500 cursor-pointer px-4 py-2 rounded-md"
      >
        {menu.name}
        {hasSubMenu && (
          <LuChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </NavLink>
      {hasSubMenu && (
        <motion.div
          className="absolute top-[5rem] p-[15px] rounded-[6px] origin-[50%_-150px] bg-amber-50 shadow-2xl"
          initial="exit"
          animate={isHover ? "enter" : "exit"}
          variants={subMenuAnimate}
        >
          <div
            className={`grid gap-7 ${
              menu.gridCols === 3
                ? "grid-cols-3"
                : menu.gridCols === 2
                ? "grid-cols-2"
                : "grid-cols-1"
            }`}
          >
            {hasSubMenu &&
              menu.subMenu.map((submenu, i) => (
                <div className="relative cursor-pointer" key={i}>
                  {menu.gridCols > 1 && menu?.subMenuHeading?.[i] && (
                    <p className="text-sm mb-4 text-gray-500">
                      {menu?.subMenuHeading?.[i]}
                    </p>
                  )}
                  <NavLink
                    to={submenu.path}
                    className="flex items-center gap-x-2 group/menubox"
                  >
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-amber-100 group-hover/menubox:text-orange-500 duration-300">
                      {submenu.icon && React.createElement(submenu.icon)}
                    </div>
                    <div>
                      <span className="font-semibold group-hover/menubox:text-orange-500">{submenu.name}</span>
                      {/* <p className="text-sm text-gray-400">{submenu.desc}</p> */}
                    </div>
                  </NavLink>
                </div>
              ))}
          </div>
        </motion.div>
      )}
    </motion.span>
  );
};

DesktopNav.propTypes = {
  menu: PropTypes.array.isRequired,
};

export default DesktopNav;
