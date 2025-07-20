import jwt from 'jsonwebtoken'
import dotenv from 'dotenv'
dotenv.config();

 const isAuthenticated = async (req,res,next) =>{
    try {
        const token = req.cookies.token;
        if(!token){
            return res.status(401).json({
                message : 'User not authenticated',
            })
        }
        const decode =  jwt.verify(token,process.env.SECRET)
        if(!decode){
            return res.status(401).json({
                message:'invalid token!!'
            })
        }
        req.id = decode.id;
        next();
    } catch (error) {
        console.log(error)
        res.status(500).json({
            message:error.message
        })
    }
}

export default isAuthenticated;