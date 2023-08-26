import './BannerLogoLafoca.css';
import BackgroundLogo from '../../assets/img/banner/logo_bg.svg'
import background from '../../assets/img/banner/bg.svg'

export default function BannerLogoLafoca () {

    const estiloDoComponente = {
        backgroundImage: `url(${BackgroundLogo}), url(${background})`
      };
      
    return (
        <>
        <section className='bannerLogoLafoca' style={estiloDoComponente}>
            {/* <img src={LogoLafoca}/> */}
        </section>
        </>
    )
}