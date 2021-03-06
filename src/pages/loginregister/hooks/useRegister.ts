import React from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from 'api'
import { useAppSelector } from 'redux/hooks'
import { setCustomerToken } from 'redux/reducers/customer'
import { setError, resetErrors, toggleLoading, setSuccess } from 'redux/reducers/register'
import type { Registration } from 'types/LoginRegister'

type IReturn = [
    Registration,
    (e: React.FormEvent<HTMLFormElement>) => Promise<void>
]

export default function useRegister(): IReturn {
    const dispatch = useDispatch()
    const registration = useAppSelector(s => s.registration)


    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        dispatch(toggleLoading())

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const data = new FormData(event.currentTarget);
        const name = data.get('name') as string
        const email = data.get('email') as string
        const password = data.get('password') as string
        const confirmPassword = data.get('confirmPassword') as string

        // reset errors
        dispatch(resetErrors())

        if (!name.length || !re.test(email) || !password.length || password !== confirmPassword) {
            dispatch(setError({ errorName: !name.length }))
            dispatch(setError({ errorMail: !re.test(email) }))
            dispatch(setError({ errorPwd: !password.length }))
            dispatch(setError({ errorConfirmPwd: password !== confirmPassword || !confirmPassword.length }))
            dispatch(toggleLoading())
            return
        }

        try {
            const res = await userRegister(name, email, password)
            localStorage.setItem('token', res.token)
            dispatch(setCustomerToken(res.token))
            dispatch(setSuccess())
        } catch (err: any) {
            console.log(err)
            dispatch(setError({ errorServer: err.message }))
        } finally {
            dispatch(toggleLoading())
        }
    };

    return [registration, handleSubmit]

}
