import axios from 'axios';
import { environment } from '../config'


export const axiosInit = async () => {
  axios.defaults.baseURL = environment.BASE_URL;

  const { token } = await axios.get('token').then((response)=> response.data);
  
  axios.defaults.headers.common['Token'] = token;

  axios.interceptors.response.use(
    (response) => response,
    (error) => {
      if(error.response.status === 500) {
        alert('Internal server issue. Please try again later');
      }
  });
}