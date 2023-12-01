import axios from 'axios';
import { environment } from '../config'


export const axiosInit = async () => {
  axios.defaults.baseURL = environment.BASE_URL;

  const { token } = await axios.get('token').then((response)=> response.data)

  axios.interceptors.request.use(token);
}