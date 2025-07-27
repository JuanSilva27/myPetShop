export interface User {
    id: string,
    name: string,
    email: string,
    telephone: string,
    dni ?: string,
    address?: string,
    role : UserRole
    password: string,
}

export type UserRole = "client" | "admin"