import React, { useEffect, useRef, useState } from "react";
import {
  HiMail,
  HiBell,
  HiMenuAlt2,
  HiX,
  HiDotsVertical,
  HiBadgeCheck,
  HiOutlineHome,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineShoppingBag,
  HiChevronDown,
  HiChevronUp,
  HiOutlineClipboardList,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";

const NavbarItem = () => {
  const navigate = useNavigate();

  // Profile Smartphone mode
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // Sidebar
  const [isOpenSidebar, setIsOpenSidebar] = useState(false);

  const toggleSidebar = () => {
    setIsOpenSidebar(!isOpenSidebar);
  };

  // Drawer
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);

  const toggleDrawer = () => {
    setIsDrawerOpen(!isDrawerOpen);
  };

  // Menu
  const [isMenu, setIsMenu] = useState(false);

  const toggleMenu = () => {
    setIsMenu(!isMenu);
  };

  // Dropdown Profile
  const [isProfile, setIsProfile] = useState(false);
  const dropdownRef = useRef(null);

  const toggleProfile = () => {
    setIsProfile(!isProfile);
  };

  const handleClickOutside = (event) => {
    if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
      setIsProfile(false);
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    document.addEventListener("mousedown", handleClickOutside);
    // Clean up event listener when component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <header className="fixed-navbar flex dark:border dark:border-b-2 dark:border-neutral-700 flex-wrap sm:justify-start sm:flex-nowrap w-full bg-white shadow-sm text-sm py-4 dark:bg-neutral-800">
      <nav
        className="max-w-[85rem] w-full mx-auto px-4 sm:flex sm:justify-between"
        aria-label="Global"
      >
        <div className="flex items-center justify-between">
          {/* Drawer */}
          <div className="lg:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-x-1 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              onClick={toggleDrawer}
            >
              <HiMenuAlt2 size="20" />
            </button>

            {isDrawerOpen && (
              <div
                className="fixed inset-0 bg-gray-900 bg-opacity-50 z-50"
                onClick={toggleDrawer}
              ></div>
            )}

            <div
              id="hs-overlay-backdrop-with-scrolling"
              className={`hs-overlay ${
                isDrawerOpen
                  ? "hs-overlay-open:translate-x-0"
                  : "hidden -translate-x-full"
              } fixed top-0 start-0 transition-all duration-300 transform h-full max-w-xs w-full z-[80] bg-white border-e dark:bg-neutral-800 dark:border-neutral-700`}
            >
              {isDrawerOpen && (
                <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
                  <h3 className="font-bold text-gray-800 dark:text-white">
                    Dashboard Admin
                  </h3>
                  <button
                    type="button"
                    className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-neutral-700"
                    onClick={toggleDrawer}
                  >
                    <span className="sr-only">Close modal</span>
                    <HiX size="20" />
                  </button>
                </div>
              )}
              <div className="py-4">
                <p className="text-gray-800 dark:text-neutral-400">
                  {/* Content */}
                  <div className="px-6 flex items-center">
                    <a
                      className="flex-none text-xl font-semibold dark:text-white"
                      href="#"
                      aria-label="Brand"
                    >
                      Apridev Store
                    </a>
                    <HiBadgeCheck
                      size="20"
                      className="text-center ml-1 text-blue-600"
                    />
                  </div>
                  <nav
                    className="hs-accordion-group p-6 w-full flex flex-col flex-wrap"
                    data-hs-accordion-always-open
                  >
                    <ul className="space-y-1.5">
                      <p className="text-gray-500 text-sm">GENERAL</p>
                      <li>
                        <a
                          onClick={() => navigate("/dashboard")}
                          className="cursor-default flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white"
                        >
                          <HiOutlineHome size="20" />
                          Dashboard
                        </a>
                      </li>
                      <p className="text-gray-500 text-sm">EXAMPLES</p>
                      <li className="hs-accordion" id="users-accordion">
                        <button
                          type="button"
                          className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white dark:text-white"
                          onClick={toggleSidebar}
                        >
                          <HiOutlineShoppingBag size="20" />
                          Ecommerce
                          {isOpenSidebar ? (
                            <HiChevronUp
                              className="ms-auto block text-gray-600 dark:text-white"
                              size="20"
                            />
                          ) : (
                            <HiChevronDown
                              className="ms-auto block text-gray-600 dark:text-white"
                              size="20"
                            />
                          )}
                        </button>

                        {isOpenSidebar && (
                          <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                            <ul
                              className="hs-accordion-group ps-3 pt-2"
                              data-hs-accordion-always-open
                            >
                              <li
                                className="hs-accordion"
                                id="users-accordion-sub-1"
                              >
                                <button
                                  onClick={() => navigate("/product")}
                                  type="button"
                                  className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white cursor-default"
                                >
                                  Product
                                </button>
                              </li>
                            </ul>
                          </div>
                        )}
                      </li>

                      <li>
                        <a
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white cursor-default"
                          onClick={() => navigate("/order")}
                        >
                          <HiOutlineClipboardList size="20" />
                          Orders
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => navigate("/delivery")}
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white cursor-default"
                        >
                          <TbTruckDelivery size="20" />
                          Delivery
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => navigate("/discount")}
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white cursor-default"
                        >
                          <RiDiscountPercentLine size="20" />
                          Discount
                        </a>
                      </li>

                      <li>
                        <a
                          onClick={() => navigate("/customer")}
                          className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white cursor-default"
                        >
                          <HiOutlineUser size="20" />
                          Customer
                        </a>
                      </li>

                      <p className="text-gray-500 text-sm">ABOUT</p>
                      <li>
                        <a
                          className="flex items-center gap-x-3.5 cursor-default py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white"
                          href="https://github.com/apridev"
                        >
                          <FaGithub size="20" />
                          Github
                        </a>
                      </li>

                      <li>
                        <a
                          className="flex items-center cursor-default gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-700 dark:rounded-lg dark:text-white"
                          onClick={() => navigate("/")}
                        >
                          <HiOutlineLogout size="20" />
                          Log Out
                        </a>
                      </li>
                    </ul>
                  </nav>
                </p>
              </div>
            </div>
          </div>
          {/* Drawer Limit*/}

          <a
            className="flex-none max-lg:pl-4 text-xl font-semibold dark:text-white"
            href="#"
          >
            Dashboard Admin
          </a>

          <div className="sm:hidden">
            <button
              type="button"
              className="hs-collapse-toggle p-1 inline-flex justify-center items-center gap-x-1 rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-transparent dark:border-neutral-700 dark:text-white dark:hover:bg-white/10"
              aria-controls="navbar-collapse-with-animation"
              aria-label="Toggle navigation"
              onClick={toggleMenu}
            >
              {isMenu ? <HiX size="20" /> : <HiDotsVertical size="20" />}
            </button>
          </div>
        </div>
        <div
          id="navbar-collapse-with-animation"
          className={`hs-collapse ${
            isMenu ? "block" : "hidden"
          } overflow-hidden transition-all duration-300 pr-3 grow sm:block`}
        >
          <div className="flex flex-col space-y-3 md:space-x-2 gap-2 mt-5 sm:flex-row sm:items-center sm:justify-end sm:mt-0 sm:ps-5">
            {/* content navbar */}
            <div className="relative">
              <div
                className="flex items-center justify-between cursor-pointer dropdown-user"
                onClick={toggleDropdown}
              >
                <div className="flex items-center">
                  <div className="relative inline-block">
                    <img
                      className="inline-block size-8 rounded-full"
                      src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                      alt="Image Description"
                    />
                    <span className="absolute top-0 end-0 block size-1.5 rounded-full ring-2 ring-white bg-green-600 dark:ring-neutral-900"></span>
                  </div>
                  <span className="ml-2 text-gray-600 font-medium dark:text-white">User</span>
                </div>
                <HiChevronDown className="ml-2 text-gray-600 dark:text-white" size="24" />
              </div>
              {isOpen && (
                <div className="space-y-1">
                  <div className="p-2 mt-2">
                    <p className="ml-2 font-normal dark:text-gray-200">Setting</p>
                  </div>
                  <div className="p-2">
                    <p className="ml-2 font-normal dark:text-gray-200">About Me</p>
                  </div>
                  <div className="p-2">
                    <p className="ml-2 font-normal dark:text-gray-200">Log Out</p>
                  </div>
                </div>
              )}
              {/* <hr className="border-gray-300 dark:border-white"></hr> */}
            </div>
            <div className="flex items-center">
              <button className="button">
                <HiMail className="text-gray-600 dark:text-gray-200" size="24" />
              </button>
              <span className="md:hidden mb-auto pl-2 font-medium text-gray-600 dark:text-gray-200">
                Message
              </span>
            </div>
            <div className="flex items-center">
              <button className="button">
                <HiBell className="text-gray-600 dark:text-gray-200" size="24" />
              </button>
              <span className="md:hidden mb-auto pl-2 font-medium text-gray-600 dark:text-gray-200">
                Notification
              </span>
            </div>
          </div>
        </div>

        {/* Profile User */}
        <div
          className="relative inline-block custom-width-dropdown"
          ref={dropdownRef}
        >
          <button
            id="hs-dropdown-custom-trigger"
            type="button"
            onClick={toggleProfile}
            className="hs-dropdown-toggle py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-800 dark:text-white dark:hover:bg-neutral-800"
          >
            <div className="relative inline-block">
              <img
                className="inline-block size-[38px] rounded-full"
                src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
                alt="Image Description"
              />
              <span className="absolute top-0 end-0 block size-2.5 rounded-full ring-2 ring-white bg-green-600 dark:ring-neutral-900"></span>
            </div>
            <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-white">
              User
            </span>
            <HiChevronDown className="text-gray-600 dark:text-white" size="24" />
          </button>

          <div
            className={`hs-dropdown-menu transition-[opacity,margin] duration-200 absolute right-0 mt-2 w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border-gray-700 dark:border ${
              isProfile ? "block" : "hidden"
            }`}
            aria-labelledby="hs-dropdown-custom-trigger"
          >
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Setting
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              About Me
            </a>
            <a
              className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
              href="#"
            >
              Log Out
            </a>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default NavbarItem;
