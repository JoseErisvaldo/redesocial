import React, { useContext } from 'react'
import { CgHome, CgProfile } from 'react-icons/cg'
import { CiLogin, CiSettings } from 'react-icons/ci'
import { FcLike } from 'react-icons/fc'
import { TiMessages } from 'react-icons/ti'
import { AuthContext } from '../Context/Login'
import Logo from '../UIComponents/Logo/Logo'

const NavItem = ({ icon, label, onClick }) => (
  <div
    onClick={onClick}
    className="flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white "
  >
    {icon}
    {label}
  </div>
)

export default function Sidebar() {
  const { submitSignOut } = useContext(AuthContext)

  return (
    <div className="hidden h-full w-64 flex-col md:flex ">
      <div className="flex h-16 items-center px-4 mt-2 ">
        <Logo size={12} />
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-4">
          <NavItem icon={<CgHome />} label="Home" />
          <NavItem icon={<CgProfile />} label="Profile" />
          <NavItem icon={<TiMessages />} label="Messages" />
          <NavItem icon={<FcLike />} label="Likes" />
          <NavItem icon={<CiSettings />} label="Settings" />
          <NavItem icon={<CiLogin />} label="Sair" onClick={submitSignOut} />
        </nav>
      </div>
    </div>
  )
}
