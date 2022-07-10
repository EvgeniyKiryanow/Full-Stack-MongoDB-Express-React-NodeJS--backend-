import axions from "axios";
const LOCALHOST = 'http://localhost:4444'
const instance = axions.create({
    baseURL: LOCALHOST
});

export default instance;