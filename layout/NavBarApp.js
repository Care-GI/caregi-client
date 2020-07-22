import React, { Fragment } from "react";
import styled from "@emotion/styled";
import { Colors } from "../constants/Colors";
import { Fonts } from "../constants/Fonts";
import { useRouter } from "next/router";
import { useSelector } from "react-redux";

const NavContainer = styled.div`
  /* ... */
  font-family: ${Fonts.Body};
  text-align: center;
  padding-bottom: 1.4rem;
  padding-top: 1.4rem;
  background-color: ${Colors.secondaryLigth.hexa};

  .icon {
    color: white;
    padding: 2rem;
  }
`;

const NavBarApp = () => {
  const { userInformation } = useSelector((state) => state.user);

  const { name, lastname } = userInformation;
  const router = useRouter();

  const handleLogout = () => {
    localStorage.removeItem("careToken");
    router.push("/login");
  };

  return (
    <Fragment>
      <div>
        <div className="container mb-4">
          <div className="row ">
            <div className="col-md-2 mx-auto">
              <li
                class="dropdown "
                style={{
                  listStyle: "none",
                  backgroundColor: Colors.primary.hexa,
                  borderRadius: "2rem",
                }}
              >
                <a
                  class="nav-link dropdown-toggle"
                  href="#!"
                  id="navbarDropdown"
                  role="button"
                  data-toggle="dropdown"
                  aria-haspopup="true"
                  aria-expanded="false"
                  style={{ color: "white" }}
                >
                  {`${name} ${lastname}`}
                </a>
                <div class="dropdown-menu" aria-labelledby="navbarDropdown">
                  <a class="dropdown-item" href="/app/profile">
                    Perfil
                  </a>
                  <a class="dropdown-item" href="/app/settings">
                    Configuracion
                  </a>
                  <div class="dropdown-divider"></div>
                  <a class="dropdown-item" onClick={handleLogout}>
                    Salir
                  </a>
                </div>
              </li>
            </div>
            <div className="col-md-2 mx-auto">
              <a className="icon" to="/app/cart">
                <i className="fas fa-cart-plus fa-2x"></i>
              </a>
            </div>
          </div>
        </div>
      </div>

      <NavContainer>
        {/* <Link className="icon" to="/app/profile">
          Perfil
        </Link> */}
        <a className="icon" href="/app/dates">
          Citas
        </a>
        <a className="icon" href="/app/delivery">
          Pedidos
        </a>
        <a className="icon" href="/app/store">
          Tienda
        </a>
        <a className="icon" href="/app/doctors">
          Doctors
        </a>

        {/* <Link className="icon" to="/app/settings">
          Configuracion
        </Link> */}
      </NavContainer>
    </Fragment>
  );
};

export default NavBarApp;
