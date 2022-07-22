import { Request, Response } from "express";
import { FindLinkedUserUseCase } from "./findLinkedUserUseCase";


export class FindLinkedUserController {
    async handle(request: Request, response: Response){
        const findLinkedUserUseCase = new FindLinkedUserUseCase();

        const linkedUser = await findLinkedUserUseCase.execute();

        return response.json(linkedUser)
    }
}
