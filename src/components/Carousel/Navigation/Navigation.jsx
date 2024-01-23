import React from 'react';
import DotGradient from '../../../assets/icons/ellipse.svg?react';
import ArrowLeft from '../../../assets/icons/keyboard_arrow_left.svg?react';
import ArrowRight from '../../../assets/icons/keyboard_arrow_right.svg?react';
import './Navigation.css';

const Navigation = ({handlePrev, handleNext, handleSelectSlide, currentItems}) => {
    return (
        <div className='navigation-container'>
            <button className='navigation-arrow' type="button" title='Prev Slide' onClick={() => handlePrev()} >
                <ArrowLeft className="arrow-svg" />
            </button>
            {[...Array(currentItems.total + 1).keys()].map((dot, index) => 
                <button key={index} type='button' className='navigation-dot' title={`Slide ${index + 1}`} onClick={() => handleSelectSlide(index)}>
                    {currentItems.current === index ? <DotGradient className="dot-svg" /> : <span className='dot-white'></span>}
                </button>
            )}
            <button className='navigation-arrow' type="button" title='Next Slide' onClick={() => handleNext()} >
                <ArrowRight className="arrow-svg" />
            </button>
        </div>
    )
}

export default Navigation