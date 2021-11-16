import { NextFunction, Request, Response } from "express";
import ForbiddenError from "../models/errors/forbidden.error.model";
import JWT from 'jsonwebtoken';

async function jwtAuthenticationMiddleware(req: Request, res: Response, next: NextFunction) {
    try {
        const authHeader = req.headers['authorization'];
    
        if (!authHeader) {
            throw new ForbiddenError('Credenciais não informadas!');
        }

        const [authType, token] = authHeader.split(' ');
        
        if (authType !== 'Bearer' || !token) {
            throw new ForbiddenError('Tipo de authenticação inválido');
        }

        try {
            const tokenPayload = JWT.verify(token, 'my_secret_key');
            
            if (typeof tokenPayload !== 'object' || !tokenPayload.sub) {
                throw new ForbiddenError('Token Inválido');
            }
            
            const {sub, username} = tokenPayload;
            const user = {
                uuid: sub,
                username
            };

            req.user = user;
            next();
        } catch (error) {
            throw new ForbiddenError('Token Inválido');
        }
    } catch (error) {
        next(error);
    }
}

export default jwtAuthenticationMiddleware;