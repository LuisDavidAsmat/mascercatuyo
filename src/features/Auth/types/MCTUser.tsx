export interface MCTUserLoginInfo 
{
    id: number;
    email: string;
    username: string;
    token: string;
    roles: MCTUserRole[];
    activeRole: MCTUserRole;
}

export enum MCTUserRole {
    ROLE_CLIENT = "ROLE_CLIENT", // Ensure these match localStorage
    ROLE_PROVIDER = "ROLE_PROVIDER",
    ROLE_ADMIN = "ROLE_ADMIN",
}