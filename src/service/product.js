import callAPI from '../config';
const baseUrl = "https://techtest.folkatech.com/api" // base url api harusnya di set di file .env

export async function getProducts(params) {
    const url = `${baseUrl}/product?keyword=&price=&page=1&limit=12&order=product_name,ASC`;

    return callAPI({
        url,
        method: 'GET',
        params
    });
}