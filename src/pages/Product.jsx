import React, { useState } from "react";
import Layout from "../components/Layout";
import {
  HiChevronRight,
  HiOutlineSearch,
  HiChevronLeft,
  HiOutlineX,
} from "react-icons/hi";
import { BsEmojiFrown } from "react-icons/bs";
import { useNavigate } from "react-router-dom";
import ModalDelete from "../components/ModalDelete";
import ViewProduct from "../components/ViewProduct";
import productList from "../data/productList.json";

const Product = () => {
  const navigate = useNavigate();

  // Delete Button
  const [isModalOpen, setIsModalOpen] = useState(false);

  const openModal = () => setIsModalOpen(true);
  const closeModal = () => setIsModalOpen(false);

  // View Button
  const [showModal, setShowModal] = useState(false);

  const openView = () => setShowModal(true);
  const closeView = () => setShowModal(false);

  // Notification
  const [visible, setVisible] = useState(true);

  const handleNotification = () => {
    setVisible(false);
  };

  // todo: Format rupiah
  function formatRupiah(number) {
    return new Intl.NumberFormat("id-ID", {
      style: "currency",
      currency: "IDR",
      minimumFractionDigits: 0,
    }).format(number);
  }

  return (
    <Layout>
      <div className="content-padding"></div>
      {/* Breadcrumb */}
      <ol className="flex items-center whitespace-nowrap mb-5">
        <li className="inline-flex items-center">
          <a className="flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1 cursor-default">
            Ecommerce
          </a>
          <HiChevronRight size="20" className="text-gray-500" />
        </li>
        <li className="inline-flex items-center">
          <a
            onClick={() => navigate("/product")}
            className="cursor-default flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-white dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1"
          >
            Product
          </a>
          <HiChevronRight size="20" className="text-gray-500" />
        </li>
      </ol>

      {/* Header */}
      <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
        <h1 className="font-medium text-lg dark:text-white">Product</h1>
      </div>

      {/* Search and Create Button */}
      <div className="flex justify-between mt-5">
        <div className="mt-auto">
          <button
            type="button"
            className="text-white cursor-default bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800"
            onClick={() => navigate("/product/create")}
          >
            Product +
          </button>
        </div>
        <form>
          <div className="max-w-md mt-auto">
            <div className="flex items-center border border-gray-300 rounded-lg bg-gray-50 dark:bg-neutral-900 dark:border-neutral-700">
              <input
                type="search"
                id="search"
                className="flex-grow bg-transparent text-gray-900 text-sm rounded-l-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:placeholder-gray-400 border-gray-200 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="Search product..."
              />
              <div className="p-2.5">
                <HiOutlineSearch color="gray" />
              </div>
            </div>
          </div>
        </form>
      </div>

      {/* Notification Success */}
      {visible && (
        <div
          className="w-full bg-teal-500 text-sm text-white rounded-xl shadow-lg mt-2"
          role="alert"
        >
          <div className="flex p-4">
            Successfully added products.
            <div className="ms-auto">
              <button
                type="button"
                className="inline-flex flex-shrink-0 justify-center items-center size-5 rounded-lg text-white hover:text-white opacity-50 hover:opacity-100 focus:outline-none focus:opacity-100"
                onClick={handleNotification}
              >
                <span className="sr-only">Close</span>
                <HiOutlineX color="white" />
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Tables */}
      <div className="mt-3 bg-white border border-gray-200 rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700">
        <div className="flex flex-col">
          <div className="-m-1.5 overflow-x-auto">
            <div className="p-1.5 min-w-full inline-block align-middle">
              <div className="overflow-hidden">
                <table className="min-w-full divide-y divide-gray-200 dark:divide-neutral-700 border border-spacing-1 border-gray-200 dark:bg-neutral-800 dark:border-none rounded-lg">
                  <thead>
                    <tr>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        No
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Name
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Price
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Category
                      </th>
                      <th
                        scope="col"
                        className="px-6 py-3 text-start text-xs font-medium text-gray-500 uppercase dark:text-neutral-500"
                      >
                        Brand
                      </th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-gray-200 dark:divide-neutral-700">
                    {productList.map((product) => (
                      <tr
                        className="hover:bg-gray-100 dark:hover:bg-neutral-700"
                        key={product.id}
                      >
                        <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-800 dark:text-neutral-200">
                          {product.id}
                        </td>
                        <td
                          className="px-6 py-4 whitespace-nowrap max-w-36 text-sm overflow-hidden font-medium text-gray-800 dark:text-neutral-200"
                          style={{
                            textOverflow: "ellipsis",
                          }}
                        >
                          {product.name}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {formatRupiah(product.price)}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {product.category}
                        </td>
                        <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-800 dark:text-neutral-200">
                          {product.brand}
                        </td>
                        <td className="px-6 py-4 text-sm font-normal">
                          <div className="space-x-2 flex">
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent color-view disabled:opacity-50 disabled:pointer-events-none"
                              onClick={openView}
                            >
                              View
                            </button>

                            <ViewProduct
                              showModal={showModal}
                              closeModal={closeView}
                            />
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent color-edit disabled:opacity-50 disabled:pointer-events-none"
                              onClick={() => navigate("/product/edit/:id")}
                            >
                              Edit
                            </button>
                            <button
                              type="button"
                              className="py-2 px-3 inline-flex items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent color-delete disabled:opacity-50 disabled:pointer-events-none"
                              onClick={openModal}
                            >
                              Delete
                            </button>
                            <ModalDelete
                              isOpen={isModalOpen}
                              onClose={closeModal}
                            />
                          </div>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </div>
        <div className="mt-3 dark:text-white">
          <p>Total Product : 5</p>
          <span>Page: 1 of 5</span>
        </div>
      </div>

      {/* Pagination */}
      <div className="flex justify-center items-center gap-2 my-5">
        <nav className="flex items-center gap-x-1">
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
            disabled=""
          >
            <HiChevronLeft
              className="text-gray-800 dark:text-white"
              size="20"
            />
            <span>Previous</span>
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
          </div>
          <button
            type="button"
            className="min-h-[38px] min-w-[38px] py-2 px-2.5 inline-flex justify-center items-center gap-x-1.5 text-sm rounded-full text-gray-800 hover:bg-gray-100 focus:outline-none focus:bg-gray-100 disabled:opacity-50 disabled:pointer-events-none dark:text-white dark:hover:bg-white/10 dark:focus:bg-white/10"
          >
            <span>Next</span>
            <HiChevronRight
              className="text-gray-800 dark:text-white"
              size="20"
            />
          </button>
        </nav>
      </div>

      {/* Empty Data */}

      {/* Header */}
      <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 mt-7">
        <h1 className="font-medium text-lg dark:text-white">Empty Product</h1>
      </div>

      {/* No Data */}
      <div className="flex flex-col bg-white justify-center items-center border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400 mt-5">
        <div className="flex flex-col items-center justify-center">
          <BsEmojiFrown
            className="text-gray-400 dark:text-gray-400"
            size="50"
          />
          <p className="text-center mt-3 text-gray-400 text-lg dark:text-gray-400">
            You don't have product data
          </p>
        </div>
      </div>
    </Layout>
  );
};

export default Product;
