export interface ILoginUser
{
    email: string
    password: string
}

export interface IRegisterUser
{
    name: string
    email: string
    password: string
}

export interface AuthResults
{
    token: string
    result: boolean
    errors: string[]
}

export interface LoginResults extends AuthResults {}

export interface RegisterResults extends AuthResults {}