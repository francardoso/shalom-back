// Add User model
const UserSchema = require('../schemas/User');

function addUser(context, cb){
    const user = new UserSchema();
    user.name = context.name;
    user.login = context.login;
    user.hash= user.hashPassword(context.password);

    user
        .save()
        .then(() => {
            cb({
                error: null,
                msg: 'User inserted'
            })
        });
};

module.exports = addUser;