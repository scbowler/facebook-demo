const mongoose = require('mongoose');
const { Schema } = mongoose;

const userSchema = new Schema({
    facebook_id: String
});

mongoose.model('users', userSchema);
