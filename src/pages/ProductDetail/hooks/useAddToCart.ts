import { useState } from 'react'

type IReturn = [boolean, () => void]

export default function useAddToCart(): IReturn {
    const [loadingAdd, setLoadingAdd] = useState(false)


    const addToCart = async () => {
        setLoadingAdd(true)
        try {
            const res = await fetch('http://localhost:3001/cart/add', {
                headers: {
                    "Content-Type": 'application/json'
                },
                method: 'POST',
                body: JSON.stringify({
                    // productId: params?.id
                })
            }).then(res => res.json())

        } catch (err) {
            console.log(err)
        }
    }


    return [loadingAdd, addToCart]

}