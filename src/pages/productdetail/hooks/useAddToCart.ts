import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from 'api'
import { useAppSelector } from 'redux/hooks'
import { setCart } from 'redux/reducers/cart'

type IReturn = [boolean, () => void]

export default function useAddToCart(): IReturn {
    const dispatch = useDispatch()
    const { id } = useParams() as { [k: string]: string }
    const token = useAppSelector(s => s.customer.token)
    const [loadingAdd, setLoadingAdd] = useState(false)


    const add = async () => {
        if (!token) return

        setLoadingAdd(true)
        try {
            const res = await addToCart(token, id, 1)
            dispatch(setCart(res))
        } catch (err) {
            console.log(err)
        }
    }


    return [loadingAdd, add]

}