import { Container, TextContainer, InfosContainer, CodeItem } from './styles';
import picture from '../../assets/PhotoAvatar.jpg'

export function HomeHero() {
  return (
    <Container>
      <img src={picture} alt="Avatar Foto" />
      <div>
        <TextContainer>
          <h1>Olá!</h1>
        </TextContainer>
        <InfosContainer>
          <CodeItem>
            <span className='comment'>//Minha apresentação</span>
            <span className='purple'>Infos</span> {`{`}
            <div>
              nome: <span className='blue'>Gabriel</span>,
            </div>
            <div>
              sobrenome: <span className='blue'>Rodrigues</span>
            </div>
            {`}`}
          </CodeItem>
          <CodeItem>
            <span className='purple'>Formação</span> {`{`}
            <div>
              faculdade: <span className='blue'>Universidade de Pernambuco</span>,
            </div>
            <div>
              curso: <span className='blue'>Engenharia de Software</span>
            </div>
            <div>
              situação: <span className='blue'>Em andamento</span>
            </div>
            {`}`}
          </CodeItem>
        </InfosContainer>
      </div>
    </Container>
  );
}
