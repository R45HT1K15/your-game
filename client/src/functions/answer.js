export async function answerCheck (answer, questionId) {
    console.log('questionId', questionId)
    console.log('answer', answer)
    try {
        const response = await fetch('http://localhost:3100/answer', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json',
            },
            credentials: "include",
            body: JSON.stringify({ answer, questionId })
        });
        const data = await response.json();
        return data
    } catch (error) {
        console.log(error)
    }
}