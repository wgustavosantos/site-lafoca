import './AboutLafoca.css'

import { useEffect, useState } from 'react'
import { useSpring, animated } from "react-spring";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScrollReveal from 'scrollreveal';
import BgLaranjaLafoca from '../../assets/img/sobre/bg-laranja.svg'
import Girl from '../../assets/img/sobre/girl.svg'

import { ReactComponent as IconVisao } from '../../assets/img/sobre/icon-visao.svg';


export const AboutLafoca = () => {
    return (
        <section className='about section-content' id='sobre'>
            <h2 className='about__heading'>SOBRE O <span>LAFOCA</span></h2>
            <p>
                Fundado em 2017, o LAFocA é formado por alunos e professores, além de
                parceiros de outras instituições de ensino e empresas do mercado de TI.
                Nosso foco é o aluno, buscando contribuir para o seu desenvolvimento
                pessoal, acadêmico e profissional. Esperamos ser reconhecidos como um
                grupo referência na formação de profissionais qualificados.
            </p>

            <div className='about-container'>
                <ContainerAboutLafoca />
                <ContainerAboutLafocaAccordion />
            </div>
        </section>
    )
}

export const ContainerAboutLafoca = () => {
    useEffect(() => {
        // Inicialize o ScrollReveal
        ScrollReveal({
            reset: true,
            distance: '8rem',
            duration: 4000
        });

        // Configurações de animação para elementos específicos
        ScrollReveal().reveal('.bgLaranja', { origin: 'top' });
        ScrollReveal().reveal('.bgGirl', { origin: 'left' });
        // Configurações de animação para o elemento .img-girl
        // ScrollReveal().reveal('.bgGirl', {
        //     origin: 'left',
        //     beforeReveal: (domEl) => {
        //         // Adiciona uma classe para controle personalizado
        //         domEl.classList.add('revealing');
        //     },
        //     beforeReset: (domEl) => {
        //         // Remove a classe para redefinir a animação quando você rola para cima
        //         domEl.classList.remove('revealing');
        //     },
        // });
    }, []);

    return (
        <div className='ContainerAboutLafocaImg'>
            <img src={BgLaranjaLafoca} className='bgLaranja' />
            <img src={Girl} className='bgGirl' />
        </div>
    )
}

export const ContainerAboutLafocaAccordion = () => {

    const titleAnimation = useSpring({
        from: {
            transform: "translateY(-30px)"
        },
        to: [{ transform: "translateY(15px)" }],
        config: { mass: 3, tension: 500, friction: 25 }
    });

    return (
        <div className="container-accordion">
            {/* <animated.h1 style={titleAnimation}>React Accordion</animated.h1> */}
            <h2 class="about__heading">
                COMPROMISSOS <br />
                QUE <span>DESENVOLVEMOS</span>
            </h2>
            <p>
                Conheça os princípios que norteiam as atividades do laboratório e
                garantem a excelência nos projetos e resultados obtidos.
            </p>
            <div className="accordion">
                <Accordion
                    Icon={IconVisao}
                    title="VISÃO"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                    Icon={IconVisao}
                    title="MISSÃO"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                    Icon={IconVisao}
                    title="LINHA DE PESQUISA"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
                <Accordion
                    Icon={IconVisao}
                    title="VALORES"
                    text="Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam"
                />
            </div>
        </div>
    );
}

export const Accordion = ({ title, text, Icon }) => {
    const [open, setOpen] = useState(false);
    const [iconOpen, setIconOpen] = useState(false); // Novo estado para controlar o ícone

    //toggle accordion function
    let toggleHandler = (e) => {
        //switch state
        setOpen(!open);
        setIconOpen(!iconOpen); // Alternar o estado do ícone quando o acordeão é aberto/fechado

    };

    //conditional styling
    const styles = {
        //if open is true, change color of title
        accordionTitle: {
            // color: open ? "#10d6f5" : "#fff"
        }
    };
    //open animation with react spring

    const openAnimation = useSpring({
        from: { opacity: "0", maxHeight: "25px" },
        to: { opacity: "1", maxHeight: open ? "200px" : "25px" },
        config: { duration: "300" }
    });

    //rotate animation
    const iconAnimation = useSpring({
        from: {
            transform: "rotate(0deg)",
            // color: "#ffff"
        },
        to: {
            transform: open ? "rotate(180deg)" : "rotate(0deg)",
            // color: open ? "#10d6f5" : "#fff"
        },
        config: { duration: "120" }
    });

    return (
        <animated.div className="accordion__item" style={openAnimation}>
            <div className="accordion__header" onClick={toggleHandler}>
                <Icon />
                <h4 style={styles.accordionTitle}>{title}</h4>
                <animated.i style={iconAnimation}>
                    {/* <AddIcon /> */}
                    {iconOpen ? <RemoveIcon /> : <AddIcon />} {/* Use um ícone diferente se o acordeão estiver aberto */}

                </animated.i>
            </div>
            <p className="accordion__content">{text}</p>
        </animated.div>
    );
}

