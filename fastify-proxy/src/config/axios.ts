import axios, { AxiosInstance, InternalAxiosRequestConfig } from "axios";

const createAxiosWithAbortSupport = (timeout: number): AxiosInstance => {
  const axiosInstance = axios.create({
    timeout: timeout,
  });

  axiosInstance.interceptors.request.use((config) => {
    const controller = new AbortController();
    config.signal = controller.signal;
    config.cancelToken = new axios.CancelToken((cancel) => {
      (config as any).cancelRequest = () => {
        controller.abort();
        cancel("Request canceled");
      };
    });

    return config;
  });

  return axiosInstance;
};

const axiosInstance = createAxiosWithAbortSupport(10000);

export default axiosInstance;
