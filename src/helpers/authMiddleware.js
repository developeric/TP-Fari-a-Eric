import jwt from "jsonwebtoken"
import dotenv from "dotenv"
//
dotenv.config()
//
export const validarToken = (req,res,next) =>{
    const token = req.cookies.token
    try {
        const decode = jwt.verify(token,process.env.JWT_SECRET)
        req.userData = decode
    } catch (error) {
        
    }

}
