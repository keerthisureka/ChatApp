export interface SigninCredentials {
    email: string;
    password: string
}

export interface SignUpCredentials extends SigninCredentials {
    displayName: string;
}