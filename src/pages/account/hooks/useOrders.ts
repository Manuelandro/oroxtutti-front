import { useState, useEffect } from 'react'
import { getOrders } from 'api'
import { useAppSelector } from 'redux/hooks'

export default function useOrders() {
    const token = useAppSelector(s => s.customer.token)
    const [loading, setLoading] = useState(false)
    const [orders, setOrders] = useState([])

    useEffect(() => {
        if (!token) return

        setLoading(true)

        ;(async function() {
            try {
                const res = await getOrders(token)
                setOrders(res.data)
            } catch (err) {
                console.log(err)
            } finally {
                setLoading(false)
            }
        })()
    }, [token])

    return [loading, orders]
}