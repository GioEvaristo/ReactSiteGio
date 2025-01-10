import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5rem solid ${colors.primary};
  height: 5rem;
  display: flex;
  background-image: linear-gradient(#a80960, #5e0335);
  figure {
    display: flexbox;
    align-items: self-start;
    img {
      padding: 0.3rem;
    }
  }
`

export const NavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  font-size: x-large;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.white};
  }
  a:hover {
    font-weight: bold;
  }
`