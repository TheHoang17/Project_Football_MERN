const express = require('express');
const bookingsRouter = express.Router();
const bodyParser = require('body-parser');
const Booking = require('../models/booking');
const FieldChild = require('../models/fieldChild');
bookingsRouter.use(bodyParser.json());


bookingsRouter
  .route('/getBookings/:userId')
  .get((req, res, next) => {
    Booking.find({userId: req.params.userId})
      .sort({ createdAt: -1 }) 
      .limit(1)
      .then((bookings) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(bookings);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  })

  bookingsRouter
  .route('/getAllBookings/:userId')
  .get((req, res, next) => {
    Booking.find({userId: req.params.userId})
      .then((bookings) => {
        res.statusCode = 200;
        res.setHeader("Content-Type", "application/json");
        res.json(bookings);
      },
      (err) => next(err)
    )
    .catch((err) => next(err));
  })


bookingsRouter
  .route('/bookField')
  .post((req, res, next) => {
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