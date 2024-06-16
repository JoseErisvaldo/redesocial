import React from 'react'

export default function NewDate({ date }) {
  const formattedDate = new Date(date).toLocaleString()

  return <div className=" font-mono ">{formattedDate}</div>
}
