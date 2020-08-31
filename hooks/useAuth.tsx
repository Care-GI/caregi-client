import React, { Fragment, useEffect } from "react";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";
import { useDispatch } from "react-redux";

import getStatusAcount from "@lib/getStatusAcount";

const useAuth = () => {
  const { userInformation, auth } = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const router = useRouter();

  //! funcion de validacion en el servidor

  const validateToken = () => {
    if (!localStorage.getItem("careToken")) {
      router.push("/login");
      return;
    }
    if (!auth || !userInformation.name) {
      //! no esta la informacion del usuario hay que validar token y traerla
      getStatusAcount(localStorage.getItem("careToken"), router, dispatch);
    }
  };

  const Secure = (props) => {
    useEffect(() => {
      validateToken();
    }, []);

    return <Fragment>{props.children}</Fragment>;
  };

  return [Secure];
};

export default useAuth;
