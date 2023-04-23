const BASE_URL = 'http://onlinevotingsystem-dev2.us-west-2.elasticbeanstalk.com/';

export async function createNewUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/register`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to register user.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function loginUser(email, password) {
    try {
        const response = await fetch(`${BASE_URL}/login`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({ email, password }),
        });

        if (!response.ok) {
            throw new Error('Failed to login user.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}

export async function fetchCampaigns() {
    try {
        const response = await fetch(`${BASE_URL}/campaigns`);

        if (!response.ok) {
            throw new Error('Failed to fetch campaigns.');
        }

        const data = await response.json();
        return data;
    } catch (error) {
        console.error('Error:', error);
        throw error;
    }
}
