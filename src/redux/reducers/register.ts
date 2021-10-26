import { createSlice } from '@reduxjs/toolkit'
import type { Registration } from '../../types/LoginRegister'

const initialState: Registration = {
    errorName: false,
    errorMail: false,
    errorPwd: false,
    errorConfirmPwd: false,
    errorServer: null,
    loading: false,
    success: false
}

const registrationSlice = createSlice({
    name: 'registration',
    initialState,
    reducers: {
        setError: (state, { payload }) => {
            return { ...state, ...payload }
        },
        resetErrors: (state) => {
            return {
                ...state,
                errorName: false,
                errorMail: false,
                errorPwd: false,
                errorConfirmPwd: false,
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

export const { setError, resetErrors, toggleLoading, setSuccess } = registrationSlice.actions
export default registrationSlice.reducer
