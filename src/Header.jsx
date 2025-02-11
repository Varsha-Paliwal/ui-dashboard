import React from 'react'

const Header = () => (
    <div className="flex justify-between items-center p-4 bg-white shadow">
      <div className="text-xl font-bold">eSIM Management</div>
      <div className="flex items-center space-x-4">
        <div className="text-gray-500">John Doe</div>
        <div className="w-10 h-10 bg-gray-300 rounded-full flex items-center justify-center">
          JD
        </div>
      </div>
    </div>
  );

export default Header
