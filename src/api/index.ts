export async function customerLogin(email: string, password: string) {
    const res = await fetch('http://localhost:3001/customers/login', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            email: String(email),
            password: String(password),
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res
}

export async function userRegister(name: string, email: string, password: string) {
    const res = await fetch('http://localhost:3001/customers/create', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json'
        },
        body: JSON.stringify({
            name,
            email,
            password,
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res
}


export async function userInfo(token: string) {
    const res = await fetch('http://localhost:3001/customers/info', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`

        }
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res
}

/** CART */

export async function getCart(token: string) {
    const res = await fetch('http://localhost:3001/cart/get', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Beared ${token}`
        },
        method: 'GET'
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}

export async function addToCart(token: string, productId: string, qty: number) {
    const res = await fetch('http://localhost:3001/cart/add', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
            productId,
            qty
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}

export async function updateQty(token: string, productId: string, qty: number) {
    const res = await fetch('http://localhost:3001/cart/update', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'PUT',
        body: JSON.stringify({
            productId,
            qty
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}


export async function removeFromCart(token: string, productId: string) {
    const res = await fetch('http://localhost:3001/cart/remove', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'DELETE',
        body: JSON.stringify({
            productId,
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}

/* PAYMENRS */

export async function createSession(token: string) {
    const res = await fetch('http://localhost:3001/payment/session/create', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'POST'
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}

export async function getSession(token: string, sessionId: string) {
    const res = await fetch('http://localhost:3001/payment/session/get', {
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`
        },
        method: 'POST',
        body: JSON.stringify({
            sessionId
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res

}



/* ORDERS */

export async function getOrders(token: string) {
    const res = await fetch('http://localhost:3001/orders/list', {
        method: 'GET',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`

        }
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res
}


export async function getOrder(token: string, paymentIntent: string) {
    const res = await fetch('http://localhost:3001/orders/order', {
        method: 'POST',
        headers: {
            "Content-Type": 'application/json',
            "Authorization": `Bearer ${token}`

        },
        body: JSON.stringify({
            paymentIntent
        })
    }).then(res => res.json())

    if (res.error) {
        throw new Error(res.error)
    }

    return res
}