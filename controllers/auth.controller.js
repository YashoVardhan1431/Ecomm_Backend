const Auth = require('../services/auth.service');

const signup = async(req,res) =>{
    console.log(req.body)
    const response =await Auth.signup(req.body);
    return res.json({
        message:'Succesfully created a user',
        success:true,
        code:true,
        data:response
    })
}
const signin = async (req, res) =>{
    const user = await Auth.getUser(req.body.email);
    if(!user){
      console.log ("User Email not found");
      return res.json({
        code:404,
        message:"Email id not found",
        success:false
      }) 
}

    if(!Auth.checkPassword(req.body.password, user.password)) {
       console.log("password incorrect");
    return res.json({
        code: 401,
        message: "password incorrect",
        success: false
    });
}
    const token = Auth.createToken(user);
    return res.json({
        code:200,
        message:'Sign in successfully',
        data: token,
        success:true 
    })
};
module.exports = {
    signup,
    signin
}