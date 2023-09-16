const mongoose =require("mongoose");

const { Schema } = mongoose;

const subscriptionSchema = new Schema({
  access: {
    type: String,
    enum: ["Basic"],
    required: true,
  },
});

module.exports = mongoose.model("Subscription", subscriptionSchema);
