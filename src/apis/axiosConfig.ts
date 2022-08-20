import axios from 'axios';
import { config } from '../env.config';

const axiosOptions = {
  baseURL: config.backendBaseUrl,
  withCredentials: true,
};

const Axios = axios.create(axiosOptions);

export default Axios;
