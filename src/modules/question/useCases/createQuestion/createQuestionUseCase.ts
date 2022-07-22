import { prisma } from "../../../../database/prismaClient";

interface CreateQuestionProps {
    subject: string;
    protocol: string;
    description: string;
    id_user: string;
    status: string;
    technician_user: string;
}

export class CreateQuestionUseCase {
    async execute({subject, protocol, description, id_user, status, technician_user }: CreateQuestionProps){


        const question = await prisma.question.create({
            data: {
                subject,
                protocol,
                status,
                description,
                id_user,
                technician_user,
            }
        })
        return question;
    }
}