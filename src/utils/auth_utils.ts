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

export interface IAuthResults
{
    token: string
    result: boolean
    errors: string[]
}

export interface ILoginResults extends IAuthResults {}

export interface IRegisterResults extends IAuthResults {}