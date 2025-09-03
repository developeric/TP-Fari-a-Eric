import { validationResult } from "express-validator";

const controller = (req,res)=>{
    const errors = validationResult(req)

    if (!errors.isEmpty()){
        return res.status(400).json(errors)
    }

    res.status(200).send("User Created Usefully")
}
