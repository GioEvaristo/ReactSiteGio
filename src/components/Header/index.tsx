import { Link } from "react-router-dom"
import { SHeader, NavBar } from "./styles"
import Logo from "../../assets/logo.png"
export function Header() {
  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <NavBar>
        <div>
          <Link to="/">INÍCIO</Link>
          <Link to="/comentario">CARTAS</Link>
        </div>
      </NavBar>
    </SHeader>
  )
}