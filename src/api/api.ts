import axios, {AxiosRequestConfig} from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://khaofit-backend.onrender.com/khaofit',
});

// Function to make a GET request with optional params and headers
export const getAPI = async <T>(
  endpoint: string,
  params: any = {},
  headers: AxiosRequestConfig['headers'] = {},
): Promise<T> => {
  try {
    const response = await axiosInstance.get<T>(endpoint, {params, headers});
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.data?.details[0]?.message ||
        error?.response?.data?.data?.message ||
        error?.response?.data?.message ||
        error?.response?.message,
    );
  }
};

// Function to make a POST request with optional data and headers
export const postAPI = async <T>(
  endpoint: string,
  data: any = {},
  params: any = {},
  headers: AxiosRequestConfig['headers'] = {},
): Promise<T> => {
  try {
    const response = await axiosInstance.post<T>(endpoint, data, {
      params,
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.data?.message ||
        error?.response?.data?.data?.details[0]?.message ||
        error?.response?.data?.message ||
        error?.response?.message ||
        error?.response?.data,
    );
  }
};

// Function to make a PUT request with optional data and headers
export const putAPI = async <T>(
  endpoint: string,
  data: any = {},
  params: any = {},
  headers: AxiosRequestConfig['headers'] = {},
): Promise<T> => {
  try {
    const response = await axiosInstance.put<T>(endpoint, data, {
      params,
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.data?.details[0]?.message ||
        error?.response?.data?.data?.message ||
        error?.response?.data?.message ||
        error?.response?.message,
    );
  }
};

// Function to make a DELETE request with optional data and headers
export const deleteAPI = async <T>(
  endpoint: string,
  data: any = {},
  params: any = {},
  headers: AxiosRequestConfig['headers'] = {},
): Promise<T> => {
  try {
    const response = await axiosInstance.delete<T>(endpoint, {
      data,
      params,
      headers,
    });
    return response.data;
  } catch (error: any) {
    throw new Error(
      error?.response?.data?.data?.details[0]?.message ||
        error?.response?.data?.data?.message ||
        error?.response?.data?.message ||
        error?.response?.message,
    );
  }
};
