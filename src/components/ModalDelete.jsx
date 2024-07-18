import React from "react";

const ModalDelete = ({ isOpen, onClose }) => {
  if (!isOpen) return null;

  return (
    <>
      <div className="hs-overlay fixed inset-0 z-[80] overflow-x-hidden overflow-y-auto bg-gray-900 bg-opacity-20 flex items-center justify-center" style={{margin : 0}}>
        {/* bg-opacity bertambah dengan banyaknya data yang dipanggil */}
        <div className="bg-white dark:bg-neutral-800 dark:border-gray-700 border shadow-sm rounded-xl w-full max-w-lg m-3 sm:mx-auto">
          <div className="flex justify-between items-center py-3 px-4 border-b dark:border-b-gray-700">
            <h3 className="font-bold text-gray-800 dark:text-white">Delete Data</h3>
            <button
              type="button"
              className="flex justify-center items-center w-7 h-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100"
              onClick={onClose}
            >
              <span className="sr-only">Close</span>
              <svg
                className="flex-shrink-0 w-4 h-4"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M18 6 6 18"></path>
                <path d="m6 6 12 12"></path>
              </svg>
            </button>
          </div>
          <div className="p-4 overflow-y-auto">
            <p className="text-gray-800 text-base dark:text-white">
              Do you want to delete data?
            </p>
              <p className="font-medium mt-2 text-base dark:text-neutral-400">T-shirt xl</p>
          </div>
          <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-t-gray-700">
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg color-delete"
              onClick={onClose}
            >
              Close
            </button>
            <button
              type="button"
              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border shadow border-gray-300 dark:text-white dark:border-neutral-700"
            >
              Delete
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default ModalDelete;
