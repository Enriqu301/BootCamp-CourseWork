//Create Blueprints
  //Schema
//Goal is to access data from user input
    /*
        form will contain:
        first name
        last name
        age
        are they alive?
     */
        const mongoose = require('mongoose')
        const formSchema = new mongoose.Schema({
            fname: {
                type:String,
                required: [true, "First name required"]
            },
            lname: {
                type: String,
                default: "N/A"
            }, 
            age: {
                type:Number,
                min: 18,
                required: [true, "Must be 18 or older"],
                cast: false
            },
            isAlive: {
                type: Boolean,
                default: true
            }
        })
        
        //Model
        //exports means=
        exports.FormModel = new mongoose.model('forms', formSchema)
        