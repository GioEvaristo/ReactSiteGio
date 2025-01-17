import * as S from './styles'
import { dados } from "../../services/dados"
import { ComponentCard } from '../../components'

export function Comentario() {
  return (
    <S.Section>
      <h1>CARTAS</h1>
      {dados.map(item => (
        <ComponentCard
          key={item.id}
          data={item.data}
          nickname={item.nickname}
          desabafo={item.desabafo}
        />
      ))}
    </S.Section>
  )
}