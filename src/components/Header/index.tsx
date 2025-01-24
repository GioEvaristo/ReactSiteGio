import { Link } from "react-router-dom"
import { SHeader, SNavBar } from "./styles"
import Logo from "../../assets/logo.png"
import { useContext } from "react";
import { AuthContext } from "../../contexts/authContext";
import { GrLogout } from "react-icons/gr";
export function Header() {
  const { user, signOut } = useContext(AuthContext)
  async function logout() {
    await signOut()
  }
  return (
    <SHeader>
      <figure>
        <img src={Logo} alt="Logo do site" />
      </figure>
      <SNavBar>
        <div>
          <Link to="/">INÍCIO</Link>
          <Link to="/comentario">CARTAS</Link>
          {user ? (
            <>
            <Link to="/adm">ADMINISTRATIVA</Link>
            <button onClick={logout}>{user.nome} <GrLogout /></button>
            </>
          ) : (
            <>
            <Link to="/login">LOGIN</Link>
            <Link to="/cadastrar">CADASTRAR</Link>
            </>
          )}
        </div>
      </SNavBar>
    </SHeader>
  )
}