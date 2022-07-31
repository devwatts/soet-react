import { setCookies } from "cookies-next";

// Set in localstorage
export const setLocalStorage = (key, value) => {
  if (window !== "undefined") {
    localStorage.setItem(key, JSON.stringify(value));
  }
};

// Remove from localstorage
export const removeLocalStorage = (key) => {
  if (window !== "undefined") {
    localStorage.removeItem(key);
  }
};

// Get from localstorage
export const getLocalStorage = (key) => {
  return JSON.parse(localStorage.getItem(key));
};

export const loginUser = (data, router) => {
  setCookies("token", data.tokens);
  data.tokens = undefined;
  data.password = undefined;
  setLocalStorage("user", data);
  router.push("/dashboard");
};
