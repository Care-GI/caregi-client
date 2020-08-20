import React from "react";
import Layout from "../layout/Layout";
import styled from "@emotion/styled";
import { dimension } from "../constants/Dimensions";
const error = () => {
  const ImageCenter = styled.div`
    display: flex;
    flex: 1;
    justify-content: space-around;

    img {
      width: 100%;
    }

    @media (min-width: ${dimension.mobileNormal}) {
      padding: 0;
    }

    @media (min-width: 1128px) {
      padding: 2rem 20rem;

      img {
        width: 80%;
      }
    }
  `;

  return (
    <Layout>
      <ImageCenter>
        <img src="/svg/undraw_404.svg" alt="Pagina no encontrada" />
      </ImageCenter>
    </Layout>
  );
};

export default error;
