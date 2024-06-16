import React, { useEffect, useState } from 'react'
import Post from '../Post/Post'
import supabase from '../../Supabase'

export default function MainContent() {
  const [selectPostBd, setSelectPostBd] = useState([])

  async function fetchPost() {
    try {
      const { data: redemais_post, error } = await supabase
        .from('redemais_post')
        .select('*')
      if (error) {
        throw error
      }
      setSelectPostBd(redemais_post)
    } catch (error) {
      console.error('Erro ao buscar os posts:', error.message)
    }
  }

  useEffect(() => {
    fetchPost()
  }, [])

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
