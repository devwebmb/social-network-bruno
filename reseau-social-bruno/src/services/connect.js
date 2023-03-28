import axios from "axios";

export const signup = async (username, email, password) => {
  try {
    const response = await axios.post(`http://127.0.0.1:3333/user/create`, {
      username,
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};

export const login = async (email, password) => {
  try {
    const response = await axios.post(`${process.env.API_URL}/user/login`, {
      email,
      password,
    });
    return response.data;
  } catch (error) {
    throw new Error(error.response.data.message);
  }
};
