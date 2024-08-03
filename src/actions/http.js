
export const httpQuery = async (url, method = "GET", data = null) => {
    const options = {
        method: method,
        headers: {
            'Content-Type': 'application/json'
        },
        body: null
    };

    if (data !== null && (method === 'POST' || method === 'PUT')) {
        options.body = JSON.stringify(data);
    }

    try {
        const res = await fetch(url, options);
        if (!res.ok) {
            throw res.status;
        }

        if (method === 'GET') {
            return await res.json();
        } else {
            return await res.text();
        }
    } catch (error) {
        console.error('Error details:', error);
        throw error;
    }
};