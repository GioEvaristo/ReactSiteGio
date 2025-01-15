import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.terciary};
  padding: 0.5rem;
  border-radius: 0.5rem;
  margin: 0.5rem;
  height: 20rem;
  width: 90rem;
  aside {
    color: ${colors.secondary};
    font-size: 2.5rem;
    display: flex;
    font-family: Mystery Quest;
    p {
      color: ${colors.white};
      font-family: Carrois Gothic SC;
      font-size: 2rem;
      margin-left: 0.5rem;
    }
  }
`