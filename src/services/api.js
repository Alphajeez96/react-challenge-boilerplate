import { axios } from "../utils/axios";

export const loginUser = async (payload) => {
  try {
    let bodyFormData = new FormData();

    Object.keys(payload).forEach((key) => {
      bodyFormData.set(key, payload[key]);
    }, {});

    const response = await axios.post("/auth/login", bodyFormData);

    if (response.status === 200) {
      return {
        isSuccess: true,
        data: response.data,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: "",
    };
  }
};
export const fetchTransactions = async () => {
  try {
    const response = await axios.get("/payments");

    if (response.status === 200) {
      return {
        isSuccess: true,
        data: response.data,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: "",
    };
  }
};
export const getUser = async () => {
  try {
    const response = await axios.get("/users/me");

    if (response.status === 200) {
      return {
        isSuccess: true,
        data: Array.isArray(response.data?.primerAccountList)
          ? response.data.primerAccountList[0]
          : [],
      };
    }
  } catch (err) {
    return {
      error: true,
      message: "",
    };
  }
};

export const getSingleTransaction = async (id) => {
  try {
    const response = await axios.get(`/payments/${id}`);

    if (response.status === 200) {
      return {
        isSuccess: true,
        data: response.data,
      };
    }
  } catch (err) {
    return {
      error: true,
      message: "",
    };
  }
};
