import axiosInstance from "../../config/axios";
import { TJsonable } from "../../types/jsonable.types";

const getUrlData = async (link: string) => {
  const response = await axiosInstance.get(link);
  return response;
};

const deleteUrlData = async (link: string) => {
  const response = await axiosInstance.delete(link);
  return response;
};

const postUrlData = async (link: string, body: TJsonable) => {
  const response = await axiosInstance.post(link, body);
  return response;
};

const putUrlData = async (link: string, body: TJsonable) => {
  const response = await axiosInstance.put(link, body);
  return response;
};

const patchUrlData = async (link: string, body: TJsonable) => {
  const response = await axiosInstance.patch(link, body);
  return response;
};

export { getUrlData, postUrlData, patchUrlData, putUrlData, deleteUrlData };
