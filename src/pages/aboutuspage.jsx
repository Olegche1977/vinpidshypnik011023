import React from "react";
import adressmap from "../adress_map.png"

const AboutUsPage = ()=>{
    return (
        <div className="aboutUsWrapper">
            <div className="textInfo">
                <div>
                    <div style={{fontWeight:"bold"}}>ТОВ "Вiнпiдшипник" вiтаэ Вас!</div>
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
                    <div>СТРIЧКА ТРАНСПОРТЕРНА</div>
                    <div>КIЛЬЦЯ СТОПОРНI</div>
                    <div>КIЛЬЦЯ ГУМОВI</div>
                    <div></div>
                    <div></div>
                    <div></div>
                </div>    
            </div>
            <div className="mapInfo">
                <img src={adressmap} className="adressMapImg" alt="map" />
            </div>
            
        </div>
    )
}

export default AboutUsPage;