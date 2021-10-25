import React from 'react'
import { useDispatch } from 'react-redux'
import { userRegister } from '../../../api'
import { setUserToken } from '../../../redux/reducers/user'

type IReturn = [
    boolean,
    boolean,
    boolean,
    boolean,
    boolean,
    string,
    (e: React.FormEvent<HTMLFormElement>) => Promise<void>
]

export default function useRegister(): IReturn {
    const dispatch = useDispatch()
    const [errorMail, setErrorMail] = React.useState(false)
    const [errorPwd, setErrorPwd] = React.useState(false)
    const [errorConfirmPwd, setErrorConfirmPwd] = React.useState(false)
    const [errorServer, setErrorServer] = React.useState('')
    const [loader, setLoader] = React.useState(false)
    const [success, setSuccess] = React.useState(false)

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setLoader(true)

        const re = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
        const data = new FormData(event.currentTarget);
        const email = data.get('email') as string
        const password = data.get('password') as string
        const confirmPassword = data.get('confirmPassword') as string
        const invitationCode = data.get('invitationCode') as string

        // reset errors
        setErrorMail(false)
        setErrorPwd(false)
        setErrorConfirmPwd(false)
        setSuccess(false)
        setErrorServer('')

        if (!re.test(email) || !password.length || password !== confirmPassword) {
            setErrorMail(!re.test(email))
            setErrorPwd(!password.length)
            setErrorConfirmPwd(password !== confirmPassword || !confirmPassword.length)
            setLoader(false)
            return
        }

        try {
            const res = await userRegister(email, password, invitationCode)
            localStorage.setItem('token', res.token)
            dispatch(setUserToken(res.token))
            setSuccess(true)
        } catch (err: any) {
            console.log(err)
            setErrorServer(err.message)
        } finally {
            setLoader(false)
        }
    };

    return [loader, success, errorMail, errorPwd, errorConfirmPwd, errorServer, handleSubmit]

}
