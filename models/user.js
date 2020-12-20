const mongoose = require("mongoose");
const crypto = require("crypto");
const uuidv1 = require("uuid/v1");
const { ObjectId } = mongoose.Schema;

const userSchema = new mongoose.Schema(
  {
    nombre: {
      type: String,
      trim: true,
      required: true,
    },
    apellidos: {
      type: String,
      trim: true,
      required: true,
    },
    hashed_password: {
      type: String,
      trim: true,
      required: true,
    },
    fechaNacimiento: {
      type: Date,
      default: new Date(),
    },
    email: {
      type: String,
      trim: true,
      required: true,
      unique: true,
    },
    avatar: {
      type: String,
      default: "",
    },
    biografia: {
      type: String,
      default: "",
    },
    area: {
      type: String,
      default: "",
    },
    team: {
      type: ObjectId,
      ref: "Equipo",
    },
    profile: {
      type: Number,
      default: 0,
    },
    historia: {
      type: Array,
      default: [],
    },
    salt: String,
  },
  { timestamps: true }
);

// virtual field
// userSchema.set('toObject', { virtuals: true });
// userSchema.set('toJSON', { virtuals: true });
// userSchema
//     .virtual("password")
//     .get(function() {
//         console.log("this.password: ", this.hashed_password);
//         return this._password;
//     })
//     .set(function(password) {
//         console.log("hola");
//         console.log("---------- pass: ", password);
//         this._password = password;
//         this.salt = uuidv1();
//         this.hashed_password = this.encryptPassword(password);
//     });
    

userSchema.pre("save", function (next) {
  const user = this;
  user.salt = uuidv1();
  user.hashed_password = crypto
    .createHmac("sha1", user.salt)
    .update(user.hashed_password)
    .digest("hex");

  next();
});

// schemas methods
userSchema.methods = {
  authenticate: function (plainText) {
    return this.encryptPassword(plainText) === this.hashed_password;
  },

  encryptPassword: function (password) {
    if (!password) return "";
    try {
      return crypto
        .createHmac("sha1", this.salt)
        .update(password)
        .digest("hex");
    } catch (err) {
      return "";
    }
  },
};

module.exports = mongoose.model("User", userSchema);
