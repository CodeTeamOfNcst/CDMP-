import axios from 'axios'

export default () => {
    axios.defaults.baseURL = `http://${ process.env.HOST || 'localhost'}:${process.env.PORT || 3000 }`
}