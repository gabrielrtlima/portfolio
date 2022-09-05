import { SectionTitle } from '../SectionTitle';
import { ConhecimentoItem } from './ConhecimentoItem';
import { Container } from './styles';
import { SiCss3, SiHtml5, SiJava, SiJavascript, SiReact, SiHaskell, SiSpringboot, SiPython, SiLaravel, SiPhp, SiPostgresql, SiKotlin } from 'react-icons/si'

export function Conhecimentos() {
  return (
    <Container>
      <SectionTitle title='Conhecimentos' />
      <section>
        <ConhecimentoItem title={'HTML'} icon={<SiHtml5 />}/>
        <ConhecimentoItem title={'CSS'} icon={<SiCss3 />}/>
        <ConhecimentoItem title={'JavaScript'} icon={<SiJavascript />}/>
        <ConhecimentoItem title={'React'} icon={<SiReact />}/>
        <ConhecimentoItem title={'Python'} icon={<SiPython />}/>
        <ConhecimentoItem title={'PHP'} icon={<SiPhp />}/>
        <ConhecimentoItem title={'Laravel'} icon={<SiLaravel />}/>
        <ConhecimentoItem title={'Kotlin'} icon={<SiKotlin />}/>
        <ConhecimentoItem title={'Java'} icon={<SiJava />}/>
        <ConhecimentoItem title={'SpringBoot'} icon={<SiSpringboot/>}/>
        <ConhecimentoItem title={'Haskell'} icon={<SiHaskell />}/>
        <ConhecimentoItem title={'PostgreSQL'} icon={<SiPostgresql />}/>
      </section>
    </Container>
  );
}
