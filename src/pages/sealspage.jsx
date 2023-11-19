import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import seals_obj from "../constant_seals";


const SealsPage = ()=>{
    const [data, setData]= useState(seals_obj);
    const [inputSeals, setInputSeals] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputSeals.toLowerCase())){
         flag=true;
    }})

    const funcSelectSeals=(e)=>{
        setInputSeals(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл сальників</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть сальник.." autoComplete="off"
            onChange={funcSelectSeals}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких сальників в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputSeals.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/seals/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default SealsPage;