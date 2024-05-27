import axios from 'axios';
const API_UEL='https://fakestoreapi.com/users'

 export const fetchUsers =async (email,password)=>{
    try{
        const response= await axios.get(API_UEL);
        const users=response.data;
        console.log(users)
       return users.find(user=>user.email === email && user.password === password)
   
    } catch(error){
        console.error('Error fetching users:', error);
    throw error;

    }

}

