import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import Home from '../pages/home/home'
import ProtectedRoutes from './ProtectedRoutes'
import Auth from '../components/auth/auth'
import Logout from '../components/common/logout/logout'
import Dashboard from '../pages/dashboard/dashboard'
import FolderLayout from '../components/layout/folderlayout/folderlayout'
import User from '../components/layout/user/user/user'
import About from '../pages/about/about'

const AppRoutes = () => {
  return (
    <Router>
        <Routes>
            <Route path='/' element={<Home/>}/>
            <Route path='/auth' element={<Auth/>}/>
            <Route path='/about' element={<About/>}/>
            <Route path="/dashboard/*" element={<ProtectedRoutes />}>
              <Route path="" element={<User />} />
              <Route path="folders" element={<FolderLayout />} />
              <Route path="logout" element={<Logout />} />
            </Route>
        </Routes>
    </Router>
  )
}

export default AppRoutes
