import { jwtGenerator } from "./jwtGeneration.js";
import { userRepo } from "../repository/userRepo.js";
import { passwordHashing } from "./passwordHashing.js";

class LoginService {
    loginUser = async (email, password) => {
        if(!email || !password) throw new Error("email and password are required.")
        
        const user = await userRepo.findByEmail(email);
        if(!user) throw new Error("no user exist");

        await passwordHashing.comparePassword(password, user.password);

        return await jwtGenerator.jwtGeneration(user.id)
    }
}
export const loginService = new LoginService();