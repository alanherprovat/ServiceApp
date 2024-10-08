import jwt from 'jsonwebtoken';
import {JWT_EXPIRATION_TIME, JWT_SECRET} from "../config/config.js";


export const EncodeToken = (email, userId, BaseCIF, AccountNumber, Product) => {
    const KEY = JWT_SECRET;
    const EXPIRE = { expiresIn: JWT_EXPIRATION_TIME };
    const PAYLOAD = {email: email, userId: userId, BaseCIF: BaseCIF, AccountNumber: AccountNumber, Product: Product};
    return jwt.sign(PAYLOAD,KEY,EXPIRE);
};

export const DecodeToken = (token) => {
    try {
        return jwt.verify(token,JWT_SECRET);
    } catch (error) {
        return null;
    }
};
