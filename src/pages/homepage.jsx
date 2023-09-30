import React, { useState } from "react";
import main_obj from "../constant_main";
import CardDraw from "../components/carddraw";

const HomePage = ()=>{
    const [data, setData]  = useState(main_obj);
    return (
        <div className="mainPageContainer">
            <h1> Our goods</h1>
            <div className="homeGoodsContainer">
                {data.map((elem,index)=>
                <CardDraw key={index} elemId ={elem.id}/>)}
            </div>
        </div>
    )
}

export default HomePage;