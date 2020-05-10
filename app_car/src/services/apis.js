import axios from 'axios'

const api = axios.create({
    baseURL: 'http://54.86.106.171/'
})

export default api