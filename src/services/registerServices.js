import { userRepo } from "../repository/userRepo.js";
import { passwordHashing } from "./passwordHashing.js";

class RegisterServices  {
    registerService = async (name, email, password) => {
        if(!name || !email || !password) throw new Error("name, email and password are required.");

        const user = await userRepo.findByEmail(email);
        if(user) throw new Error("user already Exists.")

        const hashedPass = await passwordHashing.hashPassword(password);

        return await userRepo.create({name, email, password: hashedPass})
    }
}
export const registerServices = new RegisterServices();