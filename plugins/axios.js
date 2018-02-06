import axios from 'axios'
export default () => {
    const host =  process.env.HOST || '127.0.0.1';
    const port =  process.env.PORT || 3000;
    axios.defaults.baseURL = `http://${host}:${port}`
    axios.defaults.withCredentials = true
}   