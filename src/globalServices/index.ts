import axios from 'axios';
import { IServicesEndpoint } from './index.types';

const requester = async (service: IServicesEndpoint, data?: object) => {
  let { baseURL, endpoint, headers, method } = service;

  const client = axios.create({ headers });
  return await client[method](`${baseURL}${endpoint}`, data);
};

export default requester;