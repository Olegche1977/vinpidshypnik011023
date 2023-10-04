import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import belts_obj from "../constant_belts";


const BeltsPage = ()=>{
    const [data, setData]= useState(belts_obj);
    const [inputBelt, setInputBelt] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputBelt.toLowerCase())){
         flag=true;
    }})

    const funcSelectBelt=(e)=>{
        setInputBelt(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл ременiв</h1>
            <input className="inputBearingsPage"
            placeholder="Введiть ремiнь.."
            onChange={funcSelectBelt}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких ременiв в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputBelt.toLowerCase())?
                
                <div key ={elem.id} className="bearingsListBlock">
                    <Link key={elem.id} to={`/belts/${elem.id}`}>
                        <div> {elem.item}</div>
                    </Link>
                    <img src={elem.foto} alt='no foto' width={40}></img>
                </div>:null
            ))}
            </div>
        </div>
    )
}

export default BeltsPage;