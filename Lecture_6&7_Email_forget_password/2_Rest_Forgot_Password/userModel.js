const mongoose = require('mongoose');
/***********************************UserModel*********************************/

const schemaRules = {
  name: {
    type: String,
    required: [true, "name is required"],
  },
  email: {
    type: String,
    required: [true, "email is required"],
    unique: [true, "email should be unique"],
  },
  password: {
    type: String,
    required: [true, "password is required"],
    minLength: [6, "password should be atleast of 6 length"],
  },
  confirmPassword: {
    type: String,
    required: true,
    minLength: 6,
    // custom validation
    validate: [
      function () {
        return this.password == this.confirmPassword;
      },
      "password should be equal to confirm password",
    ],
  },
  createdAt: {
    type: Date,
    default: Date.now(),
  },
  isPremium: {
    type: Boolean,
    default: false,
  },
  role: {
    type: String,
    // these are the only possible values for the role
    enum: ["user", "admin", "feed curator", "moderator"],
    default: "user",
  },
  otp: {
    type: String,
  },
  otpExpiry: {
    type: Date,
  },
};
const userSchema = new mongoose.Schema(schemaRules);
/*****************hooks in mongodb************/
// pre save hook
userSchema.pre("save", function (next) {
    console.log("Pre save was called");
    this.confirmPassword = undefined;
    next();
})
// post save hook
userSchema.post("save", function() {
    console.log("Post save was called");
    this.password = undefined; 
    this.__v = undefined;
})
// final touch point
const UserModel = mongoose.model("User", userSchema);

//default export
module.exports = UserModel;
