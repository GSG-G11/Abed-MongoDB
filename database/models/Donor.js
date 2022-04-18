const {Schema, model} = require('mongoose');

const donorSchema = new Schema({
  name: {type: 'string', required: true},
  blood_group: {type: 'string', required: true},
  contact: {type: 'string', required: true},
  bank: {
    type: Schema.Types.ObjectId,
    ref: 'Bank',
    required: true,
  },
});

const Donor = model('Donor', donorSchema);

module.exports = Donor;
