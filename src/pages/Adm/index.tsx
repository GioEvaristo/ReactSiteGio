import { SSection } from "./styles"
import img from "../../assets/hamtaro.gif"

export function Adm() {
  return (
    <SSection>
      <h1>
      Olá !!
      </h1>
      <img src={img} alt="Hamtaro"/>
    </SSection>
  );
};