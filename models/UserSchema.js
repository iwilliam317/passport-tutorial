const mongoose = require('mongoose');
const crypto = require('crypto');;
const jwt = require('jsonwebtoken');

const UserSchema = new mongoose.Schema({
  email: String,
  hash: String,
  salt: String,
})