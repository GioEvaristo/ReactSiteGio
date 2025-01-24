import { SSection } from "./styles";
export interface ICard {
  data: string
  nickname: string
  desabafo: string
}
export const Card = ({ data, nickname, desabafo }: ICard) => {
  return (
    <SSection>
      <aside>
        <h5>Data:</h5>
        <p>{data}</p>
      </aside>
      <aside>
        <h5>Nickname:</h5>
        <p>{nickname}</p>
      </aside>
      <aside>
        <h5>Desabafo:</h5>
        <p>{desabafo}</p>
      </aside>
    </SSection>
  );
};