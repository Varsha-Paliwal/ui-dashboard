import React from "react";
import { FaUser, FaShoppingCart } from "react-icons/fa";
import { IoMdHelp } from "react-icons/io";

const SideBar = () => (
  <div className="w-64 h-screen bg-blue-900 text-white p-4">
    <div className="text-2xl font-bold mb-10 flex items-center space-x-2">
      <div className="text-3xl" />
      <span>World eSIM</span>
    </div>
    <nav className="space-y-4">
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaUser />
        <span>Summary</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaShoppingCart />
        <span>ESIM Store</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer bg-blue-700">
        <FaUser />
        <span>ESIM Management</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaShoppingCart />
        <span>Orders</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaUser />
        <span>Users</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaShoppingCart />
        <span>Credits</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaUser />
        <span>Billings</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <FaShoppingCart />
        <span>Analytics</span>
      </div>
      <div className="flex items-center space-x-3 p-2 rounded-lg cursor-pointer hover:bg-blue-800">
        <IoMdHelp />
        <span>Helps</span>
      </div>
    </nav>
  </div>
);

export default SideBar;
