import React, { useState } from "react";
import {
  HiBadgeCheck,
  HiOutlineHome,
  HiOutlineClipboardList,
  HiOutlineUser,
  HiOutlineLogout,
  HiOutlineShoppingBag,
  HiChevronDown,
  HiChevronUp,
} from "react-icons/hi";
import { FaGithub } from "react-icons/fa";
import { TbTruckDelivery } from "react-icons/tb";
import { RiDiscountPercentLine } from "react-icons/ri";
import { useNavigate } from "react-router-dom";

const SidebarItem = () => {
  const navigate = useNavigate();

  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div
      id="docs-sidebar"
      className="hs-overlay [--auto-close:lg] hs-overlay-open:translate-x-0 -translate-x-full transition-all duration-300 transform hidden fixed top-0 start-0 bottom-0 z-[60] w-64 bg-white border-e border-gray-200 pt-7 pb-10 overflow-y-auto lg:block lg:translate-x-0 lg:end-auto lg:bottom-0 [&::-webkit-scrollbar]:w-2 [&::-webkit-scrollbar-thumb]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-neutral-700 dark:[&::-webkit-scrollbar-thumb]:bg-neutral-500 dark:bg-neutral-800 dark:border-neutral-700"
    >
      <div className="px-6 flex items-center">
        <a
          className="flex-none text-xl font-semibold dark:text-white"
          href="#"
          aria-label="Brand"
        >
          Apridev Store
        </a>
        <HiBadgeCheck size="20" className="text-center ml-1 text-blue-600" />
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
              className="cursor-default flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white"
            >
              <HiOutlineHome size="20" />
              Dashboard
            </a>
          </li>
          <p className="text-gray-500 text-sm">EXAMPLES</p>
          <li className="hs-accordion" id="users-accordion">
            <button
              type="button"
              className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-white dark:hover:text-neutral-300 dark:hs-accordion-active:text-white"
              onClick={toggleDropdown}
            >
              <HiOutlineShoppingBag size="20" />
              Ecommerce
              {isOpen ? (
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

            {isOpen && (
              <div className="hs-accordion-content w-full overflow-hidden transition-[height] duration-300">
                <ul
                  className="hs-accordion-group ps-3 pt-2"
                  data-hs-accordion-always-open
                >
                  <li className="hs-accordion" id="users-accordion-sub-1">
                    <button
                      onClick={() => navigate("/product")}
                      type="button"
                      className="hs-accordion-toggle hs-accordion-active:text-blue-600 hs-accordion-active:hover:bg-transparent w-full text-start flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg hover:bg-gray-100 dark:bg-neutral-800 dark:hover:bg-neutral-700 dark:text-neutral-400 dark:hover:text-neutral-300 dark:hs-accordion-active:text-white cursor-default"
                    >
                      Product
                    </button>
                  </li>
                  {/* Tambahkan item dropdown lainnya di sini */}
                </ul>
              </div>
            )}
          </li>

          <li>
            <a
              onClick={() => navigate("/order")}
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white cursor-default"
            >
              <HiOutlineClipboardList size="20" />
              Orders
            </a>
          </li>

          <li>
            <a
              onClick={() => navigate("/delivery")}
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white cursor-default"
            >
              <TbTruckDelivery size="20" />
              Delivery
            </a>
          </li>

          <li>
            <a
              onClick={() => navigate("/discount")}
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white cursor-default"
            >
              <RiDiscountPercentLine size="20" />
              Discount
            </a>
          </li>

          <li>
            <a
              onClick={() => navigate("/customer")}
              className="flex items-center gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white cursor-default"
            >
              <HiOutlineUser size="20" />
              Customer
            </a>
          </li>

          <p className="text-gray-500 text-sm">ABOUT</p>
          <li>
            <a
              className="flex items-center gap-x-3.5 cursor-default py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white"
              href="https://github.com/apridev"
            >
              <FaGithub size="20" />
              Github
            </a>
          </li>

          <li>
            <a
              className="flex items-center cursor-default gap-x-3.5 py-2 px-2.5 text-sm text-gray-700 rounded-lg dark:hover:bg-neutral-700 hover:bg-gray-100 dark:text-white"
              onClick={()=> navigate('/')}
            >
              <HiOutlineLogout size="20" />
              Log Out
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default SidebarItem;
