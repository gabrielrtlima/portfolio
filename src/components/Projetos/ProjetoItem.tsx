import { ProjetoContainer } from './styles';
import { RiArrowRightCircleLine } from 'react-icons/ri';
import Link from 'next/link';
import { type } from 'os';

interface ProjetoItemProps {
  title: string;
  type: string;
  slug: string;
  image: string;
}

export const ProjetoItem = ({ title, type, slug, image}) => {
  return (
    <ProjetoContainer imgUrl={image}>
      <section>
        <div className="overlay" />
        <div className="text">
          <h1>{title}</h1>
          <h2>{type}</h2>
        </div>
      </section>
      <button type='button'>
        <Link href={slug}>
          <a>Ver mais <RiArrowRightCircleLine /> </a>
        </Link>
      </button>
    </ProjetoContainer>
  )
}