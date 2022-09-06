const AuthService = require('../services/auth.service');
const isAuthenticated =(req, res, next) =>{
let token = req.headers["x-access-token"];
if(!token){
    return res.json({
        code: 401,
        message:'No token available'
    });
  }
  const response = AuthService.verifyToken(token);
  console.log(response)
  if(!response){
    return res.json({
        code: 401,
        message:'Token not verified'
    })
  }
  try {
    const user = AuthService.getUser(response.id);
    //console.log(user)
    //console.log(req)
    req.user = user.id;
    next();
  } catch (err){
    console.log(err)
    return res.json({
        code: 401,
        message:'User not found'
    })
  }
}
module.exports={
    isAuthenticated
}