import axios from 'axios';

const api = axios.create({
    baseURL: 'http://www.mocky.io/v2/5e76797e2f0000f057986099',
});

export default api;
