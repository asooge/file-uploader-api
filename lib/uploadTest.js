const AWS = require('aws-sdk')
const fs = require('fs')

var s3 = new AWS.S3()

AWS.config.update({
  region: 'us-east-1'
})

console.log(s3)
// Access command line arguments to get file path

const filePath = process.argv[2]

fs.readFile(filePath, (err, data) => {
  if (err) {
    throw err
  }
  console.log(data)
})
