import React from 'react'
import Sidebar from '../components/Sidebar'
import Topbar from '../components/Topbar'
import Tabs from '../components/Tabs'
import DetailPanel from '../components/DetailPanel'
import SubDetails from '../components/SubDetails'

const MainLayout = () => {
  return (
    <div className="min-h-screen bg-gray-50">
      <Sidebar />
      <div className="ml-64">
        <Topbar />
        <Tabs />
        <main className="p-6">
          <div className="grid grid-cols-2 gap-6 mb-6">
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