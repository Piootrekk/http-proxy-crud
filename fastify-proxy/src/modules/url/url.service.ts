import { AxiosError, AxiosRequestConfig } from "axios";
import axiosInstance from "../../config/axios";
import { TErrorResponse } from "./url.schema";

const getUrlData = async (link: string) => {
  const response = await axiosInstance.get(link);
  return response;
};

const deleteUrlData = async (link: string) => {
  const response = await axiosInstance.delete(link);
  return response;
};

const postUrlData = async (link: string, body: unknown) => {
  const response = await axiosInstance.post(link, body);
  return response;
};

const putUrlData = async (link: string, body: unknown) => {
  const response = await axiosInstance.put(link, body);
  return response;
};

const patchUrlData = async (link: string, body: unknown) => {
  const response = await axiosInstance.patch(link, body);
  return response;
};

const errorHandler = (err: unknown): Omit<TErrorResponse, "path"> => {
  if (err instanceof AxiosError)
    return {
      message: err.message,
      code: err.code,
      status: err.response?.status,
    };
  else {
    return {
      message: "Unknown error",
      code: "ERROR",
      status: 500,
    };
  }
};

const decodeEncodedUrl = (rawUrl: string): string => {
  if (!rawUrl.startsWith("http://") && !rawUrl.startsWith("https://")) {
    const decodedUrl = decodeURIComponent(rawUrl);
    return decodedUrl;
  }
  return rawUrl;
};

export {
  getUrlData,
  postUrlData,
  patchUrlData,
  putUrlData,
  deleteUrlData,
  errorHandler,
  decodeEncodedUrl,
};
