import './Projects.css'

import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';

import data from '../../assets/jsons/projects.json';

import { ReactComponent as ArrowRight } from '../../assets/img/team/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../assets/img/team/arrow-left.svg'

export default function Projects() {
    return (
        <section className='projects'>
            <h2 className='global-title-black-orange'>NOSSOS <span>PROJETOS</span></h2>
            <p className='global-paragraph'>Conheça os projetos que desenvolvemos em nosso grupo, na forma de extensão universitária, pesquisas acadêmicas e parcerias com o mercado.</p>
            <div className='carousel-container'>
                <Gallery />
            </div>
        </section>
    )
}

const Card = (props) => {
    return (
        <div className='project__card'>

            <img src={require(`../../${props.fotoCapa}`)} />

            <div className='project__card-text'>
                <button className='project__date'>
                    {props.ano}
                </button>
                <div className='project__card-header'>

                    <strong>{props.tipo}</strong>
                    <p>{props.linhaPesquisa}</p>

                </div>
                <div className='project__card-content'>
                    <h2>{props.titulo}</h2>
                    <p>{props.descricao}</p>
                    <strong style={{ color: '#EE972D' }}>Ver Mais<span> &#x003E;</span> </strong>
                </div>
            </div>
        </div>
    )
}

const CustomPrevButton = ({ isDisabled, onClick }) => (
    <button onClick={onClick} disabled={isDisabled} className="custom-prev-button custom-button">
      {/* &lt; Seta esquerda */}
      <ArrowLeft/>
    </button>
  );
  
  const CustomNextButton = ({ isDisabled, onClick }) => (
    <button onClick={onClick} disabled={isDisabled} className="custom-next-button custom-button">
      {/* &gt; Seta direita */}
      <ArrowRight/>
    </button>
  );

const responsive = {
    0: {
        items: 1, // Mostrar 1 item no carousel para telas menores que 768px
    },
    768: {
        items: 2, // Mostrar 3 itens no carousel para telas maiores ou igual a 768px
    },
    1200: {
        items: 3, // Mostrar 3 itens no carousel para telas maiores ou igual a 768px
    }
};

const Gallery = () => {
    // const chunkedItems = chunkArray(items, 3);  Divide os itens em grupos de 3

    return (
        <AliceCarousel mouseTracking responsive={responsive} renderPrevButton={({ isDisabled }) => <CustomPrevButton isDisabled={isDisabled} />}
        renderNextButton={({ isDisabled }) => <CustomNextButton isDisabled={isDisabled} />}
        items={data.projects.map((projeto) => (
            <Card id={projeto.id} fotoCapa={projeto.fotoCapa} ano={projeto.ano} tipo={projeto.tipo} linhaPesquisa={projeto.linhaPesquisa} titulo={projeto.titulo} descricao={projeto.descricao} />
        ))} />
    );
};
