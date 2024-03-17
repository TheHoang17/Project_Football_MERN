const express = require('express');
const fieldsRouter = express.Router();
const bodyParser = require('body-parser');
const Fields = require('../models/field');

fieldsRouter.use(bodyParser.json());

fieldsRouter
  .route('/getAllFields')
  .get((req, res, next) => {
    Fields.find({})
      .then((fields) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(fields);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  })
  fieldsRouter
  .route('/addField')
  .post((req, res, next) => {
    Fields.create(req.body)
      .then((field) => {
        console.log('Field created: ', field);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(field);
      })
      .catch((err) => next(err));
  });
fieldsRouter
  .route('/getFieldById/:id')
  .get((req, res, next) => {
    Fields.findById(req.params.id)
      .then((field) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(field);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  })

module.exports = fieldsRouter;