import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface UserState {
    id: string
    email: string
    token: string | null
  }


const initialState: UserState = {
    id: '',
    email: '',
    token: localStorage.getItem('token')
}

const userSlice = createSlice({
    name: 'user',
    initialState,
    reducers: {
        setUserData: (state, action: PayloadAction<Record<string, any>>) => {
            state.id = action.payload.id
            state.email = action.payload.email
        },
        setUserToken: (state, action: PayloadAction<string>) => {
            state.token = action.payload
        },
        clearUserData: (state) => {
            state.id = ""
            state.email = ""
            state.token = null
        }
    }
})

export const { setUserData, setUserToken, clearUserData } = userSlice.actions
export default userSlice.reducer
