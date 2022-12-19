export async function signup (name, password) {
    try {
        const response = await fetch('http://localhost:3100/signup', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ name, password })
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function signout () {
    try {
        const response = await fetch('http://localhost:3100/signout',{
            method: 'GET',
            credentials: 'include',
        })
        const data = await response.json()
        console.log('data', data)
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function signin (name, password) {
    try {
        const response = await fetch('http://localhost:3100/signin', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: 'include',
            body: JSON.stringify({ name, password })
        })
        
        const data = await response.json()

        return data
    } catch (error) {
        console.log(error)
    }
}