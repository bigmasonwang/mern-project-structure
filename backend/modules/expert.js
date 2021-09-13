const mongoose = require('mongoose');

const ExpertSchema = new mongoose.Schema({
  expertID: {
    type: String,
    required: true,
  },
  userID: {
    type: String,
    required: true,
  },
  active: {
    type: Boolean,
    required: true,
  },
  organization: {
    type: String,
  },
  specialties: [
    {
      type: String,
      required: true,
    },
  ],
  topics: [
    {
      type: String,
      required: true,
    },
  ],
  personalIntroduction: {
    type: String,
  },
  photoId: {
    type: String,
  },
  yearsOfExperience: {
    type: Date,
    default: Date.now(),
  },
  certificates: [
    {
      type: String,
    },
  ],
  meetingMethods: [
    {
      type: String,
    },
  ],
  availability: {},
  status: {
    type: String,
    required: true,
  },
  yearsOfExperience: {
    type: Date,
    default: Date.now(),
  },
  followers: [
    {
      type: String,
    },
  ],
});

const Expert = mongoose.model('expert', ExpertSchema);

module.exports = Expert;
