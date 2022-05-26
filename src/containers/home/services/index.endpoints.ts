import { ICatsEndpoints, ICatsEndpointsList } from "./index.types";

const BASE_URL = 'https://api.thecatapi.com/v1'
const API_KEY = '2e3232ce-eba3-4b29-8c28-eed30ffdf8f0'

export const catServices: ICatsEndpointsList = {
  catsList: {
    baseURL: BASE_URL,
    endpoint: `/breeds`,
    headers: {
      'x-api-key': API_KEY
    },
    method: 'get'
  },
  catVote: {
    baseURL: BASE_URL,
    endpoint: `/votes`,
    headers: {
      'x-api-key': API_KEY
    },
    method: 'post'
  },
};
