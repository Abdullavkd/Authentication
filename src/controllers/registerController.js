import { registerServices } from "../services/registerServices.js";

class RegisterController {
    register = async (req, res, next) => {

        try {
            if(!req.body) throw new Error("there is no data in body");
            const body = req.body;

            await registerServices.registerService(body.name, body.email, body.password);
            res.status(201).json({message: "Created", user:{name: body.name, email: body.email, password: body.password}})
        } catch (error) {
            next();
        }
        
    }
}

export const registerController = new RegisterController();