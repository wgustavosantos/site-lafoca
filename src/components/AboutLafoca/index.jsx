import './AboutLafoca.css'

import { useEffect, useState } from 'react'
import { useSpring, animated, config } from "react-spring";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';
import ScrollReveal from 'scrollreveal';
import BgLaranjaLafoca from '../../assets/img/sobre/bg-laranja.svg'
import Girl from '../../assets/img/sobre/girl.svg'

import { ReactComponent as IconVisao } from '../../assets/img/sobre/icon-visao.svg';
import { ReactComponent as IconMissao } from '../../assets/img/sobre/icon-missao.svg';
import { ReactComponent as IconPesquisa } from '../../assets/img/sobre/icon-linha_de_pesquisa.svg';
import { ReactComponent as IconValores} from '../../assets/img/sobre/icon-valores.svg';


export const AboutLafoca = () => {
    return (
        <section className='about section-content' id='sobre'>
            <h2 className='global-title-black-orange'>SOBRE O <span>LAFOCA</span></h2>
            <p className='global-paragraph'>
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
            duration: 2000
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
            <p className='global-paragraph'>
                Conheça os princípios que norteiam as atividades do laboratório e
                garantem a excelência nos projetos e resultados obtidos.
            </p>
            <div className="accordion">
                <Accordion
                    Icon={IconVisao}
                    title="VISÃO"
                    text="Ser reconhecido como um grupo de pesquisa referência na
                    formação de profissionais qualificados."
                />
                <Accordion
                    Icon={IconMissao}
                    title="MISSÃO"
                    text="Propiciar um ambiente adequado que permita desenvolver
                    pesquisas de qualidade, contribuindo para o desenvolvimento dos
                    alunos."
                />
                <Accordion
                    Icon={IconPesquisa}
                    title="LINHA DE PESQUISA"
                    text={
                        <>
                            
                                • Engenharia de Software e Metodologias Ágeis<br /><br />
                                • Interação Humano-Computador (IHC) e User eXperience(UX)<br /><br />
                                • Jogos e Gameficação<br /><br />
                                • Marketing Digital e Midias Sociais<br /><br />
                                • Programação e Testes de Software
                            
                        </>}
                />
                <Accordion
                    Icon={IconValores}
                    title="VALORES"
                    text={
                        <>
                                <strong>Comunicação</strong> – Compartilhar informações, buscando transmitir conhecimento e valores.<br />
                                <strong>Proatividade</strong> – Tomar iniciativa e decisões na realização das suas atividades.<br />
                                <strong>Colaboração</strong> – Trabalhar ou cooperar com as atividades de uma ou mais pessoas do grupo.<br />
                                <strong>Protagonismo</strong> – Aceitar os méritos e resultados da realização das suas atividades.<br />
                                <strong>Comprometimento</strong> – Empenhar seus esforços e dedicação nas atividades das quais participa.<br />
                                <strong>Pertencimento</strong> – Fazer parte de um grupo, se identificando com a linha de pesquisa.
                           </>
                    }
                />
            </div>
        </div>
    );
}

export const Accordion = ({ title, text, Icon }) => {
    const [open, setOpen] = useState(false);
    const [iconOpen, setIconOpen] = useState(true); // Novo estado para controlar o ícone

    //toggle accordion function
    let toggleHandler = (e) => {
        //switch state
        setOpen(!open);
        // setIconOpen(!iconOpen); // Alternar o estado do ícone quando o acordeão é aberto/fechado

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
        from: { opacity: "0", maxHeight: "25px", },
        to: { opacity: "1", maxHeight: open ? "310px" : "77px" },
        onRest: () => { setIconOpen(!iconOpen) },
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

    const borderAn = useSpring({
        from: {
            // borderBottomWidth: '1px',
            borderBottomStyle: 'none',
            // borderBottomColor: 'rgba(101, 101, 101, 0.5)',
        },
        to: {
            borderBottomWidth: '1px',
            borderBottomStyle: open ? 'solid' : 'none',
            borderBottomColor: 'rgba(101, 101, 101, 0.5)',
            paddingBottom: '7px'
        },
        config: { duration: "300" }
    })

    // const visibleIcon = !(iconAnimation.transform.animation.to == "rotate(180deg)")

    return (
        <animated.div className="accordion__item" style={openAnimation}>
            <animated.div className="accordion__header" style={borderAn} onClick={toggleHandler}>
                <Icon />
                <h4 style={styles.accordionTitle}>{title}</h4>
                <animated.i style={iconAnimation}>
                    {/* <AddIcon /> */}
                    {iconOpen ? <RemoveIcon style={{ fontSize: 30 }} className='iconAccordion' /> : <AddIcon style={{ fontSize: 30 }} className='iconAccordion' />} {/* Use um ícone diferente se o acordeão estiver aberto */}

                </animated.i>
            </animated.div>
            <p className="accordion__content" style={{ whiteSpace: 'pre-line' }}>{text}</p>
        </animated.div>
    );
}

