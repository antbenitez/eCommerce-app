import { useState } from 'react';
import Crumb from './Crumb';
import './Breadcrumbs.css';
import '../../assets/fonts.css';


function Breadcrumbs() {

    //replace with -> window.location.href;
    const location = 'computadoras/imac/mac';
    

    function generateList() {
        //Remove query parameters not needed for breadcrumb
        const pathWithoutQuery = location.split("?")[0];
        //Break down the path by words
        const asPathNestedRoutes = pathWithoutQuery.split("/").filter(q => q.length > 0);
        return asPathNestedRoutes;
    }

    const pathList = generateList();
    
    return(
        <div className="breadcrumb-row">
            {
                pathList.map((crumbs, idx) => (
                    <Crumb key={idx} crumbs={crumbs} last={idx=== pathList.length - 1}/>
                ))
            }
        </div>
    );
}

export default Breadcrumbs;