import React, { useState } from 'react'

const Tabs = () => {
  const [activeTab, setActiveTab] = useState('t01')

  const tabs = [
    { id: 't01', label: 'T01' },
    { id: 't02', label: 'T02' },
    { id: 't03', label: 'T03' },
    { id: 't04', label: 'T04' },
    { id: 't05', label: 'T05' },
    { id: 't06', label: 'T06' },
  ]

  return (
    <div className="flex items-center space-x-4 ml-64 px-6 py-4 bg-white border-b border-gray-200">
      {tabs.map((tab) => (
        <div key={tab.id} className="flex items-center">
          <button
            className={`px-4 py-2 rounded-lg font-medium transition-colors ${
              activeTab === tab.id
                ? 'tab-active'
                : 'tab-inactive'
            }`}
            onClick={() => setActiveTab(tab.id)}
          >
            {tab.label}
          </button>
          {tab.id === 't01' && (
            <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
              S - 01
            </span>
          )}
          {tab.id === 't02' && (
            <span className="ml-2 px-2 py-1 bg-red-500 text-white text-xs rounded-full">
              S - 02
            </span>
          )}
        </div>
      ))}
      
      <div className="ml-auto">
        <button className="px-4 py-2 bg-red-600 text-white rounded-full font-medium hover:bg-red-700 transition-colors">
          Add T
        </button>
      </div>
    </div>
  )
}

export default Tabs