import React, { Component } from 'react';
import {Routes, Route} from 'react-router-dom'
import HomePage from './pages/homepage';
import BearingsPage from './pages/bearingspage';
import SingleBearingPage from './pages/singlebearing';
import SingleBeltsPage from './pages/singlebelt';
import BeltsPage from './pages/beltspage';
import TransportBandPage from './pages/transportbandpage';
import StopRingsPage from './pages/stoprings';
import GymRingsPage from './pages/gymrings'
import AboutUsPage from './pages/aboutuspage';

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
            <Route path="belts/:id" element={<SingleBeltsPage/>}/>
            <Route path="transportbands" element={<TransportBandPage/>}/>
            <Route path="stoprings" element={<StopRingsPage/>}/>
            <Route path="gymrings" element={<GymRingsPage/>}/>
            <Route path="aboutus" element={<AboutUsPage/>}/>
            <Route path="*" element={<NotFoundPage/>}/>
          </Route>
        </Routes>


      </div>
    );
  
}

export default App;
