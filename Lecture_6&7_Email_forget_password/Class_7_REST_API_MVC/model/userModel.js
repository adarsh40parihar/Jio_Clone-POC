const mongoose = require('mongoose');

//to save the hashed password in the data base
const bcrypt = require('bcryptjs');
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
};
const userSchema = new mongoose.Schema(schemaRules);

/*****************hooks in mongodb************/

// Virtual field for confirmPassword (not saved in DB)
userSchema.virtual("confirmPassword").set(function (value) {
  this.confirmPassword = value;
});

// Custom validation for confirmPassword
userSchema.pre("validate", function (next) {
  if (this.confirmPassword && this.password !== this.confirmPassword) {
    this.invalidate("confirmPassword", "Passwords must match");
  }
  next();
});


// pre save hook
userSchema.pre("save", async function (next) {
  // console.log("Pre-save hook called - Hashing password");
  // hash the password
  const salt = await bcrypt.genSalt(10); // Await the salt generation
  this.password = await bcrypt.hash(this.password, salt); // Hash the password properly

  this._confirmPassword = undefined; // Properly remove virtual confirmPassword

  next();
});

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
