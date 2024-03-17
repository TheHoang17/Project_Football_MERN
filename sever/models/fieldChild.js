const mongoose = require('mongoose');
const Schema = mongoose.Schema;
require("mongoose-currency").loadType(mongoose);
var Currency = mongoose.Types.Currency;

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


const FieldChild = mongoose.model('FieldChild', FieldChildSchema);


module.exports = FieldChild;