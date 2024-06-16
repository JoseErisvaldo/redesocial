import React, { createContext, useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import supabase from '../../Supabase'

export const AuthContext = createContext()

const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null)
  const navigate = useNavigate()
  
  useEffect(() => {
    const fristToken = localStorage.getItem(
      'sb-ummrcakwdaeufujhnvrv-auth-token'
    )

    const local = fristToken
    if (local) {
      const userData = JSON.parse(local)
      setUser(userData)
      navigate('/')
    }
  }, [])

  async function submitLogin({ email, password }) {
    try {
      const { data: user, error } = await supabase.auth.signInWithPassword({
        email: email,
        password: password
      })
      if (error) {
        throw error
      } else {
        if (user.session) {
          setUser(user)
          navigate('/')
        }
      }
    } catch (error) {
      console.error('Erro ao fazer login:', error.message)
    }
  }

  async function SubmitCreateAccount(email, password) {
    try {
      const { data, error } = await supabase.auth.signUp({
        email: email,
        password: password
      })
      if (error) {
        throw error
      } else {
        alert('Conta criada')
        console.log(data)
      }
    } catch (error) {
      console.error('Erro ao criar a conta:', error.message)
    }
  }

  async function submitSignOut() {
    const { error } = await supabase.auth.signOut()
    navigate('/login')
    setUser(null)
  }

  return (
    <AuthContext.Provider
      value={{ user, submitLogin, SubmitCreateAccount, submitSignOut }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default AuthProvider
