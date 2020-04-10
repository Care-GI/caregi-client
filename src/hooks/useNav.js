import React, { useState } from "react";
import NavBar from "../components/NavBar/NavBar";
import styled from "@emotion/styled";

const IconNavBarContainer = styled.div`
  /* ... */
  position: fixed;
  top: 3rem;
  right: 10rem;
  z-index: 100;

  :hover {
    transform: scale(1.2);
  }

  i {
    transform: scale(2);
  }

  /*Tableta*/
  @media (max-width: 768px) {
    i {
      transform: scale(2);
    }

    right: 5rem;
    top: 2rem;
  }

  /* Mobile Large */

  @media (max-width: 428px) {
    i {
      transform: scale(2);
    }

    right: 2rem;
    top: 1.5rem;
  }

  /* Mobile normal */
  @media (max-width: 375px) {
    i {
      transform: scale(2);
    }
    right: 2rem;
    top: 1.5rem;
  }
`;

const useNavBar = (initialState, options) => {
  const [navopen, setNavopen] = useState(initialState);
  const [iconnav, setIconnav] = useState("fa-ellipsis-h");
  const [navcolor, setNavcolor] = useState("#512b58");

  const handleNavBarChange = () => {
    navopen ? setNavopen(false) : setNavopen(true);
    navopen ? setIconnav("fa-ellipsis-h") : setIconnav("fa-times");
    navopen ? setNavcolor("#512b58") : setNavcolor("#79bac1");
  };

  let Component = () => (
    <>
      <IconNavBarContainer>
        <i
          onClick={handleNavBarChange}
          className={`fas ${iconnav} fa-lg`}
          style={{ color: navcolor }}
        ></i>
      </IconNavBarContainer>
      {navopen ? (
        <NavBar
          items={options}
          handleNavBarChange={handleNavBarChange}
          navopen={navopen}
        />
      ) : null}
    </>
  );

  return [navopen, Component, setNavopen];
};

export default useNavBar;
