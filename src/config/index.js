import axios from 'axios';

export default async function callAPI({ url, method, data, responseType, params }) {
  const accesstToken = await localStorage.getItem("token")
  let headers = {
    Authorization: `Bearer ${accesstToken}`,
  };

  const response = await axios({
    url,
    params,
    responseType,
    method,
    data,
    headers,
  }).catch((err) => err.response);

  return response;
}