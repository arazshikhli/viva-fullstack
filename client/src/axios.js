import axios from "axios";

const instanse=axios.create({
    baseURL:'http://80.249.146.159'
})

instanse.interceptors.request.use((config)=>{
    config.headers.Authorization=window.localStorage.getItem('token')
    return config
})
export default instanse