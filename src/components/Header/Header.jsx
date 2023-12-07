import React from 'react';
import './Header.css';
import accountCircleIcon from "../../assets/icons/account_circle.svg";
import accountCircleGradientIcon from "../../assets/icons/account_circle_gradient.svg";
import quantiumLogoIcon from "../../assets/icons/quantium_logo.svg";
import shoppingCartIcon from "../../assets/icons/shopping_cart.svg";
import ellipseIcon from "../../assets/icons/ellipse.svg";

const Header = ({user = null, checkout = null}) => {
  return (
    <div className='header-container'>
        <header className='top-header'>
            <div className='top-container'>
                <div className='top-item-left'>
                    <a className='header-logo' tabIndex={0} aria-label='Quantium logo' onClick={() => console.log("Homepage")}>
                        <img className='header-logo-icon' src={quantiumLogoIcon} alt="Quantium logo image" />
                    </a>
                </div>
                <div className='top-item-fill'>
                    Search Component
                </div>
                <div className='top-item-right'>
                    <a className={`account-item ${user ? 'logged' : 'anonymous'}`} tabIndex={0} onClick={() => console.log("Account")}>
                        <img aria-hidden="true" className='icon-item' src={user ? accountCircleGradientIcon : accountCircleIcon} alt="Account" />
                        <span>
                            {
                                user ? `Hola, ${user.name}` : 'Cuenta'
                            }
                        </span>
                        
                    </a>
                    <a id='shopping-cart' className='shopping-cart-item' tabIndex={0} aria-labelledby='shopping-cart shopping-count shopping-items' aria-label='Shopping cart with' onClick={() => console.log("Shopping Cart")}>
                        <div>
                            <img aria-hidden="true" className='icon-item' src={shoppingCartIcon} alt="Shopping cart icon" />
                            <div id='shopping-items' className='cart-counter' aria-label='items'>
                                <img aria-hidden="true" className='icon-ellipse' src={ellipseIcon} alt='ellipse icon'/>
                                <span id='shopping-count'>{checkout ? checkout.itemsCount : '0'}</span>
                            </div>
                        </div>
                        <span>
                            Carrito
                        </span>
                    </a>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header