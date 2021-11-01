import React from 'react'
import useGetPayment from './hooks/useGetPayment'

const SuccessPage: React.FC = () => {
    useGetPayment()

    return null
}

export default SuccessPage