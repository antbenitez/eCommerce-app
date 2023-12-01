import './Footer.css';

const Footer = () => {

  return (
    <div className='footer'>
        <div className='logo-container'>
            <img src='../assets/Logo.svg' alt='Logo' />
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
                    <img src='../assets/Insta.svg' alt='Instagram' />
                    <img src='../assets/TikTok.svg' alt='TikTok' />
                </div>
                <h1 className='section-title'>Métodos de pago</h1>
                <div className='cards-container'>
                    <img src='../assets/Visa.svg' alt='Visa' />
                    <img src='../assets/Mastercard.svg' alt='Mastercard' />
                    <img src='../assets/DinersClub.svg' alt='DinersClub' />
                    <img src='../assets/Amex.svg' alt='Amex' />
                    <img src='../assets/PayPal.svg' alt='PayPal' />
                </div>
                <div className='security-container'>
                    <img src='../assets/McAffe.svg' alt='McAffe' />
                    <img src='../assets/Norton.svg' alt='Norton' />
                    <img src='../assets/PayPalStamp.svg' alt='PayPal' />
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