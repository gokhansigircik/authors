const mongoose = require("mongoose");

const authorSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, 'Task is required'],
      minlength: [2, 'Name must be at least 2 characters long']
    },
    // price: {
    //   type: Number,
    //   required: [true, 'Price is required'],
    //   min: [1, 'Price should not be negative'],
    //   max: [10000, 'Price is limited 10000']
    // },
    // description: {
    //   type: String,
    //   required: [true, 'Description is required'],
    // }
    isComplete: Boolean,
  },
  { timestamps: true }
);

const Author = mongoose.model("Author", authorSchema);
module.exports = Author;
