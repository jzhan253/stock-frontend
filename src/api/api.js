
export const suggest = async (userInput) => {

    return fetch('/suggest', {
        method: 'POST',
        body: JSON.stringify(userInput),
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};

export const suggest = async () => {

    return fetch('/weeklytrend', {
        method: 'GET',
        headers: {
            'Accept': 'application/json',
            'Content-Type': 'application/json',
        },
    });
};