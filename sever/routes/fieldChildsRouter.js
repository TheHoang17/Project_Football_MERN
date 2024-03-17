const express = require('express');
const fieldChildsRouter = express.Router();
const bodyParser = require('body-parser');
const FieldChild = require('../models/fieldChild');
fieldChildsRouter.use(bodyParser.json());


fieldChildsRouter.route('/')
.get((req, res, next) => {
  FieldChild.find({})
        .then((comment) => {
            res.statusCode = 200;
            res.setHeader('Content-Type', 'application/json');
            res.json(comment);
        }, (err) => next(err))
        .catch((err) => next(err));
})
.post((req, res, next) => {
  FieldChild.create(req.body)
      .then((comment) => {
          console.log('Comment Created: ', comment);
          res.statusCode = 200;
          res.setHeader('Content-Type', 'application/json');
          res.json(comment);
      }, (err) => next(err))
      .catch((err) => next(err));
})

fieldChildsRouter.route('/getFieldByParentId/:id')
.get((req, res, next) => {
  FieldChild.find({parent: req.params.id})
    .then((field) => {
      res.statusCode = 200;
      res.setHeader('Content-Type', 'application/json');
      res.json(field);
    },
    (err) => next(err)
  )
  .catch((err) => next(err));
})

// fieldChildsRouter.route('/getFieldChildBooking/:id')
// .get((req, res, next) => {
//   FieldChild.find({parent: req.params.id})
//     .then((field) => {
//       res.statusCode = 200;
//       res.setHeader('Content-Type', 'application/json');
//       res.json(field);
//     },
//     (err) => next(err)
//   )
//   .catch((err) => next(err));
// })

module.exports = fieldChildsRouter;