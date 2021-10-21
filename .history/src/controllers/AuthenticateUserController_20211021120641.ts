import { Request, Response } from 'express'
import { AuthenticateUserService } from '../services/AuthenticateUserService'

class AuthenticateUserController {
    
    async handle(request: Request, response: Response) {
        const { code } = request.query

        const service = new AuthenticateUserService();

        service.execute(code)

    }
}

export { AuthenticateUserController}