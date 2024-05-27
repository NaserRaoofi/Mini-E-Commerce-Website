import axios from 'axios';


const registerUser = async (data) => {
  const response = await axios.post('https://fakestoreapi.com/users', data);
  console.log(response.data)
  return response.data;
};

export { registerUser };
