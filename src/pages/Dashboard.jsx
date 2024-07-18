import React from "react";
import Layout from "../components/Layout";
import { HiChevronRight } from "react-icons/hi";
import { Chart as ChartJS, defaults } from "chart.js/auto";
import { Bar, Doughnut, Line } from "react-chartjs-2";
import sourceData from "../data/sourceData.json";
import sourceLine from "../data/sourceLine.json";

defaults.maintainAspectRatio = false;
defaults.responsive = true;

const Dashboard = () => {
  return (
    <>
      <Layout>
        <div className="content-padding"></div>
        {/* Breadcrumb */}
        <ol className="flex items-center whitespace-nowrap mb-5">
          <li className="inline-flex items-center">
            <a className="flex items-center text-sm text-gray-500 focus:outline-none focus:text-blue-600 dark:hover:text-blue-500 dark:focus:text-blue-500 mr-1 cursor-default dark:text-white">
              Dashboard
            </a>
            <HiChevronRight size="20" className="text-gray-500" />
          </li>
        </ol>

        {/* Header */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div className="w-full flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 text-center justify-center items-center">
            <div className="p-4 md:p-5">
              <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                Product
              </h3>
              <p className="mt-2 text-gray-500 dark:text-white text-2xl text-center">
                100
              </p>
              <a className="cursor-default mt-3 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                View Product
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 text-center justify-center items-center">
            <div className="p-4 md:p-5">
              <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                User
              </h3>
              <p className="mt-2 text-gray-500 dark:text-white text-2xl text-center">
                1000
              </p>
              <a className="cursor-default mt-3 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                View User
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 text-center justify-center items-center">
            <div className="p-4 md:p-5">
              <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                Seles
              </h3>
              <p className="mt-2 text-gray-500 dark:text-white text-2xl text-center">
                200
              </p>
              <a className="cursor-default mt-3 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                View Seles
              </a>
            </div>
          </div>
          <div className="w-full flex flex-col bg-white border border-t-4 border-t-blue-600 shadow-sm rounded-xl dark:bg-neutral-900 dark:border-neutral-700 dark:border-t-blue-500 dark:shadow-neutral-700/70 text-center justify-center items-center">
            <div className="p-4 md:p-5">
              <h3 className="text-lg text-center font-bold text-gray-800 dark:text-white">
                Admin
              </h3>
              <p className="mt-2 text-gray-500 dark:text-white text-2xl text-center">
                10
              </p>
              <a className="cursor-default mt-3 inline-flex items-center text-sm font-semibold rounded-lg border border-transparent text-blue-600 hover:text-blue-800 disabled:opacity-50 disabled:pointer-events-none dark:text-blue-500 dark:hover:text-blue-400">
                View Admin
              </a>
            </div>
          </div>
        </div>

        {/* Statistics */}
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-1 gap-4 mt-5">
          <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Statistics 1</h2>
            <div style={{ height: "400px" }}>
              <Line
                data={{
                  labels: sourceLine.map((data) => data.label),
                  datasets: [
                    {
                      label: "Revenue",
                      data: sourceLine.map((data) => data.revenue),
                      backgroundColor: "#064FF0",
                      borderColor: "#064FF0",
                    },
                    {
                      label: "Const",
                      data: sourceLine.map((data) => data.cost),
                      backgroundColor: "#EE4E4E",
                      borderColor: "#EE4E4E",
                    }
                  ],
                }}
              />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-4 mt-5">
          <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Statistics 2</h2>
            <div style={{ height: "400px" }}>
              <Bar
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      label: "Dataset",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgb(255, 143, 143)",
                        "rgb(255, 211, 90)",
                        "rgb(138, 218, 178)",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
          <div class="flex flex-col bg-white border border-gray-200 shadow-sm rounded-xl p-4 md:p-5 dark:bg-neutral-900 dark:border-neutral-700 dark:text-neutral-400">
            <h2 className="text-lg font-medium text-gray-800 dark:text-white">Statistics 3</h2>
            <div style={{ height: "400px" }}>
              <Doughnut
                data={{
                  labels: sourceData.map((data) => data.label),
                  datasets: [
                    {
                      weight: 1,
                      label: "Count",
                      data: sourceData.map((data) => data.value),
                      backgroundColor: [
                        "rgb(91, 188, 255)",
                        "rgb(255, 250, 183)",
                        "rgb(255, 209, 227)",
                      ],
                    },
                  ],
                }}
              />
            </div>
          </div>
        </div>

      </Layout>
    </>
  );
};

export default Dashboard;
