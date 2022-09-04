import { SectionTitle } from '../SectionTitle';
import { ProjetoItem } from './ProjetoItem';
import { Container } from './styles';
import Link from 'next/link';

export function Projetos() {
  return (
    <Container>
      <SectionTitle title='<Alguns projetos />' />

      <section>
        <ProjetoItem image={'https://i.imgur.com/xZu6Xhy.jpg'} title='Projeto 01' type={'Faculdade'} slug='teste'/>
        <ProjetoItem image={'https://i.imgur.com/xZu6Xhy.jpg'} title='Projeto 01' type={'Faculdade'} slug='teste'/>
        <ProjetoItem image={'https://i.imgur.com/xZu6Xhy.jpg'} title='Projeto 01' type={'Faculdade'} slug='teste'/>
        <ProjetoItem image={'https://i.imgur.com/xZu6Xhy.jpg'} title='Projeto 01' type={'Faculdade'} slug='teste'/>
      </section>

      <button>
        <Link href={'/projetos'}>
          <a>Ver todos os projetos</a>
        </Link>
      </button>
    </Container>
  );
}
