import bcrypt from 'bcrypt';

class PasswordHashing {
    hashPassword = async (password) => {
        if(!password) throw new Error("provede a password");
        return await bcrypt.hash(password, 10);
    }

    comparePassword = async (password, savedPass) => {
        if(!password || !savedPass) throw new Error("no password");
        return await bcrypt.hash(password, savedPass);
    }
}

export const passwordHashing = new PasswordHashing();