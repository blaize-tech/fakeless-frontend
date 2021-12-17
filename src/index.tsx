import React from 'react';
import ReactDOM from 'react-dom';
import './modules/look/styles/index.css';
import App from './App';
import { IContract, initContract } from './utils';
import 'antd/dist/antd.less'; // or 'antd/dist/antd.less'

initContract().then((props: IContract) => {
  ReactDOM.render(<App {...props} />, document.getElementById('root'));
});
