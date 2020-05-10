import axios from 'axios'

const api = axios.create({
    baseURL: 'http://XX.XX.XXX.XXX/'
})

export default api