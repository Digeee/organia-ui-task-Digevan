import React, { useState } from 'react'
import { ChevronDown, ChevronRight, CheckCircle, Circle, Menu, X } from 'lucide-react'

const Sidebar = ({ isOpen, setIsOpen }) => {
  const [expandedMenu, setExpandedMenu] = useState('menu1')
  const [activeSubItem, setActiveSubItem] = useState('sub1')

  const menuItems = [
    { id: 'menu1', label: 'Menu1', hasSubItems: true },
    { id: 'menu2', label: 'Menu2', hasSubItems: false },
    { id: 'menu3', label: 'Menu3', hasSubItems: false },
    { id: 'menu4', label: 'Menu4', hasSubItems: false },
    { id: 'menu5', label: 'Menu5', hasSubItems: false },
    { id: 'menu6', label: 'Menu6', hasSubItems: false },
    { id: 'menu7', label: 'Menu7', hasSubItems: false },
    { id: 'menu8', label: 'Menu8', hasSubItems: false },
  ]

  const subItems = [
    { id: 'sub1', label: 'Sub1', completed: true },
    { id: 'sub2', label: 'Sub2', completed: false },
    { id: 'sub3', label: 'Sub3', completed: false },
  ]

  const toggleMenu = (menuId) => {
    setExpandedMenu(expandedMenu === menuId ? null : menuId)
  }

  return (
    <>
      {/* Mobile overlay */}
      {isOpen && (
        <div 
          className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden"
          onClick={() => setIsOpen(false)}
        />
      )}
      
      {/* Sidebar */}
      <div className={`w-64 bg-white border-r border-gray-200 h-screen fixed left-0 top-0 overflow-y-auto z-50 transition-transform duration-300 ease-in-out ${
        isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
      }`}>
        <div className="p-6">
          <div className="flex items-center justify-between mb-8">
            <h1 className="text-xl font-bold text-gray-800">Logo</h1>
            <button 
              className="lg:hidden p-2 rounded-md hover:bg-gray-100"
              onClick={() => setIsOpen(false)}
            >
              <X size={20} />
            </button>
          </div>
        
        <nav className="space-y-1">
          {menuItems.map((item) => (
            <div key={item.id}>
              <div 
                className={`flex items-center justify-between px-4 py-3 text-gray-700 hover:bg-gray-100 cursor-pointer transition-colors rounded-lg ${
                  expandedMenu === item.id ? 'bg-blue-50 text-blue-700' : ''
                }`}
                onClick={() => item.hasSubItems && toggleMenu(item.id)}
              >
                <span className="font-medium">{item.label}</span>
                {item.hasSubItems && (
                  expandedMenu === item.id ? 
                    <ChevronDown size={16} /> : 
                    <ChevronRight size={16} />
                )}
              </div>
              
              {item.hasSubItems && expandedMenu === item.id && (
                <div className="ml-8 mt-2 space-y-1">
                  {subItems.map((subItem) => (
                    <div 
                      key={subItem.id}
                      className={`flex items-center px-3 py-2 text-sm cursor-pointer rounded-md transition-colors ${
                        activeSubItem === subItem.id 
                          ? 'bg-green-50 text-green-700' 
                          : 'text-gray-600 hover:bg-gray-100'
                      }`}
                      onClick={() => setActiveSubItem(subItem.id)}
                    >
                      {subItem.completed ? (
                        <CheckCircle size={16} className="text-green-500 mr-2" />
                      ) : (
                        <Circle size={16} className="text-gray-400 mr-2" />
                      )}
                      <span>{subItem.label}</span>
                    </div>
                  ))}
                </div>
              )}
            </div>
          ))}
        </nav>
      </div>
    </div>
    </>
  )
}

export default Sidebar