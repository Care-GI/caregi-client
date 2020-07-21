import React from "react";
import { Helmet } from "react-helmet";
import Header from "../components/Header/Header";
import useNav from "../hooks/useNav";
import navPrincipalItems from "../lib/navPrincipalItems";

const Layout = (props) => {
  // eslint-disable-next-line
  const [navstate, Nav, setNavstate] = useNav(false, navPrincipalItems);

  return (
    <>
      <Helmet title="Care Gi">
        <meta charset="utf-8" />
        <link rel="icon" href="%PUBLIC_URL%/favicon.ico" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="apple-touch-icon" href="%PUBLIC_URL%/logo192.png" />
        {/*!----BOOTSTRAP--> */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/pulse/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-FnujoHKLiA0lyWE/5kNhcd8lfMILbUAZFAT89u11OhZI7Gt135tk3bGYVBC2xmJ5"
          crossorigin="anonymous"
        />
        {/* <!--  Icons   --> */}
        <script
          src="https://kit.fontawesome.com/c51900663c.js"
          crossorigin="anonymous"
        ></script>
        {/* <!--  Fuents   --> */}
        <link
          href="https://fonts.googleapis.com/css?family=Bebas+Neue|Comic+Neue&display=swap|"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Inconsolata&display=swap"
          rel="stylesheet"
        />
        <link
          href="https://fonts.googleapis.com/css?family=Oleo+Script&display=swap"
          rel="stylesheet"
        />
        <link rel="manifest" href="%PUBLIC_URL%/manifest.json" />
      </Helmet>
      <Header />
      <Nav />
      {props.children}
    </>
  );
};

export default Layout;
