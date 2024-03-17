const express = require('express');
const bookingsRouter = express.Router();
const bodyParser = require('body-parser');
const Booking = require('../models/booking');
const FieldChild = require('../models/fieldChild');
bookingsRouter.use(bodyParser.json());

bookingsRouter
  .route('/bookField')
  .post((req, res, next) => {
    // Booking.create(req.body)
    //   .then(booking => {
    //     const fieldtemp = FieldChild.findOne({_id : req.body.fieldChildId})
    //     fieldtemp.currentBooking.push({
    //       bookingId: booking._id, 
    //       date: booking.date, 
    //       fromHours: booking.fromHours, 
    //       toHours: booking.toHours,
    //       userId: booking.userId,
    //       status: booking.status
    //     })
    //     console.log(fieldtemp);
    //     fieldtemp.save()
    //     console.log('booking Created ', booking);
    //       res.statusCode = 200;
    //       res.setHeader('Content-Type', 'application/json');
    //       res.json(booking);
    //   }, (err) => next(err))
    //   .catch((err) => next(err));
  //   Booking.create(req.body)
  //   .then(booking => {
  //       // Find the corresponding FieldChild document
  //       return FieldChild.findOne({ _id: req.body.fieldChildId });
  //   })
  //   .then(fieldtemp => {
  //       // Modify and save the FieldChild document
  //       if (fieldtemp) {
  //           fieldtemp.currentBooking.push({
  //               bookingId: req.body._id,
  //               date: req.body.date,
  //               fromHours: req.body.fromHours,
  //               toHours: req.body.toHours,
  //               userId: req.body.userId,
  //               status: req.body.status
  //           });
  //           console.log(fieldtemp);
  //           return fieldtemp.save();
  //       } else {
  //           // Handle case where fieldtemp is not found
  //           throw new Error('FieldChild not found');
  //       }
  //   })
  //   .then(savedField => {
  //       console.log('Booking Created', savedField);
  //       res.statusCode = 200;
  //       res.setHeader('Content-Type', 'application/json');
  //       res.json(savedField);
  //   })
  //   .catch(err => {
  //       console.error(err);
  //       next(err);
  //   });
  Booking.create(req.body)
    .then(booking => {
        // Get the created booking ID
        const bookingId = booking._id;

        // Find the corresponding FieldChild document
        return FieldChild.findOne({ _id: req.body.fieldChildId }).then(fieldtemp => {
            if (!fieldtemp) {
                throw new Error('FieldChild not found');
            }

            // Push the booking details into the currentBooking array
            fieldtemp.currentBooking.push({
                bookingId: bookingId,
                date: req.body.date,
                fromHours: req.body.fromHours,
                toHours: req.body.toHours,
                userId: req.body.userId,
                status: booking.status
            });
            
            // Save the modified FieldChild document
            return fieldtemp.save();
        });
    })
    .then(savedField => {
        console.log('Booking Created:', savedField);
        res.statusCode = 200;
        res.setHeader('Content-Type', 'application/json');
        res.json(savedField);
    })
    .catch(err => {
        console.error(err);
        next(err);
    });
  })

module.exports = bookingsRouter;