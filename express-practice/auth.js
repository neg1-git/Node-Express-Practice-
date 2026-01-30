const auth=(req,res,next)=>{
  console.log('Authorize');
  next();
}

module.exports= auth;