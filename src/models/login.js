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
            cb({
                msg: "User not found in db",
                error: new Error('User not found in db')
            });
        }else{
            if(user.validatePassword(context.password)){
                cb({
                    msg: 'User founded with RIGHT password',
                    error: null
                });
            }else{
                cb({
                    msg: 'User founded with WRONG password',
                    error: new Error('User founded with WRONG password')
                });
            }
        };
    });
};

module.exports = login;