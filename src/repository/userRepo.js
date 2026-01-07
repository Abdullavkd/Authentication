import { userModel } from "../model/userModel.js";

class UserRepo {
    findByEmail = async (email) => {
        if(!email) throw new Error("provide an email");
        return await userModel.findOne({email});
    }

    create = async (user) => {
        if(!user) throw new Error("provide user Details");
        return await userModel.create(user);
    }

    findById = async (id) => {
        if(!id) throw new Error("Provide an id");
        return await userModel.findById(id);
    }

    delete = async (id) => {
        if(!id) throw new Error("provide an id");
        return await userModel.findByIdAndDelete(id);
    }

    update = async (id) => {
        if(!id) throw new Error("provide an id");
        return await userModel.findByIdAndUpdate(id);
    }
}

export const userRepo = new UserRepo();