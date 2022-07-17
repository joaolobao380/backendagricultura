import { Request, Response } from "express";
import { CreateLinkedUserUseCase } from "./createLinkedUserUseCase";


export class CreateLinkedUserController {
    async handle(request: Request, response: Response) {

       const { cpf, name, id_adm } = request.body
       const level = 2;
       const createLinkedUserUseCase = new CreateLinkedUserUseCase();
       const result = await createLinkedUserUseCase.execute({
        cpf, 
        name, 
        level, 
        id_adm,
       }) 

       return response.json(result)
    }
}