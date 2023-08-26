import './Banner.css'
import { NavLink } from "react-router-dom";
import  {  NavHashLink  }  from  'react-router-hash-link' ;
import { ReactComponent as LogoLafoca } from '../../assets/img/Logo LaFocA.svg';
import BannerLogoLafoca from '../BannerLogoLafoca';


export default function Banner() {
    return (
        <>
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
            <BannerLogoLafoca />
        </>

    )
}