import { Section } from "./styles";
export interface ICard {
  data: string
  titulo: string
  desabafo: string
}
export const Card = ({ data, titulo, desabafo }: ICard) => {
  return (
    <Section>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Título:</h5>
        <p>{titulo}</p>
      </aside>
      <aside>
        <h5>Desabafo:</h5>
        <p>{desabafo}</p>
      </aside>
    </Section>
  );
};