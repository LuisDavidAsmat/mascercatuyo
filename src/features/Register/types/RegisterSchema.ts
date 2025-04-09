import * as yup from 'yup';

export const RegisterSchema = yup.object().shape(
{
    name: yup.string().required('El nombre es oligatorio.'),
    surname: yup.string().required('El apellido es oligatorio.'),
    username: yup.string().required('El nombre de usuario de obligatorio.'),
    email: yup.string().email('Emeil inválido.').required('Email es obligatorio.'),
    password: yup.string()
        .min(6, 'La contraseña debe tener al menos 5 caracteres y contener como mínimo una letra mayúscula, una letra minúscula y un dígito.')
        .matches(
        /^(?=.*\d{2,})(?=.*[a-zA-Z]{4,}).*$/,
        'La contraseña debe tener al menos 5 caracteres y contener como mínimo una letra mayúscula, una letra minúscula y un dígito.'
        )
        .required('La contraseña es obligatoria'),
    passwordConfirmation: yup.string()
        .oneOf([yup.ref('password')], 'Las contraseñas deben ser iguales.')
        .required('La confirmación de contraseña es obligatoria'),
    birthDate: yup.date()
        .required('La fecha de nacimiento es obligatoria')
        .max(new Date(), 'La fecha de nacimiento no puede ser en el futuro.'),
    activeRole: yup.string()
        .required('Debes seleccionar un rol')
        .oneOf(['ROLE_CLIENT', 'ROLE_PROVIDER'], 'Rol inválido')
})