import Axios from "axios";

const axiosClient = (token) => {
  const clientAxios = Axios.create({
    headers: { Authorization: `Bearer ${token}` },
  });
  // returning the personalize client axios
  return clientAxios;
};

export default axiosClient;
