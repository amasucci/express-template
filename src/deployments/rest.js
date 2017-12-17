/* @flow */

import express from 'express';

const deployments_api = express.Router();
//deployments_api.use(expressValidator);
deployments_api.route("/deployments")
    .get((req, res) => {
        res.send('world');
    })
    .post((req, res) => {
        //req.checkBody('grant_type', 'grant_type is required').notEmpty();
        const deployment = req.body;
        console.log(deployment);
        res.send({
            status: 'running...',
            deployment: deployment
        })
    });



export default deployments_api;