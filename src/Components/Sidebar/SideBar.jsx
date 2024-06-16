import React from 'react'
import { CgHome, CgProfile } from 'react-icons/cg'
import { CiLogin, CiSettings } from 'react-icons/ci'
import { FcLike } from 'react-icons/fc'
import { TiMessages } from 'react-icons/ti'

const NavItem = ({ icon, label }) => (
  <a className="flex items-center gap-3 rounded-md px-3 py-2 text-sm cursor-pointer hover:bg-blue-600 hover:text-white ">
    {icon}
    {label}
  </a>
)

export default function Sidebar() {
  return (
    <div className="hidden h-full w-64 flex-col md:flex ">
      <div className="flex h-16 items-center justify-between px-4 font-semibold">
        <div className="flex items-center gap-2 justify-center">
          <span className="text-3xl flex item-center">
            Rede<span className="text-6xl text-blue-600">+</span>
          </span>
        </div>
        <button className="inline-flex items-center justify-center h-10 w-10 rounded-full hover:bg-gray-200 ">
          <img
            src="/placeholder.svg"
            width="32"
            height="32"
            alt="User Avatar"
            className="rounded-full"
          />
        </button>
      </div>
      <div className="flex-1 overflow-auto py-4">
        <nav className="space-y-1 px-4">
          <NavItem icon={<CgHome />} label="Home" />
          <NavItem icon={<CgProfile />} label="Profile" />
          <NavItem icon={<TiMessages />} label="Messages" />
          <NavItem icon={<FcLike />} label="Likes" />
          <NavItem icon={<CiSettings />} label="Settings" />
          <NavItem icon={<CiLogin />} label="Sair" />
        </nav>
      </div>
    </div>
  )
}
