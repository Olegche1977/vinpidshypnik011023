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
        return <Navigate to="/transportbands" />
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