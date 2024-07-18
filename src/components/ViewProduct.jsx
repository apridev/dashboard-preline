import React from "react";

const ViewProduct = ({ showModal, closeModal }) => {
  return (
    <>
      <div
        className={`${
          showModal ? "flex" : "hidden"
        } size-full fixed top-0 start-0 z-[80] items-center overflow-x-hidden bg-gray-900 bg-opacity-20`}
        style={{ margin: 0 }}
        // bg-opacity bertambah dengan banyaknya data yang dipanggil
      >
        <div className="hs-overlay-open:mt-7 hs-overlay-open:opacity-100 hs-overlay-open:duration-500 mt-0 ease-out transition-all sm:max-w-lg sm:w-full m-3 sm:mx-auto h-[calc(100%-3.5rem)] min-h-[calc(100%-3.5rem)] flex items-center">
          <div className="w-full max-h-full overflow-hidden flex flex-col bg-white border shadow-sm rounded-xl pointer-events-auto dark:bg-neutral-800 dark:border-neutral-700 dark:shadow-neutral-700/70">
            <div className="flex justify-between items-center py-3 px-4 border-b dark:border-neutral-700">
              <h3 className="font-bold text-gray-800 dark:text-white">
                View Product
              </h3>
              <button
                type="button"
                className="flex justify-center items-center size-7 text-sm font-semibold rounded-full border border-transparent text-gray-800 hover:bg-gray-100 dark:text-white dark:hover:bg-neutral-700"
                onClick={closeModal}
              >
                <span className="sr-only">Close</span>
                <svg
                  className="flex-shrink-0 size-4"
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
              <div className="space-y-4">
                <img
                  className="w-full h-auto rounded-t-xl"
                  src="https://images.unsplash.com/photo-1680868543815-b8666dba60f7?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=2532&q=80"
                  alt="Image Description"
                />
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Product Name
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    Questar shoes
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Price
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    IDR 1.300.000
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Category
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    Sneakers
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Brand
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    Adidas
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Detail Product
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                    Odio eos, voluptatem facere labore ea praesentium magni
                    laudantium quae quisquam dolores illum quam iure explicabo
                    facilis eum possimus ipsum itaque quaerat.
                  </p>
                </div>
                <div>
                  <h3 className="text-lg font-semibold text-gray-800 dark:text-white">
                    Stock
                  </h3>
                  <p className="mt-1 text-gray-800 dark:text-neutral-400">
                    761
                  </p>
                </div>
              </div>
            </div>
            <div className="flex justify-end items-center gap-x-2 py-3 px-4 border-t dark:border-neutral-700">
              <button
                type="button"
                className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
                onClick={closeModal}
              >
                Close
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ViewProduct;
