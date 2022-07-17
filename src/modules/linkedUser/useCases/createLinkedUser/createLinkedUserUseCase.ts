import { hash } from "bcrypt";
import { prisma } from "../../../../database/prismaClient";

interface CreateLinkedUserProps {
   cpf: string;
   name: string;
   level: number;
   id_adm: string;
}

export class CreateLinkedUserUseCase {
    async execute({cpf, name, level, id_adm }: CreateLinkedUserProps){

        const technicalUserExist = await prisma.technicalUserTemp.findFirst({
            where: {
                cpf
            }
        })


        if(technicalUserExist ){
           
            throw new Error('User already exist')
        }

       
       await prisma.technicalUserTemp.create({
            data: {
                id_adm,
                name,
                cpf,
                level,
            }
        })

        
    }
}