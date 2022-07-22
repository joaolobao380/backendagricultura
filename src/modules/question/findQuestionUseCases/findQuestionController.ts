import { Request, Response } from "express";
import { FindQuestionUseCase } from "./findQuestionUseCases";



export class FindQuestionController {
    async handle(request: Request, response: Response){
        const findQuestionUseCase = new FindQuestionUseCase();

        const question = await findQuestionUseCase.execute();
      
        return response.json(question)
    }
}
