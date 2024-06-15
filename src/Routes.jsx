import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Home from './Pages/Home/Home'
import Header from './Components/Header/Header'
import Sidebar from './Components/Sidebar/SideBar'

export default function RoutesApp() {
  return (
    <BrowserRouter>
      <Sidebar />
      <div className="flex flex-col w-full">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
        </Routes>
      </div>
    </BrowserRouter>
  )
}
