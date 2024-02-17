import axios from 'axios';

export function postForm(payload){
    return async function (dispatch){
    try{
        const response= await axios.post("http://localhost:3001/create", payload); //corregir ésto!!!!!!!!!!!!!
      
        console.log(response)
        return response;     
    }catch (error) {
        console.log(error)
    }
}
};