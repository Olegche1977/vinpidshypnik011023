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
                <h2>{elem.itemName} :{elem.item}</h2>
                <img src={elem.foto} alt='no foto' width={200}></img>
                <h2>Розмiри пiдшипника: {elem.dimensions}</h2>
                <h3>зв'яжiться з нами для уточнення варiантiв виробникiв i цiн..</h3>
            </div>
        :null
        
        )}
        </div>
    )
}

export default SingleBearingPage;