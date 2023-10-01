import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage';
import BearingsPage from './pages/bearingspage';
import SingleBearingPage from './pages/singlebearing';
import BeltsPage from './pages/beltspage';
import TransportBandPage from './pages/transportbandpage';
import StopRingsPage from './pages/stoprings'
import Layout from './components/layout';
import NotFoundPage from './pages/notfoundpage';

import logo from './logo.svg';
import './App.css';

 function App() {
  
    return (
      <div>
        
        
        <Routes>
          <Route path='/' element={<Layout/>}>
            <Route index element={<HomePage/>}/>
            <Route path="bearings" element={<BearingsPage/>}/>
            <Route path="bearings/:id" element={<SingleBearingPage/>}/>
            <Route path="belts" element={<BeltsPage/>}/>
            <Route path="transportband" element={<TransportBandPage/>}/>
            <Route path="stoprings" element={<StopRingsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>


      </div>
    );
  
}

export default App;
