import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { updateSchema } from './schema/UpdateSchema'
import { useAuthStore } from '../../stores/auth.store'
import { uploadProfileImage } from './api/userupdate.api'
import ProviderOfferImages from './components/ProviderOfferImages'

type FormValues = {
  profileImage: FileList
}

const UserUpdate = () => 
{
  const { userBasicInfo } = useAuthStore.getState();
  const [preview, setPreview] = useState<string | null>(null);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const {
    register,
    handleSubmit,
    formState: { errors }, 
  } = useForm<FormValues>(
  {
    resolver: yupResolver(updateSchema)
  })

  const onSubmit = async (data: FormValues) => 
  {
    const file = data.profileImage[0];
    const userId = userBasicInfo?.userId;

    console.log('selected file', file);

    if(!userId) return;

    setIsSubmitting(true);

    try 
    {
      const formData = new FormData();

      formData.append('file', file); // Must match @RequestParam name in backend

      await uploadProfileImage(formData, userId);

      console.log('Upload successful!');
      
    } catch (error) {
      console.error('Upload failed:', error);
    }
    finally {
      setIsSubmitting(false);
    }      
  }

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => 
  {
    const file = e.target.files?.[0];

    if(file) {
      setPreview(URL.createObjectURL(file));
    }
  }


  return (
    <>
    <form
      onSubmit={handleSubmit(onSubmit)}
      className='space-y-4 p-4 bg-white rounded shadow-md max-w-md'
      encType="multipart/form-data"
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

      {/* <button type="submit" className='btn bg-buttons'>Upload</button> */}
      <button 
        type="submit" 
        className='btn bg-buttons'
        disabled={isSubmitting}
      >
        {isSubmitting ? 'Uploading...' : 'Upload'}
      </button>

    </form>

    <ProviderOfferImages />

    </>



    
  )
}

export default UserUpdate