const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const User = require('../models/User');

const JWT_SECRET = 'brbr5184635brbr'


async function register(username,email,password) {
        const existingUser = await User.findOne({username})
        const existingEmail = await User.findOne({email})
    
        if(existingUser || existingEmail) {
            throw new Error('Username or email is taken');
        }
        const hashedPassword = await bcrypt.hash(password,10)
    
        const user = await User.create({
            username,
            email,
            hashedPassword
        });
        await user.save()
        const token = createSession(user);
    
        return token;
    
}

async function login(email, password) {
    
}


async function logout() {

}

function createSession(user) {
    const {_id,username } = user;
    const payload = {
        _id,
        username
    }
    const token = jwt.sign(payload,JWT_SECRET);
    return token;
}

function verifyToken() {

}

module.exports = {
    register,
    login,
    logout,
    verifyToken
}