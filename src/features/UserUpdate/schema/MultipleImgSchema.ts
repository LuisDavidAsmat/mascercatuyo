import * as yup from 'yup';

const isFileList = (value: unknown): value is FileList => {
    return value instanceof FileList
}

export const multipleImgSchema = yup.object(
{
    images: yup
      .mixed<FileList>()
      .required('At least one image is required')
      .test('is-filelist', 'Invalid file input', (value) => isFileList(value))
      .test('minFiles', 'At least one file is required', (value) => isFileList(value) && value.length > 0)
      .test('maxFiles', 'You can upload up to 5 images', (value) => isFileList(value) && value.length <= 5)
      .test('fileSize', 'Each file must be less than 5MB', (value) => {
        return (
          isFileList(value) &&
          Array.from(value).every((file) => file.size <= 5 * 1024 * 1024)
        )
      })
      .test('fileType', 'Unsupported file format', (value) => {
        const allowedTypes = ['image/jpeg', 'image/png', 'image/webp']
        return (
          isFileList(value) &&
          Array.from(value).every((file) => allowedTypes.includes(file.type))
        )
      })
      
})