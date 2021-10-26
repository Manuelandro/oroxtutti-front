import { useDispatch } from "react-redux"
import { clearCustomer } from '../../../redux/reducers/customer'

export default function useLogout(): [() => void] {
    const dispatch = useDispatch()

    const logout = () => {
        localStorage.removeItem('token')
        dispatch(clearCustomer())
    }

    return [logout]
}