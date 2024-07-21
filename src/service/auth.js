import callAPI from '../config';
const baseUrl = "https://techtest.folkatech.com/api" // base url api harusnya di set di file .env

export async function authLogin(params) {
    const url = `${baseUrl}/login`;

    return callAPI({
        url,
        method: 'POST',
        params
    });
}

export async function authRegister(params) {
    const url = `${baseUrl}/register`;

    return callAPI({
        url,
        method: 'POST',
        params
    });
}