import { Transition } from "@headlessui/react";
import { useState } from "react";
import { MenuIcon, SearchIcon } from "../../assets/icons";
import { menuLinks } from "../../constants";
import SearchInput from "../inputs/SearchInput";
import NavLinks from "./NavLinks";

const Header = () => {
  const [toggleMenu, setToggleMenu] = useState(false);

  const handleToggleMenu = () => setToggleMenu((prev) => !prev);

  return (
    <header className="bg-white border-gray-200 px-2 py-6 border-b border-b-[#EFEFEF]">
      <nav className="container mx-auto">
        <div className="flex items-center justify-between">
          <div className="md:flex gap-2 lg:gap-8 relative">
            <div className="relative">
              <div className="text-xl md:text-2xl text-brand-main font-IntegralCF mr-2 lg:mr-8">
                NFTERS
              </div>
              <div className="hidden lg:block absolute top-0 right-0 h-full min-h-[1em] w-px bg-[#F4F4F4]"></div>
            </div>

            <ul className="hidden lg:flex gap-3 lg:gap-6 xl:gap-12 md:items-center font-medium">
              <NavLinks menuList={menuLinks} />
            </ul>
          </div>

          <div className="flex items-center gap-2 md:gap-5">
            {/* display search icon on mobile */}
            <button
              onClick={handleToggleMenu}
              type="button"
              className="block lg:hidden"
            >
              <SearchIcon />
            </button>

            {/* display search input on desktop */}
            <div className="hidden lg:block">
              <SearchInput />
            </div>

            <button type="button" className="btn-contained">
              Upload
            </button>
            <button
              type="button"
              className="btn-outlined text-xs px-2.5 md:px-4 md:text-[14px]"
            >
              Connect Wallet
            </button>
            <button
              onClick={handleToggleMenu}
              type="button"
              className="lg:hidden text-brand-300 transition-colors duration-300 ease-in-out hover:text-brand-main"
              aria-controls="navbar-toggle"
              aria-expanded="false"
            >
              <span className="sr-only">Open main menu</span>
              <MenuIcon />
            </button>
          </div>
        </div>

        {/* mobile menu */}
        <Transition
          show={toggleMenu}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div id="mobile-menu" className="block lg:hidden">
              <div className="py-3 space-y-1">
                <div ref={ref} className="shadow-lg bg-white px-6 py-3 rounded">
                  <SearchInput containerClass="my-3" />

                  <ul className="flex flex-col gap-3 font-medium">
                    <NavLinks menuList={menuLinks} />
                  </ul>
                </div>
              </div>
            </div>
          )}
        </Transition>
      </nav>
    </header>
  );
};

export default Header;
