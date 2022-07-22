import { Request, Response } from "express";
import { FindQuestionThroughtProtocolUseCases } from "./findQuestionThroughtProtocolUseCases";



export class FindQuestionThroughtProtocolController {
    async handle(request: Request, response: Response){
        const { protocol: protocol } = request.params;

        const findQuestionThroughtProtocolUseCase = new FindQuestionThroughtProtocolUseCases();

        const question = await findQuestionThroughtProtocolUseCase.execute({protocol});

        return response.json(question)
    }
}
