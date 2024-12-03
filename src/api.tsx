import axios from 'axios';

const api = axios.create({
   
    baseURL: "http://localhost:8080/api/users",
    withCredentials: true,

});

export const googleAuth = (code:string) => api.get(`/googleauth?code=${code}`);