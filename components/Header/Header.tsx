import React from "react";
import Link from "next/link";

import styled from "@emotion/styled";
import navPrincipalItems from "@lib/navPrincipalItems";

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

const Header = ({ href }) => {
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
      <Link href={href} passHref>
        <a onClick={changeCurrent}>
          <MainLogo src="/images/MainLogo.png" alt="main logo" />
        </a>
      </Link>
    </HeaderContainer>
  );
};

export default Header;
