import React from 'react'
import { useDispatch } from 'react-redux'
import { setCustomerToken } from 'redux/reducers/customer'
import { setError, resetErrors, toggleLoading, setSuccess } from 'redux/reducers/login'
import { customerLogin } from 'api'
import { useAppSelector } from 'redux/hooks'
import type { Login } from 'types/LoginRegister'

type IReturn = [
    Login,
    (e: React.FormEvent<HTMLFormElement>) => Promise<void>
]

export default function useLogin(): IReturn {
    const dispatch = useDispatch()
    const login = useAppSelector(s => s.login)

    const handleLogin = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleLoading())

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string
        const password = data.get('password') as string

         // reset errors
         dispatch(resetErrors())

         if (!re.test(email) || !password.length) {
            dispatch(setError({ errorMail: !re.test(email) }))
            dispatch(setError({ errorPwd: !password.length }))
            dispatch(toggleLoading())
            return
        }

        try {
            const res = await customerLogin(email, password)
            localStorage.setItem('token', res.token)
            dispatch(setCustomerToken(res.token))
            dispatch(setSuccess())
        } catch (err: any) {
            console.log(err)
            dispatch(setError({ errorServer: err.message }))
        } finally {
            dispatch(toggleLoading())
        }
    }


    return [login, handleLogin]
}