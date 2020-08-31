import React, { Fragment, useState } from "react";
import { useRouter } from "next/router";
import Link from "next/link";
import { useSelector } from "react-redux";
import styled from "@emotion/styled";

import { ColorsHexa } from "@constants/Colors";
import { Fonts } from "@constants/Fonts";
import { dimension } from "@constants/Dimensions";

const NavContainer = styled.div`
  /* ... */
  font-family: ${Fonts.Title};
  text-align: center;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
  background-color: ${ColorsHexa.secondaryLigth};

  .icon {
    color: white;
    text-transform: uppercase;
    font-size: 1.4rem;
    margin-right: 2rem;
    text-decoration: none;

    :hover {
      background-color: white;
      color: ${ColorsHexa.secondaryLigth};
      padding: 2rem;
      border-radius: 1.5rem;
    }

    &:last-of-type {
      margin-right: 0;
    }
  }
`;

const NavBarApp = () => {
  const { userInformation } = useSelector((state) => state.user);
  const { name } = userInformation;
  const router = useRouter();
  const [show, setShow] = useState("none");

  const handleLogout = () => {
    localStorage.removeItem("careToken");
    router.push("/login");
  };

  const UpContainer = styled.div`
    background-color: ${ColorsHexa.primary};
    padding: 1.2rem;
    color: white;
    display: flex;
    text-align: start;
    flex: 1;
    justify-content: space-around;
    font-family: ${Fonts.Title};
    font-size: 1.2rem;

    li {
      list-style: none;
    }

    a {
      color: white;
      text-decoration: none;
    }

    .half {
      width: 10%;
    }

    ul {
      background-color: ${ColorsHexa.secondaryLigth};
      border-radius: 2rem;
    }

    .hidden {
      display: ${show};
      text-decoration: none;
      color: ${ColorsHexa.primary};
      :hover {
        color: white;
        font-size: 1.4rem;
      }
    }

    .opener {
      position: relative;
    }

    .menu-main {
      display: flex;

      i {
        margin-left: 2rem;
        margin-top: 0.6rem;
      }
    }

    .carrito-compras {
      color: ${ColorsHexa.secondaryLigth};
      :hover {
        transform: scale(1.4);
      }
    }

    @media (max-width: ${dimension.tablet}) {
      ul {
        background-color: ${ColorsHexa.secondaryLigth};
        border-radius: 1.3rem;
      }
      .half {
        width: 20%;
      }
    }

    @media (max-width: ${dimension.mobileLarge}) {
      ul {
        background-color: ${ColorsHexa.secondaryLigth};
        border-radius: 1.3rem;
      }
      .half {
        width: 100%;
        text-align: center;
      }
    }
  `;

  return (
    <Fragment>
      <div>
        <UpContainer className="row contenedor-alto">
          <div className="half ">
            <div>
              <ul
                onMouseEnter={() => setShow("relative")}
                onMouseLeave={() => setShow("none")}
                onTouchStartCapture={() => setShow("relative")}
              >
                <li>
                  <div className="menu-main">
                    <p className="opener">{name}</p>
                    <i className="fas fa-angle-double-down"></i>
                  </div>
                </li>
                <li>
                  <Link href="/app/profile">
                    <a className="hidden">Perfil</a>
                  </Link>
                </li>
                <li>
                  <Link href="/app/settings">
                    <a className="hidden">Configuracion</a>
                  </Link>
                </li>
                <li>
                  <a onClick={handleLogout} className="hidden">
                    Cerrar sesion
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="half">
            <Link href="/app/cart" passHref>
              <a className="icon">
                <i className="fas fa-cart-plus fa-2x carrito-compras"></i>
              </a>
            </Link>
          </div>
        </UpContainer>
      </div>

      <NavContainer>
        {/* <Link className="icon" to="/app/profile">
          Perfil
        </Link> */}
        <Link href="/app/dates">
          <a className="icon">Citas</a>
        </Link>
        <Link href="/app/delivery">
          <a className="icon">Pedidos</a>
        </Link>
        <Link href="/app/store">
          <a className="icon">Tienda</a>
        </Link>
        <Link href="/app/doctors" passHref>
          <a className="icon">doctores</a>
        </Link>

        {/* <Link className="icon" to="/app/settings">
          Configuracion
        </Link> */}
      </NavContainer>
    </Fragment>
  );
};

export default NavBarApp;
