import { yupResolver } from '@hookform/resolvers/yup'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { multipleImgSchema } from '../schema/MultipleImgSchema'

type FormValues = {
    images: FileList
  }


const ProviderOfferImages = () => 
{
    const [previews, setPreviews] = useState<string[]>([]);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<FormValues>(
    {
        resolver: yupResolver(multipleImgSchema)
    })

    const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => 
    {
        const files = e.target.files;

        if(files)
        {
            const previewsUrls = Array.from(files).map(file => URL.createObjectURL(file));

            setPreviews(previewsUrls);
        }               
    }

    const onSubmit = async (data: FormValues) =>
    {
        const files = data.images;
        
        setIsSubmitting(true);

        try 
        {
            const formData = new FormData;
            
            Array.from(files).forEach(file => 
            {
                formData.append('files', file);
            });

            console.log('Service images uploaded successfully!')
        } 
        catch (error) {
            console.error('Error uploading service images:', error)
        } finally {
            setIsSubmitting(false)
        }
    }

  return (
    <form 
        onSubmit={handleSubmit(onSubmit)}
        className="space-y-4 p-4 bg-white rounded shadow-md max-w-md"
        encType="multipart/form-data"
    >
        <h2 className="text-xl font-semibold">Upload Service Images</h2>

        <div className="">
            <input 
                type="file" 
                accept='image/*'
                multiple
                { ...register('images')}
                onChange={(e) => 
                {
                    register('images').onChange(e);
                    handleFileChange(e);
                }}

                className='file-input file-input-bordered w-full'
            
            />
        </div>

        {errors.images && (
            <p className="text-red-500 text-sm mt-1">{errors.images.message}</p>
        )}

        {previews.length > 0 && (
            <div className="grid grid-cols-3 gap-2">
                {previews.map((src, index) => (
                <img
                    key={index}
                    src={src}
                    alt={`Preview ${index}`}
                    className="w-24 h-24 object-cover rounded"
                />
                ))}
            </div>
        )}
       

        <button
        type="submit"
        className="btn bg-blue-500 text-white hover:bg-blue-600"
        disabled={isSubmitting}
        >
            {isSubmitting ? 'Uploading...' : 'Upload Images'}
        </button>
    </form>
  )
}

export default ProviderOfferImages