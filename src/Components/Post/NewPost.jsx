import React, { useState } from 'react'
import { MdOutlineAddPhotoAlternate } from 'react-icons/md'
import supabase from '../../Supabase'
import Btn from '../UIComponents/Btns/Btn'

const NewPost = ({ onPostSubmit }) => {
  const [selectedImage, setSelectedImage] = useState(null)
  const [file, setFile] = useState(null)
  const [description, setDescription] = useState('')
  const [error, setError] = useState(null)

  const handleImageChange = event => {
    const file = event.target.files[0]
    setFile(file)
    if (file) {
      const reader = new FileReader()
      reader.onloadend = () => {
        setSelectedImage(reader.result)
      }
      reader.readAsDataURL(file)
    }
  }

  const handleSubmit = async () => {
    if (!file) {
      setError('Selecione uma imagem!')
      return
    }

    if (!description.trim()) {
      setError('Adicione uma descrição!')
      return
    }

    try {
      const { data: uploadData, error: uploadError } = await supabase.storage
        .from('redemais')
        .upload(`public/${file.name}`, file, { cacheControl: '3600' })

      if (uploadError) {
        throw uploadError
      }

      const { data: insertData, error: insertError } = await supabase
        .from('redemais_post')
        .insert([
          {
            description: description,
            photo: `https://ummrcakwdaeufujhnvrv.supabase.co/storage/v1/object/public/redemais/public/${file.name}`
          }
        ])

      if (insertError) {
        throw insertError
      }

      console.log('Dados inseridos:', insertData)
      setDescription('')
      setFile('')
      setSelectedImage('')
      onPostSubmit()
    } catch (error) {
      console.error('Erro ao enviar o post:', error.message)
      setError('Erro ao enviar o post. Por favor, tente novamente.')
    }
  }

  return (
    <div className="m-5 p-5 flex flex-col space-y-4">
      {error && <div className="text-red-600">{error}</div>}
      <div className="flex items-center space-x-3">
        <img
          src="https://ummrcakwdaeufujhnvrv.supabase.co/storage/v1/object/public/redemais/123.JPG"
          alt="avatar"
          className="w-12 h-12 rounded-full"
        />
        <textarea
          value={description}
          onChange={e => setDescription(e.target.value)}
          className="border border-gray-300 w-full p-2 rounded-2xl resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="Olá, José, no que você está pensando?"
        />
      </div>
      <div className="relative w-44">
        <label className="flex items-center justify-between text-lg bg-green-600 p-3 text-white rounded-3xl cursor-pointer">
          <span>Adicionar foto </span>
          <MdOutlineAddPhotoAlternate />
          <input
            type="file"
            className="absolute inset-0 w-full h-full opacity-0 cursor-pointer"
            onChange={handleImageChange}
          />
        </label>
      </div>
      {selectedImage && (
        <div className="flex justify-center">
          <img
            src={selectedImage}
            alt="selected"
            className="w-44 h-44 rounded-lg"
          />
        </div>
      )}
      <Btn
        submit="Enviar"
        colorBg="green"
        colorWhite="white"
        onClick={handleSubmit}
      />
    </div>
  )
}

export default NewPost
