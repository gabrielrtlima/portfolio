import { ItemContainer } from './styles';

interface ExperienciaItemProps {
  year : string,
  title : string,
  description : string
}

export const ExperienciaItem = ({ year, title, description } : ExperienciaItemProps) => {
  return (
    <ItemContainer>
      <div>
        <h1>{year}</h1>
        <h2>{title}</h2>
        <p>{description}</p>
      </div>
    </ItemContainer>
  )
}