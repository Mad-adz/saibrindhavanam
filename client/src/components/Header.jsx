import { Link } from "react-router-dom";
import { DesktopNav, MobileNav } from ".";
import { ssbfLogo } from "../assets/images";
import { Menus } from "../utils/navMenus.js";

const Header = () => {
  return (
    <div>
      <header className="h-20 text-[16px] fixed inset-0 flex-center bg-[#d6d6e7] z-50">
        <nav className="px-3.5 flex justify-between w-full h-full max-w-7xl mx-auto">
          <Link to={"/"} className="flex gap-x-3 z-[999] relative">
            <img src={ssbfLogo} alt="" className="size-20" />
          </Link>

          <ul className="gap-x-1 h-full lg:flex lg:items-center hidden">
            {Menus.map((menu) => (
              <li key={menu.name}>
                <DesktopNav menu={menu} />
              </li>
            ))}
          </ul>
          <div className="h-full flex items-center gap-x-5">
            <Link
              to=""
              aria-label="sign-in"
              className="bg-white/5 z-[999] relative px-3 py-1.5 shadow rounded-xl flex-center"
            >
              Donate
            </Link>
            <div className="lg:hidden">
              <MobileNav menu={Menus} />
            </div>
          </div>
        </nav>
      </header>
    </div>
  );
};

export default Header;
