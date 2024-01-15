import './Footer.css';

const Footer = () => {

  return (
    <div className='footer'>
        <div className='logo-container'>
            <img src={'icons/Logo.svg'} alt='Logo' />
        </div>
        <div className='footer-sections'>
            <div className='first-container'>
                <h1 className='section-title'>Información de la tienda</h1>
                <ul className='links'>
                    <li>Mis pedidos</li>
                    <li>Política de entrega</li>
                    <li>Política de devolución</li>
                    <li>Política de pago</li>
                    <li>FAQs</li>
                </ul>
            </div>
            <div className='second-container'>
                <h1 className='section-title'>Contacto</h1>
                <p>Envíanos un mail a:</p>
                <p className='mail'>clientesquantium@mail.com</p>
                <p>Horarios de atención:</p>
                <p>Lunes a Viernes de 9am a 5pm</p>
                <p>Sábados y Domingos de 10am a 2pm</p>
            </div>
            <div className='third-container'>
                <h1 className='section-title'>Sociales</h1>
                <div className='socials-container'>
                    <img src={'icons/Insta.svg'} alt='Instagram' />
                    <img src={'icons/TikTok.svg'} alt='TikTok' />
                </div>
                <h1 className='section-title'>Métodos de pago</h1>
                <div className='cards-container'>
                    <img src={'icons/Visa.svg'} alt='Visa' />
                    <img src={'icons/Mastercard.svg'} alt='Mastercard' />
                    <img src={'icons/DinersClub.svg'} alt='DinersClub' />
                    <img src={'icons/Amex.svg'} alt='Amex' />
                    <img src={'icons/PayPal.svg'} alt='PayPal' />
                </div>
                <div className='security-container'>
                    <img src={'icons/McAffe.svg'} alt='McAffe' />
                    <img src={'icons/Norton.svg'} alt='Norton' />
                    <img src={'icons/PayPalStamp.svg'} alt='PayPal' />
                </div>
            </div>
        </div>
        <div className='band'>
            <p className='copyright-text'>Condiciones de Uso | Aviso de Privacidad</p>
            <p className='copyright-text'>Copyright Quantium 2023</p>
        </div>

    </div>
  )
}

export default Footer;