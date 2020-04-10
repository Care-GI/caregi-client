import React from "react";
import styled from "@emotion/styled";
import { Link } from "react-router-dom";
import navPrincipalItems from "../../lib/navPrincipalItems";

const MainLogo = styled.img`
  width: 8%;
  display: block;
  margin: auto;
  /*Tableta*/
  @media (max-width: 768px) {
    width: 15%;
  }

  /* Mobile Large */

  @media (max-width: 428px) {
    width: 25%;
  }

  /* Mobile normal */
  @media (max-width: 375px) {
    width: 35%;
  }
`;

const HeaderContainer = styled.div`
  /* ... */
  background-color: #fff;
  padding: 1.5rem;
`;

const Header = () => {
  // setea el current a home por cambio de pagina
  const changeCurrent = () => {
    navPrincipalItems.map((item) => {
      if (item.toLink === "/home") {
        return (item.current = true);
      } else {
        return (item.current = false);
      }
    });
  };

  return (
    <HeaderContainer>
      <Link to="/home" onClick={changeCurrent}>
        <MainLogo src={require("../../images/MainLogo.png")} alt="main logo" />
      </Link>
    </HeaderContainer>
  );
};

export default Header;
