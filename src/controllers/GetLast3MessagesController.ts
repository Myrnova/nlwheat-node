import { Request, Response } from 'express'
import { GetLast3MessagesService } from '../services/GetLast3MessagesService'


class GetLast3MessagesController {
    
    async handle(request: Request, response: Response) {

        const { message } = request.body

        const { user_id } = request;

        const service = new GetLast3MessagesService();
        
        try {
            const result = await service.execute(message, user_id)

            return response.json(result)
        }
        catch(err: any) {
            return response.json({ error: err.message })
        }

    }
}

export { GetLast3MessagesController}