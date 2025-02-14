// funcionalidad de autenticacion y el index router
import React from "react";
import _useAuth from "../hooks/useAuth";
import { Helmet } from "react-helmet";

import Header from "@components/Header/Header";
import NavBarApp from "@layout/NavBarApp";
import ActiveAuth from "@hooks/useActive";

const Main = (props) => {
  const [SecureAuth] = _useAuth();

  return (
    <SecureAuth>
      <Helmet title="Care App 💜">
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="theme-color" content="#000000" />
        <meta
          name="description"
          content="Web site created using create-react-app"
        />
        <link rel="icon" href="favicon.ico" />
        {/*!----BOOTSTRAP--> */}
        <link
          href="https://stackpath.bootstrapcdn.com/bootswatch/4.4.1/pulse/bootstrap.min.css"
          rel="stylesheet"
          integrity="sha384-FnujoHKLiA0lyWE/5kNhcd8lfMILbUAZFAT89u11OhZI7Gt135tk3bGYVBC2xmJ5"
          crossOrigin="anonymous"
        />
        {/* <!--  Icons   --> */}
        <script
          src="https://kit.fontawesome.com/c51900663c.js"
          crossOrigin="anonymous"
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
      <Header href="/app/home" />

      <NavBarApp />
      {props.children}
      <script
        src="https://code.jquery.com/jquery-3.5.1.slim.min.js"
        integrity="sha384-DfXdz2htPH0lsSSs5nCTpuj/zy4C+OGpamoFVy38MVBnE+IbbVYUew+OrCXaRkfj"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://cdn.jsdelivr.net/npm/popper.js@1.16.0/dist/umd/popper.min.js"
        integrity="sha384-Q6E9RHvbIyZFJoft+2mJbHaEWldlvI9IOYy5n3zV9zzTtmI3UksdQRVvoxMfooAo"
        crossOrigin="anonymous"
      ></script>
      <script
        src="https://stackpath.bootstrapcdn.com/bootstrap/4.5.0/js/bootstrap.min.js"
        integrity="sha384-OgVRvuATP1z7JjHLkuOU7Xw704+h835Lr+6QL9UvYjZE3Ipu6Tp75j7Bh/kR0JKI"
        crossOrigin="anonymous"
      ></script>
      <ActiveAuth></ActiveAuth>
    </SecureAuth>
  );
};

export default Main;
