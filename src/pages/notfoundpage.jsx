import React from "react";
import {Link} from 'react-router-dom'

const NotFoundPage = ()=>{
    return (
        <div>
            <h1>Page NOT found . Go <Link to= '/'>HOME</Link></h1>
            
        </div>
    )
}

export default NotFoundPage;