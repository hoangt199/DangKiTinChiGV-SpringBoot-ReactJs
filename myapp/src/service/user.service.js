import axios from "axios";
import { data } from "jquery";
import authHeader from "./auth-header";
import authService from "./auth.service";
const API_URL = "http://localhost:8080/api/home/";
const API_URL_SUBJECT = "http://localhost:8080/api/home/";

const getPublicContent = () => {
  return axios.get(API_URL + "all");
};

const getUserBoard = () => {
  return axios.get(API_URL + "user", { headers: authHeader() });
};

const getModeratorBoard = () => {
  return axios.get(API_URL + "mod", { headers: authHeader() });
};

const getAdminBoard = () => {
  return axios.get(API_URL + "admin", { headers: authHeader() });
};
const getAll = () => {
  return axios.get(API_URL + "get-all-subject", { headers: authHeader() });
};

const get = (id) => {
  return axios.get(API_URL_SUBJECT+`get-subject/${id}` , {headers : authHeader()});
};

const create = (data) =>{
  return axios.post(API_URL_SUBJECT +"add-subject", data, {headers : authHeader() });
}

const update=(id, data) => {
  return axios.put(API_URL_SUBJECT +`update-subject/${id}`, data,{headers : authHeader()});
}

const deleteSub = (id) => {
  return axios.delete(API_URL_SUBJECT + `delete-subject/${id}`,{headers : authHeader()});
}
const createRegisterSubject = (subject) =>{
  return axios.post(API_URL_SUBJECT +"create-register",subject, {headers : authHeader() });
}
const getAllSubjectofRegister = (userame) =>{
  return axios.get(API_URL_SUBJECT +"get-all-register", {headers : authHeader() });
}
const deleteRegister = (id) => {
  return axios.delete(API_URL_SUBJECT + `delete-subject-of-register/${id}`,{headers : authHeader()});
}
const deleteAll = () => {
  return axios.delete(`delete-all-subject`);
}
export default {
  getPublicContent,
  getUserBoard,
  getModeratorBoard,
  getAdminBoard,
  get,
  getAllSubjectofRegister,
  getAll,
  update,
  deleteSub,
  deleteAll,
  create,
  createRegisterSubject,
  deleteRegister
};