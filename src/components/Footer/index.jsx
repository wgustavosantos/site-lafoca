import './Footer.css'
import LafocaLogoFooter from '../../assets/img/footer/Logo LaFocA.png'
import { ReactComponent as Facebook } from '../../assets/img/footer/facebook.svg'
import { ReactComponent as Instagram } from '../../assets/img/footer/instagram.svg'

export const Footer = () => {
    return (
        <footer className='footer section-content'>
            <div className='footer-main'>
                <div className='footer-logo'>
                    <img src={LafocaLogoFooter} />
                    <p>LABORATÓRIO DE ABORDAGENS DE ENSINO FOCADAS NO ALUNO</p>
                </div>
                <div className='footer__text'>
                    <div className='footer__know-more'>
                        <h3>Saiba Mais</h3>
                        <p>Sobre nós</p>
                        <p>Política de privacidade</p>
                        <p>Política de cookies</p>
                    </div>
                    <div className='footer__partners'>
                        <h3>Parceiros</h3>
                        <p>NESSs</p>
                        <p>LABTEC</p>
                        <p>LABEX</p>
                    </div>
                    <div className='footer__contact'>
                        <h3>Alguma dúvida? Manda pra gente!</h3>
                        <p>lafoca@gmail.com</p>
                    </div>
                </div>
            </div>
            <div className='footer-secundary'>
                <p>LAFocA 2017 - 2023</p>
                <div className='footer-secundary__social'>
                    <Instagram className='icon-fb' />
                    <Facebook className='icon-ig' />
                </div>
            </div>

        </footer>
    )
}