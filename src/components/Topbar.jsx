import React from 'react'
import { Bell, User, ChevronRight, Menu } from 'lucide-react'

const Topbar = ({ setIsSidebarOpen }) => {
  return (
    <div className="h-16 bg-white border-b border-gray-200 flex items-center justify-between px-6 ml-0 lg:ml-64">
      <div className="flex items-center">
        <button 
          className="lg:hidden mr-4 p-2 rounded-md hover:bg-gray-100"
          onClick={() => setIsSidebarOpen(true)}
        >
          <Menu size={20} />
        </button>
        <div className="flex items-center text-gray-600 text-sm">
          <span>Main</span>
          <ChevronRight size={16} className="mx-2" />
          <span>Sub</span>
        </div>
      </div>
      
      <div className="flex items-center space-x-4">
        <button className="p-2 rounded-full hover:bg-gray-100 transition-colors">
          <Bell size={20} className="text-gray-600" />
        </button>
        
        <div className="flex items-center space-x-3">
          <div className="w-8 h-8 rounded-full bg-gray-300 flex items-center justify-center">
            <User size={18} className="text-gray-600" />
          </div>
          <span className="font-medium text-gray-800">John Smith</span>
        </div>
      </div>
    </div>
  )
}

export default Topbar