const mongoose = require("mongoose");
// Build blueprints
// Schema - adds structure to our data so its consistent
const bucketListSchema = new mongoose.Schema({
  description: {
    type: String,
    maxLength: 30,
    minLength: 1,
    required: [true, "Bucketlist description required"],
  },
  isComplete: {
    type: Boolean,
    default: false,
  },
});

// Model - define our collection and specifies which schema to use
exports.ItemModel = new mongoose.model("jmbuckets", bucketListSchema);

// DELETE: just example
// module.exports = {
//   ItemModel: new mongoose.model("jmbuckets", bucketListSchema),
//   DoggyModel: "something"
// }