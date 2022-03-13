export enum USER_ROLES {
 ADMIN = "ADMIN",
 NORMAL = "NORMAL"
}

export interface authenticationData {
 id: string,
 role: USER_ROLES
}

export interface user {
 id: string,
 email: string,
 password: string,
 role: USER_ROLES
}