import axios from "axios";
import { TJsonable } from "../../types/jsonable.types";

const getUrlData = async (link: string) => {
  const response = await axios.get(link);
  return response;
};

const deleteUrlData = async (link: string) => {
  const response = await axios.delete(link);
  return response;
};

const postUrlData = async (link: string, body: TJsonable) => {
  const response = await axios.post(link, body);
  return response;
};

const putUrlData = async (link: string, body: TJsonable) => {
  const response = await axios.put(link, body);
  return response;
};

const patchUrlData = async (link: string, body: TJsonable) => {
  const response = await axios.patch(link, body);
  return response;
};

export { getUrlData, postUrlData, patchUrlData, putUrlData, deleteUrlData };
