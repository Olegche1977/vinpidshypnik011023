import React from "react";
import { useState } from "react";
import {Link} from "react-router-dom";
import { Navigate } from "react-router-dom";
import main_obj from "../constant_main";

const CardDraw = (prop)=>{
    console.log(prop.elemId)
    const [data, setData]= useState(main_obj)
    const [flag, setFlag]= useState('');

    const onCardClick =()=>{
        console.log(prop.elemId)
        setFlag(prop.elemId)
        console.log('typeof:' + typeof(flag))
    }

    if(flag=='0'){
        return <Navigate to="/bearings" />
    }
    if(flag=='1'){
        return <Navigate to="/belts" />
    }
    if(flag=='2'){
        return <Navigate to="/transportbandpage" />
    }

    // switch  (flag) {
    //     case 0: console.log('case 0 work');
    //     break;
    //     case '1': ()=>{ console.log('case 1 work'); return <Navigate to="/belts" />};
    //     break;
    //     case '2' : return <Navigate to="/transportbands" />;
    //     break;
    //     case '3' : return <Navigate to="/stoprings" />;
    //     break;
    //     case '4' : return <Navigate to="/gymrings" />;
    //     break;
    //     case '5' : return <Navigate to="/electrodes" />;
    //     break;
    //     case '6' : return <Navigate to="/weldingwire" />;
    //     break;
    //     default: console.log('sorry, thereis no such goods ')
    // }

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