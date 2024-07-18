import React from "react";
import Layout from "../components/Layout";
import { HiChevronRight } from "react-icons/hi";
import { useNavigate } from "react-router-dom";

const CreateProduct = () => {
  const navigate = useNavigate();
  return (
    <>
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
              className="cursor-default flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:text-neutral-500 dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1"
            >
              Product
            </a>
            <HiChevronRight size="20" className="text-gray-500" />
          </li>
          <li className="inline-flex items-center">
            <a
              onClick={() => navigate("/product")}
              className="cursor-default flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1 dark:text-white"
            >
              Create
            </a>
            <HiChevronRight size="20" className="text-gray-500 dark:text-white" />
          </li>
        </ol>

        {/* Header */}
        <div className="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
          <h1 className="font-medium text-lg dark:text-white">Create Product</h1>
        </div>

        {/* Forms */}
        <div className="mt-3 bg-white border border-gray-200 rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700">
          <div className="space-y-4">
            <div>
              <label
                for="input-label"
                class="block text-sm font-medium mb-3 dark:text-white"
              >
                Name
              </label>
              <input
                type="text"
                id="input-label"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700  dark:placeholder-neutral-500 dark:focus:ring-neutral-600 dark:text-white"
                placeholder="Enter your product name..."
              />
            </div>
            <div>
              <label
                for="input-label"
                class="block text-sm font-medium mb-3 dark:text-white"
              >
                Price
              </label>
              <input
                type="number"
                id="input-label"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="0"
              />
            </div>
            <div>
              <label
                for="input-label"
                className="block text-sm font-medium mb-3 dark:text-white"
              >
                Category
              </label>
              <select class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <option selected="">Select Category</option>
                <option>T-shirt</option>
                <option>Shoes</option>
                <option>Shirt</option>
                <option>Bag</option>
                <option>Hoodie</option>
              </select>
            </div>
            <div>
              <label
                for="input-label"
                className="block text-sm font-medium mb-3 dark:text-white"
              >
                Brand
              </label>
              <select class="py-3 px-4 pe-9 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600">
                <option selected="">Select Brand</option>
                <option>Nike</option>
                <option>Adidas</option>
                <option>H&M</option>
                <option>Puma</option>
                <option>Other</option>
              </select>
            </div>
            <div>
              <label
                for="input-label"
                class="block text-sm font-medium mb-3 dark:text-white"
              >
                Detail Product
              </label>
              <textarea
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                rows="3"
                placeholder="Enter detail your product..."
              ></textarea>
            </div>
            <div>
              <label
                for="input-label"
                className="block text-sm font-medium mb-3 dark dark:text-white"
              >
                Upload Product Image
              </label>
              <form>
                <label for="file-input" class="sr-only mb-3">
                  Choose file
                </label>
                <input
                  type="file"
                  name="file-input"
                  id="file-input"
                  class="block w-full border border-gray-200 shadow-sm rounded-lg text-sm focus:z-10 focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400
                file:bg-gray-50 file:border-0
                  file:me-4
                  file:py-3 file:px-4
                 dark:file:bg-neutral-700 dark:file:text-neutral-400"
                />
              </form>
              <div
                class="mt-2 bg-yellow-100 border border-yellow-200 text-sm text-yellow-800 rounded-lg p-4 dark:bg-yellow-800/10 dark:border-yellow-900 dark:text-yellow-500"
                role="alert"
              >
                <span class="font-bold">Note*</span> Product photo max <b>5mb</b> with size <b>562x562</b> so that the quality can be clear.
              </div>
            </div>
            <div>
              <label
                for="input-label"
                class="block text-sm font-medium mb-3 dark:text-white"
              >
                Stock
              </label>
              <input
                type="number"
                id="input-label"
                class="py-3 px-4 block w-full border-gray-200 rounded-lg text-sm focus:border-blue-500 focus:ring-blue-500 disabled:opacity-50 disabled:pointer-events-none dark:bg-neutral-900 dark:border-neutral-700 dark:text-white dark:placeholder-neutral-500 dark:focus:ring-neutral-600"
                placeholder="0"
              />
            </div>
            <button
              type="button"
              class="py-3 w-full px-4 inline-flex justify-center items-center gap-x-2 text-sm font-semibold rounded-lg border border-transparent bg-blue-600 text-white hover:bg-blue-700 disabled:opacity-50 disabled:pointer-events-none"
            >
              Create Product
            </button>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default CreateProduct;
