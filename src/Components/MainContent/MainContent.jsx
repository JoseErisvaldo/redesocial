import React, { useState } from 'react'
import Post from '../Post/Post'
import useFetchPostsData from '../Hooks/Api/useFetchPostsData'
import NewPost from '../Post/NewPost'

export default function MainContent() {
  const { selectPostBd, fetchPosts } = useFetchPostsData()

  return (
    <main className="flex-1 overflow-auto bg-gray-100 p-4 md:p-6">
      <NewPost onPostSubmit={fetchPosts} />
      <div className="mx-auto max-w-2xl">
        {selectPostBd.map((post, index) => (
          <Post key={index} user={post} />
        ))}
      </div>
    </main>
  )
}
