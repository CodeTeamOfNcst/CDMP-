import axios from 'axios'
export default () => {
    axios.defaults.baseURL = `http://127.0.0.1:3000`
    axios.defaults.withCredentials = true
}   