import { useState, useEffect, useContext } from 'react'
import supabase from '../../../Supabase'
import { AuthContext } from '../../Context/Login'

const useFetchUser = () => {
  const { user } = useContext(AuthContext)

  const [selectUser, setSelectUser] = useState([])
  const fetchUsers = () => {
    return supabase
      .from('redemais_users')
      .select('*')
      .eq('userId', user.user.id)
      .then(({ data, error }) => {
        if (error) {
          throw error
        }
        return data
      })
  }

  useEffect(() => {
    Promise.all([fetchUsers()])
      .then(([usersData]) => {
        setSelectUser(usersData)
      })
      .catch(error => {
        console.error('Erro ao obter os dados:', error)
      })
  }, [])

  return {
    selectUser
  }
}

export default useFetchUser
