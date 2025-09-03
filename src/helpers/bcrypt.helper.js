import bcrypt from "bcrypt"

//hashea
export const hashPassword = async (password) =>{
    const saltRounds = 10
    return await bcrypt.hashPassword(password,saltRounds)
};

//verifica la contraseña
export const comparePassword = async (password, hashedPassword)=>{
    return await bcrypt.compare(password, hashedPassword)
}
