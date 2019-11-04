require('dotenv').config
const mongoose = require('mongoose')


const uploadSchema = new mongoose.Schema({
  fileName: {
    type: String,
    required: true
  },
  fileType: {
    type: String,
    required: true
  },
  owner: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  }
}, {
  timestamps: true,
  toObject: { virtuals: true },
  toJSON: { virtuals: true }
})

uploadSchema.virtual('fileUrl').get(function () {
  return 'https://' + process.env.BUCKET_NAME + '.s3.amazonaws.com/' + this.fileName
})

module.exports = mongoose.model('Upload', uploadSchema)
