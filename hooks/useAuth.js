import React, { useEffect, useState } from "react";
import { useSelector, useDispatch } from "react-redux";
import {
  setToken,
  setStatusInf,
  setBasicInfo,
} from "../redux/actions/userActions";
import axiosClient from "../config/axios";
import { proxy } from "../constants/proxy";
import Loading from "../components/Loading/Loading";
import { useRouter } from "next/router";

const useAuth = () => {
  const { token, statusInformation, userInformation } = useSelector(
    (state) => state.user
  );

  const dispatch = useDispatch();
  const router = useRouter();

  const Provider = ({ children, history }) => {
    const [loading, setLoading] = useState(false);

    const getStatusAcount = async () => {
      try {
        const axios = axiosClient(token);
        console.log("haciendo peticion");
        const response = await axios.get(`${proxy}/api/client/validate/status`);
        console.log(response);
        //! evnetos para definir el estado del usuario y setearlo en redux
        dispatch(setStatusInf(response.data.statusInformation));
        dispatch(setBasicInfo(response.data.basicInformation));
        if (!response.data.acountActive) {
          router.push("/app-activate");
          return;
        }
      } catch (error) {
        // error el token no es valido
        localStorage.removeItem("careToken");
        router.push("/login");
        console.log(error);
      }
    };

    useEffect(() => {
      // primero al cargar el componente es revisar que exista el token guardado
      if (!token) {
        const tokenLocal = localStorage.getItem("careToken");
        if (!tokenLocal) {
          // redireccionar al login
          router.push("/login");
          return;
        }

        // setting token to the store
        dispatch(setToken(tokenLocal));
      }

      // validar status del usuario solo en caso de que se haya seteado el token
      if (token) {
        if (!statusInformation && !userInformation) {
          getStatusAcount();
          setLoading(false);
        }
      }
    }, []);

    // cargando componente loading mientras se setea y hace la peticion
    if (!userInformation || !statusInformation) return <Loading />;

    return <>{children}</>;
  };

  return [token, Provider];
};

export default useAuth;
