import bcrypt from "bcrypt"

//hashea la password
export const hashPassword = async (password) =>{
    const saltRounds = 10
    return await bcrypt.hash(password,saltRounds)
};

//sirve para comparar la contraseña que ingresa el user
//se llenan los campos y en caso de coincidir, le permite realizar la accion
export const comparePassword = async (password, hashedPassword)=>{
    return await bcrypt.compare(password, hashedPassword)
}
