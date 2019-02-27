// Add User model
const mongoose = require('mongoose');
const crypto = require('crypto');

function addUser(context, cb){
    const UserSchema = mongoose.model('User', {
        name: String,
        login: String,
        hash: String
    });

    const user = new UserSchema({
        name: context.name,
        login: context.login,
        hash: hashPassword(context.password)
    });

    user
        .save()
        .then(() => {
            cb({
                error: null,
                msg: 'User inserted'
            })
        });

    function hashPassword(password){
        const salt = crypto.randomBytes(16).toString('hex');
        return crypto.pbkdf2Sync(password, salt, 1000, 64, 'sha512').toString('hex');
    }
};

module.exports = addUser;