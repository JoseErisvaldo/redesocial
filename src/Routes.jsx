import React, { useContext } from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/SideBar'
import AuthProvider, { AuthContext } from './Components/Context/Login'
import Login from './Pages/Login/Login'

export default function RoutesApp() {
  const AdminPrivate = ({ children }) => {
    const { user } = useContext(AuthContext)
    if (!user) {
      return (
        <>
          <Login />
        </>
      )
    }
    return children
  }
  return (
    <BrowserRouter>
      <AuthProvider>
        <AdminPrivate>
          <Sidebar />
          <div className="flex flex-col w-full">
            <Header />
            <Routes>
              <Route path="/" element={<Home />} />
            </Routes>
          </div>
        </AdminPrivate>
      </AuthProvider>
    </BrowserRouter>
  )
}
