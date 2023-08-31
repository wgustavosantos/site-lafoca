import './Results.css'
import { ReactComponent as SeloLafoca } from '../../assets/img/Results/Selo-LaFoca.svg'
import ResultsBanner from '../../assets/img/Results/Results-banner.png';

import BgArtigos from '../../assets/img/Results/artigos.png'
import BgTcc from '../../assets/img/Results/tccs.png'
import BgProjetos from '../../assets/img/Results/projetos.png'

import { NavLink } from 'react-router-dom';


export const Results = () => {
    return (
        <>

            <section className='results section-content'>
                <div>
                    <h2 className='results__title'>RESULTADOS DE PESQUISAS</h2>
                    <div className='results__metrics'>
                        <div className='metrics'>
                            <p className='metrics__number'>00</p>
                            <h3>Artigos Publicados</h3>
                        </div>
                        <div className='metrics'>
                            <p className='metrics__number'>00</p>
                            <h3>TCCs Defendidos</h3>
                        </div>
                        <div className='metrics'>
                            <p className='metrics__number'>00</p>
                            <h3>Projetos</h3>
                        </div>
                    </div>
                </div>

                <div className='results-banner'>
                    <SeloLafoca className='' />
                    <img src={ResultsBanner} />
                </div>
            </section>
            <section className='results__projects section-content'>
                <ResultsCard imgBackground={BgArtigos} title={'Artigos Publicados'} />
                <ResultsCard imgBackground={BgTcc} title={'Tccs Defendidos'} />
                <ResultsCard imgBackground={BgProjetos} title={'projetos'} />
            </section>
        </>
    )
}

export const ResultsCard = ({ imgBackground, title }) => {
    
    return (
        <NavLink>
            <div className='projects__card'>
                <img src={imgBackground} />
                <div className='card-content'>
                    <h3>{title}</h3>

                    <strong style={{ color: '#EE972D' }}>Ver Mais<span> &#x003E;</span> </strong>

                </div>
            </div>
         </NavLink>
    )
}