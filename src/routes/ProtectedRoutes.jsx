import React from 'react'
import { BrowserRouter as Router, Route, Routes, Outlet } from 'react-router-dom'
import Dashboard from '../pages/dashboard/dashboard'

const ProtectedRoutes = () => {
  return (
        <React.Fragment>
          <Dashboard/>
        </React.Fragment>
  )
}

export default ProtectedRoutes
