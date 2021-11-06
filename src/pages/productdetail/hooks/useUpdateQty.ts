import { useState } from 'react'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { updateQty } from 'api'
import { useAppSelector } from 'redux/hooks'
import { setCart } from 'redux/reducers/cart'

type IReturn = [boolean, (qty: number) => Promise<void>]

export default function useUpdateQty(): IReturn {
    const dispatch = useDispatch()
    const { id } = useParams() as { [k: string]: string }
    const token = useAppSelector(s => s.customer.token)
    const [loadingUpdate, setLoadingUpdate] = useState(false)


    const update = async (qty: number) => {
        if (!token || !qty) return

        setLoadingUpdate(true)
        try {
            const res = await updateQty(token, id, qty)
            dispatch(setCart(res))
        } catch (err) {
            console.log(err)
        }
    }


    return [loadingUpdate, update]

}