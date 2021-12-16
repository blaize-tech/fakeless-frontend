import React from 'react';
import {InitContract} from './utils';
import Footer from './components/footer/index';
import Header from './components/header/index';
import Home from './home/index';

import './styles/app.scss';

function App(props: InitContract) {
    return (
        <div className="app">
            <Header {...props} />
            <Home/>
            <Footer/>
        </div>
    );
}

export default App;
