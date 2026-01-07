import { loginService } from "../services/loginService.js";

class LoginController {
    login = async (req, res) => {
        try {
            if(!req.body) throw new Error("no data on body");
            const body = req.body;

            await loginService.loginUser(body.email, body.password);
            res.status(200).json("Login Success");
        } catch (error) {
            res.status(404).json(error.message);
        }
    }
}

export const loginController = new LoginController();