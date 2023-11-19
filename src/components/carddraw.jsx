import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import main_obj from "../constant_main";

const CardDraw = (prop)=>{
    
    const [data, setData]= useState(main_obj)
    const [flag, setFlag]= useState('');

    const onCardClick =()=>{
        setFlag(prop.elemId)
    }

    if(flag=='0'){
        return <Navigate to="/bearings" />
    }
    if(flag=='1'){
        return <Navigate to="/belts" />
    }
    if(flag=='2'){
        return <Navigate to="/seals" />
    }
    if(flag=='3'){
        return <Navigate to="/transportbands" />
    }
    if(flag=='4'){
        return <Navigate to="/stoprings" />
    }
    if(flag=='5'){
        return <Navigate to="/gymrings" />
    }
    if(flag=='6'){
        return <Navigate to="/electrodes" />
    }
    if(flag=='7'){
        return <Navigate to="/weldingwire" />
    }
    if(flag=='8'){
        return <Navigate to="/chains" />
    }
    if(flag=='9'){
        return <Navigate to="/reductors" />
    }

    

    return (
        <div>
            {data.map(elem=>elem.id===prop.elemId?
        
            <div
                key={elem.id}
                onClick={()=>onCardClick()}
                className="cardDraw">
                <img className="mainFotoCards" src={elem.foto} alt='no foto' ></img>
                <span className="spanStyle">{elem.item}</span>
            </div>
            :null
            
            )}
            
        </div>
    )
}

export default CardDraw;