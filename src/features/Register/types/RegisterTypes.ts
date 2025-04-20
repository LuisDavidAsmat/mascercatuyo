export interface RegisterFormData 
{
    name: string,
    surname: string,
    username: string,
    email: string,
    password: string,
    passwordConfirmation: string,
    birthDate: Date,
    activeRole: string;
}

export interface RegisterUserDto
{
    name: string;
    surname: string;
    username: string;
    email: string;
    password: string;
    passwordConfirmation: string;
    birthDate: string;
    activeRole: 'ROLE_CLIENT' | 'ROLE_PROVIDER';
}