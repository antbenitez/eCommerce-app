import React, { useRef, useState } from 'react';
import './Accordion.css';

const Accordion = ({title, children}) => {
    const [isActive, setIsActive] = useState(false);
    const panelRef = useRef(null);

    const handleOpen = () => {
        setIsActive(!isActive);
        if (panelRef.current.style.maxHeight) {
            panelRef.current.style.maxHeight = null;
        } else {
            panelRef.current.style.maxHeight = panelRef.current.scrollHeight + "px";
        }
    }

  return (
    <article className='accordion'>
        <div 
            className="accordion-header"
            onClick={() => handleOpen()}
        >
            <div className="accordion-title">
                {title}
            </div>
            <div className="accordion-action">
                {`${isActive ? 'Ver menos' : 'Ver más'}`}
                <span className="accordion-arrow"><img src={`${isActive ? '/icons/keyboard_arrow_up.svg' : '/icons/keyboard_arrow_down.svg'}`} alt="" /></span>
            </div>
        </div>
        <div ref={panelRef} className="accordion-content">
            <div>
                {children}
            </div>
        </div>
    </article>
  )
}

export default Accordion