const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
var Currency = mongoose.Types.Currency;

const bookingSchema = new Schema({
  field: {
    type: String,
    required: true,
  },
  fieldId: {
    type: String,
    required: true,
  },
  fieldChildId: {
    type: String,
    required: true,
  },
  userId: {
    type: String,
    required: true
  },
  date: {
    type: String,
    required: true
  },
  fromHours: {
    type: String,
    required: true
  },
  toHours: {
    type: String,
    required: true
  },
  totalPrice: {
    type: Currency,
    required: true
  },
  totalHours: {
    type: String,
    required: true
  },
  status: {
    type: String,
    required: true,
    default: 'booked'
  }
}, {timestamps: true})

module.exports = mongoose.model('Booking', bookingSchema);