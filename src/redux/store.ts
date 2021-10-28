import { configureStore } from '@reduxjs/toolkit'
import customerReducer from './reducers/customer'
import registrationReducer from './reducers/register'
import loginReducer from './reducers/login'
import cartReducer from './reducers/cart'

const store = configureStore({
    reducer: {
        customer: customerReducer,
        registration: registrationReducer,
        login: loginReducer,
        cart: cartReducer
    }
})

export default store
export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch
