import React, { useState, useEffect } from "react";
import Axios from "axios";
import { useRouter } from "next/router";

// Redux Dependencies
import { useSelector, useDispatch } from "react-redux";
// actions for app
import {
  setLoading,
  showError,
  quitError,
} from "../redux/actions/appStatusActions";

// actions user
import { setActiveStatus, setToken } from "../redux/actions/userActions";

// componentes
import { Colors } from "../constants/Colors";
import FormLogin from "../components/FormLogin/FormLogin";
import { ScreenPurple } from "../styled-components/screenc/screen";
import Loading from "../components/Loading/Loading";
import { proxy } from "../constants/proxy";
import ErrorMessage from "../components/ErrorMessage/ErrorMessage";
import Layout from "../layout/Layout";

const Login = () => {
  // Redux
  const { loading, error } = useSelector((state) => state.appStatus);
  const dispatch = useDispatch();

  const router = useRouter();

  // state
  const [dataLog, setDataLog] = useState({
    id: "",
    password: "",
  });

  // eslint-disable-next-line
  const [propertyLog, setPropertyLog] = useState("username");

  // verificando que exista el token para no iniciar sesion

  useEffect(() => {
    if (localStorage.getItem("careToken")) {
      router.push("/app/home");
    }
  }, []);

  const handleChange = (event) => {
    const { name, value } = event.target;

    setDataLog({ ...dataLog, [name]: value });
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    // start loading

    if (dataLog.id.trim("") === "") {
      dispatch(showError("Rellenar todos los campos"));
      return;
    } else if (dataLog.password.length < 5) {
      dispatch(showError("Contraseña demasiado corta"));
      return;
    }

    //! Unsettting error
    dispatch(quitError());

    dispatch(setLoading(true));

    try {
      const response = await Axios({
        method: "POST",
        url: `${proxy}/api/auth/client/login`,
        data: {
          id: {
            property: propertyLog,
            value: dataLog.id,
          },
          password: dataLog.password,
        },
      });

      // seteando el token y el estado de la cuenta en el local storage
      console.log(response);

      localStorage.setItem("careToken", response.data.token);
      dispatch(setToken(response.data.token));
      dispatch(setActiveStatus(response.data.acountActive.state));
      dispatch(setLoading(false, 3000));
      router.push("/app/home");
    } catch (error) {
      console.log(error);
      dispatch(showError("Ups! Error al iniciar sesion verifique sus datos"));

      // quit loading
      dispatch(setLoading(false, 3000));
    }

    return;
  };

  return (
    <>
      <Layout>
        {loading ? (
          <Loading />
        ) : (
          <ScreenPurple color={Colors.secondaryDark.rgb} extraSize={1}>
            <div className="container">
              <div className="col-lg-6 col-md-6 col-sm-12 m-auto">
                {error.state ? <ErrorMessage>{error.msg}</ErrorMessage> : null}
                <FormLogin
                  data={dataLog}
                  handleChange={handleChange}
                  handleSubmit={handleSubmit}
                />
              </div>
            </div>
          </ScreenPurple>
        )}
      </Layout>
    </>
  );
};

export default Login;
