import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import electrodes_obj from "../constant_electrodes";


const ElectrodesPage = ()=>{
    const [data, setData]= useState(electrodes_obj);
    const [inputElectrodes, setInputElectrodes] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputElectrodes.toLowerCase())){
         flag=true;
    }})

    const funcSelectElectrodes=(e)=>{
        setInputElectrodes(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл електродів</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть електроди.." autoComplete="off"
            onChange={funcSelectElectrodes}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких електродів в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputElectrodes.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/electrodes/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default ElectrodesPage;