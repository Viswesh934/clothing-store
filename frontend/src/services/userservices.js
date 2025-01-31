import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_APP_URL;

import axios from 'axios';
export const signup = async (userdata) => {

     try{
        const response= axios.post(`${API_URL}/user/signup`,userdata);
        console.log(response);
        return response;
     }
     catch(error){
        throw console.error(error.message);
     }
}


export const login = async (userdata) => {
     try{
        const response=await axios.post(`${API_URL}/user/login`,userdata);
        
        const token=response.data.token;
        Cookies.set('authtoken',token,{expires:1});
        return response;
     }
        catch(error){
            console.log(response);
            throw console.error(error.message);
        }
}



