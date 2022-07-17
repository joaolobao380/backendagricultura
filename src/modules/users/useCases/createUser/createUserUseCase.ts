import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateUserProps {
    name: string;
    level: number;
    cpf: string;
    age: number;
    password: string;
    email: string;
    phone: string;
    nickname: string;
}

export class CreateUserUseCase {
    async execute({cpf, password, name, level, age, email, nickname, phone}: CreateUserProps){

        const technicalUserExist = await prisma.technicalUserTemp.findFirst({
            where: {
                cpf
            }
        })

        const userExist = await prisma.user.findFirst({
            where:{
                cpf
            }
        })

        if(!technicalUserExist && level < 3){
            throw new Error('User not exist')
        }

        if(userExist){
            throw new Error('User already exist')
        }

        const hashPassword = await hash(password, 10);

        const user = await prisma.user.create({
            data: {
                name,
                level,
                cpf,
                age,
                password: hashPassword,
                email,
                phone,
                nickname,
            }
        })
        return user;
    }
}