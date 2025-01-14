import { Section } from './styles'
import img from "../../assets/tvhome.png"

export function Home() {
  return (
    <Section>
      <img src={img} alt="TV"/>
    </Section>
  )
}