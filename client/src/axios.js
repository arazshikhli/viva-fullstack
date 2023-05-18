import axios from "axios";

const instanse=axios.create({
    baseURL:'https://viva-reklam.com'
})

instanse.interceptors.request.use((config)=>{
    config.headers.Authorization=window.localStorage.getItem('token')
    return config
})
export default instanse