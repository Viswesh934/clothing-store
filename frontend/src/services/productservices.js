import Cookies from 'js-cookie';

const API_URL = import.meta.env.VITE_APP_URL;
import axios from 'axios';

if(Cookies.get('authtoken')){
    axios.defaults.headers.common['Authorization'] = `Bearer ${Cookies.get('authtoken')}`;
}

const createorupdateproduct = async (productdata) => {
    try {
        const response = await axios.post(`${API_URL}/product/upsert`, productdata);
        console.log(response);
        return response;
    } catch (error) {
        throw console.error(error.message);
    }
}

const getproducts = async () => {
    try{
        const response=await axios.get(`${API_URL}/product`);
        return response;
    }
    catch(error){
        throw console.error(error.message);
    }
}


const getproductsbyname=async(name)=>{
    try{
        const response=await axios.get(`${API_URL}/product/${name}`);
        return response;
    }
    catch(error){
        throw console.error(error.message);
    }
}


export {getproductsbyname,getproducts,createorupdateproduct};
