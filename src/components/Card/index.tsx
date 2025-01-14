import { Section } from "./styles";
export interface ICard {
  data: string
  assunto: string
  comentario: string
}
export const Card = ({ data, assunto, comentario }: ICard) => {
  return (
    <Section>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Título:</h5>
        <p>{assunto}</p>
      </aside>
      <aside>
        <h5>Desabafo:</h5>
        <p>{comentario}</p>
      </aside>
    </Section>
  );
};