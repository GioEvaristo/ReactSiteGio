import { Section } from './styles'
import img from "../../assets/gatoscartas.png"

export function Home() {
  return (
    <Section>
      <div>
      <h1>Sinta-se a vontade para desabafar!</h1>
      <img src={img} alt="Gatos"/>
      </div>
    </Section>
  )
}