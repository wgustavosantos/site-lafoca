import './BannerLogoLafoca.css';
import './Header.css'
import { NavLink } from "react-router-dom";
import  {  NavHashLink  }  from  'react-router-hash-link' ;
import { ReactComponent as LogoLafoca } from '../../assets/img/Logo LaFocA.svg';

export default function Header () {

    return (
        <section className='bannerLogoLafoca'>
             <header className='header'>
                <NavLink>
                    <LogoLafoca />
                </NavLink>
                <nav className='navbar'>
                    <NavHashLink to={'#sobre'}>
                        SOBRE
                    </NavHashLink>
                    <NavHashLink to={'#equipe'}>
                        EQUIPE
                    </NavHashLink>
                    <NavHashLink to={'#projetos'}>
                        PROJETOS
                    </NavHashLink>
                    <NavHashLink to={'#resultados'}>
                        RESULTADOS
                    </NavHashLink>
                </nav>
            </header>
        </section>
    )
}