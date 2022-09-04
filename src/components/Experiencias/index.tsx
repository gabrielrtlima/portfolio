import { SectionTitle } from '../SectionTitle';
import { ExperienciaItem } from './ExperienciaItem';
import { Container } from './styles';

export function Experiencias() {
  return (
    <Container>
      <SectionTitle title='<Experiências />' />

      <section>
        <ExperienciaItem year='2022' title='LAPES - Laboratório de Praticas de Engenharia de Software' description='teste' />
        <ExperienciaItem year='2022' title='LAPES - Laboratório de Praticas de Engenharia de Software' description='testando testando testando testando testando testan' />
      </section>
    </Container>
  );
}
