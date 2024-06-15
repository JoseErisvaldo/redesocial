import React from 'react'
import MainContent from '../../Components/MainContent/MainContent'
import NewPost from '../../Components/Post/NewPost'

export default function Home() {
  return (
    <div className="flex flex-1 flex-col">
      <NewPost />
      <MainContent />
    </div>
  )
}
