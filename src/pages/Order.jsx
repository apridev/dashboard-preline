import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  HiChevronRight,
  HiOutlineSearch,
  HiChevronLeft,
  HiOutlineX,
} from "react-icons/hi";
import { FiFilter } from "react-icons/fi";
import orderList from "../data/orderList.json";

const Order = () => {
  const list = [
    "All",
    "Pending",
    "Ready to ship",
    "Shipped",
    "Delivered",
    "Returned",
  ];

  const [activeItem, setActiveItem] = useState("All");

  // dropdown filter
  const [isOpen, setIsOpen] = useState(false);

  const toogleDropdown = () => {
    setIsOpen(!isOpen);
  };

  // notication
  const [visible, setVisible] = useState(true);

  const handleNotification = () => {
    setVisible(false);
  };

  return (
    <>
      <Layout>
        <div className="content-padding"></div>
        {/* Breadcrumb */}
        <ol className="flex items-center whitespace-nowrap mb-5">
          <li className="inline-flex items-center">
            <a className="flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1 cursor-default dark:text-white">
              Order
            </a>
            <HiChevronRight
              size="20"
              className="text-gray-500 dark:text-white"
            />
          </li>
        </ol>

        {/* Header */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
          <h1 className="font-medium text-lg">Order Status</h1>
        </div>

        {/* Search */}
        <div className="mt-4">
          <form>
            <div className="max-w-md mt-auto">
              <div className="flex items-center  border border-gray-100 rounded-lg bg-white dark:bg-neutral-900 dark:border-neutral-700">
                <input
                  type="search"
                  id="search"
                  className="flex-grow bg-transparent text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 border-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500 dark:border-neutral-900"
                  placeholder="Search product..."
                />
                <div className="p-2.5">
                  <HiOutlineSearch color="gray" />
                </div>
              </div>
            </div>
          </form>
        </div>

        {/* Category Order */}
        <div className="mt-4 mb-4 flex flex-col sm:flex-row md:flex-row sm:justify-between">
          <ul className="flex flex-row gap-3 overflow-y-auto scrollbar-hide">
            {list.map((item) => (
              <li
                key={item}
                onClick={() => setActiveItem(item)}
                className={`px-4 py-2 rounded-xl font-normal border border-gray-30 dark:border-neutral-700  text-sm m-auto whitespace-nowrap cursor-pointer ${
                  activeItem === item
                    ? "bg-blue-600 text-white"
                    : "bg-gray-100 dark:bg-neutral-900 dark:text-neutral-400"
                }`}
              >
                {item}
              </li>
            ))}
          </ul>
          {/* Filter Dropdown */}
          <div className="relative inline-flex custom-dropdown-filter">
            <button
              type="button"
              className="py-3 px-4 inline-flex items-center gap-x-2 text-sm font-medium rounded-lg border border-gray-200 bg-white text-gray-800 shadow-sm hover:bg-gray-50 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:hover:bg-neutral-800"
              onClick={toogleDropdown}
            >
              <FiFilter />
              Filter
            </button>

            <div
              className={` absolute sm:right-0 sm:absolute top-full transition-[opacity,margin] duration ${
                isOpen ? "opacity-100" : "opacity-0 hidden"
              } min-w-60 bg-white shadow-md rounded-lg p-2 mt-2 dark:bg-neutral-800 dark:border dark:border-neutral-700 dark:divide-neutral-700 after:h-4 after:absolute after:-bottom-4 after:start-0 after:w-full before:h-4 before:absolute before:-top-4 before:start-0 before:w-full`}
            >
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                By Date
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Customer A - Z
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Customer Z - A
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Payment Process
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Payment Paid
              </a>
              <a
                className="flex items-center gap-x-3.5 py-2 px-3 rounded-lg text-sm text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 dark:text-neutral-400 dark:hover:bg-neutral-700 dark:hover:text-neutral-300 dark:focus:bg-neutral-700"
                href="#"
              >
                Payment Cancel
              </a>
            </div>
          </div>
        </div>

        {/* Table */}
        <div className="mt-3 bg-white border border-gray-200 dark:bg-neutral-900 dark:border-neutral-700 rounded-xl p-4 md:p-5">
          <div className="flex flex-col">
            <div className="-m-1.5 overflow-x-auto">
              <div className="p-1.5 min-w-full inline-block align-middle">
                <div className="border rounded-lg overflow-hidden dark:border-neutral-700">
                  <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700">
                    <thead className="bg-gray-50 dark:bg-neutral-780">
                      <tr>
                        <th
                          scope="col"
                          className="py-3 ps-4 dark:bg-neutral-800"
                        >
                          <div className="flex items-center h-5">
                            <input
                              id="hs-table-checkbox-all"
                              type="checkbox"
                              className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                            />
                            <label
                              for="hs-table-checkbox-all"
                              className="sr-only"
                            >
                              Checkbox
                            </label>
                          </div>
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          ID
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          Date
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          Customer Name
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          Payment Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          Order Status
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        >
                          Items
                        </th>
                        <th
                          scope="col"
                          className="px-6 py-3 text-start text-xs font-medium text-gray-500 dark:text-white uppercase dark:bg-neutral-800"
                        ></th>
                      </tr>
                    </thead>
                    <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                      {orderList.map((order) => (
                        <tr>
                          <td className="py-3 ps-4 dark:bg-neutral-800">
                            <div className="flex items-center h-5">
                              <input
                                id="hs-table-checkbox-1"
                                type="checkbox"
                                className="border-gray-200 rounded text-blue-600 focus:ring-blue-500 dark:bg-neutral-800 dark:border-neutral-700 dark:checked:bg-blue-500 dark:checked:border-blue-500 dark:focus:ring-offset-gray-800"
                              />
                              <label
                                for="hs-table-checkbox-1"
                                className="sr-only"
                              >
                                Checkbox
                              </label>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            {order.id}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            {order.date}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            {order.customer}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            {order.payment_status.paid && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Paid
                                </span>
                              </div>
                            )}
                            {order.payment_status.process && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-yellow-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Process
                                </span>
                              </div>
                            )}
                            {order.payment_status.cancel && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Cancel
                                </span>
                              </div>
                            )}
                            {!order.payment_status.paid &&
                              !order.payment_status.process &&
                              !order.payment_status.cancel &&
                              "Unknown"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            {order.order_status.pending && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-yellow-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Pending
                                </span>
                              </div>
                            )}
                            {order.order_status.delivered && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-green-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Delivered
                                </span>
                              </div>
                            )}
                            {order.order_status.shipped && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-blue-600 rounded-full me-2 dark:bg-blue-500"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Shipped
                                </span>
                              </div>
                            )}
                            {order.order_status.ready_to_ship && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-purple-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Ready to ship
                                </span>
                              </div>
                            )}
                            {order.order_status.returned && (
                              <div className="inline-flex items-center">
                                <span className="size-2 inline-block bg-red-500 rounded-full me-2"></span>
                                <span className="text-gray-600 dark:text-neutral-400">
                                  Returned
                                </span>
                              </div>
                            )}
                            {!order.order_status.pending &&
                              !order.order_status.delivered &&
                              !order.order_status.shipped &&
                              !order.order_status.ready_to_ship &&
                              !order.order_status.returned &&
                              "Unknown"}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            10 Items
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200 dark:bg-neutral-800">
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent color-view disabled:opacity-50 disabled:pointer-events-none"
                            >
                              Detail
                            </button>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Notification */}
        {visible && (
          <div className="flex items-center justify-center my-3">
            <div
              className="max-w-xl bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
              role="alert"
            >
              <div className="flex p-4">
                It has reached the page limit. If you haven't found the data you
                can search for it in the search bar.
                <div className="ms-auto">
                  <button
                    type="button"
                    className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-yellow-800 opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100 dark:text-yellow-200"
                    onClick={handleNotification}
                  >
                    <span className="sr-only">Close</span>
                    <HiOutlineX size="20" />
                  </button>
                </div>
              </div>
            </div>
          </div>
        )}

        {/* <!-- Pagination --> */}
        <div className="flex justify-center items-center gap-2 my-4">
          <nav className="flex items-center gap-x-1">
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m15 18-6-6 6-6"></path>
              </svg>
              <span aria-hidden="true" className="sr-only">
                Previous
              </span>
            </button>
            <div className="flex items-center gap-x-1">
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center bg-blue-600 text-white py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-300 disabled:opacity-50 disabled:pointer-events-none dark:bg-blue-600 dark:text-white dark:focus:bg-neutral-500"
                aria-current="page"
              >
                1
              </button>
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                2
              </button>
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                3
              </button>
              <div className="hs-tooltip inline-block">
                <button
                  type="button"
                  className="hs-tooltip-toggle group min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-400 hover:text-blue-600 p-2 text-sm rounded-lg focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:bg-white/10"
                >
                  <span className="group-hover:hidden text-xs">•••</span>
                  <svg
                    className="group-hover:block hidden flex-shrink-0 size-5"
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  >
                    <path d="m6 17 5-5-5-5"></path>
                    <path d="m13 17 5-5-5-5"></path>
                  </svg>
                  <span
                    className="hs-tooltip-content hs-tooltip-shown:opacity-100 hs-tooltip-shown:visible opacity-0 transition-opacity inline-block absolute invisible z-10 py-1 px-2 bg-gray-900 text-xs font-medium text-white rounded shadow-sm dark:bg-neutral-700"
                    role="tooltip"
                  >
                    Next 4 pages
                  </span>
                </button>
              </div>
              <button
                type="button"
                className="min-h-[38px] min-w-[38px] flex justify-center items-center text-gray-800 hover:bg-gray-100 py-2 px-3 text-sm rounded-full focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
              >
                10
              </button>
            </div>
            <button
              type="button"
              className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex jusify-center items-center gap-x-2 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            >
              <span aria-hidden="true" className="sr-only">
                Next
              </span>
              <svg
                className="flex-shrink-0 size-3.5"
                xmlns="http://www.w3.org/2000/svg"
                width="24"
                height="24"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                stroke-width="2"
                stroke-linecap="round"
                stroke-linejoin="round"
              >
                <path d="m9 18 6-6-6-6"></path>
              </svg>
            </button>
          </nav>
        </div>
      </Layout>
    </>
  );
};

export default Order;
