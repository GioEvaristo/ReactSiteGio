import styled from 'styled-components'
import { colors } from "../../styles/GlobalStyle"

export const Section = styled.section`
  grid-template-columns: auto;
  margin: 0 auto;
  display: flex;
  justify-content: center;
  min-height: calc(100vh - 8rem);
  align-items: center;
  flex-direction: column;
  img {
    display: flex;
    width: 650px;
    justify-content: center;
  }
  h1{
    font-size: 4rem;
    display: flex;
    font-family: Mystery Quest;
    color: ${colors.blue};
    margin-top: 1rem;
    margin-left: 1rem;
    text-shadow: -1px 0 ${colors.white}, 0 1px ${colors.secondary}, 1px 0 ${colors.secondary}, 0 -1px ${colors.secondary};
    
  }
`