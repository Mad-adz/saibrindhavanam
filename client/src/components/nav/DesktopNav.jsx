import React, { useState } from "react";
import PropTypes from "prop-types";
import { LuChevronDown } from "react-icons/lu";
import { motion } from "framer-motion";
const DesktopNav = ({ menu }) => {
  console.log(menu);
  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  // const subMenuAnimate = {
  //   enter: {
  //     opacity: 1,
  //     rotateX: 0,
  //     transition: {
  //       duration: 0.5,
  //     },
  //     display: "block",
  //   },
  //   exit: {
  //     opacity: 0,
  //     rotateX: -15,
  //     transition: {
  //       duration: 0.5,
  //     },
  //     transitionEnd: {
  //       display: "none",
  //     },
  //   },
  // };

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
      // onHoverStart={() => {
      //   toggleHoverMenu();
      // }}
      // onHoverEnd={toggleHoverMenu}
      onMouseEnter={() => toggleHoverMenu()}
      onMouseLeave={() => toggleHoverMenu()}
      // key={menu.name}
    >
      <span className="flex items-center gap-1 hover:bg-white/5 cursor-pointer px-3 py-1 rounded-xl">
        {menu.name}
        {hasSubMenu && (
          <LuChevronDown className="mt-[0.6px] group-hover/link:rotate-180 duration-200" />
        )}
      </span>
      {hasSubMenu && (
        <motion.div
          // className="sub-menu"
          // initial="exit"
          // animate={isHover ? "enter" : "exit"}
          // variants={subMenuAnimate}
          // className="absolute left-0 bg-white shadow-lg p-4 rounded-md"
          className="absolute top-[5rem] p-[15px] rounded-[6px] origin-[50%_-150px] bg-white"
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
                  <div className="flex items-center gap-x-4 group/menubox">
                    <div className="bg-white/5 w-fit p-2 rounded-md group-hover/menubox:bg-white group-hover/menubox:text-gray-900 duration-300">
                      {/* {submenu.icon && <submenu.icon />} */}
                      {submenu.icon && React.createElement(submenu.icon)}
                    </div>
                    <div>
                      <h6 className="font-semibold">{submenu.name}</h6>
                      <p className="text-sm text-gray-400">{submenu.desc}</p>
                    </div>
                  </div>
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
