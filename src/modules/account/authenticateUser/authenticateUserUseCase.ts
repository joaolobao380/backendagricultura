import { compare } from "bcrypt";
import { sign } from "jsonwebtoken";
import { prisma } from "../../../database/prismaClient";

interface AuthenticateUseProps{
    cpf: string;
    password: string;
}

export class AuthenticateUserUseCase {
    async execute({ cpf, password }: AuthenticateUseProps){

        const userExist = await prisma.user.findFirst({
            where: {
                cpf
            }
        })

        if(!userExist){
            throw new Error("CPF or password invalid!");
        }

        const passwordMatch = await compare(password, userExist.password);

        if(!passwordMatch){
            throw new Error("CPF or password invalid!");
        }

        const token = sign({cpf}, "262b87a3207a98a48ac7873a3b23d906", {
            subject: userExist.id,
            expiresIn: "100d"
        })

        return { 
            data: {
                cpf,
                token,
                id: userExist.id,
                name: userExist.name,
                level: userExist.level,
                email: userExist.email,
                phone: userExist.phone,
            }
        }
    }
}