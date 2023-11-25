import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import stoprings_obj from "../constant_stoprings";


const StopringsPage = ()=>{
    const [data, setData]= useState(stoprings_obj);
    const [inputStoprings, setInputStoprings] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputStoprings.toLowerCase())){
         flag=true;
    }})

    const funcSelectStoprings=(e)=>{
        setInputStoprings(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл кілець стопорних</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть кільце.." autoComplete="off"
            onChange={funcSelectStoprings}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких кілець в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputStoprings.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/stoprings/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default StopringsPage;