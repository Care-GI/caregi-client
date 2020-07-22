import React, { Fragment, useState, useEffect } from "react";
import { useRouter } from "next/router";
import Loading from "../components/Loading/Loading";

const useSecure = () => {
  const router = useRouter();
  const [token, setToken] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!localStorage.getItem("careToken")) {
      router.push("/login");
      return;
    }

    setToken(localStorage.getItem("careToken"));
    setLoading(false);
  }, []);

  const Secure = (props) => {
    return loading ? <Loading /> : <Fragment>{props.children}</Fragment>;
  };

  return [token, Secure];
};

export default useSecure;
