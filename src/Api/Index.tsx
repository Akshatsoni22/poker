 import axios from 'axios';
import { toast } from 'react-toastify';
import { REACT_APP_API_ADMIN_BASE_URL } from '../Config/Config';
import { VALIDATION_MESSAGE, CODE } from '../Constants/Constants';
import { REACT_APP_BASE_URL } from '../Config/Config';

const instance = axios.create({
  baseURL: REACT_APP_API_ADMIN_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
  },
});

const instanceAuth = axios.create({
  baseURL: REACT_APP_API_ADMIN_BASE_URL,
  headers: {
    Accept: "application/json",
    "Content-Type": "application/json",
    "Access-Control-Allow-Origin": "*",
    "Access-Control-Allow-Headers": "*",
    "Access-Control-Allow-Methods": "PUT, GET, POST, DELETE, OPTIONS",
    'Authorization': 'Bearer ' + localStorage.getItem('isAdminLoginToken')
  },
});

export const POSTAPI = (URL: string, params: any) => {
  const promise = instance.post(URL, params, {
    validateStatus: status => status >= 200 && status < 600
  });
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE) {
      if (response?.data?.status) {
        // toast.success(response.data?.message);
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      // toast.error(response.data?.message);
      localStorage.clear();
      sessionStorage.clear()
      window.location.href = REACT_APP_BASE_URL + '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    // return error;   
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};

export const POSTAUTHAPI = (URL: string, params: any) => {
  const promise = instanceAuth.post(URL, params, {
    validateStatus: status => status >= 200 && status < 600
  });
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE) {
      if (response?.data?.status) {
        // toast.success(response.data?.message);
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      // toast.error(response.data?.message);
      localStorage.clear();
      sessionStorage.clear()
      window.location.href = REACT_APP_BASE_URL + '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    // return error;   
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};

export const PUTAUTHAPI = (URL: string, params: any) => {
  const promise = instanceAuth.put(URL, params, {
    validateStatus: status => status >= 200 && status < 600
  });
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE) {
      if (response?.data?.status) {
        toast.success(response.data?.message);
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      // toast.error(response.data?.message);
      localStorage.clear();
      sessionStorage.clear()
      window.location.href = REACT_APP_BASE_URL + '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};

export const GETAUTHAPI = (URL: string, params: any) => {
  const promise = instanceAuth.get(URL, params);
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE) {
      if (response?.data?.status) {
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      // toast.error(response.data?.message);
      localStorage.clear();
      sessionStorage.clear()
      window.location.href = REACT_APP_BASE_URL + '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};

export const DELETEAUTHAPI = (URL: string, params: any) => {
  const promise = instanceAuth.delete(URL, params);
  const dataPromise = promise.then((response) => response).then((response) => {
    if (response?.status === CODE?.OK_CODE) {
      if (response?.data?.status) {
        return response.data;
      }
      else {
        toast.error(response.data?.message);
        return response.data;
      }
    }
    else if (response?.status === CODE?.BAD_REQUEST_CODE) {
      toast.error(response.data?.message);
      return response.data;
    }
    else if (response?.status === CODE?.UNAUTHORIZED_CODE) {
      // toast.error(response.data?.message);
      localStorage.clear();
      sessionStorage.clear()
      window.location.href = REACT_APP_BASE_URL + '/login'
    }
    else if (response?.status === CODE?.INTERNAL_SERVER_ERROR) {
      toast.error(response.data?.message);
    }
    else {
      toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
    }
  }).catch((error) => {
    toast.error(VALIDATION_MESSAGE?.CATCH_ERROR);
  });
  return dataPromise;
};