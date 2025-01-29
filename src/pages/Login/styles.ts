import styled from "styled-components"
import { colors } from "../../styles/GlobalStyle"
export const SSection = styled.section`
  height: 40rem;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  h1 {
    color: ${colors.secondary};
    font-weight: 4rem;
    margin-bottom: 2rem;
    font-size: 2rem;
  }
  form {
    background-color: ${colors.terciary};
    border: 0.2rem solid ${colors.secondary};
    border-radius: 0.5rem;
    padding: 2rem;
    div {
      background-color: ${colors.white};
      border: 0.15rem solid ${colors.secondary};
      border-radius: 0.6rem;
      display: flex;
      margin: 0.5rem 0;
      svg {
        height: 3rem;
        width: 3rem;
        padding: 0.3rem;
        color: ${colors.primary};
      }
      input {
        width: 100%;
        font-size: 1rem;
        border: 0;
        background-color: transparent;
      }
    }
    p {
      margin-top: 1rem;
      a {
        text-decoration: none;
        color: ${colors.black};
        font-weight: bold;
      }
    }
  }
  button{
    background-color: ${colors.primary};
    border: 0.15rem solid ${colors.secondary};
    border-radius: 0.2rem;
    padding: 0.3rem;
    font-family: Carrois Gothic SC;
  }
`