const {Schema, model} = require('mongoose');

const bankSchema = new Schema({
  name: {type: 'string', required: true},
  city: {type: 'string', required: true},
  contact: {type: 'string', required: true},
  // Means that the bank has many donors, focus on the []
  donors: [
    {
      type: Schema.Types.ObjectId,
      ref: 'Donor',
    },
  ],
});

const Bank = model('Bank', bankSchema);

module.exports = Bank;
