import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { FaSlidersH } from "react-icons/fa";
import { FiSearch } from "react-icons/fi";
import { CiCalendarDate } from "react-icons/ci";

const EsimManagement = () => {
  const esimData = [
    {
      country: "USA",
      status: "Active",
      iccid: "s324",
      user: "bdddd",
      usage: 30,
    },
    {
      country: "EU",
      status: "Active",
      iccid: "84rr",
      user: "Borja",
      usage: 90,
    },
    {
      country: "USA",
      status: "Not Assign",
      iccid: "8966",
      user: "Assign Sim",
      usage: 0,
    },
    {
      country: "Mexico",
      status: "Active",
      iccid: "8988s",
      user: "Borja",
      usage: 50,
    },
    {
      country: "UK",
      status: "Active",
      iccid: "8988",
      user: "Borja",
      usage: 90,
    },
  ];

  return (
    <div className="p-6 bg-gray-100 flex-1">
      <div className="mb-4">
        <p className="text-gray-500">
          Lorem Ipsum is simply Lorem Ipsum is simply Lorem Ipsum is simply
        </p>
      </div>
      <div className="flex items-center space-x-4 mb-4">
        <div className="relative">
          <FiSearch className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="text"
            placeholder="Search by country..."
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="relative">
          <CiCalendarDate className="absolute left-3 top-2.5 text-gray-400" />
          <input
            type="date"
            className="pl-10 pr-4 py-2 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <button className="flex items-center px-4 py-2 bg-blue-500 text-white rounded-lg">
          <FaSlidersH className="mr-2" /> Filter
        </button>
      </div>
      <div className="bg-white shadow rounded-lg overflow-hidden">
        <table className="min-w-full">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Package
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Status
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                ICCID
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                eSIM User
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Data Usage
              </th>
              <th className="px-4 py-2 text-left text-sm font-medium text-gray-500">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {esimData.map((esim, index) => (
              <tr key={index} className="border-t">
                <td className="px-4 py-2 flex items-center space-x-2">
                  
                  <span className="flag-icon flag-icon-{esim.country.toLowerCase()}"></span>
                  <span>Joia ({esim.country})</span>
                </td>
                <td className="px-4 py-2">
                  <span
                    className={`px-2 py-1 rounded-full text-xs ${
                      esim.status == 'Active'
                        ? "bg-purple-100 text-purple-700"
                        : "bg-red-100 text-red-500"
                    }`}
                  >
                    {esim.status}
                  </span>
                </td>
                <td className="px-4 py-2">{esim.iccid}</td>
                <td className="px-4 py-2">
                  {esim.status == "Active" ? (
                    esim.user
                  ) : (
                    <button className="text-blue-500 border border-blue-500 px-2 py-1 rounded">
                      {esim.user}
                    </button>
                  )}
                </td>
                <td className="px-4 py-2">
                  {esim.status === "Not Assign" ? (
                    "N/A"
                  ) : (
                    <div className="w-full bg-gray-200 rounded-full h-2.5">
                      <div
                        className={`h-2.5 rounded-full w-1/2 ${
                          esim.usage > 80
                            ? "bg-red-500"
                            : esim.usage > 50
                            ? "bg-yellow-500"
                            : "bg-green-500"
                        }`}
                      ></div>
                    </div>
                  )}
                </td>
                <td className="px-4 py-2 text-center">
                  <BsThreeDots className="text-gray-500 cursor-pointer" />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EsimManagement;
