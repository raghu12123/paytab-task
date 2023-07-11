import React from 'react'
import { AppFooter, AppHeader } from '../components/index'
import Dashboard from '../views/dashboard/Dashboard'

const DefaultLayout = () => {
  return (
    <div>
      <div className="wrapper d-flex flex-column min-vh-100 bg-light">
        <AppHeader />
        <div className="body flex-grow-1 px-3">
        <Dashboard/>
        </div>
        <AppFooter />
      </div>
    </div>
  )
}

export default DefaultLayout
