import axios from 'axios'

const api = axios.create({
    baseURL: 'http://localhost:8080/'
    //baseURL: 'http://191.165.202.142:8080/'
})

export default api