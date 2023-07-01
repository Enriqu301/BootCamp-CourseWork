// Build blueprints. 
//once these are made send them over to .....
  //Schema - adds strucutre to our data
  //Schema is a method built into mongoose
  const bucketListSchema = new mongoose.Schema(
    {
      // maybe remove the Id. Because mongo will give an ID Key later
      //Description will allow to require a description 
      description: {
      type: String,
      maxLength: 30, //from the backend prevent front end coders or users from typoing more than 30 characters
      minLength: 1, 
      required: [true, "bucketlist description is required"]
    },
      isComplete: {
        type: Boolean,
        defualt: false,
      },
    });
  
    //Model - defines our collection and specifies which schmea to use
    exports.ItemModel = new mongoose.model("ERMBucket", bucketListSchema);


    //DELETE: just 
    // module.exports = {
    //     ItemModel: new mongoose.model("ERMBucket", bucketListSchema);
    //     DoggyModel: "Something"
    // }