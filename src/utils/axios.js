import * as axiosOriginal from "axios";

export const axios = axiosOriginal.create({
  baseURL: "https://dashboard.api.staging.core.primer.io/",
});

export const setAuthToken = (token) => {
  if (token) {
    axios.defaults.headers.common["Authorization"] = `Bearer ${token}`;
  } else {
    delete axios.defaults.headers.common["Authorization"];
  }
};
