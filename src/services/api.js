import axios from "axios";

export const key = '4b76ec591501251a828941d51b332c2c0c93d683';

const api = axios.create({
    baseURL:'https://api-ssl.bitly.com/v4',
    headers:{
        'Authorization': `Bearer ${key}`
    }
})

export default api;