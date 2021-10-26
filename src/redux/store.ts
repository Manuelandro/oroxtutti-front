import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './reducers/customer'
import registrationReducer from './reducers/register'
import loginReducer from './reducers/login'

const store = configureStore({
    reducer: {
        customer: customerReducer,
        registration: registrationReducer,
        login: loginReducer,
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
