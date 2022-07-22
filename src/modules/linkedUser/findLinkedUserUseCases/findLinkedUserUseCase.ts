import { prisma } from "../../../database/prismaClient";


export class FindLinkedUserUseCase {
    async execute(){
        const linkedUser = await prisma.technicalUserTemp.findMany({
            where: {
                level: 2
            }
        })
        return linkedUser
    }
}