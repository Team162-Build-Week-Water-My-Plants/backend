const jwt = require("jsonwebtoken")

async function restrict(req,res,next) {
   
      try{
         const token = req.headers.authorization
          if(!token) {
            return res.status(401).json({ message: "token required"})
         }
         jwt.verify(token, process.env.JWT_SECRET, (err,decoded)=>{
            if(err){
               return res.status(401).json({ message:"token invalid"})
            }
            req.token = decoded
            next()
         })

      }catch(err){
         next(err)
      }
}

module.exports = {restrict}