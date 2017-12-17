/* @flow */

import config from './config';
import dep_api from './deployments/rest';
import express from 'express';
import bodyParser from 'body-parser';
import multer from 'multer';
import morgan from 'morgan';

const app = express();
const upload = multer();

app.use(express.static(__dirname + '/../public'));
app.use(morgan('dev'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

app.use(config.api.contextPath, dep_api);

app.listen(config.api.port, () => {
    console.log(`Server is listening on port ${config.api.port}`);
});
