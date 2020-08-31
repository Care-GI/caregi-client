//! This function checks if the user information in the api
import axiosClient from "../config/axios";
import { proxy } from "../constants/proxy";
import {
  setBasicInfo,
  setStatusInf,
  setActiveStatus,
} from "../store/actions/userActions";

const getStatusAcount = async (token, router, dispatch) => {
  try {
    const axios = axiosClient(token);
    const response = await axios.get(`${proxy}/api/client/validate/status`);
    console.log(response);
    //! evnetos para definir el estado del usuario y setearlo en redux
    dispatch(setStatusInf(response.data.statusInformation));
    dispatch(setBasicInfo(response.data.basicInformation));
    dispatch(setActiveStatus(response.data.statusInformation.acountActive));
    // if (!response.data.acountActive) {
    //   router.push("/app/activate");
    //   return;
    // }
  } catch (error) {
    localStorage.removeItem("careToken");
    router.push("/login");
  }
};

export default getStatusAcount;
