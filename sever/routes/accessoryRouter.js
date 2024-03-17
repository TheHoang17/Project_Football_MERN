const express = require('express');
const accessoryRouter = express.Router();
const bodyParser = require('body-parser');
const accessory = require('../models/accessory');

accessoryRouter.use(bodyParser.json());

accessoryRouter
  .route('/getAllAccessory')
  .get((req, res, next) => {
    Accessory.find({})
      .then((accessory) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(accessory);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  })
  accessoryRouter
  .route('/addAccessory')
  .post((req, res, next) => {
    Accessory.create(req.body)
      .then((accessory) => {
        console.log('Accessory created: ', accessory);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(accessory);
      })
      .catch((err) => next(err));
  });
  accessoryRouter
  .route('/getAccessoryById/:id')
  .get((req, res, next) => {
    Accessory.findById(req.params.id)
      .then((accessory) => {
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(accessory);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));s
  })

module.exports = accessoryRouter;