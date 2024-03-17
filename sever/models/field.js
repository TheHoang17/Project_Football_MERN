const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
var Currency = mongoose.Types.Currency;


const FieldSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: Number,
    required: true
  },
  imageUrl: {
    type: Array,
    required: true
  },
  price: {
    type: Currency,
    required: true,
    min: 0
  },
  description: {
    type: String,
    required: true
  },
  fieldChild: [
    {
      type: mongoose.Schema.Types.ObjectId,
      ref: 'FieldChild',
      required: true
    }
  ]
}, {
  timestamps: true
})

const FieldChildSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  currentBooking: {
    type: Array
  },
  parent: {
    type: String,
    required: true
  }
}, {
timestamps: true
}
)

const Field = mongoose.model('Field', FieldSchema);

module.exports = Field;