import './OurTeam.css'
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import profiles from './profiles'; 
import { ReactComponent as ArrowProfileButton } from '../../assets/img/team/profileIconAboutMore.svg'

import { ReactComponent as ArrowRight } from '../../assets/img/team/arrow-right.svg'
import { ReactComponent as ArrowLeft } from '../../assets/img/team/arrow-left.svg'


export const OurTeam = () => {
    return (
        <section className='team' id='equipe'>
            <h2 className='global-title-black-orange'>NOSSA <span>EQUIPE</span></h2>
            <p className='global-paragraph'>Conheça a equipe que compõe o nosso laboratório de pesquisa e
                veja um pouco mais sobre  cada um deles e como eles contribuem para o sucesso das nossas atividades.
            </p>
            <div className="carousel-container">
                <Gallery />
            </div>
        </section>
    )
}

const Member = ({ profile }) => {
    return (
      <div className='card'>
        <img src={profile.imagem} className='img' alt={profile.nome} />
        <div className='info'>
          <div className='info-content'>
            <strong>{profile.nome}</strong>
            <p>{profile.cargo}</p>
          </div>
          <button className='know-more'><ArrowProfileButton /></button>
        </div>
      </div>
    );
  };

// const handleDragStart = (e) => e.preventDefault();

// const items = [
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
//     <Member onDragStart={handleDragStart} role='presentation' />,
// ];
// const chunkArray = (array, chunkSize) => {
//     const chunkedArray = [];
//     for (let i = 0; i < array.length; i += chunkSize) {
//         chunkedArray.push(array.slice(i, i + chunkSize));
//     }
//     return chunkedArray;
// };

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
    1000: {
        items: 3// Mostrar 3 itens no carousel para telas maiores ou igual a 768px
    }
};

const Gallery = () => {
    // const chunkedItems = chunkArray(items, 3);  Divide os itens em grupos de 3

    return (
        <AliceCarousel mouseTracking responsive={responsive} renderPrevButton={({ isDisabled }) => <CustomPrevButton isDisabled={isDisabled} />}
        renderNextButton={({ isDisabled }) => <CustomNextButton isDisabled={isDisabled} />}
        items={profiles.map((profile) => (
            <Member key={profile.nome} profile={profile} />
          ))} />
    );
};
