import styled from "styled-components"

import { colors } from "../../styles/GlobalStyle"

export const SFooter = styled.footer`
  /* Rodapé */
  background-color: ${colors.secondary};
  display: flex;
  height: 3.5rem;
  align-items: center;
  justify-content: space-between;
  h1{
    font-size: 1.4rem;
    font-family: Carrois Gothic SC;
    color: ${colors.white};
  }
  a{
    margin-right: 1rem;
  }
`