import React from 'react'
import Post from '../Post/Post'
import useFetchPostsData from '../Hooks/Api/useFetchPostsData'

export default function MainContent() {
  const { selectPostBd } = useFetchPostsData()

  return (
    <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-6">
      <div className="mx-auto max-w-2xl">
        {selectPostBd.map((post, index) => (
          <Post key={index} user={post} />
        ))}
      </div>
    </main>
  )
}
