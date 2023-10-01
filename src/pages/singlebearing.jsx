import React from "react";
import { useState } from "react";
import { useParams } from "react-router-dom";
import {Link} from 'react-router-dom';
import bearings_obj from "../constant_bearings";


const SingleBearingPage = ()=>{
    const [data, setData]= useState(bearings_obj);
    const {id} = useParams();
    

    return (
        <div>
            
          {data.map(elem=>elem.id==id?
            <div key={elem.id} className="singleCardDraw">
                <h4>{elem.itemName} :{elem.item}</h4>
                <img src={elem.foto} alt='no foto' width={200}></img>
                <h4>Розмiри пiдшипника: {elem.dimensions}</h4>
                <h3 style={{color:"blue"}}>зв'яжiться з нами для уточнення варiантiв виробникiв i цiн..</h3>
            </div>
        :null
        
        )}
        </div>
    )
}

export default SingleBearingPage;