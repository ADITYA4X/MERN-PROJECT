import React from "react";
import { MdOutlineShoppingCart } from "react-icons/md";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";
import { FaUsers } from "react-icons/fa";
import Chart from "react-apexcharts";
import { Link } from "react-router-dom";

const AdminDashboard = () => {
  const state = {
    series: [
      {
        name: "Orders",
        data: [23, 46, 45, 56, 67, 38, 59, 70, 45, 64, 58, 91],
      },
      {
        name: "Revenues(1k&#8377;)",
        data: [32, 67, 45, 84, 74, 62, 58, 66, 47, 76, 69, 80],
      },
      {
        name: "Sellers",
        data: [32, 43, 49, 56, 58, 50, 59, 60, 68, 63, 56, 64],
      },
    ],
    options: {
      color: ["#000000", "#000000"],
      plotOptions: {
        radius: 30,
      },
      chart: {
        background: "white",
        foreColor: "#090909",
        dropShadow: {
          enabled: true,
          top: 3,
          left: 2,
          blur: 4,
          opacity: 1,
        },
        zoom: {
          enabled: false, // Disable zooming
        },
      },
      title: {
        text: "Sales Performance",
        style: {
          fontSize: "19px", // Increase the font size
          fontWeight: "semi-bold", // Optional: Make it bold
          color: "black", // Optional: Set the title color
        },
        align: "left",
        offsetY: 8,
        offsetX: 6,
      },
      subtitle: {
        text: "Statistics",
        style: {
          fontSize: "16px", // Increase the font size
          fontWeight: "semi-bold", // Optional: Make it bold
          color: "#191717", // Optional: Set the title color
        },
        offsetY: 44,
        offsetX: 6,
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        show: true,
        curve: "smooth",
        width: 2,
      },
      markers: {
        size: 6,
        strokeWidth: 0,
        hover: {
          size: 9,
        },
      },
      grid: {
        show: true,
        padding: {
          bottom: 0,
        },
      },
      xaxis: {
        categories: [
          "Jan",
          "Feb",
          "Mar",
          "Apl",
          "May",
          "Jun",
          "Jul",
          "Aug",
          "Sep",
          "Oct",
          "Nov",
          "Dec",
        ],
      },
      legend: {
        position: "top",
        horizontalAlign: "right",
        offsetY: -10,
      },
      responsive: [
        {
          breakpoint: 565,
          yaxis: {
            categories: [
              "Jan",
              "Feb",
              "Mar",
              "Apl",
              "May",
              "Jun",
              "Jul",
              "Aug",
              "Sep",
              "Oct",
              "Nov",
              "Dec",
            ],
          },
          options: {
            plotOptions: {
              bar: {
                horizontal: true,
              },
            },
            chart: {
              height: "550px",
            },
          },
        },
      ],
    },
  };

  return (
    <div className="px-9 md:px-9 py-10">
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-9 mb-10">
        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3  ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start items-start ">
              <span className="text-xl font-medium text-stone-600">
                Total Sales
              </span>
              <h2 className="text-3xl font-bold text-stone-800">
                &#8377; 3434
              </h2>
            </div>
            <div className="w-[40px] h-[48px] rounded-full flex justify-center items-center text-4xl">
              <MdOutlineShoppingCart className="text-stone-700 shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start text-white">
              <span className="text-xl font-medium text-stone-600">
                Total Orders
              </span>
              <h2 className="text-3xl font-bold text-stone-800">4000</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3 ">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start items-start ">
              <span className="text-xl font-medium text-stone-600">
                Today's Sales
              </span>
              <h2 className="text-3xl font-bold text-stone-800">&#8377;3434</h2>
            </div>
            <div className="w-[40px] h-[48px] rounded-full flex justify-center items-center text-4xl">
              <MdOutlineShoppingCartCheckout className="text-stone-700 shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start text-white">
              <span className="text-xl font-medium text-stone-600">
                Today's Orders
              </span>
              <h2 className="text-3xl font-bold text-stone-800">4000</h2>
            </div>
          </div>
        </div>

        <div className="flex flex-col p-5 bg-white rounded-[34px] gap-3">
          <div className="flex justify-between items-center mb-4">
            <div className="flex flex-col justify-start items-start ">
              <span className="text-xl font-medium text-stone-600">
                Total Sellers
              </span>
              <h2 className="text-3xl font-bold text-stone-800">50</h2>
            </div>
            <div className="w-[40px] h-[48px] rounded-full flex justify-center items-center text-4xl">
              <FaUsers className="text-stone-700 shadow-lg" />
            </div>
          </div>
          <div className="flex justify-between items-center">
            <div className="flex flex-col justify-start items-start text-white">
              <span className="text-xl font-medium text-stone-600">
                Total Products
              </span>
              <h2 className="text-3xl font-bold text-stone-800">200</h2>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full flex flex-wrap mt-7">
        <div className="w-full lg:w-7/12 lg:pr-3">
          <div className="w-full bg-white p-4 rounded-[34px]">
            <Chart
              options={state.options}
              series={state.series}
              type="line"
              height={375}
            />
          </div>
        </div>

        <div className="w-full lg:w-5/12 lg:pl-4 mt-6 lg:mt-0">
          <div className="w-full bg-white px-8 py-6 rounded-[34px] text-stone-700">
            <div className="flex justify-between items-center">
              <h2 className="font-semibold text-lg text-stone-700 ">
                Recent Seller Message
              </h2>
              <Link className="font-semibold text-sm text-stone-700">
                View All
              </Link>
            </div>

            <div className="flex flex-col gap-2 pt-6 text-stone-700">
              <ol className="relative border-1 border-stone-400 ml-4">
                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[2px] bg-black rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src="http://localhost:3001/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-stone-700 rounded-3xl border border-stone-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-stone-300">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>

                    <div className="p-2 text-sm font-normal bg-stone-500 rounded-3xl border border-stone-900 text-white">
                      Hey how's is going ?
                    </div>
                  </div>
                </li>

                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[2px] bg-black rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src="http://localhost:3001/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-stone-700 rounded-3xl border border-stone-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-stone-300">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>

                    <div className="p-2 text-sm font-normal bg-stone-500 rounded-3xl border border-stone-900 text-white">
                      Hey how's is going ?
                    </div>
                  </div>
                </li>

                <li className="mb-3 ml-6">
                  <div className="flex absolute -left-5 shadow-lg justify-center items-center w-10 h-10 p-[2px] bg-black rounded-full z-10">
                    <img
                      className="w-full rounded-full h-full shadow-lg"
                      src="http://localhost:3001/images/admin.jpg"
                      alt=""
                    />
                  </div>
                  <div className="p-3 bg-stone-700 rounded-3xl border border-stone-600 shadow-sm">
                    <div className="flex justify-between items-center mb-2 text-stone-300">
                      <Link className="text-md font-normal">Admin</Link>
                      <time className="mb-1 text-sm font-normal sm:order-last sm:mb-0">
                        2 days ago
                      </time>
                    </div>

                    <div className="p-2 text-sm font-normal bg-stone-500 rounded-3xl border border-stone-900 text-white">
                      Hey how's is going ?
                    </div>
                  </div>
                </li>
              </ol>
            </div>
          </div>
        </div>
      </div>

      <div className="w-full py-6 px-8 bg-white rounded-[36px] mt-6">
        <div className="flex justify-between items-center mb-4 px-4">
          <h2 className="font-semibold text-lg text-stone-800">
            Recent Orders
          </h2>
          <Link className="font-semibold text-sm text-stone-700">View All</Link>
        </div>

        <div className="relative overflow-x-auto">
          <table className="w-full  text-sm text-left text-stone-700 ">
            <thead className="text-[14px] text-stone-700 uppercase  border-b border-stone-300">
              <tr>
                <th
                  id="orderId"
                  scope="col"
                  className="py-3 px-8 font-semibold"
                >
                  Order Id
                </th>
                <th
                  id="price"
                  scope="col"
                  className="py-3 px-10  font-semibold"
                >
                  Price
                </th>
                <th
                  id="payment"
                  scope="col"
                  className="py-3 px-8  font-semibold"
                >
                  Payment Status
                </th>
                <th id="order" scope="col" className="py-3 px-6  font-semibold">
                  Order Status
                </th>
                <th
                  id="status"
                  scope="col"
                  className="py-3 px-4  font-semibold"
                >
                  Active
                </th>
              </tr>
            </thead>

            <tbody>
              {[1, 2, 3, 4, 5].map((d, i) => (
                <tr key={i}>
                  <td
                    headers="orderId"
                    className="py-4 px-8 font-medium whitespace-nowrap"
                  >
                    #24244
                  </td>
                  <td
                    headers="price"
                    className="py-4 px-10 font-medium whitespace-nowrap"
                  >
                    &#8377;242
                  </td>
                  <td
                    headers="payment"
                    className="py-4 px-8 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    headers="order"
                    className="py-4 px-6 font-medium whitespace-nowrap"
                  >
                    Pending
                  </td>
                  <td
                    headers="status"
                    className="py-4 px-4 font-medium whitespace-nowrap"
                  >
                    <Link>View</Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminDashboard;
