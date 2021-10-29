import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { removeFromCart } from 'api'
import { useAppSelector } from 'redux/hooks'
import { setCart } from 'redux/reducers/cart'

type IReturn = [
    boolean,
    (id: string) => Promise<void>
]

export default function useRemoveFromCart(): IReturn {
    const dispatch = useDispatch()
    const token = useAppSelector(s => s.customer.token)
    const [loadingRemove, setLoadingRemove] = useState(false)

    const remove = async (productId: string) => {
        if (!token) return
        setLoadingRemove(true)

        try {
            const res = await removeFromCart(token, productId)
            dispatch(setCart(res))
        } catch (err) {
            console.log(err)
        } finally {
            setLoadingRemove(false)
        }
    }

    return [loadingRemove, remove]

}