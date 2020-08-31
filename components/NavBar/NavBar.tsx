import React from "react";
import PropTypes from "prop-types";
import styled from "@emotion/styled";
import { Fonts } from "@constants/Fonts";
import { ColorsHexa } from "@constants/Colors";
import Link from "next/link";

const ItemsConatiner = styled.div`
  /* ... */
  margin-top: 5rem;
  color: #fff;
  font-family: ${Fonts.Title};
  font-size: 30px;

  li {
    list-style: none;
    margin-top: 3rem;
    text-align: center;
    display: block;
    align-self: center;
  }

  li:hover {
    transform: scale(1.2);
  }
`;

export interface INavBarProps {
  items: TNavItem[];
  handleNavBarChange: Function | any;
}

const NavBar: React.SFC<INavBarProps> = ({ items, handleNavBarChange }) => {
  const handleClick = (item) => {
    items.map((item) => {
      if (item.current) {
        item.current = false;
      }
      return "";
    });
    item.current = true;
    handleNavBarChange();
  };

  const NavBarContainer = styled.div`
    /* ... */
    position: fixed;
    top: 0;
    width: 100%;
    height: 100%;
    text-align: start;
    background-color: #512b58;
    z-index: 2;
  `;

  const ImageInyection = styled.img`
    /* ... */
    position: relative;
    transform: rotate(35deg) scale(0.5) translateX(-50px) translateY(-80px);

    @media (max-width: 768px) {
      transform: scale(0.3) translateY(-500px) translateX(-50%) rotate(35deg);
    }
  `;

  return (
    <NavBarContainer>
      <ItemsConatiner>
        <ul>
          {items.map((item) => (
            <li key={item.title}>
              <Link href={item.toLink}>
                <a
                  style={{
                    color: item.current ? ColorsHexa.secondaryLigth : "#fff",
                    textDecoration: "none",
                  }}
                  onClick={() => handleClick(item)}
                >
                  {item.title}
                </a>
              </Link>
            </li>
          ))}
        </ul>
      </ItemsConatiner>
      <ImageInyection src="/images/Jeringa.svg" alt="Jeringa" />
    </NavBarContainer>
  );
};

NavBar.propTypes = {
  items: PropTypes.array.isRequired,
};

export default NavBar;
