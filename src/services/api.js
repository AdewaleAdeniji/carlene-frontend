import axios from "axios";
import configs from "../helpers/configs";
export const validateEmail = (email) => {
  const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailPattern.test(email);
}
export const LogUserIn = (userObj) => {

  localStorage.setItem('user', JSON.stringify(userObj));
  localStorage.setItem('token', userObj.token);
}
export const RedirectToLoginPage  = () => {
  // return false;
  window.location.href = "/auth/login";
}
export const LogUserOut = () => {
  localStorage.removeItem('user')
  localStorage.removeItem('token');
  RedirectToLoginPage();
}
export const getUser = () => {
  const user = localStorage.getItem('user');
  if(user){
    return JSON.parse(user) || {}
  }
  else {
    RedirectToLoginPage();
  }
}
export const Register = async (payload) => {
  var data = JSON.stringify(payload);
  var config = {
    method: "post",
    url: `${configs.API_BASE_URL}/auth/register`,
    headers: {
      appKey: configs.USER_SERVICE_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};

export const Login = async (payload) => {
  var data = JSON.stringify(payload);
  var config = {
    method: "post",
    url: `${configs.API_BASE_URL}/auth/login`,
    headers: {
      appKey: configs.USER_SERVICE_KEY,
      "Content-Type": "application/json",
    },
    data: data,
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const getTokenFromLocal = () => {
  const token = localStorage.getItem("token");
  if (!token) {
    RedirectToLoginPage();
    return;
  }
  return token;
};

export const getUserCars = async () => {
  const token = await getTokenFromLocal();
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}/user/cars`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const getCarDetails = async (carID) => {
  const token = await getTokenFromLocal();
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}/user/car/${carID}/details`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const getCarMaintenanceDetails = async (carID, maintenanceId) => {
  const token = await getTokenFromLocal();
  var config = {
    method: "get",
    url: `${configs.API_BASE_URL}/maintenances/${carID}/${maintenanceId}`,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const addMaintenance = async (payload) => {
  const token = await getTokenFromLocal();
  var config = {
    method: "post",
    url: `${configs.API_BASE_URL}/maintenances/${payload?.carID}/${payload?.maintenanceType}`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    console.log(err)
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};
export const addCar = async (payload) => {
  const token = await getTokenFromLocal();
  var config = {
    method: "post",
    url: `${configs.API_BASE_URL}/user/cars/add`,
    data: payload,
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
  };
  try {
    const req = await axios(config);
    return {
      success: true,
      ...req.data,
    };
  }  catch (err) {
    console.log(err)
    handleStatusCode(err?.response?.status);
    return {
      success: false,
      message: err?.response?.data?.message || "Request failed ",
    };
  }
};

export const handleStatusCode = (statusCode) => {
  if(statusCode === 403){
    RedirectToLoginPage();
  }
}

