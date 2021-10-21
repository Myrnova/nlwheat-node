import { Request, Response } from 'express'
import { ProfileUserService } from '../services/ProfileUserService'


class ProfileUserController {
    
    async handle(request: Request, response: Response) {

        const service = new ProfileUserService();
        
        try {
            const result = await service.execute()

            return response.json(result)
        }
        catch(err: any) {
            return response.json({ error: err.message })
        }

    }
}

export { ProfileUserController}