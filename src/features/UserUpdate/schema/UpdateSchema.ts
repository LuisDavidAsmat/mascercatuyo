import * as yup from 'yup';

type FileValue = FileList | null | undefined;

const isFileList = (value: unknown): value is FileList => {
    return value instanceof FileList
}

export const updateSchema = yup.object(
{
    profileImage: yup
      .mixed<FileList>()
      .test('is-filelist', 'Invalid file input', (value) => isFileList(value))
      .test('fileSize', 'The file is too large', (value) => {
        return isFileList(value) && value.length > 0 && value[0].size <= 5 * 1024 * 1024 // 5MB
      })
      .test('fileType', 'Unsupported File Format', (value) => {
        return isFileList(value) && value.length > 0 && ['image/jpeg', 'image/png', 'image/webp'].includes(value[0].type)
      })
      .required('Profile image is required'),
})