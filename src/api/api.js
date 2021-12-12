

export const allocate = async (userInput) => {

    return fetch('/allocate', {
        method: 'POST',

        body: JSON.stringify(userInput),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};