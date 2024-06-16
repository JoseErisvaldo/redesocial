// Login.js

import React, { useContext, useState } from 'react'
import { AuthContext } from '../../Components/Context/Login'
import Logo from '../../Components/UIComponents/Logo/Logo'
import { Link } from 'react-router-dom'

const InputLogin = ({ label, value, onChange, type }) => (
  <div>
    <label className="block text-gray-700">{label}</label>
    <input
      className="border border-gray-300 w-full p-2 rounded-md focus:outline-none focus:border-blue-500"
      type={type}
      value={value}
      onChange={onChange}
    />
  </div>
)

export default function Login() {
  const { submitLogin, SubmitCreateAccount } = useContext(AuthContext)
  const [display, setDisplay] = useState('Login')

  const [user, seUser] = useState('')
  const [email, seEmail] = useState('')
  const [password, setPassword] = useState('')

  const handleUsernameChange = event => {
    seUser(event.target.value)
  }
  const handleEmailChange = event => {
    seEmail(event.target.value)
  }

  const handlePasswordChange = event => {
    setPassword(event.target.value)
  }

  const handleLogin = () => {
    submitLogin({ email, password })
  }

  const handleCreateAccount = () => {
    SubmitCreateAccount(user, email, password)
    console.log({ user, email, password })
  }

  function handleDisplay(e) {
    setDisplay(e)
  }

  return (
    <div className="flex flex-wrap gap-5 justify-center items-center w-full h-full">
      <div className="w-96 h-96">
        <Logo size={96} />
      </div>
      <div className="border p-10 flex flex-col gap-5">
        <div className="font-bold text-3xl text-orange-600">
          Seja bem vindo(a)
        </div>
        <div className="flex justify-between items-center">
          <div
            onClick={e => handleDisplay('Login')}
            className="font-bold text-2xl cursor-pointer"
          >
            Login
          </div>
          <div
            onClick={e => handleDisplay('Cadastrar')}
            className="font-bold text-2xl text-blue-600 cursor-pointer"
          >
            Criar conta
          </div>
        </div>
        {display === 'Login' ? (
          <>
            <div>
              <InputLogin
                type="email"
                label={'Email'}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <InputLogin
                label={'Senha'}
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleLogin}
            >
              Login
            </button>
            <Link to={'/esqueciasenha'} className="text-gray-600">
              Esqueci a senha
            </Link>{' '}
          </>
        ) : (
          <>
            <div>
              <InputLogin
                type="email"
                label={'Nome de Usuário'}
                value={user}
                onChange={handleUsernameChange}
              />
            </div>
            <div>
              <InputLogin
                type="email"
                label={'Email'}
                value={email}
                onChange={handleEmailChange}
              />
            </div>
            <div>
              <InputLogin
                label={'Senha'}
                value={password}
                onChange={handlePasswordChange}
                type="password"
              />
            </div>
            <button
              className="bg-blue-500 text-white px-4 py-2 rounded-md hover:bg-blue-600"
              onClick={handleCreateAccount}
            >
              Login
            </button>
          </>
        )}
      </div>
    </div>
  )
}
