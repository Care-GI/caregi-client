import React from "react";
import Header from "../components/Header/Header";

// Personal Hooks
import useNav from "../hooks/useNav";

//lib
import navPrincipalItems from "../lib/navPrincipalItems";

const Product = () => {
  //eslint-disable-next-line
  const [navstate, Nav, setNavstate] = useNav(false, navPrincipalItems);

  return (
    <>
      <Header />
      <Nav />
    </>
  );
};

export default Product;
