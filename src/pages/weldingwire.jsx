import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import weldingwire_obj from "../constant_weldingwire";


const WeldingWirePage = ()=>{
    const [data, setData]= useState(weldingwire_obj);
    const [inputWeldingWire, setInputWeldingWire] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputWeldingWire.toLowerCase())){
         flag=true;
    }})

    const funcSelectWeldingWire=(e)=>{
        setInputWeldingWire(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл дроту зварювального</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть параметри дроту.." autoComplete="off"
            onChange={funcSelectWeldingWire}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема такого типу дроту, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputWeldingWire.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/weldingwire/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default WeldingWirePage;