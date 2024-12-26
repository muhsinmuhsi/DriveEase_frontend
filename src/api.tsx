import axios from 'axios';

const api = axios.create({
   
    baseURL: "https://driveease-backend.onrender.com/api/users",
    withCredentials: true,

});



export default api
export const googleAuth = (code:string) => api.get(`/googleauth?code=${code}`);