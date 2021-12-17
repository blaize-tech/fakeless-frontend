import React from 'react';
// import { BrowserRouter } from 'react-router-dom';
import { IContract } from './utils';
import Layout from './modules/layout';
import Header from './modules/layout/components/Header';
import Footer from './modules/layout/components/Footer';
import Home from './modules/home/index';

import '@modules/look/styles/app.scss';

// const isBrowserSupportsHistory = 'pushState' in window.history;

const App = (props: IContract) => {
  return (
    <div className="app">
      {/*<BrowserRouter forceRefresh={!isBrowserSupportsHistory}>*/}
      <Layout>
        <Header {...props} />
        <Home />
        <Footer />
      </Layout>
      {/*</BrowserRouter>*/}
    </div>
  );
};

export default App;
