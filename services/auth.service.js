const User  = require ('../models/index').User;
const Role = require ('../models/index').Role;
const bcrypt = require('bcryptjs');
const {response} = require('express'); 
const jwt = require('jsonwebtoken');

const signup = async (data)=>{
    const user = await User.create({
        email: data.email,
        password: data.password  
    });
    const customerRole = await Role.findOne({
        where :{
            name: 'customer'
        }
    })
    user.addRole(customerRole);
    return user;
}
const getUser = async (userEmail) =>{
    const user = await User.findOne({
        where:{
            email: userEmail
        }
    });
    return user;
}
const checkPassword = (userPassword, encryptedPassword) => {
    return bcrypt.compareSync(userPassword, encryptedPassword);
}
const createToken = (user) => {
    return jwt.sign({id: user.id, email: user.email}, 'relevel', { expiresIn: 60 * 60 });
}
const verifyToken = (token) =>{
    try{
        const response =jwt.verify(token,'relevel')
        return response; 
    } catch(err){
        //console.log('Token not verified')
    }
}
//console.log(createToken({id:1, email: 'yasho@xyz.com'}));
let token = 'eyyashoJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MSwiZW1haWwiOiJ5YXNob0B4eXouY29tIiwiaWF0IjoxNjYxMDkyMzI3LCJleHAiOjE2NjEwOTU5Mjd9.HkQmFXG0gC07TCLYDIG1rMuVgC4xGv_yiI2O2Y0MIFE'
//console.log(jwt.verify(token,'relevel')) ;
//console.log(verifyToken(token))
//console.log("end") ;
module.exports={
    signup,
    getUser,
    checkPassword,
    createToken,
    verifyToken

}
