import React, { useContext } from 'react'
import {
  BiDotsHorizontalRounded,
  BiShareAlt,
  BiCommentDetail,
  BiHeart
} from 'react-icons/bi'
import NewDate from '../UIComponents/NewDate/NewDate'

export default function Post({ user }) {
  return (
    <div className="rounded-lg bg-white p-4 shadow ">
      <div className="flex items-center gap-3">
        <span className="relative flex shrink-0 overflow-hidden rounded-full h-10 w-10">
          <img
            className="aspect-square h-full w-full"
            src={user.avatar}
            alt={`${user.user}'s avatar`}
          />
        </span>
        <div className="flex-1">
          <div className="flex items-center gap-2">
            <div className="font-medium cursor-pointer">{user.userId}</div>
            <div className="text-xs text-gray-500">{user.time}</div>
          </div>
          <div className="text-sm text-gray-500">@{user.userId}</div>
        </div>
        <NewDate date={user.created_at} />
        <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
          <BiDotsHorizontalRounded size={20} />
        </button>
      </div>
      <div className="mt-4 space-y-4 text-sm">
        <img
          className="aspect-square w-80 sm:w-full"
          src={user.photo}
          alt={`${user.user}'s avatar`}
        />
        <p>{user.description}</p>
        <div className="flex items-center gap-4">
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
            <BiShareAlt size={20} />
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
            <BiCommentDetail size={20} />
          </button>
          <button className="inline-flex items-center justify-center whitespace-nowrap text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 hover:bg-accent hover:text-accent-foreground h-10 w-10 rounded-full">
            <BiHeart size={20} />
          </button>
        </div>
      </div>
    </div>
  )
}
