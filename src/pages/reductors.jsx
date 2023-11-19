import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import reductors_obj from "../constant_reductors";


const ReductorsPage = ()=>{
    const [data, setData]= useState(reductors_obj);
    const [inputReductors, setInputReductors] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputReductors.toLowerCase())){
         flag=true;
    }})

    const funcSelectReductors=(e)=>{
        setInputReductors(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл редукторів</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть редуктор.." autoComplete="off"
            onChange={funcSelectReductors}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких редукторів в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputReductors.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/reductors/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default ReductorsPage;