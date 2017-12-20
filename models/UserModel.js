import mongoose from 'mongoose';
import bcrypt from 'bcrypt-nodejs';
/**
 * User Schema
 */
const UserSchema = new mongoose.Schema({
        firstName: String
        , lastName: String
        , email: {type: String, index: {unique: true}}
        , isVerified: {type: Boolean, default: false}
        , phone: String
        , password: String
        , roles: []
    }
);

/**
 * @param password
 * @description hash password
 * @return hash password
 */
UserSchema.methods.generateHash = function (password) {
    return bcrypt.hashSync(password, bcrypt.genSaltSync(8), null);
};

/**
 * @param password
 * @description checking if password is valid
 * @return true|false
 */
UserSchema.methods.validPassword = function (password) {
    return bcrypt.compareSync(password, this.password);
};


exports.UserSchema = UserSchema;
let User = mongoose.model('user', UserSchema);
exports.UserModel = User;

/**
 * @param firstName
 * @param lastName
 * @param email
 * @param password
 * @param phone
 * @param role
 * @description add user
 * @return Promise
 */
exports.addUser = ({firstName, lastName, email, password, phone, role}) => {
    let newUser = new User({
        firstName: firstName,
        lastName: lastName,
        email: email,
        phone: phone
    });
    newUser.password = newUser.generateHash(password);
    newUser.roles.push(role);
    return new Promise((resolve, reject) => {
        newUser.save((err, res) => {
            err ? reject(err) : resolve(res);
        });
    });
};


