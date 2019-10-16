import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter } from 'react-router-dom'

// import App from './App';
import App from './paltrows-power-toes/App'
import HelloWorld from './state-drills/HelloWorld'
import Bomb from './state-drills/Bomb'
import RouletteGun from './state-drills/RouletteGun'
import AppLang from '../src/lang-context/AppLang'

import './index.css';

ReactDOM.render(
        <AppLang />,
    document.getElementById('root'));