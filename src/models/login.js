// Login Model
const UserSchema = require('../schemas/User');
function login(context, cb){    
    UserSchema.findOne({
        login: context.login
    }, (error, user) =>{
        if(error){
            cb({
                msg: "Error trying to find user",
                error
            });
            return;
        };

        if(user === null){
            const error = new Error('User not found in db');
            const stringError = JSON.stringify(error, Object.getOwnPropertyNames(error));
            cb({
                msg: "User not found in db",
                error: stringError
            });
        }else{
            if(user.validatePassword(context.password)){
                cb({
                    msg: 'User founded with RIGHT password',
                    userId: user.id,
                    error: null
                });
            }else{
                const error = new Error('User founded with WRONG password');
                const stringError = JSON.stringify(error);
                cb({
                    msg: 'User founded with WRONG password',
                    error: stringError
                });
            }
        };
    });
};

module.exports = login;