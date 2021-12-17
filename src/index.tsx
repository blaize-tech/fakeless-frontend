import React from 'react';
import ReactDOM from 'react-dom';
import './modules/look/styles/index.css';
import App from './App';
import { InitContract, initContract } from './utils';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'

initContract().then((props: InitContract) => {
  ReactDOM.render(
    <React.StrictMode>
      <App {...props} />
    </React.StrictMode>,
    document.getElementById('root'),
  );
});
