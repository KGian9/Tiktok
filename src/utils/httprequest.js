import axios from "axios";

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
});

export const get = async (path, options = {}) => {
  const config = {
    ...options,
    headers: {
      ...options.headers,
    },
  };

  const response = await request.get(path, config);
  return response.data;
};

export default request;
