import { createSlice } from '@reduxjs/toolkit'
import type { Login } from '../../types/LoginRegister'

const initialState: Login = {
    errorMail: false,
    errorPwd: false,
    errorServer: null,
    loading: false,
    success: false
}

const loginSlice = createSlice({
    name: 'login',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            return { ...state, ...payload }
        },
        resetErrors: (state) => {
            return {
                ...state,
                errorMail: false,
                errorPwd: false,
                errorServer: null,
            }
        },
        toggleLoading: (state) => {
            return { ...state, loading: !state.loading }
        },
        setSuccess: (state) => {
            return { ...state, success: true }
        }
    }
})

export const { setError, resetErrors, toggleLoading, setSuccess } = loginSlice.actions
export default loginSlice.reducer
