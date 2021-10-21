import { Request, Response } from 'express'
import { CreateMessageUserService } from '../services/CreateMessageUserService'

class CreateMessageController {
    
    async handle(request: Request, response: Response) {

        const { code } = request.body

        const service = new AuthenticateUserService();
        try{
            const result = await service.execute(code)
            return response.json(result)
        }
        catch(err: any) {
            return response.json({ error: err.message })
        }

    }
}

export { CreateMessageController}