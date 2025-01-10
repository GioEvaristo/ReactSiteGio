import { SFooter } from "./styles"
import Face from "../../assets/face.png"
import Insta from "../../assets/insta.png"
import Linkedin from "../../assets/linkedin.png"

export function Footer() {
  return (
    <SFooter>
      <a href="http://facebook.com" target="_blank">
        <img src={Face} alt="Facebook" />
      </a>
      <a href="http://instagram.com" target="_blank">
        <img src={Insta} alt="Instagram" />
      </a>
      <a href="http://linkedin.com" target="_blank">
        <img src={Linkedin} alt="Linkedin" />
      </a>
    </SFooter>
  )
}