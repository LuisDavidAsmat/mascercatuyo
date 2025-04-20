export interface MCTUserBasicInfo {
    userId: number;
    username: string;
    email: string;
    userRole: MCTUserRole;
}

export enum MCTUserRole {
    ROLE_CLIENT = "ROLE_CLIENT",
    ROLE_PROVIDER = "ROLE_PROVIDER",
    ROLE_ADMIN = "ROLE_ADMIN",
}