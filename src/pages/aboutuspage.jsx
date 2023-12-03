import React, { useState } from "react";
import adressmap from "../adress_map.png"

const AboutUsPage = ()=>{
    const [myMapClass, changeMyMapClass] = useState('adressMapImg');

    function onClickMap (){
        myMapClass=='adressMapImg'?
        changeMyMapClass('adressMapImgMaxim'):
        changeMyMapClass('adressMapImg')
    }

    return (
        <div className="aboutUsWrapper">
            <div className="textInfo">
                <div>
                    <div style={{fontWeight:"bold"}}>ТОВ "Вiнпiдшипник" вiтає Вас!</div>
                </div>
                <div style={{backgroundColor:"#fef2eb"}}>
                    <div>Наша адреса: 21009, м. Вiнниця, вул. Киiвська, 4</div>
                    <div>Нашi телефони:</div>
                    <div>+38(067)732-31-95</div>
                    <div>+38(068)533-71-71</div>
                    <div>+38(068)282-38-73</div>
                    <div>Нашi электроннi адреси:</div>
                    <div>olegche1977@ukr.net</div>
                    <div>tatianatv@ukr.net</div>
                </div>
                <div>
                    <div style={{fontWeight:"bold"}}>Будем радi запропонувати Вам наступнi товари:</div>
                    <div>ПIДШИПНИКИ</div>
                    <div>РЕМЕНI</div>
                    <div>САЛЬНИКИ</div>
                    <div>СТРIЧКА ТРАНСПОРТЕРНА</div>
                    <div>КIЛЬЦЯ СТОПОРНI</div>
                    <div>КIЛЬЦЯ ГУМОВI</div>
                    <div>ЛАНЦЮГИ ПРИВІДНІ</div>
                    <div>ЗВАРЮВАЛЬНИЙ ДРІТ ТА ЕЛЕКТРОДИ </div>
                    <div>РЕДУКТОРИ РІЗНИХ ТИПІВ</div>
                    <div>ГІДРО ТА ПНЕВМОМАНЖЕТИ</div>
                    <div>ТА БАГАТО ІНШОГО</div>
                </div>    
            </div>
            <div className="mapInfo">
                <img src={adressmap} onClick={onClickMap} className={` ${myMapClass}`} alt="map" />
            </div>
            
        </div>
    )
}

export default AboutUsPage;