import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import logo from '../bearing.svg';

const Layout = () => {
    return (
        <div className="App">
            <header>
            
                <div className="App-header">
                    <img src={logo} className="App-logo" alt="logo" />
                    <h2>"ТОВ" ВIНПIДШИПНИК</h2>
                </div>

                <div className="navigatorBand">
                <NavLink className="navigatorItem" to="/"><button type="button" class="btn btn-primary btn-sm">ВСI ТОВАРИ</button></NavLink>
                    <NavLink className="navigatorItem" to="/bearings"><button type="button" class="btn btn-primary btn-sm">ПIДШИПНИКИ</button></NavLink>
                    <NavLink className="navigatorItem" to="/belts"><button type="button" class="btn btn-primary btn-sm">РЕМЕНI</button></NavLink>
                    <NavLink className="navigatorItem" to="/transportband"><button type="button" class="btn btn-primary btn-sm">СТРIЧКА ТРАНСПОРТЕРНА</button></NavLink>
                    <NavLink className="navigatorItem" to="/stoprings"><button type="button" class="btn btn-primary btn-sm">КIЛЬЦЯ СТОПОРНI</button></NavLink>
                </div>
            </header>

            <Outlet/>

            <footer className="footer">2023</footer>

        </div>
    )
}

export default Layout;