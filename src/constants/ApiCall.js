import config from '../config/config';
import axiosInstance from './ApiInstance';
const BASE_URL = config.BASE_URL;

const apiRequest = async ({url, method, payload = null, headers = null}) => {
  try {

    const config = {
      method: method,
      url: url,
      data: payload, 
      headers: {
        ...headers,
      },
    };
    const response = await axiosInstance(config);

    return response.data; 
  } catch (error) {
    console.error('Error during API request:', error);
    throw error; 
  }
};

export default apiRequest;
