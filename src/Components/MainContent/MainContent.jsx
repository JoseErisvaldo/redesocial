import React from 'react'
import Post from '../Post/Post'

export default function MainContent() {
  return (
    <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-2xl space-y-6">
        <Post
          user="Teste"
          username="José"
          time="1d ago"
          avatar="/placeholder-user.jpg"
          content="Primeiro Post"
        />
      </div>
    </main>
  )
}
