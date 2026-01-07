import jwt from 'jsonwebtoken';

class JWT {
    jwtGeneration = async (data) => {
        if(!data) throw new Error("no email");
        return jwt.sign({data},
            process.env.SECRET_KEY,
            {expiresIn: "30d"}
        )
    }

    jwtVerify = async (token) => {
        if(!token) throw new Error("no token");
        return jwt.verify(token, SECRET_KEY);
    }
}

export const jwtGenerator = new JWT();