import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
alshkdkashjdio211
ReactDOM.render(<App1 />, document.getElementById('root'));
registerServiceWorker();
var AWS = require('aws-sdk'); 

AWS.config = new AWS.Config();
AWS.config.accessKeyId = "AKIAIOSFODNN7EXAMPLE";
AWS.config.secretAccessKey = "wJalrXUtnFEMI/K7MDENG/bPxRfiCYEXAMPLEKEY";
AWS.config.region = "us-east-1";
