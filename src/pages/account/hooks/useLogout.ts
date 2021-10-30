import { useDispatch } from "react-redux"
import { clearCustomer } from 'redux/reducers/customer'
import { clearCart } from 'redux/reducers/cart'

export default function useLogout(): [() => void] {
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(clearCustomer())
        dispatch(clearCart())
    }

    return [logout]
}