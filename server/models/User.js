const mongoose = require('mongoose');

const userSchema = mongoose.Schema({
    nickname: {
        type: String,
        maxlength: 50
    },
}, { timestamps: true });


const User = mongoose.model('User', userSchema);

module.exports = { User }