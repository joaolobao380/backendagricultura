import { prisma } from "../../../../database/prismaClient";

interface CreateQuestionProps {
    subject: string;
    protocol: number;
    description: string;
    id_user: number;
    status: string;
    technician_user: number;
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