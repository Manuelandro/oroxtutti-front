import { useState, useEffect } from 'react'
import { useSearchParam } from 'react-use'
import { getSession, getOrder } from 'api'
import { useAppSelector } from 'redux/hooks'



export default function useGetPayment() {
    const sessionId = useSearchParam('session_id')
    const token = useAppSelector(s => s.customer.token)

    useEffect(() => {
        if (!token || !sessionId) return

        ;(async function() {
            try {
                const res = await getSession(token, sessionId)
                const re2 = await getOrder(token, res.payment_intent)
            } catch (err) {
                console.log(err)
            } finally {

            }
        })()
    }, [token, sessionId])

}