import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import gymrings_obj from "../constant_gymrings";


const GymringsPage = ()=>{
    const [data, setData]= useState(gymrings_obj);
    const [inputGymrings, setInputGymrings] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputGymrings.toLowerCase())){
         flag=true;
    }})

    const funcSelectGymrings=(e)=>{
        setInputGymrings(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл кілець ущільнюючих</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть кільце.." autoComplete="off"
            onChange={funcSelectGymrings}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких кілець в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputGymrings.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/gymrings/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default GymringsPage;