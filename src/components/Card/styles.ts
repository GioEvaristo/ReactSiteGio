import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  background-color: ${colors.secondary};
  padding: 0.5rem;
  border-radius: 0.5rem;
  aside {
    display: flex;
    p {
      font-size: 0.8rem;
      margin-left: 0.5rem;
    }
  }
`