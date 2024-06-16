import { useState, useEffect } from 'react'
import supabase from '../../../Supabase'

const useFetchPostsData = () => {
  const [selectPostBd, setSelectPostBd] = useState([])

  const fetchPosts = async () => {
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
    fetchPosts()
  }, [])

  return {
    selectPostBd,
    fetchPosts
  }
}

export default useFetchPostsData
