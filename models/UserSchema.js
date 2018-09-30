const mongoose = require('mongoose');
const crypto = require('crypto');;
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  email: String,
  hash: String,
  salt: String,
})

UsersSchema.methods.setPassword = function(password) {
  this.salt = crypto.randomBytes(16).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 512, 'sha512').toString('hex');
};