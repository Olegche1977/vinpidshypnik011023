import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import bearings_obj from "../constant_bearings";


const BearingsPage = ()=>{
    const [data, setData]= useState(bearings_obj);
    const [inputBearing, setInputBearing] = useState('');
    const [inputBearingSizes, setInputBearingSizes] = useState('');
    let flag=false;
    let flagS=false;
    let flagSize=false;

    if(inputBearingSizes.length>0){
        flagSize=true;
    }

    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputBearing.toLowerCase())){
         flag=true;
    }})
    data.forEach(elem=>{
        if( (elem.dimensions.slice(0, inputBearingSizes.length).toLowerCase() == inputBearingSizes.toLowerCase())){
         flagS=true;
    }})

    const funcSelectBearing=(e)=>{
        setInputBearing(e.target.value);
        
      }
    const funcSelectBearingBySizes=(e)=>{
        setInputBearingSizes(e.target.value);
        
      }

    return (
        <div>
            <h1>Роздiл пiдшипникiв</h1>
            <input id="inputId" 
                   className={inputBearingSizes.length>0?"inputBearingsPageDisabled":"inputBearingsPage"}
                   placeholder="Пошук по номеру.." 
                   autoComplete="off"
                   disabled={inputBearingSizes.length>0?"disabled":""}
                   onChange={funcSelectBearing}>
            </input>

            <input id="inputSizezId" 
                   className={inputBearing.length>0?"inputBearingsPageDisabled":"inputBearingsPage"}
                   placeholder="Пошук по розмірах.."
                   autoComplete="off"
                   disabled={inputBearing.length>0?"disabled":""}
                   onChange={funcSelectBearingBySizes}>
            </input>

            {!flag?<h4 style={{color:"blue"}}>Нема таких пiдшипникiв в списку, зв'яжiться з нами для уточнення..</h4>:null}
            {!flagS?<h4 style={{color:"blue"}}>Нема таких пiдшипникiв з такими розмірами в списку, зв'яжiться з нами для уточнення..</h4>:null}
            <div className="bearingsListContainer">
            {!flagSize?data.map(elem => (elem.item.toLowerCase().includes(inputBearing.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/bearings/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <div style={{fontSize:'10px'}}>{`(${elem.dimensions})`}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            )):null}
            
            {flagSize?data.map(elem => ((elem.dimensions.toLowerCase().includes(inputBearingSizes.toLowerCase()) && (elem.dimensions.slice(0, inputBearingSizes.length).toLowerCase() == inputBearingSizes.toLowerCase()))?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/bearings/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <div style={{fontSize:'10px'}}>{`(${elem.dimensions})`}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            )):null}

            </div>
        </div>
    )
}

export default BearingsPage;