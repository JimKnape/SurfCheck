const mongoose = require('mongoose');
const db = require('./index.js');

mongoose.Promise = global.Promise;

const surfCheckSchema = new mongoose.Schema({
  spotName: String,
  surfRating: String,
  surfNotes: String,
  },
  {
    timestamps: true,
  },
);

const SurfCheck = mongoose.model('surfcheck', surfCheckSchema);

module.exports = SurfCheck;
