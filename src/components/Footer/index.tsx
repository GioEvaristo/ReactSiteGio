import { SFooter } from "./styles"
import Insta from "../../assets/insta.png"

export function Footer() {
  return (
    <SFooter>
      
      <h1>
      © 2024 ANONYMOUS LETTERS. 
      </h1>
      <h1>
      TODOS OS DIREITOS RESERVADOS  
      </h1>
      <h1>
      POLÍTICA DE PRIVACIDADE 
      </h1>
      <h1>
      DIREITOS AUTORIAIS 
      </h1>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
    </SFooter>
  )
}