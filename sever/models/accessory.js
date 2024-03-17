const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
var Currency = mongoose.Types.Currency;


const AccessorySchema = new Schema({
  name: {
    type: String,
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
  quantity: {
    type: Currency,
    required: true
  },}, {
  timestamps: true
})

module.exports = mongoose.model('Accessory', AccessorySchema);