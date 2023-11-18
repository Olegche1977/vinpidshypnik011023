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
import hiwin_brand from '../hivin_brand.png';
import ezo_brand from '../ezo_brand.png';
import koyo_brand from '../koyo_brand.png';
import zkl_brand from '../zkl_brand.png';
import kg_brand from '../kg_brand.png';
import stomil_brand from '../stomil_brand.png';
import rubena_brand from '../rubena_brand.png';
import renold_brand from '../renold_brand.png';
import contitech_brand from '../contitech_brand.png';
import rollway_brand from '../rollway_brand.png';


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
                        <span>ЕДРПОУ 45284325,</span>
                        <span>IПН  452843202282</span>
                        <span>Підприємство є платником</span>
                        <span>податку на прибуток</span>
                        <span>на загальних підставах</span>
                        
                    </div>
                </div>

                <div className="marqueeInfinite">
                    <div>
                        <span>
                        <img src={skf_brand } className="moveImg" alt="move" />
                        <img src={zkl_brand } className="moveImg" alt="move" />
                        <img src={iko_brand } className="moveImg" alt="move" />
                        <img src={ezo_brand } className="moveImg" alt="move" />
                        <img src={timken_brand } className="moveImg" alt="move" />
                        <img src={nsk_brand } className="moveImg" alt="move" />
                        <img src={nachi_brand } className="moveImg" alt="move" />
                        <img src={stomil_brand } className="moveImg" alt="move" />
                        <img src={fag_brand } className="moveImg" alt="move" />
                        <img src={asahi_brand } className="moveImg" alt="move" />
                        <img src={hiwin_brand } className="moveImg" alt="move" />
                        <img src={rubena_brand } className="moveImg" alt="move" />
                        <img src={ntn_brand } className="moveImg" alt="move" />
                        <img src={koyo_brand } className="moveImg" alt="move" />
                        <img src={pix_brand } className="moveImg" alt="move" />
                        <img src={kg_brand } className="moveImg" alt="move" />
                        <img src={renold_brand } className="moveImg" alt="move" />
                        <img src={contitech_brand } className="moveImg" alt="move" />
                        <img src={rollway_brand } className="moveImg" alt="move" />
                        </span>
                        <span>
                        <img src={skf_brand } className="moveImg" alt="move" />
                        <img src={zkl_brand } className="moveImg" alt="move" />
                        <img src={iko_brand } className="moveImg" alt="move" />
                        <img src={ezo_brand } className="moveImg" alt="move" />
                        <img src={timken_brand } className="moveImg" alt="move" />
                        <img src={nsk_brand } className="moveImg" alt="move" />
                        <img src={nachi_brand } className="moveImg" alt="move" />
                        <img src={stomil_brand } className="moveImg" alt="move" />
                        <img src={fag_brand } className="moveImg" alt="move" />
                        <img src={asahi_brand } className="moveImg" alt="move" />
                        <img src={hiwin_brand } className="moveImg" alt="move" />
                        <img src={rubena_brand } className="moveImg" alt="move" />
                        <img src={ntn_brand } className="moveImg" alt="move" />
                        <img src={koyo_brand } className="moveImg" alt="move" />
                        <img src={pix_brand } className="moveImg" alt="move" />
                        <img src={kg_brand } className="moveImg" alt="move" />
                        <img src={renold_brand } className="moveImg" alt="move" />
                        <img src={contitech_brand } className="moveImg" alt="move" />
                        <img src={rollway_brand } className="moveImg" alt="move" />
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
                    <NavLink className="navigatorItem" to="/aboutus"><button type="button" className="btn btn-primary btn-sm">КОНТАКТИ</button></NavLink>
                </div>
            </header>

            <Outlet/>

            <footer className="footer"> 
                <div className="footerContacts">
                    <div>
                        <span  className="material-symbols-outlined">call</span>
                        <span style={{fontSize:'16px'}}>+380682823873</span>
                     </div>
                     <div>
                        <span  className="material-symbols-outlined">call</span>
                        <span style={{fontSize:'16px'}}>+380677323195</span>     
                    </div>
                    <div>
                        <span  className="material-symbols-outlined">call</span>
                        <span style={{fontSize:'16px'}}>+380675337171</span>
                    </div>
                </div>
                <div className="footerEmails">
                    <div>
                        <span  className="material-symbols-outlined">mail</span>   
                        <span style={{fontSize:'16px'}}>olegche1977@ukr.net</span>       
                    </div>
                    <div>
                        <span  className="material-symbols-outlined">mail</span>   
                        <span style={{fontSize:'16px'}}>tatianatv@ukr.net</span>       
                    </div>
                    
                </div>        
            </footer>

        </div>
    )
}

export default Layout;