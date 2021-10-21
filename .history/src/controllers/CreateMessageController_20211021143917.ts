import { Request, Response } from 'express'
import { CreateMessageService } from '../services/CreateMessageService'


class CreateMessageController {
    
    async handle(request: Request, response: Response) {

        const { message } = request.body

        const service = new CreateMessageService();
        
        try {
            const result = await service.execute(code)
            return response.json(result)
        }
        catch(err: any) {
            return response.json({ error: err.message })
        }

    }
}

export { CreateMessageController}