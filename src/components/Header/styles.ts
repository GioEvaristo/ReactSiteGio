import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SHeader = styled.header`
  /* Cabeçalho */
  display: flex;
  justify-content: space-between;
  align-items: center;
  border-bottom: 0.5rem solid ${colors.primary};
  height: 4.5rem;
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

export const SNavBar = styled.nav`
  /* Navegação */
  display: flex;
  align-items: center;
  font-size: xx-large;
  margin-right: 2rem;
  font-family: Mystery Quest;
  a {
    margin: 0 1rem;
    text-decoration: none;
    color: ${colors.white};
  }
  a:hover {
    font-weight: bold;
  }
  button{
    background-color: ${colors.primary};
    border: 0.15rem solid ${colors.secondary};
    border-radius: 0.2rem;
    padding: 0.3rem;
    font-family: Carrois Gothic SC;
    font-size: 1.5rem;
  }
`