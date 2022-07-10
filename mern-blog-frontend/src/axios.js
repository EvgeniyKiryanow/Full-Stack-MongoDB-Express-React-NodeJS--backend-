import axions from "axios";
const LOCALHOST = 'http://localhost:4444'

const instance = axions.create({
    baseURL: LOCALHOST
});

instance.interceptors.request.use((config)=> {
    config.headers.Authorizations = window.localStorage.getItem('token');

    return config;
});

export default instance;