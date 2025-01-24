
import axios from 'axios'
const api = axios.create({
  baseURL: 'https://apiflask-8cgv.onrender.com',
  headers: {
    'Content-Type': 'application/json',
  },
})
export default api
