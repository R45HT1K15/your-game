export async function startGame (topic) {
    console.log('topic', topic)
    try {
        const response = await fetch(`http://localhost:3100/game/${topic}`, {
            method: 'GET',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include",
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}

export async function updateStatusQuest (id) {
    console.log('id', id)
    try {
        const response = await fetch(`http://localhost:3100/game/${id}`, {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ id })
        })
        const data = await response.json()
        return data;
    } catch (error) {
        console.log(error)
    }
}

export async function endGame (name) {
    console.log('topic', name)
    try {
        const response = await fetch(`http://localhost:3100/game/${name}`, {
            method: 'DELETE',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ name })
        });
        const data = await response.json();
        console.log('data', data)
        return data
    } catch (error) {
        console.log(error)
    }
}