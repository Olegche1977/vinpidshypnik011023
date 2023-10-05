import React from "react";
import {NavLink, Outlet} from "react-router-dom";
import logo from '../bearing.svg';
import skf_brand from '../skf_brand.png';
import nsk_brand from '../nsk_brand.png';
import nachi_brand from '../nachi_brand.png';
import fag_brand from '../fag_brand.png';
import asahi_brand from '../asahi_brand.png';
import timken_brand from '../timken_brand.png';
import ntn_brand from '../ntn_brand.png';
import iko_brand from '../iko_brand.png';
import pix_brand from '../pix_brand.png';
const Layout = () => {
    return (
        <div className="App">
            <header>
            
                <div className="App-header">
                    <div className="headerContacts">
                        
                        <span>Контакти:</span>
                        <span>21009,</span>
                        <span >Украiна, вул.Киiвська,4</span>
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
                        <span>ЕДРПОУ 39840600,</span>
                        <span>АКIБ</span>
                        <span>Приватбанк, м.Вiнниця</span>
                        <span>IПН  452843202282</span>
                        
                    </div>
                </div>

                <div className="marqueeInfinite">
                    <div>
                        <span>
                        <img src={skf_brand } className="moveImg" alt="move" />
                        <img src={pix_brand } className="moveImg" alt="move" />
                        <img src={iko_brand } className="moveImg" alt="move" />
                        <img src={ntn_brand } className="moveImg" alt="move" />
                        <img src={timken_brand } className="moveImg" alt="move" />
                        <img src={nsk_brand } className="moveImg" alt="move" />
                        <img src={nachi_brand } className="moveImg" alt="move" />
                        <img src={fag_brand } className="moveImg" alt="move" />
                        <img src={asahi_brand } className="moveImg" alt="move" />
                        </span>
                        <span>
                        <img src={skf_brand } className="moveImg" alt="move" />
                        <img src={pix_brand } className="moveImg" alt="move" />
                        <img src={iko_brand } className="moveImg" alt="move" />
                        <img src={ntn_brand } className="moveImg" alt="move" />
                        <img src={timken_brand } className="moveImg" alt="move" />
                        <img src={nsk_brand } className="moveImg" alt="move" />
                        <img src={nachi_brand } className="moveImg" alt="move" />
                        <img src={fag_brand } className="moveImg" alt="move" />
                        <img src={asahi_brand } className="moveImg" alt="move" />
                        </span>
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