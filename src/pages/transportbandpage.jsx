import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import transportbands_obj from "../constant_transportbands";


const TransportBandPage = ()=>{
    const [data, setData]= useState(transportbands_obj);
    const [inputBand, setInputBand] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputBand.toLowerCase())){
         flag=true;
    }})

    const funcSelectBand=(e)=>{
        setInputBand(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл транспортерних стрічок</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть назву стрічки.." autoComplete="off"
            onChange={funcSelectBand}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема стрічки з такими даними, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputBand.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/transportbands/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default TransportBandPage;