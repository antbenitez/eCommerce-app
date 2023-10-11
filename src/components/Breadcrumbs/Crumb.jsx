import { Link } from 'react-router-dom';
import Arrow from '../../assets/icons/arrow-icon.svg?react';
import './Breadcrumbs.css';
import '../../assets/fonts.css';


function Crumb({ crumbs, last }) {
    return (
        <div className='breadcrumb-title'>
            <a className='breadcrumb-title' href={crumbs}>{crumbs}</a> {!last ? (<Arrow className="breadcrumb-arrow"></Arrow>) : ("")}
        </div>
    );
}

export default Crumb;