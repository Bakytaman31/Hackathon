import axios from 'axios';

const axiosApp = axios.create({
    baseURL: '/'
});

export default axiosApp;