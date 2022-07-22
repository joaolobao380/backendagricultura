import { Request, Response } from "express";
import { CreateQuestionUseCase } from "./createQuestionUseCase";

export class CreateQuestionController {
    async handle(request: Request, response: Response) {

       const {subject, protocol, description, id_user, status, technician_user } = request.body

       const createQuestionUseCase = new CreateQuestionUseCase();
       const result = await createQuestionUseCase.execute({
        technician_user,
        subject, 
        protocol, 
        description, 
        id_user, 
        status, 
        
       }) 

       return response.json(result)
    }
}