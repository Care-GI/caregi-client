import React, { useEffect, Fragment } from "react";
import Layout from "../layout/Layout";
import Axios from "axios";
import { proxy } from "../constants/proxy";

// components
import { ScreenPurple } from "../styled-components/screenc/screen";
import styled from "@emotion/styled";
import { Colors } from "../constants/Colors";

const NavSearchContainer = styled.div`
  justify-content: center;
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  background-color: white;
  border-radius: 2rem;
  border-width: 1rem;
  border-style: groove;
  border-color: ${Colors.secondaryDark.rgb};
  width: 25%;
  padding: 1rem 1rem;
  margin: 4rem 0;
  .right {
    width: 90%;
    background-color: red;
    input {
      width: 100%;
    }
  }
`;

const ItemsContainer = styled.div`
  height: 150px;
  /*IMPORTANTE*/
  display: flex;
  justify-content: center;
  align-items: center;
`;

const catalog = () => {
  useEffect(async () => {
    const products = await Axios.get(`${proxy}/api/product/all`);
  }, []);

  return (
    <Layout navActive="true">
      <ScreenPurple>
        <h2 className="mt-5">Nuestro Catalogo de productos</h2>
        <ItemsContainer>
          <NavSearchContainer>
            <div className="right">
              <input />
            </div>
            <div className="left">
              <i class="fas fa-search"></i>
            </div>
          </NavSearchContainer>
        </ItemsContainer>
      </ScreenPurple>
    </Layout>
  );
};

export default catalog;
