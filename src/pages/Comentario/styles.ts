import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  display: grid;
  grid-template-columns: auto;
  gap: 1rem;
  h1{
    font-size: 2.5rem;
    display: flex;
    font-family: Mystery Quest;
    color: ${colors.blue};
    margin-top: 1rem;
    margin-left: 1rem;
    text-shadow: -1px 0 ${colors.white}, 0 1px ${colors.secondary}, 1px 0 ${colors.secondary}, 0 -1px ${colors.secondary};
  }
`