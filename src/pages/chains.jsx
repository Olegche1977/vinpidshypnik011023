import React from "react";
import { useState } from "react";
import {Link} from 'react-router-dom';
import chains_obj from "../constant_chains";


const ChainsPage = ()=>{
    const [data, setData]= useState(chains_obj);
    const [inputChains, setInputChains] = useState('');
    let flag=false;


    data.forEach(elem=>{
        if(elem.item.toLowerCase().includes(inputChains.toLowerCase())){
         flag=true;
    }})

    const funcSelectChains=(e)=>{
        setInputChains(e.target.value);
        
      }


    return (
        <div>
            <h1>Роздiл ланцюгів привідних</h1>
            <input id="inputId" className="inputBearingsPage"
            placeholder="Введiть ланцюг.." autoComplete="off"
            onChange={funcSelectChains}>
            </input>
            {!flag?<h4 style={{color:"blue"}}>Нема таких ланцюгів в списку, зв'яжiться з нами для уточнення..</h4>:null}
            
            <div className="bearingsListContainer">
            {data.map(elem => (elem.item.toLowerCase().includes(inputChains.toLowerCase())?
                
                <Link className="bearingsListBlock" key={elem.id} to={`/chains/${elem.id}`}>
                    
                    <div> {elem.item}</div>
                    <img src={elem.foto} alt='no foto' width={40}></img>
            
                </Link>:null
            ))}
            </div>
        </div>
    )
}

export default ChainsPage;