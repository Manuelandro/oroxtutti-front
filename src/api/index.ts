export async function userLogin(email: string, password: string) {
    const res = await fetch('/api/login', {
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

export async function userRegister(email: string, password: string, invite: string) {
    const res = await fetch('http://localhost:3001/customers/create', {
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
