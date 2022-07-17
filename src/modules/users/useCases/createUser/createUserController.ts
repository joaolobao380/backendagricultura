import { Request, Response } from "express";
import { CreateUserUseCase } from "./createUserUseCase";

export class CreateUserController {
    async handle(request: Request, response: Response) {

       const { cpf, password, name, level, age, email, nickname, phone } = request.body

       const createUserUseCase = new CreateUserUseCase();
       const result = await createUserUseCase.execute({
        cpf, 
        password, 
        name, 
        level, 
        age, 
        email, 
        nickname, 
        phone
       }) 

       return response.json(result)
    }
}