import axios from "axios"

const adminApi= axios.create({
    baseURL: "https://driveease-backend.onrender.com/api/admin",
    withCredentials:true,
})

export default adminApi