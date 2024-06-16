import { useState, useEffect } from 'react'
import supabase from '../../../Supabase'

const useFetchPostsData = () => {
  const [selectPostBd, setSelectPostBd] = useState([])

  const fetchPosts = () => {
    return supabase
      .from('redemais_post')
      .select('*')
      .then(({ data, error }) => {
        if (error) {
          throw error
        }
        return data
      })
  }

  const fetchUsers = () => {
    return supabase
      .from('redemais_users')
      .select('*')
      .then(({ data, error }) => {
        if (error) {
          throw error
        }
        return data
      })
  }

  useEffect(() => {
    Promise.all([fetchPosts(), fetchUsers()])
      .then(([postData, usersData]) => {
        const combinedData = postData.map(post => {
          const user = usersData.find(user => user.userId === post.userId)
          return { ...post, user }
        })
        setSelectPostBd(combinedData)
      })
      .catch(error => {
        console.error('Erro ao obter os dados:', error)
      })
  }, [])


  return {
    selectPostBd,
    fetchPosts
  }
}

export default useFetchPostsData
