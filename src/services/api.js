import axios from 'axios';


//base url que será chamada sempre
const api = axios.create({
    baseURL: 'http://localhost:3000'
})

export default api;