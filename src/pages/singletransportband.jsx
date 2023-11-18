import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import transportbands_obj from "../constant_transportbands";


const SingleTransportBand = ()=>{
    const [data, setData]= useState(transportbands_obj);
    const {id} = useParams();
    

    return (
        <div>
            
          {data.map((elem,index)=>elem.id==id?
            <div key={index} className="singleCardDraw">
                <h4>{elem.itemName} :{elem.item}</h4>
                <img src={elem.foto} alt='no foto' width={200}></img>
                <h4>Розмiри стрічки: {elem.dimensions}</h4>
                <h3 style={{color:"blue"}}>зв'яжiться з нами для уточнення варiантiв виробникiв i цiн..</h3>
            </div>
        :null
        
        )}
        </div>
    )
}

export default SingleTransportBand;