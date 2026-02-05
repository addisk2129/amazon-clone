import axios  from "axios";


const axiosInstance=axios.create({
    baseURL:'https://amanone-clone-backend.vercel.app/api'
})


export {axiosInstance}