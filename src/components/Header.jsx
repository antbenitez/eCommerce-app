import React from 'react';
import './Header.css';

const Header = ({user = null, checkout = null}) => {
  return (
    <div className='header-container'>
        <header className='top-header'>
            <div className='top-container'>
                <div className='top-item-left'>
                    <button className='header-logo' aria-label='Quantium logo' onClick={() => console.log("Homepage")}>
                        <img className='header-logo-icon' src="/icons/quantium_logo.svg" alt="Quantium logo image" />
                    </button>
                </div>
                <div className='top-item-fill'>
                    Search Component
                </div>
                <div className='top-item-right'>
                    <button className={`account-item ${user ? 'logged' : 'anonymous'}`} onClick={() => console.log("Account")}>
                        <img aria-hidden="true" className='icon-item' src={user ? "/icons/account_circle_gradient.svg" : "/icons/account_circle.svg"} alt="Account" />
                        <span>
                            {
                                user ? `Hola, ${user.name}` : 'Cuenta'
                            }
                        </span>
                        
                    </button>
                    <button id='shopping-cart' className='shopping-cart-item' aria-labelledby='shopping-cart shopping-count shopping-items' aria-label='Shopping cart with' onClick={() => console.log("Shopping Cart")}>
                        <div>
                            <img aria-hidden="true" className='icon-item' src="/icons/shopping_cart.svg" alt="Shopping cart icon" />
                            <div id='shopping-items' className='cart-counter' aria-label='items'>
                                <img aria-hidden="true" className='icon-ellipse' src="/icons/ellipse.svg" alt='ellipse icon'/>
                                <span id='shopping-count'>{checkout ? checkout.itemsCount : '0'}</span>
                            </div>
                        </div>
                        <span>
                            Carrito
                        </span>
                    </button>
                </div>
            </div>
        </header>
    </div>
  )
}

export default Header