import { AxiosRequestHeaders } from "axios";

export interface IServicesEndpoint {
  baseURL: string;
  endpoint: string;
  endpointStack?: string;
  headers: AxiosRequestHeaders;
  method: TServicesRequestMethods;
};

type TServicesRequestMethods = 'post' | 'get' | 'put' | 'delete';
