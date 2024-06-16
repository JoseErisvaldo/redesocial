import React from 'react'

export default function Btn({ submit, colorBg, colorWhite, onClick }) {
  return (
    <div>
      <button
        onClick={onClick}
        className={`text-${colorWhite} bg-${colorBg}-600 hover:bg-${colorBg}-500 cursor-pointer p-2 rounded p-2`}
      >
        {submit}
      </button>
    </div>
  )
}
