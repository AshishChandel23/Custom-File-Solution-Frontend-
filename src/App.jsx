import React from 'react'
import './App.css'
import AppRoutes from './routes/AppRoutes'
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {
  return (
    <React.Fragment>
      <AppRoutes/>
    </React.Fragment>
  )
}

export default App
