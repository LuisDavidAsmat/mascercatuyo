import * as yup from 'yup';

export const LoginSchema = yup.object().shape(
{
    email: yup.string().email('Emeil inválido.').required('Email es obligatorio.'),
    password: yup.string()
        .min(6, 'La contraseña debe tener al menos 5 caracteres y contener como mínimo una letra mayúscula, una letra minúscula y un dígito.')
        .matches(
        /^(?=.*\d{2,})(?=.*[a-zA-Z]{4,}).*$/,
        'La contraseña debe tener al menos 5 caracteres y contener como mínimo una letra mayúscula, una letra minúscula y un dígito.'
        )
        .required('La contraseña es obligatoria'),
})