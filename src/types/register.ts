export interface RegisterFormData {
    name: string,
    nickname: string,
    email: string,
    password: string,
    rePassword: string,
    city: string,
    birthdate: Date,
    image_url?: string | null,
}