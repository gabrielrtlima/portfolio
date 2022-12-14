import { NavLink } from './NavLink';
import { Container } from './styles';

export function Header() {
  return (
    <Container>
      <ul>
        <NavLink title="/home" path="/" />
        <NavLink title="/projetos" path="/projetos" />
      </ul>
    </Container>
  );
}
