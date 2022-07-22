import { prisma } from "../../../database/prismaClient";


interface FindQuestionThroughtProtocolProps {
    protocol: string;
}


export class FindQuestionThroughtProtocolUseCases {
    async execute({protocol}: FindQuestionThroughtProtocolProps){
        const questionFilter = await prisma.question.findMany({
            
            where: {
                protocol
            },     
            orderBy: {
                created_at: 'desc'
            }
              
        })
        
        
        return questionFilter
    }
}