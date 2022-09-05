import { ConhecimentoContainer } from './styles'
import { ReactNode } from 'react'

interface ConhecimentoProps {
  title: String,
  icon: ReactNode,
}

export const ConhecimentoItem = ({title, icon} : ConhecimentoProps) => {
  return(
    <ConhecimentoContainer>
      <p>{title}</p>
      {icon}

    </ConhecimentoContainer>
  )
}