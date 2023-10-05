import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import bearings_obj from "../constant_bearings";


const BearingsPage = ()=>{
    const [data, setData]= useState(bearings_obj);
    const [inputBearing, setInputBearing] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputBearing.toLowerCase())){
         flag=true;
    }})

    const funcSelectBearing=(e)=>{
        setInputBearing(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл пiдшипникiв</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть пiдшипник.."
            onChange={funcSelectBearing}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких пiдшипникiв в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputBearing.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/bearings/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default BearingsPage;