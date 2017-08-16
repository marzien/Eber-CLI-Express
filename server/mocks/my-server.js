/* eslint-env node */
'use strict';

module.exports = function(app) {
  const express = require('express');
  let myServerRouter = express.Router();

  myServerRouter.get('/', function(req, res) {
    res.send({
      'my-server': []
    });
  });

  myServerRouter.post('/', function(req, res) {
    res.status(201).end();
  });

  myServerRouter.get('/:id', function(req, res) {
    res.send({
      'my-server': {
        id: req.params.id
      }
    });
  });

  myServerRouter.put('/:id', function(req, res) {
    res.send({
      'my-server': {
        id: req.params.id
      }
    });
  });

  myServerRouter.delete('/:id', function(req, res) {
    res.status(204).end();
  });

  // The POST and PUT call will not contain a request body
  // because the body-parser is not included by default.
  // To use req.body, run:

  //    npm install --save-dev body-parser

  // After installing, you need to `use` the body-parser for
  // this mock uncommenting the following line:
  //
  //app.use('/api/my-server', require('body-parser').json());
  app.use('/api/my-server', myServerRouter);
};
