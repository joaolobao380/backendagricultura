import { Request, Response } from "express";
import { AuthenticateUserUseCase } from "./authenticateUserUseCase";


export class AuthenticateUserController {
    async handle(request: Request, response: Response) {

       const { cpf, password } = request.body

       const authenticateUserUseCase = new AuthenticateUserUseCase();

       const result = await authenticateUserUseCase.execute({
        cpf,
        password
       })

       return response.json(result)
    }
}