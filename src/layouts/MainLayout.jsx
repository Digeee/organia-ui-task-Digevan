import React, { useState } from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Tabs from '../components/Tabs'
import DetailPanel from '../components/DetailPanel'
import SubDetails from '../components/SubDetails'

const MainLayout = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false)

  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar isOpen={isSidebarOpen} setIsOpen={setIsSidebarOpen} />
      <div className="ml-0 lg:ml-64">
        <Topbar setIsSidebarOpen={setIsSidebarOpen} />
        <Tabs />
        <main className="p-4 sm:p-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-4 sm:gap-6 mb-6">
            <DetailPanel title="Details 1" />
            <DetailPanel title="Details 2" />
          </div>
          <SubDetails />
        </main>
      </div>
    </div>
  )
}

export default MainLayout