import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateSchema } from './schema/UpdateSchema'

type FormValues = {
  profileImage: FileList
}

const UserUpdate = () => 
{
  const [preview, setPreview] = useState<string | null>(null)

  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<FormValues>(
  {
    resolver: yupResolver(updateSchema)
  })

  const onSubmit = (data: FormValues) => 
  {
      const file = data.profileImage[0];

      console.log('selected file', file);
      
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    const file = e.target.files?.[0];

    if(file) {
      setPreview(URL.createObjectURL(file));
    }
  }


  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 p-4 bg-white rounded shadow-md max-w-md'
    >
      <h2 className="text-xl font-semibold">Update Profile Image</h2>
      <div className="">
        <input 
          type='file'
          accept='image/*'
          { ...register('profileImage') }
          onChange={(e) => 
          {
            register('profileImage').onChange(e);
            handleFileChange(e);
          }}
          className="file-input file-input-bordered w-full"

        />
        {errors.profileImage && (
          <p className="text-red-500 text-sm mt-1">{errors.profileImage.message}</p>
        )}
      </div>

      {preview && (
        <div className="">
          <p className="text-sm text-gray-600">Preview:</p>
          <img src={preview} alt="Preview" className='w-32 h-32 object-cover rounded-xl'/>
        </div>
      )}

      <button type="submit" className='btn bg-buttons'>Upload</button>

    </form>
  )
}

export default UserUpdate