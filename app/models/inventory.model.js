const mongoose = require('mongoose');
const _ = require('lodash');

const Schema = mongoose.Schema;

const InventorySchema = new Schema({
  id: {
    type: String,
    index: true
  },
  title: {
    type: String
  },
  owner: {
    type: String
  },
  price: {
    type: Number,
    index: true
  },
  address: {
    type: String
  },
  city: {
    type: String
  },
  country: {
    type: String
  },
  created: {
    type: Date,
    index: true
  }
});

// This index is for full text search
InventorySchema.index({title: 'text', owner: 'text'});

module.exports = mongoose.model('inventory', InventorySchema);