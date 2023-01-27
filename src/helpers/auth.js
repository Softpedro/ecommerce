export const token = () => localStorage.getItem("tokenCommerce");

export const setToken = (token) => localStorage.setItem("tokenCommerce", token);

export const deletToken = () => localStorage.removeItem("tokenCommerce");

export const clearLocal = () => localStorage.clear();
