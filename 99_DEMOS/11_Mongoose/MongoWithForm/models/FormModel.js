// Create blueprints
// Schema
/* NOTE: Goal is to access data from user input
  Form will contain:
  First name
  Last name
  Age
  Are they alive?
*/
const mongoose = require('mongoose')
const formSchema = new mongoose.Schema({
  fname: {
    type: String,
    required: [true, "First name required"]
  },
  lname: {
    type: String,
    default: "N/A"
  },
  age: {
    type: Number, 
    min: 18,
    required: [true, "Must be 18 or older"],
    cast: false
  },
  isAlive: {
    type: Boolean,
    default: true
  }
})

// Model
exports.FormModel = new mongoose.model('forms', formSchema)