import React, { useState } from 'react';
import { HiChevronDown } from 'react-icons/hi';

const ProfileDropdown = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };

  return (
    <div className="relative inline-block custom-width-dropdown">
      <button
        id="hs-dropdown-custom-trigger"
        type="button"
        onClick={toggleDropdown}
        className="py-1 ps-1 pe-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-full bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:text-white dark:hover:bg-neutral-800"
      >
        <div className="relative inline-block">
          <img
            className="inline-block w-10 h-10 rounded-full"
            src="https://images.unsplash.com/photo-1568602471122-7832951cc4c5?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=facearea&facepad=2&w=300&h=300&q=80"
            alt="Profile"
          />
          <span className="absolute top-0 right-0 block w-2.5 h-2.5 rounded-full ring-2 ring-white bg-green-600 dark:ring-neutral-900"></span>
        </div>
        <span className="text-gray-600 font-medium truncate max-w-[7.5rem] dark:text-neutral-400">
          User
        </span>
        <HiChevronDown className="text-gray-600" size="24" />
      </button>

      {isOpen && (
        <div
          className="absolute right-0 mt-2 min-w-60 bg-white shadow-md rounded-lg p-2 dark:bg-neutral-800 dark:border dark:border-neutral-700"
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
      )}
    </div>
  );
};

export default ProfileDropdown;