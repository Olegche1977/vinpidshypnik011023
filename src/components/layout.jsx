import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import logo from '../bearing.svg';

const Layout = () => {
    return (
        <div className="App">
            <header>
            
                <div className="App-header">
                    <div className="headerContacts">
                        
                        <div>Our contacts:</div>
                        <span>Ukraine, Kiyvska, 4</span>
                        <span>tel: +380682823873</span>
                        <span>tel: +380677323195</span>
                        <span>tel: +380675337171</span>
                        <span>email:olegche1977@ukr.net</span>
                        
                        
                    </div>
                    <div className="headerCenter">
                        <img src={logo} className="App-logo" alt="logo" />
                        <h2 className = "tovHeader">ТОВ "ВIНПIДШИПНИК"</h2>
                    </div>
                    <div className="headerInfo">
                        <span>EDRPOY: 39840600,</span>
                        <span>Privatbank m.Vinnitsya,</span>
                        <span>R/r UA0000000000000000</span>
                        
                    </div>
                </div>

                <div className="navigatorBand">
                <NavLink className="navigatorItem" to="/"><button type="button" className="btn btn-primary btn-sm">ВСI ТОВАРИ</button></NavLink>
                    <NavLink className="navigatorItem" to="/bearings"><button type="button" className="btn btn-primary btn-sm">ПIДШИПНИКИ</button></NavLink>
                    <NavLink className="navigatorItem" to="/belts"><button type="button" className="btn btn-primary btn-sm">РЕМЕНI</button></NavLink>
                    <NavLink className="navigatorItem" to="/transportbands"><button type="button" className="btn btn-primary btn-sm">СТРIЧКА ТРАНСПОРТЕРНА</button></NavLink>
                    <NavLink className="navigatorItem" to="/stoprings"><button type="button" className="btn btn-primary btn-sm">КIЛЬЦЯ СТОПОРНI</button></NavLink>
                    <NavLink className="navigatorItem" to="/gymrings"><button type="button" className="btn btn-primary btn-sm">КIЛЬЦЯ ГУМОВI</button></NavLink>
                </div>
            </header>

            <Outlet/>

            <footer className="footer"> tel: +380682823873
                        tel: +380677323195
                        tel: +380675337171
                        email:olegche1977@ukr.net</footer>

        </div>
    )
}

export default Layout;