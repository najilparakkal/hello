import axiosConfig from "./axios";

export const getProducts = async () => {
  try {
    const { data } = await axiosConfig.get(`product`);
    return data.data;
  } catch (error) {
    console.log(error);
  }
};
