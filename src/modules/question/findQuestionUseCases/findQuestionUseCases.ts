import { prisma } from "../../../database/prismaClient";


export class FindQuestionUseCase {

    async execute(){
        const question = await prisma.question.groupBy({
            by:['id_user','protocol'],
            where: {
                protocol: {
                    notIn: ''
                }
            }
        })
       
        return question
    }
}