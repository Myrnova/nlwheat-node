import { Request, Response, NextFunction } from 'express'


export function ensureAuthenticated(
    request: Request, 
    response: Response, 
    next: NextFunction
 ) {

    const authToken = request.headers.authorization;

    if(!authToken)
        return response.status(401).json({
            errorCode: "token invalid"
        })


}